"use strict";

export function toggleColumns(button) {
  const column = button.value;
  const colCells = document.getElementsByClassName(column);
  const colChecks = document.querySelectorAll(".columnCheckbox");
  const tableTitles = document.querySelectorAll(".tableTitle");

  const updateColSpan = (index, value) => {
    tableTitles[index].colSpan += value;
  };

  if (button.checked) {
    button.classList.contains("forB1") ? updateColSpan(0, 2) : updateColSpan(1, 2) & updateColSpan(2, 2);
    Array.from(colCells).forEach(cell => cell.classList.remove("hid"));
  } else {
    button.classList.contains("forB1") ? updateColSpan(0, -2) : updateColSpan(1, -2) & updateColSpan(2, -2);
    Array.from(colCells).forEach(cell => cell.classList.add("hid"));
  }

  colChecks.forEach((check, i) => {
    window.localStorage.setItem("colCheck" + (i + 1), check.checked);
  });

  saveBanzuke();
}

export function updateInfoCells() {
  const b2Cells = document.querySelectorAll(".b2");
  const b1Cells = document.getElementById("banzuke1").querySelectorAll(".redips-only");

  const clearCells = cell => {
    const newRankCell = cell.nextSibling;
    if (newRankCell) {
      newRankCell.innerHTML = "";
      const b1Chg = newRankCell.nextSibling;
      if (b1Chg) b1Chg.innerHTML = "";
    }
  };

  b1Cells.forEach(cell => {
    if (cell.children.length > 0 && cell.children[0].tagName === "DIV") clearCells(cell);
  });

  b2Cells.forEach(b2Cell => {
    const resultCell = b2Cell.nextSibling;
    const currRankCell = b2Cell.previousSibling;
    const targetChgCell = resultCell.nextSibling;

    if (b2Cell.children.length > 0) {
      Array.from(b2Cell.children).forEach((child, j) => {
        const thisRank = child.id;
        const rikishiWins = child.dataset.w;
        const originCell = document.querySelector(`.${thisRank}`);
        let newRankCell = originCell.nextSibling;
        let resultLink;

        if (thisRank.endsWith("w")) {
          newRankCell = newRankCell.nextSibling;
          resultLink = originCell.nextSibling.innerHTML;
        } else {
          resultLink = originCell.previousSibling.innerHTML;
        }

        const targetCellRank = b2Cell.dataset.r;
        const thisChg = getChange(thisRank, targetCellRank, rikishiWins);

        newRankCell.innerHTML = targetCellRank;
        const b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = thisChg;

        if (j === 0) {
          targetChgCell.innerHTML = thisChg;
          resultCell.innerHTML = resultLink;
          currRankCell.innerHTML = `<span>${thisRank}</span>`;
        } else {
          targetChgCell.innerHTML += `<br>${thisChg}`;
          resultCell.innerHTML += `<br>${resultLink}`;
          currRankCell.innerHTML += `<br><span>${thisRank}</span>`;
        }

        const rikishiBgColor = window.getComputedStyle(child).getPropertyValue("background-color");
        currRankCell.children[j * 2].style.background = rikishiBgColor;
        resultCell.children[j * 2].style.background = rikishiBgColor;
      });
    } else {
      resultCell.innerHTML = "";
      currRankCell.innerHTML = "";
      targetChgCell.innerHTML = "";
    }
  });
}

function getChange(thisRank, targetCellRank, rikishiWins) {
  const changeMatrix = [
    ["calc", "!!!", "!!!", "!!!", "!!!", "!!!", "!!!", "!!!"],
    [" ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!", "!!!", "!!!"],
    ["!!!", " ↑ ", "calc", " ↓ ", " ↓ ", "!!!", "!!!", "!!!"],
    ["!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!"],
    ["!!!", "!!!", " ↑ ", " ↑ ", "calc", " ↓ ", "!!!", "!!!"],
    ["!!!", "!!!", "!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!"],
    ["!!!", "!!!", "!!!", "!!!", "!!!", " ↑ ", "calc", " ↓ "],
    ["!!!", "!!!", "!!!", "!!!", "!!!", "!!!", " ↑ ", "calc"],
  ];

  const rankMap = {
    "Y": 0,
    "O": 1,
    "S": 2,
    "K": 3,
    "M": 4,
    "J": 5,
    "Ms": 6,
    "Sd": 7
  };

  let r1 = rankMap[thisRank[0]];
  let r2 = rankMap[targetCellRank[0]];

  if (thisRank.startsWith("Ms") || thisRank.startsWith("Sd")) r1 = rankMap[thisRank.slice(0, 2)];
  if (targetCellRank.startsWith("Ms") || targetCellRank.startsWith("Sd")) r2 = rankMap[targetCellRank.slice(0, 2)];

  let chg = changeMatrix[r1][r2];

  if (chg === "calc") {
    let thisRankNum = parseInt(thisRank.slice(1), 10);
    let targetRankNum = parseInt(targetCellRank.slice(1), 10);

    if (thisRank.endsWith("w")) thisRankNum += 0.5;
    if (targetCellRank.endsWith("w")) targetRankNum += 0.5;

    chg = thisRankNum - targetRankNum;
    if (chg > 0) chg = `+${chg}`;
  }

  if (thisRank.startsWith("Ms") || thisRank.startsWith("Sd")) {
    if (thisRank.endsWith("TD")) thisRank = thisRank.slice(0, -2);
    chg = `<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=${thisRank}&form1_wins=${rikishiWins / 2}&form1_year=196007-now&form2_highlight=on&form2_rank=${targetCellRank}" target="_blank" title="Click to run a SumoDB query">${chg}</a>`;
  } else {
    chg = `<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=${thisRank}&form1_wins=${rikishiWins}&form1_year=193905-194401,194905-now&form2_highlight=on&form2_rank=${targetCellRank}" target="_blank" title="Click to run a SumoDB query">${chg}</a>`;
  }

  return chg;
}
