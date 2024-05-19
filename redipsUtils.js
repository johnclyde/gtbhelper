// redipsUtils.js
"use strict";

export function redipsInit(redips) {
  let rd = REDIPS.drag;
  rd.animation = "off";
  rd.init();
  rd.hover.colorTd = "chartreuse";
  rd.only.divClass.se = "b2";
  rd.enableDrag(false, ".intai");

  var radioDrop = document.getElementsByName("dropMode");

  if (radioDrop[2].checked) rd.dropMode = "single";
  else rd.dropMode = "multiple";

  rd.event.changed = function (currentCell) {
    var tooltipCheckbox = document.getElementById("tooltipCheckbox"),
      chTooltip = document.createElement("span"),
      change = currentCell.classList.contains("b2")
        ? getChange(rd.obj.id, currentCell.dataset.r)
        : "",
      prevTip = document.getElementById("chTooltip");

    if (!tooltipCheckbox.checked) {
      if (typeof prevTip != "undefined" && prevTip != null) prevTip.remove();
      chTooltip.id = "chTooltip";
      chTooltip.innerHTML = "(" + rd.obj.id + " " + rd.obj.dataset.re + ")";
      if (change != "")
        chTooltip.innerHTML = "<b>" + change + "</b> " + chTooltip.innerHTML;
      rd.obj.prepend(chTooltip);
    }
    var tip = document.getElementById("tip");

    if (typeof tip != "undefined" && tip != null) tip.remove();

    var prevShifters = document.getElementsByClassName("shifter"),
      prevShiftTo = document.getElementsByClassName("shiftTo");

    if (typeof prevShiftTo[0] != "undefined" && prevShiftTo[0] != null)
      prevShiftTo[0].classList.remove("shiftTo");
    if (typeof prevShifters[0] != "undefined" && prevShifters[0] != null) {
      while (prevShifters.length) prevShifters[0].classList.remove("shifter");
    }
  };

  rd.event.dblClicked = function () {
    var radioButton = document.getElementsByTagName("input");
    var rikishiURL = rd.obj.children[0].href;
    var thisRank = rd.obj.id,
      originCell = document.querySelectorAll("." + thisRank)[0],
      currentCell = rd.findParent("TD", rd.obj);

    if (radioButton[0].checked) window.open(rikishiURL, "_blank").focus();
    else if (radioButton[1].checked && currentCell.classList.contains("b2")) {
      rd.moveObject({
        obj: rd.obj,
        target: originCell,
        callback: function () {
          if (currentCell.dataset.r.charAt(0) == "J")
            document.getElementById("juRik").innerHTML--;
          else if (currentCell.dataset.r.startsWith("Ms"))
            document.getElementById("msRik").innerHTML--;
          else document.getElementById("makRik").innerHTML--;
          originCell.children[0].remove();
          $("#" + rd.obj.innerText.toLowerCase())
            .next()
            .html("");
          updateInfoCells();
          saveBanzuke();
        },
      });
      showSaving();
    }
  };

  rd.event.notMoved = function () {
    var currentCell = rd.findParent("TD", rd.obj);

    // Logic for when the dragged element is not moved
  };

  rd.event.droppedBefore = function (targetCell) {
    var makuCounter = document.getElementById("makRik"),
      juCounter = document.getElementById("juRik"),
      msCounter = document.getElementById("msRik"),
      thisCard = rd.obj,
      currentCell = rd.findParent("TD", thisCard),
      dropRadio = document.getElementsByName("dropMode");
    var currentCellRank, targetCellRank;

    if (currentCell.classList.contains("b2")) {
      currentCellRank = currentCell.dataset.r.charAt(0);
      if (currentCellRank == "J") juCounter.innerHTML--;
      else if (currentCell.dataset.r.startsWith("Ms")) msCounter.innerHTML--;
      else makuCounter.innerHTML--;
    } else if (targetCell.classList.contains("b2")) {
      var holder = document.createElement("a");

      holder.innerHTML =
        thisCard.childNodes[thisCard.childNodes.length - 1].innerText;
      holder.href = thisCard.children[thisCard.childNodes.length - 1].href;
      holder.target = "_blank";
      currentCell.appendChild(holder);
    }

    if (targetCell.classList.contains("b2")) {
      targetCellRank = targetCell.dataset.r.charAt(0);
      if (targetCellRank == "J") juCounter.innerHTML++;
      else if (targetCell.dataset.r.startsWith("Ms")) msCounter.innerHTML++;
      else makuCounter.innerHTML++;
    } else {
      targetCell.children[0].remove();
      if (rd.obj.children.length > 1)
        $("#" + rd.obj.children[1].innerText.toLowerCase())
          .next()
          .html("");
      else
        $("#" + rd.obj.innerText.toLowerCase())
          .next()
          .html("");
    }

    if (
      dropRadio[1].checked &&
      targetCell !== currentCell &&
      targetCell.classList.contains("b2") &&
      targetCell.children.length > 0
    ) {
      var b2Cell = document.querySelectorAll(".b2"),
        targetIndex = Array.prototype.slice.call(b2Cell).indexOf(targetCell);

      if (targetIndex >= 0) {
        for (var i = targetIndex; i < b2Cell.length; i++) {
          if (
            b2Cell[i].children.length == 0 ||
            targetIndex == 53 ||
            targetIndex == 81 ||
            targetIndex == 111 ||
            (b2Cell[i].children.length == 1 && b2Cell[i] === thisCard.parentNode) ||
            ((i == 53 || i == 81 || i == 111) && b2Cell[i].children.length > 0)
          ) {
            for (var j = i - 1; j >= targetIndex; i--, j--)
              rd.relocate(b2Cell[j], b2Cell[i], "instant");
            redips.init();
            break;
          }
        }
      } else {
        for (var i = targetIndex; i >= 0; i--) {
          if (
            b2Cell[i].children.length == 0 ||
            targetIndex == 0 ||
            targetIndex == 54 ||
            targetIndex == 82 ||
            (b2Cell[i].children.length == 1 && b2Cell[i] === thisCard.parentNode) ||
            ((i == 0 || i == 54 || i == 82) && b2Cell[i].children.length > 0)
          ) {
            for (var j = i + 1; j <= targetIndex; i++, j++)
              rd.relocate(b2Cell[j], b2Cell[i], "instant");
            redips.init();
            break;
          }
        }
      }
    }

    if (rd.obj.childNodes.length > 1) {
      for (var i = 0; i < rd.obj.childNodes.length; i++)
        rd.obj.removeChild(rd.obj.childNodes[i]);
    }
  };

  rd.event.dropped = function (targetCell) {
    if (targetCell.style.backgroundColor != "")
      targetCell.style.backgroundColor = "";
    updateInfoCells();
    showSaving();
  };

  rd.event.finish = function () {
    saveBanzuke();
  };
}

