"use strict";

import { theSekitori, retiredRikishi, sekitoriID } from "./rikishi.js";

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

export function addMakushitaTable() {
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

export function addRikishi(basho) {
  var table1 = document.getElementById("banzuke1"),
      cell = table1.querySelectorAll(".redips-only");

  for (var i = 0; i < cell.length; i++) {
    for (var j = 0; j < theSekitori.length; j++) {
      if (cell[i].classList.contains(theSekitori[j].split(" ")[0])) {
        var card = document.createElement("div"),
            rikiData = theSekitori[j].split(" "),
            wins = rikiData[2].split("-")[0],
            record = rikiData.length == 4 ? rikiData[2] + " " + rikiData[3] : rikiData[2];

        if (rikiData.length > 3) rikiData[2] += " " + rikiData[3];

        card.id = rikiData[0];
        card.className = "redips-drag se";
        if (rikiData[0].startsWith("Ms") || rikiData[0].startsWith("Sd") || rikiData[0].startsWith("Jd") || rikiData[0].startsWith("Jk"))
          card.setAttribute("data-w", wins * 2);
        else
          card.setAttribute("data-w", wins);
        card.setAttribute("data-re", record);

        rikiData[1] = '<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=' + sekitoriID[j] + '" target="_blank">' + rikiData[1] + '</a>';
        rikiData[2] = '<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=' + sekitoriID[j] + "&b=" + basho + '" target="_blank">' + rikiData[2] + '</a>';

        card.innerHTML = rikiData[1];

        if (retiredRikishi.includes(theSekitori[j].split(" ")[1])) {
          card.style.backgroundColor = "rgb(203, 203, 203)";
          card.className = "redips-drag intai";
          card.setAttribute("title", "Retired");
          card.removeAttribute("data-ko");
        }

        cell[i].appendChild(card);

        var resCell, newRankCell;

        if (i % 2 == 0) resCell = cell[i].previousSibling;
        else resCell = cell[i].nextSibling;

        resCell.innerHTML = rikiData[2];
      }
    }
  }
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
