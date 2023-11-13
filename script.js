
'use strict';

/*
var shikonaCells = document.getElementsByClassName("shikona");
var theRikishi = [], rikishiID = [];
for (var i = 0; i < 100; i++) {
  theRikishi[i] = shikonaCells[i].previousSibling.innerHTML + ' ' + shikonaCells[i].children[0].innerHTML + ' ' + shikonaCells[i].nextSibling.children[0].innerHTML;
  rikishiID[i]  = shikonaCells[i].children[0].href.split('=')[1];
} 
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */ 
var theSekitori = [
  "Y1e Terunofuji 0-0-15",
  "O1e Takakeisho 2-0",
  "O1w Kirishima 2-0",
  "O2w Hoshoryu 2-0",
  "S1e Daieisho 2-0",
  "S1w Wakamotoharu 1-1",
  "S2e Kotonowaka 2-0",
  "K1e Abi 1-1",
  "K1w Hokutofuji 0-2",
  "M1e Asanoyama 0-0-15",
  "M1w Ura 0-2",
  "M2e Shodai 0-2",
  "M2w Meisei 0-2",
  "M3e Takayasu 1-1",
  "M3w Tobizaru 1-1",
  "M4e Gonoyama 0-2",
  "M4w Nishikigi 0-2",
  "M5e Onosho 1-1",
  "M5w Midorifuji 1-1",
  "M6e Shonannoumi 2-0",
  "M6w Takanosho 1-1",
  "M7e Hokuseiho 2-0",
  "M7w Kinbozan 1-1",
  "M8e Endo 0-2",
  "M8w Atamifuji 2-0",
  "M9e Myogiryu 0-2",
  "M9w Mitakeumi 0-2",
  "M10e Ryuden 2-0",
  "M10w Kotoeko 1-1",
  "M11e Sadanoumi 2-0",
  "M11w Hiradoumi 0-2",
  "M12e Oho 1-1",
  "M12w Tamawashi 2-0",
  "M13e Takarafuji 0-2",
  "M13w Tsurugisho 1-1",
  "M14e Tomokaze 1-1",
  "M14w Ichiyamamoto 2-0",
  "M15e Tohakuryu 1-1",
  "M15w Churanoumi 1-1",
  "M16e Roga 0-2",
  "M16w Nishikifuji 0-2",
  "M17e Kitanowaka 2-0",
  "J1e Aoiyama 1-1",
  "J1w Kotoshoho 0-2",
  "J2e Bushozan 2-0",
  "J2w Shimazuumi 1-1",
  "J3e Kagayaki 1-1",
  "J3w Oshoma 0-2",
  "J4e Daiamami 1-1",
  "J4w Mitoryu 2-0",
  "J5e Onosato 2-0",
  "J5w Shishi 1-1",
  "J6e Chiyoshoma 1-1",
  "J6w Hakuoho 0-0-15",
  "J7e Daishoho 0-2",
  "J7w Tamashoho 2-0",
  "J8e Chiyomaru 0-2",
  "J8w Tokihayate 1-1",
  "J9e Takahashi 1-1",
  "J9w Takakento 1-1",
  "J10e Akua 2-0",
  "J10w Tenshoho 1-1",
  "J11e Hitoshi 0-2",
  "J11w Hidenoumi 0-2",
  "J12e Shimanoumi 1-1",
  "J12w Shiden 2-0",
  "J13e Yuma 2-0",
  "J13w Asakoryu 1-1",
  "J14e Chiyosakae 0-2",
  "J14w Azumaryu 0-2",
  "Ms1e Hakuyozan 1-0",
  "Ms1w Takerufuji 2-0",
  "Ms2e Kiho 0-0-7",
  "Ms2w Oshoumi 0-1",
  "Ms3e Tochimusashi 1-0",
  "Ms3w Kitadaichi 0-1",
  "Ms4e Fukai 1-0",
  "Ms4w Tsushimanada 0-1",
  "Ms5e Kototebakari 0-1",
  "Ms5w Otsuji 1-0",
  "Ms6e Wakatakakage 0-1",
  "Ms6w Kayo 1-0",
  "Ms7e Chiyonoumi 1-0",
  "Ms7w Tochikamiyama 0-1",
  "Ms8e Kiryuko 0-1",
  "Ms8w Kairyu 1-0",
  "Ms9e Yago 1-0",
  "Ms9w Asagyokusei 0-1",
  "Ms10e Kaisho 0-1",
  "Ms10w Dewanoryu 1-0",
  "Ms11e Kitaharima 1-0",
  "Ms11w Asahakuryu 0-1",
  "Ms12e Asashiyu 1-0",
  "Ms12w Kamito 0-1",
  "Ms13e Mudoho 0-1",
  "Ms13w Hatsuyama 1-0",
  "Ms14e Kotokuzan 0-1",
  "Ms14w Kazekeno 1-0",
  "Ms15e Tsukahara 1-0",
  "Ms15w Hokutenkai 0-1",
  "Ms15TD Onokatsu 0-1",
  "Ms16e Kotodaigo 1-0",
  "Ms16w Nabatame 1-0",
  "Ms17e Terutsuyoshi 0-1",
  "Ms17w Mineyaiba 1-0",
  "Ms18e Tochiseiryu 0-1",
  "Ms18w Tokunomusashi 1-0",
  "Ms19e Yoshii 0-1",
  "Ms19w Chiyoarashi 0-0",
  "Ms23e Osanai 0-0",
  "Ms22w Wakanosho 0-0",
  "Ms21e Narutaki 0-0",
  "Ms20w Asakoki 0-0",
  "Ms20e Miyagi 1-0",
  "Ms25e Kanzaki 0-0",
  "Ms25w Onojo 0-0",
  "Ms27e Oyamatoumi 0-0",
  "Ms27w Wakatakamoto 0-0",
  "Ms29e Tendozan 0-0",
  "Ms29w Tanabe 0-0",
  "Ms31e Kototsubasa 0-0",
  "Ms31w Oshoryu 0-0",
  "Ms33e Ryusei 0-0",
  "Ms33w Tochikodai 0-0",
  "Ms35e Wakaikari 0-0",
  "Ms35w Hoshuzan 0-0",
  "Ms36e Toshunryu 0-0",
  "Ms36w Kyokutaisei 0-0",
  "Ms39w Seigo 0-0",
  "Ms38w Asanowaka 0-0",
  "Ms41e Tosamidori 0-0",
  "Ms40w Amakaze 0-0",
  "Ms43e Daiseiryu 0-0",
  "Ms42w Satorufuji 0-0",
  "Ms44e Kyoda 0-0",
  "Ms43w Hokaho 0-0",
  "Ms47e Taiga 0-0",
  "Ms47w Tochinobori 0-0",
  "Ms49e Taiyo 0-0",
  "Ms49w Ohata 0-0",
  "Ms51e Okinohama 0-0",
  "Ms51w Awanokuni 0-0",
  "Ms54e Kaizen 0-0",
  "Ms53w Sadanohikari 0-0",
  "Ms57e Daikisho 0-0",
  "Ms56w Raiho 0-0",
  "Ms59e Tokisoma 0-0",
  "Ms58w Akiyoshi 0-0",
  "Ms60w Nishikikuni 0-0",
  "Sd1e Asonoyama 0-0",
  "Sd1w Okinohama 4-3",
  "Sd2e Awanokuni 4-2",
  "Sd2w Kitaharima 7-0",
  "Sd3e Naya 2-5",
  "Sd3w Chiyotora 4-2",
  "Sd4e Daihisho 2-5",
  "Sd4w Amakaze 4-2",
  "Sd5e Tanji 6-1",
  "Sd6e Nobehara 3-4",
  "Sd6w Satorufuji 5-2",
  "Sd7e Daikisho 4-3",
  "Sd7w Yutakasho 4-3",
  "Sd8w Hokutoshu 3-4",
  "Sd9e Hakuonada 3-4",
  "Sd9w Kotoryusei 2-5",
  "Sd10e Wakakinsho 2-5",
  "Sd10w Wakenosato 4-2",
  "Sd13e Murayama 4-2",
  "Sd13w Ohata 4-2",
  "Sd15e Kenshin 5-2",
  "Sd16e Kotetsu 3-4",
  "Sd16w Asanowaka 5-1",
  "Sd18e Asashinjo 6-1",
  "Sd21e Tosashimizu 3-4",
  "Sd22e Kenyu 4-3",
  "Sd22w Arise 3-4",
  "Sd23w Kiyota 4-2",
  "Sd35w Gonoumi 6-1",
  "Sd41e Sadanohikari 6-1",
  "Sd45w Haruyama 5-1",
  "Sd50e Ryutsukasa 5-2",
  "Sd68e Chiyoshishi 6-1"
];

