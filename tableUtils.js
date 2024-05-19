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
      groups[groupIndex].push(new Rikishi(rank, name, winCount, sekitoriID[i]));
    }
  });

  groups.forEach((group, winCount) => {
    const tableIndex = winCount > 4 ? 0 : winCount === 4 ? 1 : 2;
    appendRikishiRows(group, tableIndex, tables);
  });

  tables.forEach(table => container.appendChild(table));
}

function createCardElement(rank, name, winRecord, additionalInfo, id, basho) {
  const rikishi = new Rikishi(rank, name, winRecord, id);
  const card = rikishi.createCard(basho);

  if (retiredRikishi.includes(name)) {
    card.style.backgroundColor = "rgb(203, 203, 203)";
    card.className = "redips-drag intai";
    card.setAttribute("title", "Retired");
  }

  return { card, recordLink: rikishi.getRecordLink(basho) };
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
