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
sumo_score_updater = SumoScoreUpdater()
sumo_score_updater.parse_file("script.js")

promotion_note_parser = PromotionNoteParser()
promotion_note_parser.parse_file("promotion_notes.txt")

# Access the data
for score in sumo_score_updater.scores:
    print(score.dict())

for promotion in promotion_note_parser.promotions:
    print(promotion.dict())
