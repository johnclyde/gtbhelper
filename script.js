"use strict";

import { exportTableToCSV, darkmode, nodark } from "./utilities.js";
import { initializeLocalStorage } from "./localStorageManager.js";
import { writeTableTitles, addMakushitaTable } from "./tableUtils.js";
import { theSekitori, retiredRikishi, sekitoriID, addRikishi } from "./rikishi.js";
import { displayDrafts, setupDraftEventHandlers } from "./drafts.js";
import { updateInfoCells } from "./banzukeUtils.js";
import { redipsInit } from "./redipsUtils.js";

window.addEventListener("load", () => {
  const basho = "202401";

  $("#exportToCsv1").on("click", () => {
    exportTableToCSV($("#banzuke1"), "banzuke1.csv");
  });
  $("#exportToCsv2").on("click", () => {
    exportTableToCSV($("#banzuke2"), "banzuke2.csv");
  });

  initializeLocalStorage();

  if (!window.localStorage.getItem("savedBanzuke")) {
    writeTableTitles(basho);
    addRikishi(basho, theSekitori, sekitoriID, retiredRikishi);
    addMakushitaTable(theSekitori, sekitoriID);
  }

  document.querySelectorAll(".nte").forEach((noteCell, index) => {
    if (index >= 2) {
      noteCell.children[0].contentEditable = "true";
      noteCell.children[0].addEventListener("input", debounce(saveBanzuke, 1000));
    }
  });

  const checkbox = document.getElementById("ChangeTheme");
  
  if (localStorage.getItem("mode") === "dark") {
    darkmode();
  } else {
    nodark();
  }

  checkbox.addEventListener("change", () => {
    checkbox.checked ? darkmode() : nodark();
    updateInfoCells();
  });

  if (!window.localStorage.getItem("colCheck1")) {
    document.querySelectorAll(".checkedByDefault").forEach(checkbox => {
      checkbox.checked = true;
    });
  } else {
    for (let i = 1; i <= 8; i++) {
      const columnCheck = document.querySelectorAll(".columnCheckbox")[i - 1];
      const check = JSON.parse(window.localStorage.getItem(`colCheck${i}`));
      columnCheck.checked = check;
    }
  }

  displayDrafts("draftsTable");
  setupDraftEventHandlers();

  redipsInit(redips);

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
});

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
