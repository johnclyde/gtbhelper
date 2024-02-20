import requests
from bs4 import BeautifulSoup

# Fetch the page
url = "http://sumodb.sumogames.de/gtb/GTBScoreBasho.aspx?b=199905"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

with open("script.js", "r") as f:
    existing_content = f.readlines()

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
    for i, line in enumerate(existing_content):
        if name in line:
            prefix = line[: line.index(name)]
            updated_line = f'{prefix}{name} {score}",\n'
            existing_content[i] = updated_line
            break
    else:
        updated_content.append(f'  "Jk??? {name} {score}",\n')
        break


with open("script.js.new", "w") as f:
    f.writelines(existing_content)
    f.writelines(updated_content)
