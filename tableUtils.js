"use strict";

export function addMakushitaTable(theSekitori, sekitoriID) {
  const container = document.querySelectorAll(".banzukeContainer")[1];
  const table1 = document.createElement("table");
  const table2 = document.createElement("table");
  const table3 = document.createElement("table");
  const groups = [[], [], [], [], [], [], [], []];

  table1.className = "makushitaTable";
  table2.className = "makushitaTable";
  table3.className = "makushitaTable";
  for (let i = 0; i < theSekitori.length; i++) {
    if (theSekitori[i].startsWith("Ms")) {
      const rikishiData = theSekitori[i].split(" ");
      groups[rikishiData[2].charAt(0)].push({
        rikishi: rikishiData[0] + " " + rikishiData[1],
        id: sekitoriID[i],
      });
    }
  }
  table1.appendChild(document.createElement("tbody"));
  table2.appendChild(document.createElement("tbody"));
  table3.appendChild(document.createElement("tbody"));
  for (let i = 7; i >= 0; i--) {
    if (groups[i].length > 0) {
      const headerRow = document.createElement("tr");
      const header = document.createElement("th");

      header.colSpan = 2;
      header.innerText = `${i} wins`;
      headerRow.appendChild(header);
      if (i > 4) table1.children[0].appendChild(headerRow);
      else if (i == 4) table2.children[0].appendChild(headerRow);
      else table3.children[0].appendChild(headerRow);
      for (let j = 0; j < groups[i].length; j++) {
        const rikishiRow = document.createElement("tr");
        const rikishiCell = document.createElement("td");
        const link = document.createElement("a");

        link.href = `https://sumodb.sumogames.de/Rikishi.aspx?r=${groups[i][j].id}`;
        link.target = "_blank";
        link.innerText = groups[i][j].rikishi;
        rikishiCell.appendChild(link);
        rikishiCell.id = groups[i][j].rikishi.split(" ")[1].toLowerCase();
        rikishiRow.appendChild(rikishiCell);
        rikishiRow.appendChild(document.createElement("td"));
        if (i > 4) table1.children[0].appendChild(rikishiRow);
        else if (i == 4) table2.children[0].appendChild(rikishiRow);
        else table3.children[0].appendChild(rikishiRow);
      }
    }
  }
  container.appendChild(table1);
  container.appendChild(table2);
  container.appendChild(table3);
}
