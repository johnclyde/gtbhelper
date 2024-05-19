"use strict";

export function redipsInit(redips) {
  const rd = REDIPS.drag;
  rd.animation = "off";
  rd.init();
  rd.hover.colorTd = "chartreuse";
  rd.only.divClass.se = "b2";
  rd.enableDrag(false, ".intai");

  const radioDrop = document.getElementsByName("dropMode");

  rd.dropMode = radioDrop[2].checked ? "single" : "multiple";

  rd.event.changed = function (currentCell) {
    const tooltipCheckbox = document.getElementById("tooltipCheckbox"),
      chTooltip = document.createElement("span"),
      change = currentCell.classList.contains("b2")
        ? getChange(rd.obj.id, currentCell.dataset.r)
        : "",
      prevTip = document.getElementById("chTooltip");

    if (!tooltipCheckbox.checked) {
      if (prevTip) prevTip.remove();
      chTooltip.id = "chTooltip";
      chTooltip.innerHTML = `(${rd.obj.id} ${rd.obj.dataset.re})`;
      if (change) chTooltip.innerHTML = `<b>${change}</b> ${chTooltip.innerHTML}`;
      rd.obj.prepend(chTooltip);
    }

    const tip = document.getElementById("tip");
    if (tip) tip.remove();

    const prevShifters = document.getElementsByClassName("shifter"),
      prevShiftTo = document.getElementsByClassName("shiftTo");

    if (prevShiftTo[0]) prevShiftTo[0].classList.remove("shiftTo");
    while (prevShifters.length) prevShifters[0].classList.remove("shifter");
  };

  rd.event.dblClicked = function () {
    const radioButton = document.getElementsByTagName("input");
    const rikishiURL = rd.obj.children[0].href;
    const thisRank = rd.obj.id,
      originCell = document.querySelector(`.${thisRank}`),
      currentCell = rd.findParent("TD", rd.obj);

    if (radioButton[0].checked) {
      window.open(rikishiURL, "_blank").focus();
    } else if (radioButton[1].checked && currentCell.classList.contains("b2")) {
      rd.moveObject({
        obj: rd.obj,
        target: originCell,
        callback: function () {
          if (currentCell.dataset.r.charAt(0) === "J") {
            document.getElementById("juRik").innerHTML--;
          } else if (currentCell.dataset.r.startsWith("Ms")) {
            document.getElementById("msRik").innerHTML--;
          } else {
            document.getElementById("makRik").innerHTML--;
          }
          originCell.children[0].remove();
          $(`#${rd.obj.innerText.toLowerCase()}`).next().html("");
          updateInfoCells();
          saveBanzuke();
        },
      });
      showSaving();
    }
  };

  rd.event.notMoved = function () {
    // Logic for when the dragged element is not moved
  };

  rd.event.droppedBefore = function (targetCell) {
    const makuCounter = document.getElementById("makRik"),
      juCounter = document.getElementById("juRik"),
      msCounter = document.getElementById("msRik"),
      thisCard = rd.obj,
      currentCell = rd.findParent("TD", thisCard),
      dropRadio = document.getElementsByName("dropMode");
    let currentCellRank, targetCellRank;

    if (currentCell.classList.contains("b2")) {
      currentCellRank = currentCell.dataset.r.charAt(0);
      if (currentCellRank === "J") {
        juCounter.innerHTML--;
      } else if (currentCell.dataset.r.startsWith("Ms")) {
        msCounter.innerHTML--;
      } else {
        makuCounter.innerHTML--;
      }
    } else if (targetCell.classList.contains("b2")) {
      const holder = document.createElement("a");
      holder.innerHTML = thisCard.childNodes[thisCard.childNodes.length - 1].innerText;
      holder.href = thisCard.children[thisCard.childNodes.length - 1].href;
      holder.target = "_blank";
      currentCell.appendChild(holder);
    }

    if (targetCell.classList.contains("b2")) {
      targetCellRank = targetCell.dataset.r.charAt(0);
      if (targetCellRank === "J") {
        juCounter.innerHTML++;
      } else if (targetCell.dataset.r.startsWith("Ms")) {
        msCounter.innerHTML++;
      } else {
        makuCounter.innerHTML++;
      }
    } else {
      targetCell.children[0].remove();
      const nextCell = rd.obj.children.length > 1 ? rd.obj.children[1] : rd.obj;
      $(`#${nextCell.innerText.toLowerCase()}`).next().html("");
    }

    if (dropRadio[1].checked && targetCell !== currentCell && targetCell.classList.contains("b2") && targetCell.children.length > 0) {
      const b2Cell = document.querySelectorAll(".b2"),
        targetIndex = Array.prototype.indexOf.call(b2Cell, targetCell);

      if (targetIndex >= 0) {
        for (let i = targetIndex; i < b2Cell.length; i++) {
          if (b2Cell[i].children.length === 0 || [53, 81, 111].includes(targetIndex)) {
            for (let j = i - 1; j >= targetIndex; i--, j--) {
              rd.relocate(b2Cell[j], b2Cell[i], "instant");
            }
            redips.init();
            break;
          }
        }
      } else {
        for (let i = targetIndex; i >= 0; i--) {
          if (b2Cell[i].children.length === 0 || [0, 54, 82].includes(targetIndex)) {
            for (let j = i + 1; j <= targetIndex; i++, j++) {
              rd.relocate(b2Cell[j], b2Cell[i], "instant");
            }
            redips.init();
            break;
          }
        }
      }
    }

    if (rd.obj.childNodes.length > 1) {
      while (rd.obj.childNodes.length > 1) {
        rd.obj.removeChild(rd.obj.childNodes[1]);
      }
    }
  };

  rd.event.dropped = function (targetCell) {
    targetCell.style.backgroundColor = "";
    updateInfoCells();
    showSaving();
  };

  rd.event.finish = function () {
    saveBanzuke();
  };
}

