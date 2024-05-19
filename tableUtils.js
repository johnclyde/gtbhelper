"use strict";

import { theSekitori, retiredRikishi, sekitoriID } from "./rikishi.js";

function writeTableTitles(endedBashoDate) {
  const bashoYear = parseInt(endedBashoDate.substring(0, 4));
  const bashoMonth = parseInt(endedBashoDate.slice(-2));
  const tableTitle = document.getElementsByClassName("tableTitle");
  const bashoMonthLookup = {
    1: "Hatsu",
    3: "Haru",
    5: "Natsu",
    7: "Nagoya",
    9: "Aki",
    11: "Kyushu",
  };

  const getBashoName = (month) => bashoMonthLookup[month];
  tableTitle[0].innerHTML = `${getBashoName(bashoMonth)} ${bashoYear} ${tableTitle[0].innerHTML} Result`;

  if (bashoMonth > 9) {
    bashoYear++;
    bashoMonth = -1;
  }
  tableTitle[1].innerHTML = `${getBashoName(bashoMonth + 2)} ${bashoYear} Makuuchi Guess - ${tableTitle[1].innerHTML}`;
}

export function addMakushitaTable() {
  const container = document.querySelectorAll(".banzukeContainer")[1];
  const tables = [document.createElement("table"), document.createElement("table"), document.createElement("table")];
  tables.forEach(table => table.className = "makushitaTable");
  const groups = [[], [], [], [], [], [], [], []];

  theSekitori.forEach((sekitori, i) => {
    if (sekitori.startsWith("Ms")) {
      const [rank, name, winCount] = sekitori.split(" ");
      const groupIndex = winCount.charAt(0);
      groups[groupIndex].push({ name, id: sekitoriID[i] });
    }
  });

  groups.forEach((group, winCount) => {
    if (group.length > 0) {
      const headerRow = document.createElement("tr");
      const header = document.createElement("th");
      header.colSpan = 2;
      header.innerText = `${winCount} wins`;
      headerRow.appendChild(header);
      const tableIndex = winCount > 4 ? 0 : winCount === 4 ? 1 : 2;
      tables[tableIndex].appendChild(document.createElement("tbody")).appendChild(headerRow);

      group.forEach(rikishi => {
        const rikishiRow = document.createElement("tr");
        const rikishiCell = document.createElement("td");
        const link = document.createElement("a");
        link.href = `https://sumodb.sumogames.de/Rikishi.aspx?r=${rikishi.id}`;
        link.target = "_blank";
        link.innerText = rikishi.name;
        rikishiCell.appendChild(link);
        rikishiCell.id = rikishi.name.toLowerCase();
        rikishiRow.appendChild(rikishiCell);
        rikishiRow.appendChild(document.createElement("td"));
        tables[tableIndex].children[0].appendChild(rikishiRow);
      });
    }
  });

  tables.forEach(table => container.appendChild(table));
}

export function addRikishi(basho) {
  const table1 = document.getElementById("banzuke1");
  const cells = table1.querySelectorAll(".redips-only");

  cells.forEach(cell => {
    theSekitori.forEach((sekitori, j) => {
      if (cell.classList.contains(sekitori.split(" ")[0])) {
        const card = document.createElement("div");
        const [rank, name, winRecord, additionalInfo] = sekitori.split(" ");
        const wins = winRecord.split("-")[0];
        const record = additionalInfo ? `${winRecord} ${additionalInfo}` : winRecord;

        card.id = rank;
        card.className = "redips-drag se";
        card.setAttribute("data-w", rank.startsWith("Ms") || rank.startsWith("Sd") || rank.startsWith("Jd") || rank.startsWith("Jk") ? wins * 2 : wins);
        card.setAttribute("data-re", record);

        const nameLink = `<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=${sekitoriID[j]}" target="_blank">${name}</a>`;
        const recordLink = `<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=${sekitoriID[j]}&b=${basho}" target="_blank">${record}</a>`;

        card.innerHTML = nameLink;

        if (retiredRikishi.includes(name)) {
          card.style.backgroundColor = "rgb(203, 203, 203)";
          card.className = "redips-drag intai";
          card.setAttribute("title", "Retired");
          card.removeAttribute("data-ko");
        }

        cell.appendChild(card);

        const resCell = i % 2 === 0 ? cell.previousSibling : cell.nextSibling;
        resCell.innerHTML = recordLink;
      }
    });
  });
}

export function initializeTables() {
  const basho = "202401";

  if (!window.localStorage.getItem("savedBanzuke")) {
    writeTableTitles(basho);
    addRikishi(basho);
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
