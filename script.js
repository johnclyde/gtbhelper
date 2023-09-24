
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
  "O1e Kirishima 9-6",
  "O1w Takakeisho 11-4 Y",
  "O2w Hoshoryu 8-7",
  "S1e Daieisho 10-5",
  "S1w Wakamotoharu 9-6",
  "S2e Kotonowaka 9-6",
  "K1e Nishikigi 5-10",
  "K1w Tobizaru 6-9",
  "M1e Hokutofuji 8-7",
  "M1w Meisei 7-8",
  "M2e Abi 9-6",
  "M2w Asanoyama 9-6",
  "M3e Shodai 8-7",
  "M3w Tamawashi 2-13",
  "M4e Takanosho 6-9",
  "M4w Ura 9-6",
  "M5e Gonoyama 9-6",
  "M5w Shonannoumi 7-8",
  "M6e Onosho 9-6",
  "M6w Ryuden 6-9",
  "M7e Takayasu 10-5",
  "M7w Oho 5-10",
  "M8e Kotoeko 6-9",
  "M8w Hiradoumi 6-9",
  "M9e Midorifuji 10-5",
  "M9w Hakuoho 0-0-15",
  "M10e Kinbozan 9-6",
  "M10w Endo 9-6",
  "M11e Mitakeumi 9-6",
  "M11w Hokuseiho 10-5",
  "M12e Takarafuji 7-8",
  "M12w Sadanoumi 8-7",
  "M13e Myogiryu 10-5",
  "M13w Nishikifuji 5-10",
  "M14e Aoiyama 5-10",
  "M14w Kotoshoho 5-10",
  "M15e Atamifuji 11-4 DK",
  "M15w Chiyoshoma 3-12",
  "M16e Kagayaki 5-10",
  "M16w Tsurugisho 8-7",
  "M17e Daishoho 3-12",
  "J1e Roga 8-7",
  "J1w Tamashoho 4-11",
  "J2e Kitanowaka 8-7",
  "J2w Daiamami 7-8",
  "J3e Tomokaze 11-4",
  "J3w Mitoryu 7-8",
  "J4e Oshoma 8-7",
  "J4w Tohakuryu 10-5",
  "J5e Churanoumi 10-5",
  "J5w Bushozan 9-6",
  "J6e Shimazuumi 9-6",
  "J6w Azumaryu 3-12",
  "J7e Wakatakakage 0-0-15",
  "J7w Ichiyamamoto 13-2 Y",
  "J8e Shishi 9-6",
  "J8w Chiyosakae 4-11",
  "J9e Takakento 6-9",
  "J9w Akua 6-9",
  "J10e Chiyomaru 8-7",
  "J10w Hakuyozan 4-11",
  "J11e Shiden 6-9",
  "J11w Tokihayate 8-7",
  "J12e Shimanoumi 7-8",
  "J12w Takahashi 8-7",
  "J13e Kiho 4-8-3",
  "J13w Asakoryu 7-8",
  "J14e Onosato 12-3",
  "J14w Tenshoho 8-7",
  "Ms1e Tsukahara 1-6",
  "Ms1w Yuma 4-3",
  "Ms2e Hidenoumi 5-2",
  "Ms2w Tsushimanada 3-4",
  "Ms3e Kaisho 2-5",
  "Ms3w Hitoshi 6-1 Y",
  "Ms4e Chiyonoumi 3-4",
  "Ms4w Kamito 2-5",
  "Ms5e Fujiseiun 0-0-7",
  "Ms5w Kiryuko 3-4",
  "Ms6e Takerufuji 5-2",
  "Ms6w Akiseyama 0-0-7",
  "Ms7e Nabatame 2-4-1",
  "Ms7w Tochimusashi 4-3",
  "Ms8e Terutsuyoshi 2-5",
  "Ms8w Fukai 4-3",
  "Ms9e Kototebakari 4-3",
  "Ms9w Hatsuyama 3-4",
  "Ms10e Kotokuzan 3-4",
  "Ms10w Kazekeno 3-4",
  "Ms11e Hayatefuji 0-0-7",
  "Ms11w Oshoumi 5-2",
  "Ms12e Tochikamiyama 4-3",
  "Ms12w Ryusei 1-6",
  "Ms13e Asagyokusei 4-3",
  "Ms13w Wakatakamoto 2-5",
  "Ms14e Oyamatoumi 2-5",
  "Ms14w Mineyaiba 3-4",
  "Ms15e Ryuo 0-0-7",
  "Ms15w Mudoho 4-3"
];

