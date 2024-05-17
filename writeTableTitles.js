// writeTableTitles.js
export function writeTableTitles(endedBashoDate) {
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
    },
    getBashoName = (bMonth) => bashoMonthLookup[bMonth];

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
