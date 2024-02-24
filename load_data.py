import re

from pydantic import BaseModel


class SumoScore(BaseModel):
    rank: str
    name: str
    record: str


class PromotionNote(BaseModel):
    old_rank: str
    record: str
    new_rank: str


class SumoScoreUpdater:
    def __init__(self):
        self.scores: list[SumoScore] = []

    def parse_file(self, filename):
        pattern = re.compile(r'"([^"]+) ([^"]+) (\d+)\-(\d+)([^"]*)",')
        with open(filename, "r") as f:
            for line in f:
                match = pattern.search(line)
                if match:
                    rank, name, wins, losses, misc = match.groups()
                    self.scores.append(
                        SumoScore(rank=rank, name=name, record=f"{wins}-{losses}{misc}")
                    )

    def update_promotions(self, promotions: list[PromotionNote], promotions_filename: str):
        for score in self.scores:
            # Check for an exact match and continue if found
            if any(
                p.old_rank == score.rank and p.record == score.record
                for p in promotions
            ):
                continue

            print(
                f"Researching {score.record} records for {score.rank} {score.name} ..."
            )
            # Display near matches, which will do nothing if the list is empty
            for p in promotions:
                if p.record[:3] != score.record[:3]:
                    continue
                print(f"- {p.old_rank} {p.record} -> {p.new_rank}")
            new_rank = input(f"- {score.rank} {score.record} -> ")

            # Append the new promotion note immediately to the file
            with open(promotions_filename, "a") as f:
                f.write(f"{score.rank} {score.record} -> {new_rank}\n")

            # Prompt for the new rank after listing any near matches
            promotions.append(
                PromotionNote(
                    old_rank=score.rank, record=score.record, new_rank=new_rank
                )
            )


class PromotionNoteParser:
    def __init__(self):
        self.promotions: list[PromotionNote] = []

    def parse_file(self, filename):
        with open(filename, "r") as f:
            for line in f:
                parts = line.strip().split(" ")
                if len(parts) < 3:
                    continue
                if "->" == parts[2]:
                    self.promotions.append(
                        PromotionNote(
                            old_rank=parts[0],
                            record=parts[1],
                            new_rank=" ".join(parts[3:]),
                        )
                    )
                elif "->" == parts[3]:
                    self.promotions.append(
                        PromotionNote(
                            old_rank=parts[0],
                            record=" ".join(parts[1:3]),
                            new_rank=" ".join(parts[4:]),
                        )
                    )


# Usage
promotions_file = "promotion_notes.txt"
sumo_score_updater = SumoScoreUpdater()
sumo_score_updater.parse_file("script.js")

promotion_note_parser = PromotionNoteParser()
promotion_note_parser.parse_file(promotions_file)

sumo_score_updater.update_promotions(promotion_note_parser.promotions, promotions_file)
