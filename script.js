"use strict";

import { exportTableToCSV, darkmode, nodark } from "./utilities.js";
import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage, initializeLocalStorage, saveRadioState, saveDropRadioState } from "./localStorageManager.js";
import { writeTableTitles, addMakushitaTable } from "./tableUtils.js";
import { theSekitori, retiredRikishi, sekitoriID, addRikishi } from "./rikishi.js";
import { displayDrafts, setupDraftEventHandlers } from "./drafts.js";
import { toggleColumns, updateInfoCells, getChange } from "./banzukeUtils.js";
import { redipsInit, redipsResetBanzuke, redipsArrange } from "./redipsUtils.js";

window.onload = function () {
  var basho = "202401"; // The date of the basho just ended

  // This must be a hyperlink
  $("#exportToCsv1").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke1"), "banzuke1.csv"]);
  });
  $("#exportToCsv2").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke2"), "banzuke2.csv"]);
  });

  initializeLocalStorage();
  if (window.localStorage.getItem("savedBanzuke") === null) {
    writeTableTitles(basho);
    addRikishi(basho, theSekitori, sekitoriID, retiredRikishi);
    addMakushitaTable(theSekitori, sekitoriID);
  }

  var noteCells = document.querySelectorAll(".nte");

  for (var i = 2; i < noteCells.length; i++) {
    let time = 0;
    noteCells[i].children[0].contentEditable = "true";
    noteCells[i].children[0].addEventListener("input", function () {
      // Reset the timer
      clearTimeout(time);

      time = setTimeout(function () {
        saveBanzuke();
        showSaving();
      }, 1000);
    });
  }

  var checkbox = document.getElementById("ChangeTheme"); //get the checkbox to a variable

  //check storage if dark mode was on or off
  if (localStorage.getItem("mode") == "dark") {
    darkmode(); //if dark mode was on, run this funtion
  } else {
    nodark(); //else run this funtion
  }

  checkbox.addEventListener("change", function () {
    //check if the checkbox is checked or not
    if (checkbox.checked) {
      darkmode(); //if the checkbox is checked, run this funtion
    } else {
      nodark(); //else run this funtion
    }
    updateInfoCells();
  });

  if (window.localStorage.getItem("colCheck1") === null) {
    var columnCheckbox = document.querySelectorAll(".checkedByDefault");

    for (var i = 0; i < columnCheckbox.length; i++)
      columnCheckbox[i].checked = true;
  } else {
    for (var i = 1; i < 8; i++) {
      var columnCheck = document.querySelectorAll(".columnCheckbox")[i - 1];
      var check = JSON.parse(
        window.localStorage.getItem("colCheck" + String(i)),
      );

      columnCheck.checked = check;
    }
  }

  displayDrafts("draftsTable");
  setupDraftEventHandlers();
};

if (window.addEventListener)
  window.addEventListener("load", () => redipsInit(redips), false);
else if (window.attachEvent) window.attachEvent("onload", () => redipsInit(redips));

document.addEventListener('DOMContentLoaded', function() {
    const banzuke1Config = [
        { prefix: 'M', range: Array.from({length: 17}, (_, i) => i + 1) },
        { divider: true },
        { prefix: 'J', range: Array.from({length: 14}, (_, i) => i + 1) },
        { divider: true },
        { prefix: 'Ms', range: Array.from({length: 60}, (_, i) => i + 1) }
    ];

    const banzuke2Config = [
        { prefix: 'M', range: Array.from({length: 18}, (_, i) => i + 1) },
        { divider: 'Juryo Guess - <span id="juRik">0</span>/28' },
        { prefix: 'J', range: Array.from({length: 14}, (_, i) => i + 1) },
        { divider: 'Makushita Joi Guess - <span id="msRik">0</span>/30' },
        { prefix: 'Ms', range: Array.from({length: 60}, (_, i) => i + 1) }
    ];

    populateBanzukeTable('banzuke1Body', banzuke1Config, createRowBanzuke1);
    populateBanzukeTable('banzuke2Body', banzuke2Config, createRowBanzuke2);
});
