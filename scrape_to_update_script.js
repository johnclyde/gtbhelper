import os
import re

import requests
from bs4 import BeautifulSoup


def update_records(file_path):
    # Define a pattern to match the record and any awards (e.g., "7-8 Y")
    pattern = re.compile(r"\d+-\d+(?:-\d+)?(?:\s+[A-Z])?")

    # Start and end flags for theSekitori array
    start_flag = "var theSekitori = ["
    end_flag = "];"

    # Flags to track whether we are within the theSekitori array
    in_theSekitori_array = False

    # Open the original JavaScript file
    with open(file_path, "r") as file:
        for line in file:
            if start_flag in line:
                in_theSekitori_array = True
            elif end_flag in line:
                in_theSekitori_array = False

            if in_theSekitori_array and '"' in line:
                line = pattern.sub("0-0-7", line)
            yield line


if __name__ == "__main__":
    file_path = "script.js.new"
    # Write the modified content back to the file
    with open(file_path, "w") as file:  # Overwrite the original file
        for updated_line in update_records("script.js"):
            file.write(updated_line)
    print("Records updated successfully.")


with open("script.js", "r") as f:
    existing_content = f.readlines()


# The filename as saved by wget or to be used as the cache file
filename = "GTBScoreBasho.aspx?b=200009"

# Check if the file exists locally
if os.path.exists(filename):
    # If the file exists, read from the local file
    with open(filename, 'r') as file:
        content = file.read()
else:
    # If the file does not exist, fetch the page online.
    url = f"http://sumodb.sumogames.de/gtb/{filename}"
    response = requests.get(url)
    content = response.text

# Parse the content using BeautifulSoup
soup = BeautifulSoup(content, 'html.parser')

updated_content = []

# Assume the results are in a table or list; find that container
# This is hypothetical; adjust based on actual page structure
results_table = soup.find(
    "table"
)  # or use soup.find_all to get a list and select the right one

# Parse each result row
for row in results_table.find_all("tr")[1:]:  # Skip header row
    cols = row.find_all("td")  # Find all columns
    if not cols:
        continue
    # This line ensures the asterisk for first-timers is handled correctly
    name = (
        cols[1].text.strip().replace(" *", "")
    )  # Removes asterisk from name, if present
    score = cols[-1].text.strip()  # Assumes this correctly targets the score
    name = name.replace(" ", "_")
    found = False
    for i, line in enumerate(existing_content):
        if not found and f" {name} " in line:
            prefix = line[: line.index(name)]
            updated_line = f'{prefix}{name} {score}",\n'
            existing_content[i] = updated_line
            found = True
    if not found:
        updated_content.append(f'  "Jk??? {name} {score}",\n')


with open("script.js.new", "w") as f:
    f.writelines(existing_content)
    f.writelines(updated_content)