/* Add here the shikona of retired sekitori, who will not appear in the 
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = ["Akiseyama"];

/* Enable "No Rank Colouring" and "One Column" options and then open the 
 * browser's inspector (F12). Find the table and copy & paste the <tbody> node. 
 * The rikishi ID is located right after "Rikishi.aspx?r=". Turn the IDs into an 
 * array (add the empty spots as 0). This array should have the same length as 
 * theSekitori array.
 */
var sekitoriID = [
  11927,
  12231,
  12191,
  12451,
  11985,
  11980,
  12270,
  6596,
  12203,
  12239,
  11946,
  12094,
  12291,
  12130,
  5944,
  11855,
  12226,
  12688,
  12162,
  12043,
  6594,
  6480,
  12453,
  7153,
  12314,
  12352,
  12796,
  12721,
  12055,
  12210,
  12646,
  11728,
  2879,
  11784,
  12351,
  11786,
  12449,
  12664,
  11785,
  11845,
  12113,
  12040,
  12516,
  11976,
  12548,
  12273,
  12427,
  12406,
  12717,
  12575,
  12320,
  12117,
  12013,
  11723,
  12370,
  12362,
  12599,
  11736,
  12114,
  11918,
  7240,
  11943,
  12141,
  12542,
  12024,
  12773,
  12779,
  12710,
  12836,
  12709,
  12448,
  12165,
  12026,
  12342,
  12075,
  12704,
  12255,
  12416,
  12702,
  12711,
  12780,
  8900,
  12597,
  12674,
  11868,
  12610,
  12729,
  12732,
  11809,
  12767,
  12596,
  12634,
  12531,
  2892,
  12285,
  11814,
  12236,
  12557,
  11988,
  12593
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

  var basho = "202309"; // The date of the basho just ended

  /*
  var CLIENT_ID = "527214845927-p6ofscooll9ettfc8vpb4f5dqbhome4h.apps.googleusercontent.com";
  var API_KEY = "AIzaSyBiIfRASPUPjYmDLggGBQKCw63h-5B073o";
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
  // https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.appfolder https://www.googleapis.com/auth/drive.install
  var SCOPES = "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.resource";
  var signinButton = document.getElementById("signinButton");
  var signoutButton = document.getElementById("signoutButton");
  var saveToDriveButton = document.getElementById("saveToDrive");
  var loadSaveButton = document.getElementById("loadSave");
  var messageLine = document.getElementById("messageLine");
  var progressText = document.getElementById("progressText");
  let tokenClient;
  let gapiInited = false;
  let gisInited = false;

  signinButton.style.display = "none";
  signoutButton.style.display = "none";
  saveToDriveButton.style.display = "none";
  loadSaveButton.style.display = "none";

  gapiLoaded();
  gisLoaded();

  function gapiLoaded() {
    gapi.load("client", initializeGapiClient);
  }

  async function initializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS
    });
    gapiInited = true;
    maybeEnableButtons();
  }

  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES, 
      prompt: "", 
      callback: ""
    });
    gisInited = true;
    maybeEnableButtons();
  }

  function maybeEnableButtons() {
    if (gapiInited && gisInited) {
      signinButton.style.display = "inline-block";
      messageLine.innerHTML = "Save or load your banzuke via Google Drive";
      progressText.innerHTML = "";
    }
  }

  signinButton.onclick = () => handleAuthClick()
  function handleAuthClick() {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) 
        throw (resp);
      signinButton.style.display = "none";
      signoutButton.style.display = "inline-block";
      saveToDriveButton.style.display = "inline-block";
      loadSaveButton.style.display = "inline-block";
      messageLine.innerHTML = "Please wait...";
      checkFolder("GTB Helper Save (do not modify)");
    };

    if (gapi.client.getToken() === null) 
      tokenClient.requestAccessToken({ prompt: "consent" });
    else 
      tokenClient.requestAccessToken({ prompt: "" });
  }

  signoutButton.onclick = () => handleSignoutClick()
  function handleSignoutClick() {
    const token = gapi.client.getToken();

    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken("");
      signinButton.style.display = "inline-block";
      signoutButton.style.display = "none";
      saveToDriveButton.style.display = "none";
      loadSaveButton.style.display = "none";
      messageLine.innerHTML = "Save or load your banzuke via Google Drive";
      progressText.innerHTML = "";
    }
  }

  function checkFolder(folderName) {
    gapi.client.drive.files.list({
      'q': "name = '" + folderName + "'"
    }).then(function (response) {
      var files = response.result.files;

      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];

          window.localStorage.setItem("backupFolderId", file.id);
          //console.log("Folder available");
          showSave();
        }
      }
      else {
        createFolder("GTB Helper Save (do not modify)");
        messageLine.innerHTML = "No save";
        loadSaveButton.disabled = true;
      }
    });
  }

  function createFolder(folderName) {
    var access_token = gapi.auth.getToken().access_token;
    var request = gapi.client.request({
      "path": "drive/v2/files",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json", 
        "Authorization": "Bearer " + access_token
      }, 
      "body": {
        "title": folderName, 
        "mimeType": "application/vnd.google-apps.folder"
      }
    });
    request.execute(function (response) {
      window.localStorage.setItem("backupFolderId", response.id);
    })
  }

  function showSave() {
    var saveId = "";

    gapi.client.drive.files.list({
      'q': "name = 'gtb_helper_save.txt' and parents in '" + 
           window.localStorage.getItem("backupFolderId") + "'"
    }).then(function (response) {
      var files = response.result.files;

      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var saveId = files[i].id;

          gapi.client.drive.files.get({
            "fileId": saveId, 
            "fields": "modifiedTime"
          }).then(function (res) {
            var modifiedTime = moment(res.result.modifiedTime, 
              "YYYY-MM-DDThh:mm:ss.SSSZ").format("dddd, MMMM Do YYYY, h:mm:ss a");

            messageLine.setAttribute("data-saveId", saveId);
            messageLine.innerHTML = "From " + modifiedTime;
            loadSaveButton.disabled = false;
          });
        }
      }
      else {
        loadSaveButton.disabled = true;
        messageLine.innerHTML = "No save";
      }
    })
  }

  function uploadSave() {
    const blob = new Blob([window.localStorage.getItem("picks")], { type: "plain/text" });
    const parentFolder = window.localStorage.getItem("backupFolderId");
    var metadata = {
      name: "gtb_helper_save.txt", 
      mimeType: "plain/text", 
      parents: [parentFolder]
    };
    var formData = new FormData();

    formData.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
    formData.append("file", blob);

    fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      method: "POST", 
      headers: new Headers({ "Authorization": "Bearer " + gapi.auth.getToken().access_token }), 
      body: formData
    }).then(function (response) {
      if (response.ok) {
        progressText.innerHTML = "Saved to Drive!";
        showSave();
        setTimeout(function() {
          progressText.innerHTML = "";
        }, 1000);
      }
      else {
        console.error(response);
        progressText.innerHTML = "Access token expired. Please sign out and try again";
      }
      //return response.json();
    }).catch(function(err) {});
  }

  function updateSave() {
    var saveId = messageLine.getAttribute("data-saveId");
    var url = "https://www.googleapis.com/upload/drive/v3/files/" + saveId + "?uploadType=media";
    
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        Authorization: "Bearer " + gapi.auth.getToken().access_token,
        "Content-type": "plain/text; charset=UTF-8"
      }), 
      body: window.localStorage.getItem("picks")
    }).then(function (response) {
      if (response.ok) {
        progressText.innerHTML = "Saved to Drive!";
        showSave();
        setTimeout(function() {
          progressText.innerHTML = "";
        }, 1000);
      }
      else {
        console.error(response);
        progressText.innerHTML = "Access token expired. Please sign out and try again";
      }
    }).catch(function(err) {});
  }

  function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  saveToDriveButton.addEventListener("click", function() {
    if (window.localStorage.getItem("picks") !== null) {
      progressText.innerHTML = "Please wait...";

      if (messageLine.innerHTML == "No save") 
        uploadSave();
      else 
        updateSave();
    }
  });

  loadSaveButton.addEventListener("click", function() {
    var saveId = messageLine.getAttribute("data-saveId");

    progressText.innerHTML = "Please wait...";

    gapi.client.drive.files.get({
      fileId: saveId, 
      alt: "media"
    }).then(function (res) {
      var banzukeHtml = b64_to_utf8(btoa(res.body));

      document.getElementById("tableLiner").innerHTML = banzukeHtml;
      window.localStorage.setItem("picks", banzukeHtml);
      redips.init();
      progressText.innerHTML = "";
    }).catch(function (err) {
      console.error(err);
      progressText.innerHTML = "Access token expired. Please sign out and try again";
    });
  });

  //****************************************************************************
    
    // This must be a hyperlink
  $("#exportToCsv1").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke1"), "banzuke1.csv"]);
  });
  $("#exportToCsv2").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke2"), "banzuke2.csv"]);
  });
  */


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
    var saveDate = Date.parse(window.localStorage.getItem("savedBanzukeTime")), 
        expireDate = new Date(Date.UTC(2023, 8, 24, 14));

    if (saveDate < expireDate) 
      window.localStorage.removeItem("savedBanzuke");
    else 
      document.getElementById("tableLiner").innerHTML = window.localStorage.getItem("savedBanzuke");
  }
  if (window.localStorage.getItem("savedBanzuke") === null) {
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
        unhighlight();
        saveBanzuke();
        showSaving();
      }, 1000);
    });
  }

  var cards = document.querySelectorAll(".redips-drag");

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", highlightRikishi.bind(this));
    cards[i].addEventListener("mouseout", unhighlight.bind(this));
  }

  var checkbox = document.getElementById("ChangeTheme"); //get the checkbox to a variable

  //check storage if dark mode was on or off
  if (localStorage.getItem("mode") == "dark") {
    darkmode(); //if dark mode was on, run this funtion
  } else {
    nodark(); //else run this funtion
  }

  checkbox.addEventListener("change", function() {
    //check if the checkbox is checked or not
    if (checkbox.checked) {
      darkmode(); //if the checkbox is checked, run this funtion
    } else {
      nodark(); //else run this funtion
    }
    updateInfoCells();
  });

  function darkmode() {
    document.body.classList.add("darkm"); //add a class to the body tag
    checkbox.checked = true; //set checkbox to be checked state
    localStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
  }
  
  function nodark() {
    document.body.classList.remove("darkm"); //remove added class from body tag
    checkbox.checked = false; //set checkbox to be unchecked state
    localStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
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
          if (rikiData[0].startsWith("Ms")) 
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

          //card.setAttribute("onmouseout", "unhighlight()");

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

function highlightRikishi() {

  // I commented out the code which showed the hoshitori

  /*
  if (event.target.classList.contains("redips-drag")) {
    var thisRikishi = theSekitori.find(text => text.startsWith(event.target.id));
    var rikishiNum = theSekitori.indexOf(thisRikishi);
  */
  if (event.target.classList.contains("redips-drag")) 
    event.target.classList.add("hoverRikishi");
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

function unhighlight() {

  // I commented out the code which hid the hoshitori

  var rikishiBlue = document.getElementsByClassName("hoverRikishi");

  if (typeof(rikishiBlue[0]) != "undefined" && rikishiBlue[0] != null) {
    while (rikishiBlue.length) 
      rikishiBlue[0].classList.remove("hoverRikishi");
  } 

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
          unhighlight();
          updateInfoCells();
          saveBanzuke();
        }
      });
      showSaving();
    }

  };

  rd.event.clicked = function(currentCell) {
    //currentCell.style.boxShadow = "0 0 0 4px #0000003d inset";
    unhighlight();
  };

  rd.event.notMoved = function() {
    var currentCell = rd.findParent('TD', rd.obj);

    //currentCell.style.removeProperty("box-shadow");
    //rd.obj.removeChild(rd.obj.childNodes[1]);
  };

  rd.event.droppedBefore = function(targetCell) {

    var makuCounter = document.getElementById("makRik"), 
        juCounter   = document.getElementById("juRik"), 
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
    unhighlight();
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

/*
var hoshitori = [], 
    rikishiTr = document.getElementsByTagName("tr");

for (var i = 1; i < rikishiTr.length; i++) {
  var recordArr = [], 
    aiteArr = [], 
    hyper = rikishiTr[i].getElementsByTagName('a');

  for (var j = 1; j < hyper.length; j++) {
    aiteArr.push(hyper[j].title.split(' ')[2]);
    if (hyper[j].children[0].getAttribute("src") == "img/w.gif") {
      if (hyper[j].title.split(' ')[3] == "fusen") 
        recordArr.push(3);
      else 
        recordArr.push(1);
    }
    else {
      if (hyper[j].title.split(' ')[3] == "fusen") 
        recordArr.push(2);
      else 
        recordArr.push(0);
    }
  }
  var rikishiObj = {
    record: recordArr, 
    aite: aiteArr
  }
  hoshitori.push(rikishiObj);
}

var tori = document.getElementsByClassName("rb_torikumi"), recordArr = [], aiteArr = [], record;
for (var i = 0; i < tori[0].children[0].children.length; i++) {
  record = tori[0].children[0].children[i].children[1].children[0].src.split('_')[1];
  switch (record) {
    case "kuro.gif":
      record = 0; break;
    case "shiro.gif":
      record = 1; break;
    case "fusenpai.gif":
      record = 2; break;
    case "fusensho.gif":
      record = 3; break;
  }
  recordArr.push(record);
  aiteArr.push(tori[0].children[0].children[i].children[3].children[0].innerHTML.split(' ')[1]);
}
var rikishiObj = {
  record: recordArr, 
  aite: aiteArr
}
console.log(rikishiObj);
*/
