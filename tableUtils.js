"use strict";

import { theSekitori, retiredRikishi, sekitoriID, addRikishi } from "./rikishi.js";

function writeTableTitles(endedBashoDate) {
  var bashoYear = parseInt(endedBashoDate.substring(0, 4)),
    bashoMonth = parseInt(endedBashoDate.slice(-2)),
    tableTitle = document.getElementsByClassName("tableTitle");

  const bashoMonthLookup = {
      1: "Hatsu",
      3: "Haru",
      5: "Natsu",
      7: "Nagoya",
      9: "Aki",
      11: "Kyushu",
    },
    getBashoName = (bMonth) => bashoMonthLookup[bMonth];

  tableTitle[0].innerHTML =
    getBashoName(bashoMonth) +
    " " +
    bashoYear +
    tableTitle[0].innerHTML +
    " Result";
  if (bashoMonth > 9) {
    bashoYear++;
    bashoMonth = -1;
  }
  tableTitle[1].innerHTML =
    getBashoName(bashoMonth + 2) +
    " " +
    bashoYear +
    " Makuuchi Guess - " +
    tableTitle[1].innerHTML;
}

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

export function initializeTables() {
  const basho = "202401";

  if (!window.localStorage.getItem("savedBanzuke")) {
    writeTableTitles(basho);
    addRikishi(basho, theSekitori, sekitoriID, retiredRikishi);
    addMakushitaTable(theSekitori, sekitoriID);
  }

  const banzuke1Config = [
    { prefix: 'M', range: Array.from({ length: 17 }, (_, i) => i + 1) },
    { divider: true },
    { prefix: 'J', range: Array.from({ length: 14 }, (_, i) => i + 1) },
    { divider: true },
    { prefix: 'Ms', range: Array.from({ length: 60 }, (_, i) => i + 1) }
  ];

  const banzuke2Config = [
    { prefix: 'M', range: Array.from({ length: 18 }, (_, i) => i + 1) },
    { divider: 'Juryo Guess - <span id="juRik">0</span>/28' },
    { prefix: 'J', range: Array.from({ length: 14 }, (_, i) => i + 1) },
    { divider: 'Makushita Joi Guess - <span id="msRik">0</span>/30' },
    { prefix: 'Ms', range: Array.from({ length: 60 }, (_, i) => i + 1) }
  ];

  populateBanzukeTable('banzuke1Body', banzuke1Config, createRowBanzuke1);
  populateBanzukeTable('banzuke2Body', banzuke2Config, createRowBanzuke2);
}