/* Add here the shikona of retired sekitori, who will not appear in the 
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = ["Chiyonokuni"];

/* Enable "No Rank Colouring" and "One Column" options and then open the 
 * browser's inspector (F12). Find the table and copy & paste the <tbody> node. 
 * The rikishi ID is located right after "Rikishi.aspx?r=". Turn the IDs into an 
 * array (add the empty spots as 0). This array should have the same length as 
 * theSekitori array.
 */
var sekitoriID = [
  11927, 
  12191, 
  12231, 
  12451, 
  11985, 
  11980, 
  12270, 
  12094, 
  6596, 
  12203, 
  12130, 
  12210, 
  12352, 
  11946, 
  12291, 
  12226, 
  12314, 
  12043, 
  12646, 
  12453, 
  6480, 
  5944, 
  2879, 
  12351, 
  11855, 
  12239, 
  12721, 
  11784, 
  7153, 
  12113, 
  11785, 
  12370, 
  12688, 
  12449, 
  12040, 
  12162, 
  6594, 
  11728, 
  12055, 
  12117, 
  11786, 
  12796, 
  11845, 
  12664, 
  12516, 
  12406, 
  12362, 
  12013, 
  12717, 
  12575, 
  11976, 
  12548, 
  12702, 
  11723, 
  11943, 
  12320, 
  12114, 
  11918, 
  12273, 
  12427, 
  11736, 
  12024, 
  7240, 
  12342, 
  12599, 
  12026, 
  12779, 
  12141, 
  12165, 
  12255, 
  12542, 
  12412, 
  12674, 
  12711, 
  12836, 
  12709, 
  11809, 
  12773, 
  12710, 
  6642, 
  12767, 
  12075, 
  12596, 
  12448, 
  11840, 
  12557, 
  12561, 
  12704, 
  12316, 
  12416, 
  12733, 
  12597, 
  11868, 
  12610, 
  12425, 
  12534, 
  12523, 
  11755, 
  11726, 
  12592, 
  8900
];

