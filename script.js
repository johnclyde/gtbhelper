"use strict";

import { exportTableToCSV, darkmode, nodark } from "./utilities.js";
import { initializeLocalStorage } from "./localStorageManager.js";
import { initializeTables } from "./tableUtils.js";
import { displayDrafts, setupDraftEventHandlers } from "./drafts.js";
import { updateInfoCells } from "./banzukeUtils.js";
import { redipsInit } from "./redipsUtils.js";


window.addEventListener("load", () => {
  $("#exportToCsv1").on("click", () => {
    exportTableToCSV($("#banzuke1"), "banzuke1.csv");
  });
  $("#exportToCsv2").on("click", () => {
    exportTableToCSV($("#banzuke2"), "banzuke2.csv");
  });

  initializeLocalStorage();
  initializeTables();

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
});

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