export function redipsResetBanzuke() {
  if (confirm("Reset the banzuke?") == true) {
    var redipsCell = document.querySelectorAll(".redips-only"),
      b2Cell = document.querySelectorAll(".b2"),
      chgCell = document.getElementsByClassName("ch");
    var c1 = document.querySelectorAll(".new"),
      c2 = document.querySelectorAll(".ch1"),
      c3 = document.querySelectorAll(".rs2"),
      c4 = document.querySelectorAll(".cur"),
      c5 = document.querySelectorAll(".ch2"),
      c6 = document.querySelectorAll(".nte");

    window.localStorage.removeItem("savedBanzuke");
    document.getElementById("makRik").innerHTML = 0;
    for (var i = 1; i < 8; i++)
      window.localStorage.removeItem("colCheck" + String(i));

    for (var i = 0; i < b2Cell.length; i++) {
      if (b2Cell[i].children.length > 0) {
        for (var j = b2Cell[i].children.length - 1; j >= 0; j--) {
          for (var k = 0; k < 100; k++) {
            if (redipsCell[k].classList.contains(b2Cell[i].children[j].id)) {
              rd.moveObject({
                obj: b2Cell[i].children[j],
                target: redipsCell[k],
              });
              redipsCell[k].children[0].style.display = "none";
              break;
            }
          }
        }
      }
    }
    for (var i = 2; i < c1.length; i++) {
      if (c1[i].innerHTML != "") {
        c1[i].innerHTML = "";
        c2[i].innerHTML = "";
      }
    }
    for (var i = 2; i < c3.length; i++) {
      if (c3[i].innerHTML != "") {
        c3[i].innerHTML = "";
        c4[i].innerHTML = "";
        c5[i].innerHTML = "";
      }
      if (c6[i].children[0].innerHTML != "") c6[i].children[0].innerHTML = "";
    }
    location.reload();
  }
}

export function redipsArrange() {
  if (confirm("Confirm auto-arrange?") == true) {
    var rikishi = document.querySelectorAll(".se"),
      msCounter = document.getElementById("msRik"),
      juCounter = document.getElementById("juRik"),
      makuCounter = document.getElementById("makRik");

    for (var i = 0; i < rikishi.length; i++) {
      var rikishiRank = rikishi[i].id;

      if (
        (rikishiRank.startsWith("Ms") && rikishiRank.slice(2, -1) > 15) ||
        rikishiRank.startsWith("Sd")
      ) {
        continue;
      }
      if (!rikishi[i].parentNode.classList.contains("b2")) {
        var holder = document.createElement("a");

        holder.innerHTML = rikishi[i].innerText;
        holder.href = rikishi[i].children[0].href;
        holder.target = "_blank";
        rikishi[i].parentNode.appendChild(holder);
      } else {
        if (rikishi[i].parentNode.dataset.r.startsWith("J"))
          juCounter.innerHTML--;
        else if (rikishi[i].parentNode.dataset.r.startsWith("Ms"))
          msCounter.innerHTML--;
        else makuCounter.innerHTML--;
      }
      if (rikishiRank.startsWith("J")) juCounter.innerHTML++;
      else if (rikishiRank.startsWith("Ms")) msCounter.innerHTML++;
      else makuCounter.innerHTML++;
      rd.moveObject({
        obj: rikishi[i],
        target: document.querySelector('[data-r="' + rikishiRank + '"]'),
      });
    }
    updateInfoCells();
  }
}