//***** Just update the "basho" variable and you're all done. *****

let redips = {}, 
    rd     = REDIPS.drag;

function exportTableToCSV($table, filename) {
  var $rows = $table.find('tr:has(td),tr:has(th)'),

  // Temporary delimiter characters unlikely to be typed by keyboard
  // This is to avoid accidentally splitting the actual contents
  tmpColDelim = String.fromCharCode(11), // vertical tab character
  tmpRowDelim = String.fromCharCode(0), // null character

  // actual delimiter characters for CSV format
  colDelim = '","',
  rowDelim = '"\r\n"',

  // Grab text from table into CSV formatted string
  csv = '"' + $rows.map(function (i, row) {
    var $row = $(row), $cols = $row.find('td,th');

    return $cols.map(function (j, col) {
      var $col = $(col), text = $col.text(), html = $col.html(), arr = [];

      if ($col.prop("tagName") == "TH" || $col.hasClass("cur")) {
        $col.contents().each(function() {
          if (this.nodeType == 3) 
            arr.push(this.nodeValue);
          else if (this.tagName == "SPAN")
            arr.push(this.innerText);
        });
        if ($col.hasClass("cur") && $col.prop("tagName") != "TH") 
          text = arr.join('\n');
        else 
          text = arr.join(' ');
      }
      else if ($col.hasClass("b2") || $col.hasClass("rs2") || $col.hasClass("ch2")) {
        $col.children().each(function() {
          if (this.tagName != "BR")
            arr.push(this.innerText);
        });
        text = arr.join('\n');
      }
      else if ($col.hasClass("nte")) {
        var temp;
        $col.children("div").children().each(function() {
          temp = this.innerText.replace('\n', "");
          arr.push(temp);
        });
        text = arr.join('\n');
      }

      text = text.replace(/ /g, "");
      return text.replace(/"/g, '""'); // escape double quotes

    }).get().join(tmpColDelim);

  }).get().join(tmpRowDelim)
    .split(tmpRowDelim).join(rowDelim)
    .split(tmpColDelim).join(colDelim) + '"',


  // Data URI
  csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
  
  console.log(csv);
      
  if (window.navigator.msSaveBlob) { // IE 10+
    //alert('IE' + csv);
    window.navigator.msSaveOrOpenBlob(new Blob([csv], {type: "text/plain;charset=utf-8;"}), "csvname.csv")
  } 
  else {
    $(this).attr({ 'download': filename, 'href': csvData, 'target': '_blank' }); 
  }
}

window.onload = function() {

  var basho = "202307"; // The date of the basho just ended
  //****************************************************************************
    
    // This must be a hyperlink
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
    //document.getElementById("tableLiner").innerHTML = window.localStorage.getItem("banzuke");
    window.localStorage.removeItem("banzuke");
    //writeTableTitles(basho);
    //populateSlots();
  }
  if (window.localStorage.getItem("picks") !== null) {
    window.localStorage.removeItem("picks");
  }
  if (window.localStorage.getItem("savedBanzuke") !== null) {
    document.getElementById("tableLiner").innerHTML = window.localStorage.getItem("savedBanzuke");
  }
  else {
    writeTableTitles(basho);
    populateSlots();
  }
  if (window.localStorage.getItem("colCheck1") === null) {
    var columnCheckbox = document.querySelectorAll(".checkedByDefault");

    for (var i = 0; i < columnCheckbox.length; i++) 
      columnCheckbox[i].checked = true;
  }
  else {
    for (var i = 1; i < 8; i++) {
      var columnCheck = document.querySelectorAll(".columnCheckbox")[i-1];
      var check = JSON.parse(window.localStorage.getItem("colCheck" + String(i)));

      columnCheck.checked = check;
    }
  }

  var radioButton = document.getElementsByClassName("checkbox"), 
      radioLocal  = window.localStorage.getItem("radioButton"), 
      radioLocalDrop  = window.localStorage.getItem("radioDrop");

  if (radioLocal === null || radioLocal == "openRikishiPage")
    radioButton[0].checked = true;
  else if (radioLocal == "returnToOld") 
    radioButton[1].checked = true;
  else 
    radioButton[2].checked = true;

  if (radioLocalDrop === null || radioLocalDrop == "multiple")
    radioButton[3].checked = true;
  else if (radioLocalDrop == "shift")
    radioButton[4].checked = true;
  else 
    radioButton[5].checked = true;

  var noteCells = document.querySelectorAll(".nte");

  for (var i = 2; i < noteCells.length; i++) {
    let time = 0;
    noteCells[i].children[0].contentEditable = "true";
    noteCells[i].children[0].addEventListener("input", function() {
      // Reset the timer
      clearTimeout(time);

      time = setTimeout(function() {
        hideHoshitori();
        saveBanzuke();
        showSaving();
      }, 1000);
    });
  }

  var cards = document.querySelectorAll(".redips-drag");

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", showHoshitori.bind(this));
    cards[i].addEventListener("mouseout", function() {
      this.style.border = "";
    });
  }
    
  function writeTableTitles(endedBashoDate) {
    var bashoYear  = parseInt(endedBashoDate.substring(0, 4)), 
        bashoMonth = parseInt(endedBashoDate.slice(-2)), 
        tableTitle = document.getElementsByClassName("tableTitle");

    const bashoMonthLookup = {
            1: "Hatsu", 
            3: "Haru", 
            5: "Natsu", 
            7: "Nagoya", 
            9: "Aki",
            11: "Kyushu"
          }, 
          getBashoName = (bMonth) => bashoMonthLookup[bMonth];

    tableTitle[0].innerHTML = getBashoName(bashoMonth) + ' ' + bashoYear + 
                              tableTitle[0].innerHTML + " Result";
    if (bashoMonth > 9) {
      bashoYear++;
      bashoMonth = -1;
    }
    tableTitle[1].innerHTML = getBashoName(bashoMonth+2) + ' ' + bashoYear + 
                              " Makuuchi Guess - " + tableTitle[1].innerHTML;
  }

  function populateSlots() {
    var table1 = document.getElementById("banzuke1"), 
        cell = table1.querySelectorAll(".redips-only");

    for (var i = 0; i < cell.length; i++) {
      for (var j = 0; j < theSekitori.length; j++) {
        if (cell[i].classList.contains(theSekitori[j].split(' ')[0])) {
          var card     = document.createElement("div"), 
              rikiData = theSekitori[j].split(' '), 
              wins = rikiData[2].split('-')[0], 
              record = rikiData.length==4 ? rikiData[2]+' '+rikiData[3] : rikiData[2];

          if (rikiData.length > 3) 
            rikiData[2] += ' ' + rikiData[3];

          card.id = rikiData[0];
          card.className = "redips-drag se";
          if (rikiData[0].startsWith("Ms") || rikiData[0].startsWith("Sd") || rikiData[0].startsWith("Jd") || rikiData[0].startsWith("Jk")) 
            card.setAttribute("data-w", wins*2);
          else 
            card.setAttribute("data-w", wins);
          card.setAttribute("data-re", record);

          /*
          var holder = document.createElement('a');

          holder.innerHTML = rikiData[1];
          holder.href = "https://sumodb.sumogames.de/Rikishi.aspx?r=" + sekitoriID[j];
          holder.target = "_blank";
          if (rikiData[0].startsWith("Ms")) 
            holder.className = "msLink";
          //holder.setAttribute("onmouseover", 'showNextRank("' + rikiData[0] + '")');
          //holder.setAttribute("onmouseout", "hideNextRank()");
          holder.style.display = "none";
          */

          rikiData[1] = '<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=' + 
                        sekitoriID[j] + '" target="_blank">' + rikiData[1] + "</a>";
          rikiData[2] = '<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=' + 
                        sekitoriID[j] + "&b=" + basho + '" target="_blank">' + rikiData[2] + "</a>";

          card.innerHTML = rikiData[1];

          if (retiredRikishi.includes(theSekitori[j].split(' ')[1])) {
            //card.innerHTML = rikiData.join(' ');
            card.style.backgroundColor = "rgb(203, 203, 203)";
            card.className = "redips-drag intai";
            card.setAttribute("title", "Retired");
            card.removeAttribute("data-ko");
          }

          //card.setAttribute("onmouseout", "hideHoshitori()");

          //cell[i].appendChild(holder);
          cell[i].appendChild(card);

          var resCell, newRankCell;

          if (i % 2 == 0) 
            resCell = cell[i].previousSibling;
          else 
            resCell = cell[i].nextSibling;
          
          resCell.innerHTML = rikiData[2];

          //cell[i].style.borderInline = "1px solid #929292";
        }
      }
    }
  }
}

