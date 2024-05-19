"use strict";

import { theSekitori, retiredRikishi, sekitoriID } from "./rikishi.js";

class Rikishi {
  constructor(rank, name, winCount, id) {
    this.rank = rank;
    this.name = name;
    this.winCount = winCount;
    this.id = id;
  }

  getLink() {
    return `<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=${this.id}" target="_blank">${this.name}</a>`;
  }

  getRecordLink(basho) {
    return `<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=${this.id}&b=${basho}" target="_blank">${this.winCount}</a>`;
  }

  createCard(basho) {
    const card = document.createElement("div");
    const wins = parseInt(this.winCount.split("-")[0], 10);
    card.id = this.rank;
    card.className = "redips-drag se";
    card.setAttribute("data-w", this.isLowerDivision() ? wins * 2 : wins);
    card.setAttribute("data-re", this.winCount);
    card.innerHTML = this.getLink(basho);
    return card;
  }

  isLowerDivision() {
    return ["Ms", "Sd", "Jd", "Jk"].some(prefix => this.rank.startsWith(prefix));
  }
}

class RetiredRikishi extends Rikishi {
  createCard(basho) {
    const card = super.createCard(basho);
    card.style.backgroundColor = "rgb(203, 203, 203)";
    card.className = "redips-drag intai";
    card.setAttribute("title", "Retired");
    return card;
  }
}

function writeTableTitles(endedBashoDate) {
  const bashoYear = parseInt(endedBashoDate.substring(0, 4), 10);
  const bashoMonth = parseInt(endedBashoDate.slice(-2), 10);
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

  const nextBashoMonth = (bashoMonth + 2) % 12 || 12;
  const nextBashoYear = nextBashoMonth < bashoMonth ? bashoYear + 1 : bashoYear;
  tableTitle[1].innerHTML = `${getBashoName(nextBashoMonth)} ${nextBashoYear} Makuuchi Guess - ${tableTitle[1].innerHTML}`;
}

function createTable() {
  const table = document.createElement("table");
  table.className = "makushitaTable";
  return table;
}

function appendRikishiRows(group, tableIndex, tables) {
  if (group.length > 0) {
    const headerRow = document.createElement("tr");
    const header = document.createElement("th");
    header.colSpan = 2;
    header.innerText = `${group[0].winCount.charAt(0)} wins`;
    headerRow.appendChild(header);
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
}

function addMakushitaTable() {
  const container = document.querySelectorAll(".banzukeContainer")[1];
  const tables = [createTable(), createTable(), createTable()];
  const groups = Array.from({ length: 8 }, () => []);

  theSekitori.forEach((sekitori, i) => {
    if (sekitori.startsWith("Ms")) {
      const [rank, name, winCount] = sekitori.split(" ");
      const groupIndex = parseInt(winCount.charAt(0), 10);
      groups[groupIndex].push({ name, id: sekitoriID[i] });
    }
  });

  groups.forEach((group, winCount) => {
    const tableIndex = winCount > 4 ? 0 : winCount === 4 ? 1 : 2;
    appendRikishiRows(group, tableIndex, tables);
  });

  tables.forEach(table => container.appendChild(table));
}

function createCardElement(rank, name, winRecord, additionalInfo, id, basho) {
  const card = document.createElement("div");
  const wins = parseInt(winRecord.split("-")[0], 10);
  const record = additionalInfo ? `${winRecord} ${additionalInfo}` : winRecord;

  card.id = rank;
  card.className = "redips-drag se";
  card.setAttribute("data-w", ["Ms", "Sd", "Jd", "Jk"].some(prefix => rank.startsWith(prefix)) ? wins * 2 : wins);
  card.setAttribute("data-re", record);

  const nameLink = `<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=${id}" target="_blank">${name}</a>`;
  const recordLink = `<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=${id}&b=${basho}" target="_blank">${record}</a>`;

  card.innerHTML = nameLink;

  if (retiredRikishi.includes(name)) {
    card.style.backgroundColor = "rgb(203, 203, 203)";
    card.className = "redips-drag intai";
    card.setAttribute("title", "Retired");
  }

  return { card, recordLink };
}

export function addRikishi(basho) {
  const table1 = document.getElementById("banzuke1");
  const cells = table1.querySelectorAll(".redips-only");

  cells.forEach(cell => {
    theSekitori.forEach((sekitori, j) => {
      const [rank, name, winRecord, additionalInfo] = sekitori.split(" ");
      if (cell.classList.contains(rank)) {
        const { card, recordLink } = createCardElement(rank, name, winRecord, additionalInfo, sekitoriID[j], basho);
        cell.appendChild(card);

        const resCell = cell.parentElement.cells[Array.from(cell.parentElement.children).indexOf(cell) % 2 === 0 ? 1 : 0];
        resCell.innerHTML = recordLink;
      }
    });
  });
}

function populateBanzukeTable(tableId, config, createRowFunction) {
  const tableBody = document.getElementById(tableId);
  config.forEach(item => {
    if (item.divider) {
      const dividerRow = document.createElement("tr");
      const dividerCell = document.createElement("td");
      dividerCell.colSpan = 3;
      dividerCell.innerHTML = typeof item.divider === 'string' ? item.divider : '';
      dividerRow.appendChild(dividerCell);
      tableBody.appendChild(dividerRow);
    } else {
      item.range.forEach(number => {
        const row = createRowFunction(item.prefix, number);
        tableBody.appendChild(row);
      });
    }
  });
}

function createRowBanzuke1(prefix, number) {
  const row = document.createElement("tr");
  row.innerHTML = `<td class="${prefix}${number} redips-only"></td><td></td>`;
  return row;
}

function createRowBanzuke2(prefix, number) {
  const row = document.createElement("tr");
  row.innerHTML = `<td class="${prefix}${number} redips-only"></td><td class="record"></td>`;
  return row;
}

export function initializeTables() {
  const basho = "202401";

  if (!window.localStorage.getItem("savedBanzuke")) {
    writeTableTitles(basho);
    addRikishi(basho);
    addMakushitaTable();
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
