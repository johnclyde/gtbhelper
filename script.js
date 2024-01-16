"use strict";

var theSekitori = [
  "Y1e Terunofuji 13-2",
  "O1e Kirishima 11-4",
  "O1w Hoshoryu 10-4-1",
  "O2w Takakeisho 2-2-11",
  "S1e Kotonowaka 13-2",
  "S1w Daieisho 9-6",
  "K1e Takayasu 2-4-9",
  "K1w Ura 6-9",
  "M1e Wakamotoharu 10-5",
  "M1w Atamifuji 6-9",
  "M2e Midorifuji 5-10",
  "M2w Abi 8-7",
  "M3e Gonoyama 5-10",
  "M3w Hokutofuji 4-5-6",
  "M4e Tobizaru 7-8",
  "M4w Shodai 4-11",
  "M5e Ryuden 3-12",
  "M5w Nishikigi 8-7",
  "M6e Kinbozan 7-8",
  "M6w Shonannoumi 4-11",
  "M7e Ichiyamamoto 5-10",
  "M7w Asanoyama 9-3-3",
  "M8e Hokuseiho 2-4-9",
  "M8w Hiradoumi 8-7",
  "M9e Mitakeumi 6-9",
  "M9w Meisei 9-6",
  "M10e Tamawashi 8-7",
  "M10w Sadanoumi 6-9",
  "M11e Tsurugisho 9-6",
  "M11w Oho 10-5",
  "M12e Takanosho 10-5",
  "M12w Myogiryu 5-10",
  "M13e Churanoumi 7-8",
  "M13w Endo 5-10",
  "M14e Kotoshoho 9-6",
  "M14w Onosho 10-5",
  "M15e Tomokaze 5-10",
  "M15w Onosato 11-4",
  "M16e Takarafuji 6-9",
  "M16w Bushozan 4-11",
  "M17e Shimazuumi 9-6",
  "M17w Aoiyama 0-7-8",
  "J1e Daiamami 8-7",
  "J1w Mitoryu 7-8",
  "J2e Nishikifuji 10-5",
  "J2w Tohakuryu 8-7",
  "J3e Roga 9-6",
  "J3w Kitanowaka 10-5",
  "J4e Tamashoho 4-11",
  "J4w Kotoeko 3-10-2",
  "J5e Chiyoshoma 7-8",
  "J5w Oshoma 8-7",
  "J6e Tokihayate 10-5",
  "J6w Shirokuma 8-7",
  "J7e Kagayaki 9-6",
  "J7w Shishi 7-8",
  "J8e Shimanoumi 6-9",
  "J8w Shiden 6-9",
  "J9e Asakoryu 8-7",
  "J9w Daishoho 9-6",
  "J10e Takerufuji 13-2",
  "J10w Hakuyozan 10-5",
  "J11e Akua 6-9",
  "J11w Hidenoumi 10-5",
  "J12e Chiyomaru 5-10",
  "J12w Tenshoho 5-10",
  "J13e Yuma 5-10",
  "J13w Oshoumi 8-7",
  "J14e Chiyosakae 6-9",
  "J14w Tochimusashi 5-10",
  "Ms1e Kayo 3-4",
  "Ms1w Wakatakakage 7-0",
  "Ms2e Tsushimanada 5-2",
  "Ms2w Kitaharima 4-3",
  "Ms3e Takakento 0-0-7",
  "Ms3w Satorufuji 3-4",
  "Ms4e Chiyonoumi 2-6",
  "Ms4w Hatsuyama 1-6",
  "Ms5e Kiryuko 3-4",
  "Ms5w Hakuoho 6-1",
  "Ms6e Yago 2-5",
  "Ms6w Kitadaichi 4-3",
  "Ms7e Hitoshi 2-5",
  "Ms7w Hokutenkai 3-4",
  "Ms8e Onokatsu 6-1",
  "Ms8w Kototebakari 4-3",
  "Ms9e Otsuji 3-4",
  "Ms9w Hokutomaru 4-3",
  "Ms10e Kotokuzan 4-3",
  "Ms10w Narutaki 2-5",
  "Ms11e Tsukahara 5-2",
  "Ms11w Kotodaigo 5-2",
  "Ms12e Nabatame 5-2",
  "Ms12w Fukai 3-4",
  "Ms13w Kanzaki 2-5",
  "Ms14e Kotokenryu 3-4",
  "Ms14w Tokunomusashi 4-3",
  "Ms15e Wakaikari 4-3",
  "Ms15w Yoshii 3-4",
  "Ms16e Chiyonoo 3-4",
  "Ms17e Miyagi 4-3",
  "Ms17w Asagyokusei 3-4",
  "Ms18e Dewanoryu 5-2",
  "Ms18w Daiseizan 4-3",
  "Ms19e Asahakuryu 3-4",
  "Ms19w Asashiyu 2-5",
  "Ms20e Daishomaru 6-1",
  "Ms20w Tochikamiyama 2-5",
  "Ms21e Kairyu 4-3",
  "Ms21w Oshoryu 1-6",
  "Ms22e Fujinoyama 4-3",
  "Ms22w Nishinoryu 4-3",
  "Ms23e Oyamatoumi 4-3",
  "Ms23w Mineyaiba 4-3",
  "Ms24e Toseiryu 3-4",
  "Ms24w Tochiseiryu 2-4-1",
  "Ms25e Kamito 3-4",
  "Ms25w Mudoho 5-2",
  "Ms26e Kazekeno 5-2",
  "Ms26w Kotoyusho 5-2",
  "Ms27e Tochikodai 3-4",
  "Ms27w Wakanosho 3-4",
  "Ms28e Osanai 4-3",
  "Ms28w Asonoyama 2-5",
  "Ms29e Kaisho 4-3",
  "Ms29w Hananoumi 6-1",
  "Ms30e Toshunryu 5-2",
  "Ms30w Obara 4-3",
  "Ms31e Onojo 1-6",
  "Ms31w Kaishin 1-2-4",
  "Ms32e Asanowaka 4-3",
  "Ms32w Nionoumi 3-4",
  "Ms33e Terutsuyoshi 3-4",
  "Ms33w Seigo 2-5",
  "Ms34e Chiyotora 5-2",
  "Ms34w Kurohimeyama 3-4",
  "Ms35e Sasakiyama 3-4",
  "Ms35w Marusho 1-6",
  "Ms36e Daishoryu 2-5",
  "Ms36w Denuma 2-5",
  "Ms37e Hokaho 4-3",
  "Ms37w Omoto 5-2",
  "Ms38e Tendozan 6-1",
  "Ms38w Chiyonokatsu 2-5",
  "Ms39e Tsurubayashi 4-3",
  "Ms39w Taiga 4-3",
  "Ms40e Kazuto 3-4",
  "Ms40w Daikisho 5-2",
  "Ms41e Ryusei 4-3",
  "Ms41w Haruyama 6-1",
  "Ms42e Nihonyanagi 3-4",
  "Ms42w Kiho 0-0-7",
  "Ms43e Tokisoma 2-5",
  "Ms43w Awanokuni 5-2",
  "Ms44e Oka 1-6",
  "Ms44w Kaizen 3-4",
  "Ms45e Shohoryu 4-3",
  "Ms45w Kyokutaisei 3-4",
  "Ms46e Kazenoumi 5-2",
  "Ms46w Kotodairyu 3-4",
  "Ms47e Yoshiyasu 4-3",
  "Ms47w Asakoki 4-3",
  "Ms48e Kotakiyama 1-6",
  "Ms48w Fujitoshi 5-2",
  "Ms49e Yutakasho 2-4-1",
  "Ms49w Kaiseijo 3-4",
  "Ms50e Nobehara 2-5",
  "Ms50w Kotoozutsu 4-3",
  "Ms51e Amakaze 5-2",
  "Ms51w Tosamidori 3-4",
  "Ms52e Nishida 3-4",
  "Ms52w Kotohaguro 2-5",
  "Ms53e Akinoyama 5-2",
  "Ms53w Hinataryu 4-3",
  "Ms54e Hoshuzan 4-3",
  "Ms54w Nagamura 3-4",
  "Ms55e Sazanami 4-3",
  "Ms55w Wakamiyabi 2-5",
  "Ms56e Aratakayama 3-4",
  "Ms56w Otani 5-2",
  "Ms57e Anosho 4-3",
  "Ms57w Kumanoryu 4-3",
  "Ms58e Yuki 3-4",
  "Ms58w Oyamada 3-4",
  "Ms59e Kiyota 1-6",
  "Ms59w Tochinobori 3-4",
  "Ms60e Asashinjo 3-4",
  "Ms60w Ohata 4-3",
  "Sd1e Tanji 6-1",
  "Sd1w Kenshin 2-4",
  "Sd2e Hayanami 2-5",
  "Sd2w Kotodaishin 5-2",
  "Sd3e Sadanohikari 3-4",
  "Sd3w Wakatakamoto 5-2",
  "Sd4e Kyoda 4-3",
  "Sd4w Shunrai 5-2",
  "Sd5e Kaigo 4-3",
  "Sd5w Arauma 5-2",
  "Sd7e Suzaki 5-2",
  "Sd8e Akitoba 4-3",
  "Sd9w Kainoshima 4-3",
  "Sd14e Hamayutaka 6-1",
  "Sd14w Okinohama 5-2",
  "Sd15e Hodaka 6-1",
  "Sd18e Chiyoraizan 5-2",
  "Sd21w Shiroma 6-1",
  "Sd24e Gonoumi 2-2-3",
  "Sd25e Maikeru 5-2",
  "Sd26w Fujiseiun 7-0",
  "Sd28e Miyata 5-2",
  "Sd29w Akiyoshi 5-2",
  "Sd31e Kirinryu 6-1",
  "Sd36w Aron 6-1",
  "Sd44w Takashoki 6-1",
];