function showHoshitori() {
  /*
  if (event.target.classList.contains("redips-drag")) {
    var thisRikishi = theSekitori.find(text => text.startsWith(event.target.id));
    var rikishiNum = theSekitori.indexOf(thisRikishi);
  */
    event.target.style.border = "2px solid blue";
  /*
    if (document.getElementById("hoshiCheckbox").checked && hoshitori[rikishiNum].record.length > 0) {
      for (var i = 0; i < hoshitori[rikishiNum].record.length; i++) {
        var aite = theSekitori.find(text => text.split(' ')[1] == hoshitori[rikishiNum].aite[i]);
        
        if (aite) {
          var aiteCard = document.getElementById(aite.split(' ')[0]);
          var honwariBoutColor = "", ketteisenBoutColor = "";

          switch (hoshitori[rikishiNum].record[i]) {
            case 0: 
              honwariBoutColor = "2px solid red"; break;
            case 1: 
              honwariBoutColor = "2px solid black"; break;
            case 2:
              honwariBoutColor = "2px dashed red"; break;
            case 3: 
              honwariBoutColor = "2px dashed black"; break;
            case 4: 
              ketteisenBoutColor = "2px solid red"; break;
            default: 
              ketteisenBoutColor = "2px solid black";
          }
          if (honwariBoutColor != "") 
            aiteCard.style.border = honwariBoutColor;
          else 
            aiteCard.style.outline = ketteisenBoutColor;
        }
      }
    }
  }
  */
}

/*
function showNextRank(thisRank) {
  if (event.target.className == "hold") {
    var cards = document.querySelectorAll(".se");

    event.target.parentNode.style.boxShadow = "0 0 0 2px inset blue";
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].id == thisRank) {
        var cardCurrentRank = cards[i].parentNode.id;
        var table1Cell = document.querySelectorAll('.' + cardCurrentRank);
        table1Cell[0].style.boxShadow = "0 0 0 2px inset black";
        break;
      }
    }
  }
}

function hideNextRank() {
  var cell = document.getElementsByTagName("td");
    
  for (var j = 0; j < cell.length; j++) {
    if (cell[j].style.boxShadow != "rgba(0, 0, 0, 0.16) 0px 0px 0px 2px inset") {
      cell[j].style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 0px 0px 2px inset";
    }
  }
}
*/

