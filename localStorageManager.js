"use strict";

export function saveToLocalStorage(key, value) {
  window.localStorage.setItem(key, value);
}

export function getFromLocalStorage(key) {
  return window.localStorage.getItem(key);
}

export function removeFromLocalStorage(key) {
  window.localStorage.removeItem(key);
}

export function initializeLocalStorage() {
  if (getFromLocalStorage("banzuke1") !== null) {
    removeFromLocalStorage("banzuke1");
    removeFromLocalStorage("banzuke2");
  }
  if (getFromLocalStorage("banzuke") !== null) {
    removeFromLocalStorage("banzuke");
  }
  if (getFromLocalStorage("picks") !== null) {
    removeFromLocalStorage("picks");
  }
  if (getFromLocalStorage("savedBanzuke") !== null) {
    var saveDate = Date.parse(getFromLocalStorage("savedBanzukeTime")),
        expireDate = new Date(Date.UTC(2024, 0, 28, 9, 5));

    if (saveDate < expireDate) {
      removeFromLocalStorage("savedBanzuke");
    } else {
      document.getElementById("tableLiner").innerHTML = getFromLocalStorage("savedBanzuke");
      if (document.querySelectorAll(".makushitaTable").length == 0) {
        addMakushitaTable();
        updateInfoCells();
      }
    }
  }
}

export function saveRadioState(radioButton) {
  saveToLocalStorage("radioButton", radioButton.value);
}

export function saveDropRadioState(button) {
  const rd = REDIPS.drag;

  if (button.value == "disable") {
    rd.dropMode = "single";
  } else {
    rd.dropMode = "multiple";
  }

  saveToLocalStorage("radioDrop", button.value);
}