class Record {
  constructor(wins = 0, losses = 0, absents = 0, draws = 0) {
    this.wins = wins;
    this.losses = losses;
    this.absents = absents;
    this.draws = draws;
  }

  incrementWins() {
    this.wins++;
  }

  decrementWins() {
    if (this.wins > 0) {
      this.wins--;
    }
  }

  incrementLosses() {
    this.losses++;
  }

  decrementLosses() {
    if (this.losses > 0) {
      this.losses--;
    }
  }

  // Add similar methods for absents and draws

  toString() {
    let result = `${this.wins}-${this.losses}`;
    if (this.absents > 0) {
      result += `-${this.absents}`;
    }
    if (this.draws > 0) {
      result += `-${this.draws}d`;
    }
    return result;
  }
}

var retiredRikishi = ["Chiyonokuni"];

/* Enable "No Rank Colouring" and "One Column" options and then open the
 * browser's inspector (F12). Find the table and copy & paste the <tbody> node.
 * The rikishi ID is located right after "Rikishi.aspx?r=". Turn the IDs into an
 * array (add the empty spots as 0). This array should have the same length as
 * theSekitori array.
 */
var sekitoriID = [
  11927, 12191, 12231, 12451, 11985, 11980, 12270, 12094, 6596, 12203, 12130,
  12210, 12352, 11946, 12291, 12226, 12314, 12043, 12646, 12453, 6480, 5944,
  2879, 12351, 11855, 12239, 12721, 11784, 7153, 12113, 11785, 12370, 12688,
  12449, 12040, 12162, 6594, 11728, 12055, 12117, 11786, 12796, 11845, 12664,
  12516, 12406, 12362, 12013, 12717, 12575, 11976, 12548, 12702, 11723, 11943,
  12320, 12114, 11918, 12273, 12427, 11736, 12024, 7240, 12342, 12599, 12026,
  12779, 12141, 12165, 12255, 12542, 12412, 12674, 12711, 12836, 12709, 11809,
  12773, 12710, 6642, 12767, 12075, 12596, 12448, 11840, 12557, 12561, 12704,
  12316, 12416, 12733, 12597, 11868, 12610, 12425, 12534, 12523, 11755, 11726,
  12592, 8900,
];