function hideHoshitori() {
  event.target.style.border = "";
  /*
  if (document.getElementById("hoshiCheckbox").checked) {
    var rikishiCard = document.querySelectorAll(".redips-drag");
    
    for (var j = 0; j < rikishiCard.length; j++) {
      if (rikishiCard[j].style.border != "") {
        rikishiCard[j].style.border = "";
      }
      if (rikishiCard[j].style.outline != "") 
        rikishiCard[j].style.outline = "";
    }
  }
  */
}

function saveRadio(radioButton) {
  window.localStorage.setItem("radioButton", radioButton.value);
}

function saveDropRadio(button) {
  if (button.value == "disable") 
    rd.dropMode = "single";
  else 
    rd.dropMode = "multiple";

  window.localStorage.setItem("radioDrop", button.value);
}

function saveBanzuke() {
  var date = new Date();

  window.localStorage.setItem("savedBanzuke", document.getElementById("tableLiner").innerHTML);
  window.localStorage.setItem("savedBanzukeTime", date.toString());
}

// *****************************************************************************

rd.animation = "off";

redips.init = function () {
  rd.init();
  rd.hover.colorTd = "chartreuse";
  //rd.hover.borderTd = "2px solid blue";
  //rd.dropMode = "multiple";
  rd.only.divClass.se = "b2";

  rd.enableDrag(false, ".intai");

  var radioDrop = document.getElementsByName("dropMode");

  if (radioDrop[2].checked) 
    rd.dropMode = "single";
  else 
    rd.dropMode = "multiple";

  for (var i = 0; i < theSekitori.length; i++) {
    if (theSekitori[i] !== "") {
      var rank = theSekitori[i].split(' ')[0];
      rd.only.div[rank] = rank;
    }
  }
  rd.hover.colorTd = "royalblue";

  var intervalID;

  rd.event.changed = function(currentCell) {
    var tooltipCheckbox = document.getElementById("tooltipCheckbox"), 
        chTooltip = document.createElement("span"), 
        change = currentCell.classList.contains("b2") ? 
                 getChange(rd.obj.id, currentCell.dataset.r) : "", 
        prevTip = document.getElementById("chTooltip");

    if (!tooltipCheckbox.checked) {
      if (typeof(prevTip) != "undefined" && prevTip != null)
        prevTip.remove();
      chTooltip.id = "chTooltip";
      chTooltip.innerHTML = '(' + rd.obj.id + ' ' + rd.obj.dataset.re + ')';
      if (change != "") 
        chTooltip.innerHTML = "<b>" + change + "</b> " + chTooltip.innerHTML;
      rd.obj.prepend(chTooltip);
    }
    var tip = document.getElementById("tip");
    
    if (typeof(tip) != "undefined" && tip != null)
      tip.remove();

    var prevShifters = document.getElementsByClassName("shifter"), 
        prevShiftTo = document.getElementsByClassName("shiftTo");
      
    if (typeof(prevShiftTo[0]) != "undefined" && prevShiftTo[0] != null) 
      prevShiftTo[0].classList.remove("shiftTo");
    if (typeof(prevShifters[0]) != "undefined" && prevShifters[0] != null) {
      while (prevShifters.length) 
        prevShifters[0].classList.remove("shifter");
    }
    if (typeof(intervalID) != "undefined" && intervalID != null) 
      window.clearInterval(intervalID);

    if (currentCell.children.length > 0 && currentCell != rd.obj.parentNode && 
        window.localStorage.getItem("radioDrop") == "shift" && 
        currentCell.classList.contains("b2")) {
      var b2Cell = document.querySelectorAll(".b2"), 
          targetIndex = Array.prototype.slice.call(b2Cell).indexOf(currentCell), 
          originIndex = Array.prototype.slice.call(b2Cell).indexOf(rd.obj.parentNode);

      var tooltip = document.createElement("span");
      tooltip.id = "tip";
      if (originIndex > targetIndex || originIndex < 0) 
        tooltip.setAttribute("data-direction", "up");
      else if (originIndex < targetIndex) 
        tooltip.setAttribute("data-direction", "down");
      if (tooltipCheckbox.checked) 
        tooltip.style.display = "none";
      currentCell.prepend(tooltip);
      shiftDirect();
      const interval = setInterval(shiftDirect, 1000);
      intervalID = interval;
      function shiftDirect() {
        var prevShifters = document.getElementsByClassName("shifter"), 
            prevShiftTo = document.getElementsByClassName("shiftTo");
        
        if (typeof(prevShiftTo[0]) != "undefined" && prevShiftTo[0] != null) 
          prevShiftTo[0].classList.remove("shiftTo");
        if (typeof(prevShifters[0]) != "undefined" && prevShifters[0] != null) {
          while (prevShifters.length) 
            prevShifters[0].classList.remove("shifter");
        }
        if (tooltip.dataset.direction == "down") 
          tooltip.dataset.direction = "up";
        else 
          tooltip.dataset.direction = "down";
        if (tooltip.dataset.direction == "down") {
          tooltip.innerHTML = '⮟';
          for (var i = targetIndex; i < b2Cell.length; i++) {
            if (b2Cell[i].children.length == 0 || targetIndex == 57 || targetIndex == 85 || 
               (b2Cell[i].children.length == 1 && b2Cell[i] === rd.obj.parentNode) || 
               ((i == 57 || i == 85) && b2Cell[i].children.length > 0)) {
              //b2Cell[i].style.border = "none";
              b2Cell[i].classList.add("shiftTo");
              for (var j = i-1; j >= targetIndex; i--, j--) {
                for (var k = 0; k < b2Cell[j].children.length; k++) 
                  b2Cell[j].children[k].classList.add("shifter");
              }
              break;
            }
          }
        }
        else {
          tooltip.innerHTML = '⮝';
          for (var i = targetIndex; i >= 0; i--) {
            if (b2Cell[i].children.length == 0 || targetIndex == 0 || targetIndex == 58 || 
               (b2Cell[i].children.length == 1 && b2Cell[i] === rd.obj.parentNode) || 
               ((i == 0 || i == 58) && b2Cell[i].children.length > 0)) {
              //b2Cell[i].style.border = "none";
              b2Cell[i].classList.add("shiftTo");
              for (var j = i+1; j <= targetIndex; i++, j++) {
                for (var k = 0; k < b2Cell[j].children.length; k++) 
                  b2Cell[j].children[k].classList.add("shifter");
              }
              break;
            }
          }
        }
      }
    }
  }

  rd.event.dblClicked = function() {

    var radioButton = document.getElementsByTagName("input");
    var rikishiURL  = rd.obj.children[0].href;
    var thisRank    = rd.obj.id, 
        originCell  = document.querySelectorAll('.' + thisRank)[0], 
        currentCell = rd.findParent('TD', rd.obj), 
        currentChgCell;
    
    if (radioButton[0].checked) 
      window.open(rikishiURL, "_blank").focus();
    else if (radioButton[1].checked && currentCell.classList.contains("b2")) {
      rd.moveObject({
        obj: rd.obj, 
        target: originCell, 
        callback: function () {
          if (currentCell.dataset.r.charAt(0) == 'J') 
            document.getElementById("juRik").innerHTML--;
          else 
            document.getElementById("makRik").innerHTML--;
          originCell.children[0].remove();
          //b1Cell[i].style.removeProperty("border");
          hideHoshitori();
          updateInfoCells();
          saveBanzuke();
        }
      });
      showSaving();
    }

  };

  rd.event.clicked = function(currentCell) {
    //currentCell.style.boxShadow = "0 0 0 4px #0000003d inset";
    hideHoshitori();
  };

  rd.event.notMoved = function() {
    var currentCell = rd.findParent('TD', rd.obj);

    //currentCell.style.removeProperty("box-shadow");
    //rd.obj.removeChild(rd.obj.childNodes[1]);
  };

  rd.event.droppedBefore = function(targetCell) {

    var makuCounter = document.getElementById("makRik"), 
        juCounter   = document.getElementById("juRik"),
        msCounter   = document.getElementById("msRik"),
        thisCard    = rd.obj, 
        currentCell = rd.findParent('TD', thisCard), 
        currentChgCell, 
        dropRadio = document.getElementsByName("dropMode");
    var currentCellRank, targetCellRank, 
        curCellIsOfBanzuke2 = currentCell.classList.contains("b2"), 
        tarCellIsOfBanzuke2 = targetCell.classList.contains("b2");

    //currentCell.style.removeProperty("box-shadow");

    if (curCellIsOfBanzuke2) {
      currentCellRank = currentCell.dataset.r.charAt(0);
      if (currentCellRank == 'J') 
        juCounter.innerHTML--;
      else if (currentCell.dataset.r.charAt(1) == 's')
        msCounter.innerHTML--;
      else
        makuCounter.innerHTML--;
    }
    else if (tarCellIsOfBanzuke2) {
      var holder = document.createElement('a');

      holder.innerHTML = thisCard.childNodes[thisCard.childNodes.length-1].innerText;
      holder.href = thisCard.children[thisCard.childNodes.length-1].href;
      holder.target = "_blank";
      if (thisCard.id.startsWith("Ms")) 
        holder.className = "msLink";
      currentCell.appendChild(holder);
    }

    if (tarCellIsOfBanzuke2) {
      targetCellRank = targetCell.dataset.r.charAt(0);
      if (targetCellRank == 'J') 
        juCounter.innerHTML++;
      else if (targetCell.dataset.r.charAt(1) == 's')
        msCounter.innerHTML++;
      else
        makuCounter.innerHTML++;
    }
    else 
      targetCell.children[0].remove();

    if (dropRadio[1].checked && targetCell !== currentCell && 
        tarCellIsOfBanzuke2 && targetCell.children.length > 0) {
      var tooltip = document.getElementById("tip");
      
      if (typeof(tooltip) != "undefined" && tooltip != null) {
        var b2Cell = document.querySelectorAll(".b2"), 
            targetIndex = Array.prototype.slice.call(b2Cell).indexOf(targetCell);
        
        if (tooltip.dataset.direction == "down") {
          for (var i = targetIndex; i < b2Cell.length; i++) {
            if (b2Cell[i].children.length == 0 || targetIndex == 57 || targetIndex == 85 || 
               (b2Cell[i].children.length == 1 && b2Cell[i] === thisCard.parentNode) || 
               ((i == 57 || i == 85) && b2Cell[i].children.length > 0)) {
              //b2Cell[i].style.border = "none";
              for (var j = i-1; j >= targetIndex; i--, j--) 
                rd.relocate(b2Cell[j], b2Cell[i], "instant");
              redips.init();
              break;
            }
          }
        }
        else {
          for (var i = targetIndex; i >= 0; i--) {
            if (b2Cell[i].children.length == 0 || targetIndex == 0 || targetIndex == 58 || 
               (b2Cell[i].children.length == 1 && b2Cell[i] === thisCard.parentNode) || 
               ((i == 0 || i == 58) && b2Cell[i].children.length > 0)) {
              //b2Cell[i].style.border = "none";
              for (var j = i+1; j <= targetIndex; i++, j++) 
                rd.relocate(b2Cell[j], b2Cell[i], "instant");
              redips.init();
              break;
            }
          }
        }
        var prevShifters = document.getElementsByClassName("shifter"), 
            prevShiftTo = document.getElementsByClassName("shiftTo");
          
        if (typeof(prevShiftTo[0]) != "undefined" && prevShiftTo[0] != null) 
          prevShiftTo[0].classList.remove("shiftTo");
        if (typeof(prevShifters[0]) != "undefined" && prevShifters[0] != null) {
          while (prevShifters.length) 
            prevShifters[0].classList.remove("shifter");
        }
        if (typeof(intervalID) != "undefined" && intervalID != null) 
          window.clearInterval(intervalID);
        tooltip.remove();
      }
    }
    if (rd.obj.childNodes.length > 1) {
      for (var i = 0; i < rd.obj.childNodes.length; i++) 
        rd.obj.removeChild(rd.obj.childNodes[i]);
    }

  };
  rd.event.dropped = function(targetCell) {
    if (targetCell.style.backgroundColor != "") 
      targetCell.style.backgroundColor = "";
    updateInfoCells();
    showSaving();
  };

  rd.event.finish = function() {
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
    if (button.classList.contains("forB1")) 
      tableTitle[0].colSpan += 2;
    else {
      tableTitle[1].colSpan += 2;
      tableTitle[2].colSpan += 2;
    }
    for (var i = 0; i < colCell.length; i++) 
      colCell[i].classList.remove("hid");
  }
  else {
    if (button.classList.contains("forB1")) 
      tableTitle[0].colSpan -= 2;
    else {
      tableTitle[1].colSpan -= 2;
      tableTitle[2].colSpan -= 2;
    }
    for (var i = 0; i < colCell.length; i++) 
      colCell[i].classList.add("hid");
  }
  for (var i = 1; i < 8; i++) {
    window.localStorage.setItem("colCheck" + String(i), colCheck[i-1].checked);
  }
  saveBanzuke();
}