export function redipsResetBanzuke() {
  if (confirm("Reset the banzuke?")) {
    const redipsCell = document.querySelectorAll(".redips-only"),
      b2Cell = document.querySelectorAll(".b2"),
      chgCell = document.getElementsByClassName("ch");
    const c1 = document.querySelectorAll(".new"),
      c2 = document.querySelectorAll(".ch1"),
      c3 = document.querySelectorAll(".rs2"),
      c4 = document.querySelectorAll(".cur"),
      c5 = document.querySelectorAll(".ch2"),
      c6 = document.querySelectorAll(".nte");

    window.localStorage.removeItem("savedBanzuke");
    document.getElementById("makRik").innerHTML = 0;
    for (let i = 1; i < 8; i++) {
      window.localStorage.removeItem(`colCheck${i}`);
    }

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

    for (let i = 2; i < c1.length; i++) {
      if (c1[i].innerHTML !== "") {
        c1[i].innerHTML = "";
        c2[i].innerHTML = "";
      }
    }
    for (let i = 2; i < c3.length; i++) {
      if (c3[i].innerHTML !== "") {
        c3[i].innerHTML = "";
        c4[i].innerHTML = "";
        c5[i].innerHTML = "";
      }
      if (c6[i].children[0].innerHTML !== "") {
        c6[i].children[0].innerHTML = "";
      }
    }
    location.reload();
  }
}

export function redipsArrange() {
  if (confirm("Confirm auto-arrange?")) {
    const rikishi = document.querySelectorAll(".se"),
      msCounter = document.getElementById("msRik"),
      juCounter = document.getElementById("juRik"),
      makuCounter = document.getElementById("makRik");

    rikishi.forEach((rikishi) => {
      const rikishiRank = rikishi.id;

      if (
        (rikishiRank.startsWith("Ms") && rikishiRank.slice(2, -1) > 15) ||
        rikishiRank.startsWith("Sd")
      ) {
        return;
      }
      if (!rikishi.parentNode.classList.contains("b2")) {
        const holder = document.createElement("a");
        holder.innerHTML = rikishi.innerText;
        holder.href = rikishi.children[0].href;
        holder.target = "_blank";
        rikishi.parentNode.appendChild(holder);
      } else {
        if (rikishi.parentNode.dataset.r.startsWith("J")) {
          juCounter.innerHTML--;
        } else if (rikishi.parentNode.dataset.r.startsWith("Ms")) {
          msCounter.innerHTML--;
        } else {
          makuCounter.innerHTML--;
        }
      }
      if (rikishiRank.startsWith("J")) {
        juCounter.innerHTML++;
      } else if (rikishiRank.startsWith("Ms")) {
        msCounter.innerHTML++;
      } else {
        makuCounter.innerHTML++;
      }
      rd.moveObject({
        obj: rikishi,
        target: document.querySelector(`[data-r="${rikishiRank}"]`),
      });
    });
    updateInfoCells();
  }
}