let redips = {},
  rd = REDIPS.drag;

function exportTableToCSV($table, filename) {
  var $rows = $table.find("tr:has(td),tr:has(th)"),
    // Temporary delimiter characters unlikely to be typed by keyboard
    // This is to avoid accidentally splitting the actual contents
    tmpColDelim = String.fromCharCode(11), // vertical tab character
    tmpRowDelim = String.fromCharCode(0), // null character
    // actual delimiter characters for CSV format
    colDelim = '","',
    rowDelim = '"\r\n"',
    // Grab text from table into CSV formatted string
    csv =
      '"' +
      $rows
        .map(function (i, row) {
          var $row = $(row),
            $cols = $row.find("td,th");

          return $cols
            .map(function (j, col) {
              var $col = $(col),
                text = $col.text(),
                html = $col.html(),
                arr = [];

              if ($col.prop("tagName") == "TH" || $col.hasClass("cur")) {
                $col.contents().each(function () {
                  if (this.nodeType == 3) arr.push(this.nodeValue);
                  else if (this.tagName == "SPAN") arr.push(this.innerText);
                });
                if ($col.hasClass("cur") && $col.prop("tagName") != "TH")
                  text = arr.join("\n");
                else text = arr.join(" ");
              } else if (
                $col.hasClass("b2") ||
                $col.hasClass("rs2") ||
                $col.hasClass("ch2")
              ) {
                $col.children().each(function () {
                  if (this.tagName != "BR") arr.push(this.innerText);
                });
                text = arr.join("\n");
              } else if ($col.hasClass("nte")) {
                var temp;
                $col
                  .children("div")
                  .children()
                  .each(function () {
                    temp = this.innerText.replace("\n", "");
                    arr.push(temp);
                  });
                text = arr.join("\n");
              }

              text = text.replace(/ /g, "");
              return text.replace(/"/g, '""'); // escape double quotes
            })
            .get()
            .join(tmpColDelim);
        })
        .get()
        .join(tmpRowDelim)
        .split(tmpRowDelim)
        .join(rowDelim)
        .split(tmpColDelim)
        .join(colDelim) +
      '"',
    // Data URI
    csvData = "data:application/csv;charset=utf-8," + encodeURIComponent(csv);

  console.log(csv);

  if (window.navigator.msSaveBlob) {
    // IE 10+
    //alert('IE' + csv);
    window.navigator.msSaveOrOpenBlob(
      new Blob([csv], { type: "text/plain;charset=utf-8;" }),
      "csvname.csv",
    );
  } else {
    $(this).attr({ download: filename, href: csvData, target: "_blank" });
  }
}

window.onload = function () {
  var basho = "202309"; // The date of the basho just ended

  $("#exportToCsv1").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke1"), "banzuke1.csv"]);
  });
  $("#exportToCsv2").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke2"), "banzuke2.csv"]);
  });

  if (window.localStorage.getItem("banzuke1") !== null) {
    window.localStorage.removeItem("banzuke1");
    window.localStorage.removeItem("banzuke2");
  }
  if (window.localStorage.getItem("banzuke") !== null) {
    window.localStorage.removeItem("banzuke");
  }
  if (window.localStorage.getItem("picks") !== null) {
    window.localStorage.removeItem("picks");
  }

  if (window.localStorage.getItem("savedBanzuke") !== null) {
    document.getElementById("tableLiner").innerHTML =
      window.localStorage.getItem("savedBanzuke");
  } else {
    writeTableTitles(basho);
    populateSlots();
  }

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

  var radioButton = document.getElementsByClassName("checkbox"),
    radioLocal = window.localStorage.getItem("radioButton"),
    radioLocalDrop = window.localStorage.getItem("radioDrop");

  if (radioLocal === null || radioLocal == "openRikishiPage") {
    radioButton[0].checked = true;
  } else if (radioLocal == "returnToOld") {
    radioButton[1].checked = true;
  } else {
    radioButton[2].checked = true;
  }

  if (radioLocalDrop === null || radioLocalDrop == "multiple")
    radioButton[3].checked = true;
  else if (radioLocalDrop == "shift") radioButton[4].checked = true;
  else radioButton[5].checked = true;

  var noteCells = document.querySelectorAll(".nte");

  for (var i = 2; i < noteCells.length; i++) {
    let time = 0;
    noteCells[i].children[0].contentEditable = "true";
    noteCells[i].children[0].addEventListener("input", function () {
      clearTimeout(time);

      time = setTimeout(function () {
        hideHoshitori();
        saveBanzuke();
        showSaving();
      }, 1000);
    });
  }

  var cards = document.querySelectorAll(".redips-drag");

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", showHoshitori.bind(this));
    cards[i].addEventListener("mouseout", function () {
      this.style.border = "";
    });
  }

  function writeTableTitles(endedBashoDate) {
    var bashoYear = parseInt(endedBashoDate.substring(0, 4)),
      bashoMonth = parseInt(endedBashoDate.slice(-2)),
      tableTitle = document.getElementsByClassName("tableTitle");

    const bashoMonthLookup = {
      1: "Hatsu",
      3: "Haru",
      5: "Natsu",
      7: "Nagoya",
      9: "Aki",
      11: "Kyushu",
    };
    const getBashoName = (bMonth) => bashoMonthLookup[bMonth];

    tableTitle[0].innerHTML =
      getBashoName(bashoMonth) +
      " " +
      bashoYear +
      tableTitle[0].innerHTML +
      " Result";
    if (bashoMonth > 9) {
      bashoYear++;
      bashoMonth = -1;
    }
    tableTitle[1].innerHTML =
      getBashoName(bashoMonth + 2) +
      " " +
      bashoYear +
      " Makuuchi Guess - " +
      tableTitle[1].innerHTML;
  }

  function updateDisplay(cell, wins, losses) {
    var resCell = cell.nextSibling || cell.previousSibling;
    resCell.innerHTML = wins.toString() + "-" + losses.toString();
  }

  function saveTheSekitori() {
    localStorage.setItem("theSekitori", JSON.stringify(theSekitori));
  }

  function adjustRecord(cell, winAdjustment, lossAdjustment) {
    var card = cell.querySelector(".redips-drag");
    if (!card) return;

    var wins = parseInt(card.getAttribute("data-w").split("-")[0]);
    var losses = parseInt(card.getAttribute("data-w").split("-")[1]);

    wins += winAdjustment;
    losses += lossAdjustment;

    wins = Math.max(wins, 0); // Prevent negative wins
    losses = Math.max(losses, 0); // Prevent negative losses

    card.setAttribute("data-w", wins + "-" + losses);
    updateDisplay(cell, wins, losses);
    saveTheSekitori();
  }

  function createButton(text, onClickFunction) {
    var button = document.createElement("button");
    button.innerHTML = text;
    button.onclick = onClickFunction;
    return button;
  }

  function addAdjustmentButtons(cell) {
    // Create buttons for incrementing and decrementing wins
    var incWinsButton = createButton("+ Wins", function () {
      adjustRecord(cell, 1, 0);
    });
    var decWinsButton = createButton("- Wins", function () {
      adjustRecord(cell, -1, 0);
    });

    // Create buttons for incrementing and decrementing losses
    var incLossesButton = createButton("+ Losses", function () {
      adjustRecord(cell, 0, 1);
    });
    var decLossesButton = createButton("- Losses", function () {
      adjustRecord(cell, 0, -1);
    });

    cell.appendChild(incWinsButton);
    cell.appendChild(decWinsButton);
    cell.appendChild(incLossesButton);
    cell.appendChild(decLossesButton);
  }

  function populateSlots() {
    var table1 = document.getElementById("banzuke1");
    var cell = table1.querySelectorAll(".redips-only");

    for (var i = 0; i < cell.length; i++) {
      for (var j = 0; j < theSekitori.length; j++) {
        if (cell[i].classList.contains(theSekitori[j].split(" ")[0])) {
          var card = document.createElement("div"),
            rikiData = theSekitori[j].split(" "),
            wins = rikiData[2].split("-")[0],
            record =
              rikiData.length == 4
                ? rikiData[2] + " " + rikiData[3]
                : rikiData[2];

          if (rikiData.length > 3) rikiData[2] += " " + rikiData[3];

          card.id = rikiData[0];
          card.className = "redips-drag se";
          if (
            rikiData[0].startsWith("Ms") ||
            rikiData[0].startsWith("Sd") ||
            rikiData[0].startsWith("Jd") ||
            rikiData[0].startsWith("Jk")
          )
            card.setAttribute("data-w", wins * 2);
          else card.setAttribute("data-w", wins);
          card.setAttribute("data-re", record);

          rikiData[1] =
            '<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=' +
            sekitoriID[j] +
            '" target="_blank">' +
            rikiData[1] +
            "</a>";
          rikiData[2] =
            '<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=' +
            sekitoriID[j] +
            "&b=" +
            basho +
            '" target="_blank">' +
            rikiData[2] +
            "</a>";

          card.innerHTML = rikiData[1];

          if (retiredRikishi.includes(theSekitori[j].split(" ")[1])) {
            //card.innerHTML = rikiData.join(' ');
            card.style.backgroundColor = "rgb(203, 203, 203)";
            card.className = "redips-drag intai";
            card.setAttribute("title", "Retired");
            card.removeAttribute("data-ko");
          }

          cell[i].appendChild(card);

          var resCell, newRankCell;

          if (i % 2 == 0) resCell = cell[i].previousSibling;
          else resCell = cell[i].nextSibling;

          resCell.innerHTML = rikiData[2];
        }
      }
    }
  }
};