function updateInfoCells() {
  var b2Cell = document.querySelectorAll(".b2"), 
      b1Cell = document.getElementById("banzuke1").querySelectorAll(".redips-only"), 
      originCell, newRankCell, b1Chg, resultLink, resultCell, currRankCell, targetChgCell;

  for (var i = 0; i < b1Cell.length; i++) {
    if (b1Cell[i].children.length > 0 && b1Cell[i].children[0].tagName == "DIV") {
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
            thisChg, targetCellRank, chg;

        originCell = document.querySelectorAll('.' + thisRank)[0];
        newRankCell = originCell.nextSibling;
        if (thisRank.endsWith('w')) {
          newRankCell = newRankCell.nextSibling;
          resultLink = originCell.nextSibling.innerHTML;
        }
        else 
          resultLink = originCell.previousSibling.innerHTML;

        targetCellRank = b2Cell[i].dataset.r;

        thisChg = getChange(thisRank, targetCellRank);

        if (thisRank.startsWith("Ms")) {
          if (thisRank.endsWith("TD")) 
            thisRank = thisRank.slice(0, -2);
          thisChg = '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' + 
                     thisRank + "&form1_wins=" + rikishiWins/2 + 
                     "&form1_year=196007-now&form2_highlight=on&form2_rank=" + 
                     targetCellRank + '" target="_blank" title="Click to run a SumoDB query">' + thisChg + "</a>";
        }
        else {
          thisChg = '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' + 
                     thisRank + "&form1_wins=" + rikishiWins + 
                     "&form1_year=193905-194401,194905-now&form2_highlight=on&form2_rank=" + 
                     targetCellRank + '" target="_blank" title="Click to run a SumoDB query">' + thisChg + "</a>";
        }

        newRankCell.innerHTML = b2Cell[i].dataset.r;

        b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = thisChg;

        if (j == 0) {
          targetChgCell.innerHTML = thisChg;
          resultCell.innerHTML = resultLink;
          currRankCell.innerHTML = "<span>" + b2Cell[i].children[j].id + "</span>";
        }
        else {
          targetChgCell.innerHTML += "<br>" + thisChg;
          resultCell.innerHTML += "<br>" + resultLink;
          currRankCell.innerHTML += "<br><span>" + b2Cell[i].children[j].id + "</span>";
        }

        var rikishiBgColor = window.getComputedStyle(b2Cell[i].children[j]).getPropertyValue("background-color")

        currRankCell.children[j*2].style.background = rikishiBgColor;
        resultCell.children[j*2].style.background = rikishiBgColor;
      }
    }
    else {
      resultCell.innerHTML = "";
      currRankCell.innerHTML = "";
      targetChgCell.innerHTML = "";
    }
  }
}

