"use strict";

import { saveBanzuke } from "./localStorageManager.js";

export function redipsInit() {
  const rd = REDIPS.drag;
  rd.animation = "off";
  rd.init();
  rd.hover.colorTd = "chartreuse";
  rd.only.divClass.se = "b2";
  rd.enableDrag(false, ".intai");

  const radioDrop = document.getElementsByName("dropMode");
  rd.dropMode = radioDrop[2].checked ? "single" : "multiple";

  rd.event.changed = handleChangedEvent;
  rd.event.dblClicked = handleDblClickedEvent;
  rd.event.notMoved = () => {};
  rd.event.droppedBefore = handleDroppedBeforeEvent;
  rd.event.dropped = handleDroppedEvent;
  rd.event.finish = saveBanzuke;
}

function handleChangedEvent(currentCell) {
  const tooltipCheckbox = document.getElementById("tooltipCheckbox");
  const prevTip = document.getElementById("chTooltip");

  if (!tooltipCheckbox.checked) {
    if (prevTip) prevTip.remove();

    const chTooltip = document.createElement("span");
    chTooltip.id = "chTooltip";
    const change = currentCell.classList.contains("b2")
      ? getChange(rd.obj.id, currentCell.dataset.r)
      : "";
    chTooltip.innerHTML = change
      ? `<b>${change}</b> (${rd.obj.id} ${rd.obj.dataset.re})`
      : `(${rd.obj.id} ${rd.obj.dataset.re})`;

    rd.obj.prepend(chTooltip);
  }

  clearPreviousShifters();
}

function handleDblClickedEvent() {
  const radioButton = document.getElementsByTagName("input");
  const rikishiURL = rd.obj.children[0].href;
  const thisRank = rd.obj.id;
  const originCell = document.querySelector(`.${thisRank}`);
  const currentCell = rd.findParent("TD", rd.obj);

  if (radioButton[0].checked) {
    window.open(rikishiURL, "_blank").focus();
  } else if (radioButton[1].checked && currentCell.classList.contains("b2")) {
    rd.moveObject({
      obj: rd.obj,
      target: originCell,
      callback: function () {
        adjustCounters(currentCell, "decrement");
        originCell.children[0].remove();
        $(`#${rd.obj.innerText.toLowerCase()}`).next().html("");
        updateInfoCells();
        saveBanzuke();
      },
    });
    showSaving();
  }
}

function handleDroppedBeforeEvent(targetCell) {
  const currentCell = rd.findParent("TD", rd.obj);
  const dropRadio = document.getElementsByName("dropMode");

  adjustCounters(currentCell, "decrement");

  if (targetCell.classList.contains("b2")) {
    adjustCounters(targetCell, "increment");
  } else {
    targetCell.children[0].remove();
    const nextCell = rd.obj.children.length > 1 ? rd.obj.children[1] : rd.obj;
    $(`#${nextCell.innerText.toLowerCase()}`).next().html("");
  }

  if (dropRadio[1].checked && targetCell !== currentCell && targetCell.classList.contains("b2") && targetCell.children.length > 0) {
    handleShifting(targetCell);
  }

  while (rd.obj.childNodes.length > 1) {
    rd.obj.removeChild(rd.obj.childNodes[1]);
  }
}

function handleDroppedEvent(targetCell) {
  targetCell.style.backgroundColor = "";
  updateInfoCells();
  showSaving();
}

function adjustCounters(cell, action) {
  const counters = {
    J: document.getElementById("juRik"),
    Ms: document.getElementById("msRik"),
    default: document.getElementById("makRik"),
  };
  const rank = cell.dataset.r.startsWith("J") ? "J" : cell.dataset.r.startsWith("Ms") ? "Ms" : "default";
  counters[rank].innerHTML = action === "increment" ? ++counters[rank].innerHTML : --counters[rank].innerHTML;
}

function clearPreviousShifters() {
  const prevShifters = document.getElementsByClassName("shifter");
  const prevShiftTo = document.getElementsByClassName("shiftTo");

  if (prevShiftTo[0]) prevShiftTo[0].classList.remove("shiftTo");
  while (prevShifters.length) prevShifters[0].classList.remove("shifter");
}

function handleShifting(targetCell) {
  const b2Cell = document.querySelectorAll(".b2");
  const targetIndex = Array.prototype.indexOf.call(b2Cell, targetCell);

  if (targetIndex >= 0) {
    for (let i = targetIndex; i < b2Cell.length; i++) {
      if (b2Cell[i].children.length === 0 || [53, 81, 111].includes(targetIndex)) {
        shiftCells(b2Cell, targetIndex, i);
        break;
      }
    }
  } else {
    for (let i = targetIndex; i >= 0; i--) {
      if (b2Cell[i].children.length === 0 || [0, 54, 82].includes(targetIndex)) {
        shiftCells(b2Cell, targetIndex, i);
        break;
      }
    }
  }
}

function shiftCells(b2Cell, targetIndex, i) {
  for (let j = i - 1; j >= targetIndex; i--, j--) {
    rd.relocate(b2Cell[j], b2Cell[i], "instant");
  }
  redips.init();
}

export function redipsResetBanzuke() {
  if (confirm("Reset the banzuke?")) {
    resetLocalStorage();
    resetCells();
    location.reload();
  }
}

function resetLocalStorage() {
  window.localStorage.removeItem("savedBanzuke");
  document.getElementById("makRik").innerHTML = 0;
  for (let i = 1; i < 8; i++) {
    window.localStorage.removeItem(`colCheck${i}`);
  }
}

function resetCells() {
  const redipsCell = document.querySelectorAll(".redips-only");
  const b2Cell = document.querySelectorAll(".b2");

  b2Cell.forEach((cell) => {
    if (cell.children.length > 0) {
      for (let j = cell.children.length - 1; j >= 0; j--) {
        for (let k = 0; k < 100; k++) {
          if (redipsCell[k].classList.contains(cell.children[j].id)) {
            rd.moveObject({
              obj: cell.children[j],
              target: redipsCell[k],
            });
            redipsCell[k].children[0].style.display = "none";
            break;
          }
        }
      }
    }
  });

  clearElements(".new", ".ch1");
  clearElements(".rs2", ".cur", ".ch2", ".nte");
}

function clearElements(...selectors) {
  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      if (element.innerHTML !== "") {
        element.innerHTML = "";
      }
    });
  });
}

export function redipsArrange() {
  if (confirm("Confirm auto-arrange?")) {
    const rikishi = document.querySelectorAll(".se");

    rikishi.forEach((rikishi) => {
      const rikishiRank = rikishi.id;

      if ((rikishiRank.startsWith("Ms") && rikishiRank.slice(2, -1) > 15) || rikishiRank.startsWith("Sd")) {
        return;
      }

      if (!rikishi.parentNode.classList.contains("b2")) {
        const holder = document.createElement("a");
        holder.innerHTML = rikishi.innerText;
        holder.href = rikishi.children[0].href;
        holder.target = "_blank";
        rikishi.parentNode.appendChild(holder);
      } else {
        adjustCounters(rikishi.parentNode, "decrement");
      }

      adjustCounters(document.querySelector(`[data-r="${rikishiRank}"]`), "increment");

      rd.moveObject({
        obj: rikishi,
        target: document.querySelector(`[data-r="${rikishiRank}"]`),
      });
    });

    updateInfoCells();
  }
}
