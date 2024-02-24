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

            wins, losses = score.record.split('-')[:2]
            rank = score.rank[:-1]
            research_url = f"https://sumodb.sumogames.de/Query.aspx?show_form=0&rowcount=5&form1_rank={rank}&form1_wins={wins}"
            print(f"Research link for {score.rank} {score.name} with record {score.record}:\n{research_url}")

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

violations = []

def count_rank_lines(index_html_lines, rank) -> int:
    count = 0
    for line in index_html_lines:
        if rank in line:
            count += 1
    return count

# Usage example:
with open('index.html', 'r', encoding='utf-8') as file:
    html_content = file.read()
    index_html_lines = html_content.split('\n')  # Split the HTML content into lines

# After all updates and user inputs
print("\nRikishi Recommended Promotions:")
for score in sumo_score_updater.scores:
    official_promotion = None
    for promotion in promotion_note_parser.promotions:
        if score.rank == promotion.old_rank and score.record == promotion.record:
            official_promotion = promotion
            print(f"{score.name}: {promotion.old_rank} {score.record} -> {promotion.new_rank}")

    old_rank_lines = count_rank_lines(index_html_lines, official_promotion.old_rank)
    new_rank_lines = count_rank_lines(index_html_lines, official_promotion.new_rank)

    if old_rank_lines < 2:
        violations.append(f"You have to add {official_promotion.old_rank}")
    if new_rank_lines < 2:
        violations.append(f"You have to add {official_promotion.new_rank}")

# Report violations
if violations:
    print("index.html isn't ready - you have to add table rows for the following violations:")
    for violation in violations:
        print(violation)