redips.resetBanzuke = function() {
  if (confirm("Reset the banzuke?") == true) {
    var redipsCell  = document.querySelectorAll(".redips-only"), 
        b2Cell  = document.querySelectorAll(".b2"), 
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
        //b2Cell[i].style.border = "1px dashed dimgray";
        //chgCell[i].innerHTML = ' ';
        for (var j = b2Cell[i].children.length-1; j >= 0 ; j--) {
          for (var k = 0; k < 100; k++) {
            if (redipsCell[k].classList.contains(b2Cell[i].children[j].id)) {
              rd.moveObject({
                obj: b2Cell[i].children[j], 
                target: redipsCell[k]
              });
              redipsCell[k].children[0].style.display = "none";
              //b1Cell[k].style.removeProperty("border");
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
      if (c6[i].children[0].innerHTML != "") 
        c6[i].children[0].innerHTML = "";
    }
    location.reload();
  }
};

redips.arrange = function() {
  var rikishi = document.querySelectorAll(".se"), 
      juCounter = document.getElementById("juRik"), 
      makuCounter = document.getElementById("makRik");

  for (var i = 0; i < rikishi.length; i++) {
    var rikishiRank = rikishi[i].id;
    
    if (!rikishiRank.startsWith("Ms") && rikishiRank != rikishi[i].parentNode.dataset.r) {
      if (!rikishi[i].parentNode.classList.contains("b2")) {
        var holder = document.createElement('a');

        holder.innerHTML = rikishi[i].innerText;
        holder.href = rikishi[i].children[0].href;
        holder.target = "_blank";
        rikishi[i].parentNode.appendChild(holder);
      }
      else {
        if (rikishi[i].parentNode.dataset.r.startsWith('J')) 
          juCounter.innerHTML--;
        else 
          makuCounter.innerHTML--;
      }
      if (rikishiRank.startsWith('J')) 
        juCounter.innerHTML++;
      else 
        makuCounter.innerHTML++;
      rd.moveObject({
        obj: rikishi[i], 
        target: document.querySelector('[data-r="' + rikishiRank + '"]')
      });
    }
    //else break;
  }
  updateInfoCells();
};

function getChange(thisRank, targetCellRank) {
  var chg;

  if (thisRank == targetCellRank) 
    chg = '─';
  else {
    const change = [
      ["calc", "!!!", "!!!", "!!!", "!!!", "!!!", "!!!", "!!!"], 
      [" ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!", "!!!", "!!!"], 
      ["!!!", " ↑ ", "calc", " ↓ ", " ↓ ", "!!!", "!!!", "!!!"], 
      ["!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!"], 
      ["!!!", "!!!", " ↑ ", " ↑ ", "calc", " ↓ ", "!!!", "!!!"], 
      ["!!!", "!!!", "!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!"], 
      ["!!!", "!!!", "!!!", "!!!", "!!!", " ↑ ", "calc", " ↓ "], 
      ["!!!", "!!!", "!!!", "!!!", "!!!", "!!!", " ↑ ", "calc"]
    ]
    var r1, r2;

    switch (thisRank.charAt(0)) {
      case 'Y': r1 = 0; break;
      case 'O': r1 = 1; break;
      case 'S': 
        if (!thisRank.startsWith("Sd")) 
          r1 = 2;
        else 
          r1 = 7;
        break;
      case 'K': r1 = 3; break;
      case 'M': 
        if (!thisRank.startsWith("Ms")) 
          r1 = 4;
        else 
          r1 = 6;
        break;
      default:  r1 = 5;
    }
    switch (targetCellRank.charAt(0)) {
      case 'Y': r2 = 0; break;
      case 'O': r2 = 1; break;
      case 'S': 
        if (!targetCellRank.startsWith("Sd")) 
          r2 = 2;
        else 
          r2 = 7; 
        break;
      case 'K': r2 = 3; break;
      case 'M': 
        if (!targetCellRank.startsWith("Ms")) 
          r2 = 4;
        else 
          r2 = 6; 
        break;
      default:  r2 = 5;
    }

    if (change[r1][r2] != "calc") 
      chg = change[r1][r2];
    else {
      var thisRankNum   = (r1 == 6 || r1 == 7) ? parseInt(thisRank.slice(2, -1)) : parseInt(thisRank.slice(1, -1)), 
          targetRankNum = (r2 == 6 || r2 == 7) ? parseInt(targetCellRank.slice(2, -1)) : parseInt(targetCellRank.slice(1, -1));
      
      if (thisRank.slice(-1) == 'w')       thisRankNum += 0.5;
      if (targetCellRank.slice(-1) == 'w') targetRankNum += 0.5;

      chg = thisRankNum - targetRankNum;

      if (chg > 0) 
        chg = '+' + chg;
    }
  }

  return chg;
}

function showSaving() {
  var saving = document.getElementById("progressText");
  saving.innerHTML = "Saved!";
  setTimeout(function() {
    saving.innerHTML = "";
  }, 1000);
}

if (window.addEventListener)
  window.addEventListener("load", redips.init, false);
else if (window.attachEvent)
  window.attachEvent("onload", redips.init);
