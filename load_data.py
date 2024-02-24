from pydantic import BaseModel, Field
from pydantic.fields import FieldValidator
import re

# Define Pydantic models
class SumoScore(BaseModel):
    name: str
    score: int

class PromotionNote(BaseModel):
    rank: str
    record: str
    promotion: str

    # Custom validator to ensure correct format if needed
    @FieldValidator('promotion', pre=True, always=True)
    def set_promotion(cls, values, field, config, field_name):
        record = values.get('record')
        if record and '->' in record:
            return values.get('promotion')
        return None

# Define classes to parse files and store data using Pydantic models
class SumoScoreUpdater:
    def __init__(self):
        self.scores: list[SumoScore] = []

    def parse_file(self, filename):
        pattern = re.compile(r'"([^"]+) (\d+)",')
        with open(filename, "r") as f:
            for line in f:
                match = pattern.search(line)
                if match:
                    name, score = match.groups()
                    self.scores.append(SumoScore(name=name, score=int(score)))

class PromotionNoteParser:
    def __init__(self):
        self.promotions: list[PromotionNote] = []

    def parse_file(self, filename):
        with open(filename, "r") as f:
            for line in f:
                parts = line.strip().split(" ")
                if len(parts) < 2:
                    continue

                if "->" not in parts:
                    continue
                self.promotions.append(PromotionNote(rank=parts[0], record=parts[1], promotion=' '.join(parts[2:])))

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