function showHoshitori() {
  event.target.style.border = "2px solid blue";
}

function hideHoshitori() {
  event.target.style.border = "";
}

function saveRadio(radioButton) {
  window.localStorage.setItem("radioButton", radioButton.value);
}

function saveDropRadio(button) {
  if (button.value == "disable") rd.dropMode = "single";
  else rd.dropMode = "multiple";

  window.localStorage.setItem("radioDrop", button.value);
}

function saveBanzuke() {
  var date = new Date();

  window.localStorage.setItem(
    "savedBanzuke",
    document.getElementById("tableLiner").innerHTML,
  );
  window.localStorage.setItem("savedBanzukeTime", date.toString());
}

rd.animation = "off";

redips.init = function () {
  rd.init();
  rd.hover.colorTd = "chartreuse";
  rd.only.divClass.se = "b2";

  rd.enableDrag(false, ".intai");

  var radioDrop = document.getElementsByName("dropMode");

  if (radioDrop[2].checked) rd.dropMode = "single";
  else rd.dropMode = "multiple";

  for (var i = 0; i < theSekitori.length; i++) {
    if (theSekitori[i] !== "") {
      var rank = theSekitori[i].split(" ")[0];
      rd.only.div[rank] = rank;
    }
  }
  rd.hover.colorTd = "royalblue";

  var intervalID;

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
    if (typeof intervalID != "undefined" && intervalID != null)
      window.clearInterval(intervalID);

    if (
      currentCell.children.length > 0 &&
      currentCell != rd.obj.parentNode &&
      window.localStorage.getItem("radioDrop") == "shift" &&
      currentCell.classList.contains("b2")
    ) {
      var b2Cell = document.querySelectorAll(".b2"),
        targetIndex = Array.prototype.slice.call(b2Cell).indexOf(currentCell),
        originIndex = Array.prototype.slice
          .call(b2Cell)
          .indexOf(rd.obj.parentNode);

      var tooltip = document.createElement("span");
      tooltip.id = "tip";
      if (originIndex > targetIndex || originIndex < 0)
        tooltip.setAttribute("data-direction", "up");
      else if (originIndex < targetIndex)
        tooltip.setAttribute("data-direction", "down");
      if (tooltipCheckbox.checked) tooltip.style.display = "none";
      currentCell.prepend(tooltip);
      shiftDirect();
      const interval = setInterval(shiftDirect, 1000);
      intervalID = interval;
      function shiftDirect() {
        var prevShifters = document.getElementsByClassName("shifter"),
          prevShiftTo = document.getElementsByClassName("shiftTo");

        if (typeof prevShiftTo[0] != "undefined" && prevShiftTo[0] != null)
          prevShiftTo[0].classList.remove("shiftTo");
        if (typeof prevShifters[0] != "undefined" && prevShifters[0] != null) {
          while (prevShifters.length)
            prevShifters[0].classList.remove("shifter");
        }
        if (tooltip.dataset.direction == "down")
          tooltip.dataset.direction = "up";
        else tooltip.dataset.direction = "down";
        if (tooltip.dataset.direction == "down") {
          tooltip.innerHTML = "⮟";
          for (var i = targetIndex; i < b2Cell.length; i++) {
            if (
              b2Cell[i].children.length == 0 ||
              targetIndex == 57 ||
              targetIndex == 85 ||
              (b2Cell[i].children.length == 1 &&
                b2Cell[i] === rd.obj.parentNode) ||
              ((i == 57 || i == 85) && b2Cell[i].children.length > 0)
            ) {
              b2Cell[i].classList.add("shiftTo");
              for (var j = i - 1; j >= targetIndex; i--, j--) {
                for (var k = 0; k < b2Cell[j].children.length; k++)
                  b2Cell[j].children[k].classList.add("shifter");
              }
              break;
            }
          }
        } else {
          tooltip.innerHTML = "⮝";
          for (var i = targetIndex; i >= 0; i--) {
            if (
              b2Cell[i].children.length == 0 ||
              targetIndex == 0 ||
              targetIndex == 58 ||
              (b2Cell[i].children.length == 1 &&
                b2Cell[i] === rd.obj.parentNode) ||
              ((i == 0 || i == 58) && b2Cell[i].children.length > 0)
            ) {
              //b2Cell[i].style.border = "none";
              b2Cell[i].classList.add("shiftTo");
              for (var j = i + 1; j <= targetIndex; i++, j++) {
                for (var k = 0; k < b2Cell[j].children.length; k++)
                  b2Cell[j].children[k].classList.add("shifter");
              }
              break;
            }
          }
        }
      }
    }
  };

  rd.event.dblClicked = function () {
    var radioButton = document.getElementsByTagName("input");
    var rikishiURL = rd.obj.children[0].href;
    var thisRank = rd.obj.id,
      originCell = document.querySelectorAll("." + thisRank)[0],
      currentCell = rd.findParent("TD", rd.obj),
      currentChgCell;

    if (radioButton[0].checked) window.open(rikishiURL, "_blank").focus();
    else if (radioButton[1].checked && currentCell.classList.contains("b2")) {
      rd.moveObject({
        obj: rd.obj,
        target: originCell,
        callback: function () {
          if (currentCell.dataset.r.charAt(0) == "J")
            document.getElementById("juRik").innerHTML--;
          else document.getElementById("makRik").innerHTML--;
          originCell.children[0].remove();
          hideHoshitori();
          updateInfoCells();
          saveBanzuke();
        },
      });
      showSaving();
    }
  };

  rd.event.clicked = function (currentCell) {
    hideHoshitori();
  };

  rd.event.notMoved = function () {
    var currentCell = rd.findParent("TD", rd.obj);
  };

  rd.event.droppedBefore = function (targetCell) {
    var makuCounter = document.getElementById("makRik"),
      juCounter = document.getElementById("juRik"),
      msCounter = document.getElementById("msRik"),
      thisCard = rd.obj,
      currentCell = rd.findParent("TD", thisCard),
      currentChgCell,
      dropRadio = document.getElementsByName("dropMode");
    var currentCellRank,
      targetCellRank,
      curCellIsOfBanzuke2 = currentCell.classList.contains("b2"),
      tarCellIsOfBanzuke2 = targetCell.classList.contains("b2");

    if (curCellIsOfBanzuke2) {
      currentCellRank = currentCell.dataset.r.charAt(0);
      if (currentCellRank == "J") juCounter.innerHTML--;
      else if (currentCell.dataset.r.charAt(1) == "s") msCounter.innerHTML--;
      else makuCounter.innerHTML--;
    } else if (tarCellIsOfBanzuke2) {
      var holder = document.createElement("a");

      holder.innerHTML =
        thisCard.childNodes[thisCard.childNodes.length - 1].innerText;
      holder.href = thisCard.children[thisCard.childNodes.length - 1].href;
      holder.target = "_blank";
      if (thisCard.id.startsWith("Ms")) holder.className = "msLink";
      currentCell.appendChild(holder);
    }

    if (tarCellIsOfBanzuke2) {
      targetCellRank = targetCell.dataset.r.charAt(0);
      if (targetCellRank == "J") juCounter.innerHTML++;
      else if (targetCell.dataset.r.charAt(1) == "s") msCounter.innerHTML++;
      else makuCounter.innerHTML++;
    } else targetCell.children[0].remove();

    if (
      dropRadio[1].checked &&
      targetCell !== currentCell &&
      tarCellIsOfBanzuke2 &&
      targetCell.children.length > 0
    ) {
      var tooltip = document.getElementById("tip");

      if (typeof tooltip != "undefined" && tooltip != null) {
        var b2Cell = document.querySelectorAll(".b2"),
          targetIndex = Array.prototype.slice.call(b2Cell).indexOf(targetCell);

        if (tooltip.dataset.direction == "down") {
          for (var i = targetIndex; i < b2Cell.length; i++) {
            if (
              b2Cell[i].children.length == 0 ||
              targetIndex == 57 ||
              targetIndex == 85 ||
              (b2Cell[i].children.length == 1 &&
                b2Cell[i] === thisCard.parentNode) ||
              ((i == 57 || i == 85) && b2Cell[i].children.length > 0)
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
              targetIndex == 58 ||
              (b2Cell[i].children.length == 1 &&
                b2Cell[i] === thisCard.parentNode) ||
              ((i == 0 || i == 58) && b2Cell[i].children.length > 0)
            ) {
              for (var j = i + 1; j <= targetIndex; i++, j++)
                rd.relocate(b2Cell[j], b2Cell[i], "instant");
              redips.init();
              break;
            }
          }
        }
        var prevShifters = document.getElementsByClassName("shifter"),
          prevShiftTo = document.getElementsByClassName("shiftTo");

        if (typeof prevShiftTo[0] != "undefined" && prevShiftTo[0] != null)
          prevShiftTo[0].classList.remove("shiftTo");
        if (typeof prevShifters[0] != "undefined" && prevShifters[0] != null) {
          while (prevShifters.length)
            prevShifters[0].classList.remove("shifter");
        }
        if (typeof intervalID != "undefined" && intervalID != null)
          window.clearInterval(intervalID);
        tooltip.remove();
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
    hideHoshitori();
    saveBanzuke();
  };
};

function toggleColumns(button) {
  var column = button.value;
  var colCell = document.getElementsByClassName(column);
  var colCheck = document.querySelectorAll(".columnCheckbox");
  var tableTitle = document.querySelectorAll(".tableTitle");

  if (button.checked) {
    if (button.classList.contains("forB1")) tableTitle[0].colSpan += 2;
    else {
      tableTitle[1].colSpan += 2;
      tableTitle[2].colSpan += 2;
    }
    for (var i = 0; i < colCell.length; i++) colCell[i].classList.remove("hid");
  } else {
    if (button.classList.contains("forB1")) tableTitle[0].colSpan -= 2;
    else {
      tableTitle[1].colSpan -= 2;
      tableTitle[2].colSpan -= 2;
    }
    for (var i = 0; i < colCell.length; i++) colCell[i].classList.add("hid");
  }
  for (var i = 1; i < 8; i++) {
    window.localStorage.setItem(
      "colCheck" + String(i),
      colCheck[i - 1].checked,
    );
  }
  saveBanzuke();
}

function updateInfoCells() {
  var b2Cell = document.querySelectorAll(".b2"),
    b1Cell = document
      .getElementById("banzuke1")
      .querySelectorAll(".redips-only"),
    originCell,
    newRankCell,
    b1Chg,
    resultLink,
    resultCell,
    currRankCell,
    targetChgCell;

  for (var i = 0; i < b1Cell.length; i++) {
    if (
      b1Cell[i].children.length > 0 &&
      b1Cell[i].children[0].tagName == "DIV"
    ) {
      newRankCell = b1Cell[i].nextSibling;
      if (i % 2 != 0) {
        newRankCell = newRankCell.nextSibling;
      }
      if (newRankCell.innerHTML != "") {
        newRankCell.innerHTML = "";
        b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = "";
      }
    }
  }

  for (var i = 0; i < b2Cell.length; i++) {
    resultCell = b2Cell[i].nextSibling;
    currRankCell = b2Cell[i].previousSibling;
    targetChgCell = resultCell.nextSibling;

    if (b2Cell[i].children.length > 0) {
      for (var j = 0; j < b2Cell[i].children.length; j++) {
        var thisRank = b2Cell[i].children[j].id,
          rikishiWins = b2Cell[i].children[j].dataset.w,
          thisChg,
          targetCellRank,
          chg;

        originCell = document.querySelectorAll("." + thisRank)[0];
        newRankCell = originCell.nextSibling;
        if (thisRank.endsWith("w")) {
          newRankCell = newRankCell.nextSibling;
          resultLink = originCell.nextSibling.innerHTML;
        } else resultLink = originCell.previousSibling.innerHTML;

        targetCellRank = b2Cell[i].dataset.r;

        thisChg = getChange(thisRank, targetCellRank);

        if (thisRank.startsWith("Ms")) {
          if (thisRank.endsWith("TD")) thisRank = thisRank.slice(0, -2);
          thisChg =
            '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' +
            thisRank +
            "&form1_wins=" +
            rikishiWins / 2 +
            "&form1_year=196007-now&form2_highlight=on&form2_rank=" +
            targetCellRank +
            '" target="_blank" title="Click to run a SumoDB query">' +
            thisChg +
            "</a>";
        } else {
          thisChg =
            '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' +
            thisRank +
            "&form1_wins=" +
            rikishiWins +
            "&form1_year=193905-194401,194905-now&form2_highlight=on&form2_rank=" +
            targetCellRank +
            '" target="_blank" title="Click to run a SumoDB query">' +
            thisChg +
            "</a>";
        }

        newRankCell.innerHTML = b2Cell[i].dataset.r;

        b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = thisChg;

        if (j == 0) {
          targetChgCell.innerHTML = thisChg;
          resultCell.innerHTML = resultLink;
          currRankCell.innerHTML =
            "<span>" + b2Cell[i].children[j].id + "</span>";
        } else {
          targetChgCell.innerHTML += "<br>" + thisChg;
          resultCell.innerHTML += "<br>" + resultLink;
          currRankCell.innerHTML +=
            "<br><span>" + b2Cell[i].children[j].id + "</span>";
        }

        var rikishiBgColor = window
          .getComputedStyle(b2Cell[i].children[j])
          .getPropertyValue("background-color");

        currRankCell.children[j * 2].style.background = rikishiBgColor;
        resultCell.children[j * 2].style.background = rikishiBgColor;
      }
    } else {
      resultCell.innerHTML = "";
      currRankCell.innerHTML = "";
      targetChgCell.innerHTML = "";
    }
  }
}

redips.resetBanzuke = function () {
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
};

redips.arrange = function () {
  var rikishi = document.querySelectorAll(".se"),
    juCounter = document.getElementById("juRik"),
    makuCounter = document.getElementById("makRik");

  for (var i = 0; i < rikishi.length; i++) {
    var rikishiRank = rikishi[i].id;

    if (
      !rikishiRank.startsWith("Ms") &&
      rikishiRank != rikishi[i].parentNode.dataset.r
    ) {
      if (!rikishi[i].parentNode.classList.contains("b2")) {
        var holder = document.createElement("a");

        holder.innerHTML = rikishi[i].innerText;
        holder.href = rikishi[i].children[0].href;
        holder.target = "_blank";
        rikishi[i].parentNode.appendChild(holder);
      } else {
        if (rikishi[i].parentNode.dataset.r.startsWith("J"))
          juCounter.innerHTML--;
        else makuCounter.innerHTML--;
      }
      if (rikishiRank.startsWith("J")) juCounter.innerHTML++;
      else makuCounter.innerHTML++;
      rd.moveObject({
        obj: rikishi[i],
        target: document.querySelector('[data-r="' + rikishiRank + '"]'),
      });
    }
  }
  updateInfoCells();
};

function getChange(thisRank, targetCellRank) {
  var chg;

  if (thisRank == targetCellRank) chg = "─";
  else {
    const change = [
      ["calc", "!!!", "!!!", "!!!", "!!!", "!!!", "!!!", "!!!"],
      [" ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!", "!!!", "!!!"],
      ["!!!", " ↑ ", "calc", " ↓ ", " ↓ ", "!!!", "!!!", "!!!"],
      ["!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!"],
      ["!!!", "!!!", " ↑ ", " ↑ ", "calc", " ↓ ", "!!!", "!!!"],
      ["!!!", "!!!", "!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!"],
      ["!!!", "!!!", "!!!", "!!!", "!!!", " ↑ ", "calc", " ↓ "],
      ["!!!", "!!!", "!!!", "!!!", "!!!", "!!!", " ↑ ", "calc"],
    ];
    var r1, r2;

    switch (thisRank.charAt(0)) {
      case "Y":
        r1 = 0;
        break;
      case "O":
        r1 = 1;
        break;
      case "S":
        if (!thisRank.startsWith("Sd")) r1 = 2;
        else r1 = 7;
        break;
      case "K":
        r1 = 3;
        break;
      case "M":
        if (!thisRank.startsWith("Ms")) r1 = 4;
        else r1 = 6;
        break;
      default:
        r1 = 5;
    }
    switch (targetCellRank.charAt(0)) {
      case "Y":
        r2 = 0;
        break;
      case "O":
        r2 = 1;
        break;
      case "S":
        if (!targetCellRank.startsWith("Sd")) r2 = 2;
        else r2 = 7;
        break;
      case "K":
        r2 = 3;
        break;
      case "M":
        if (!targetCellRank.startsWith("Ms")) r2 = 4;
        else r2 = 6;
        break;
      default:
        r2 = 5;
    }

    if (change[r1][r2] != "calc") chg = change[r1][r2];
    else {
      var thisRankNum =
          r1 == 6 || r1 == 7
            ? parseInt(thisRank.slice(2, -1))
            : parseInt(thisRank.slice(1, -1)),
        targetRankNum =
          r2 == 6 || r2 == 7
            ? parseInt(targetCellRank.slice(2, -1))
            : parseInt(targetCellRank.slice(1, -1));

      if (thisRank.slice(-1) == "w") thisRankNum += 0.5;
      if (targetCellRank.slice(-1) == "w") targetRankNum += 0.5;

      chg = thisRankNum - targetRankNum;

      if (chg > 0) chg = "+" + chg;
    }
  }

  return chg;
}

function showSaving() {
  var saving = document.getElementById("progressText");
  saving.innerHTML = "Saved!";
  setTimeout(function () {
    saving.innerHTML = "";
  }, 1000);
}

if (window.addEventListener)
  window.addEventListener("load", redips.init, false);
else if (window.attachEvent) window.attachEvent("onload", redips.init);
