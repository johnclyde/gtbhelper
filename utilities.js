// utilities.js

"use strict";

// Export table to CSV
function exportTableToCSV($table, filename) {
    var $rows = $table.find("tr:has(td),tr:has(th)"),
        tmpColDelim = String.fromCharCode(11),
        tmpRowDelim = String.fromCharCode(0),
        colDelim = '","',
        rowDelim = '"\r\n"',
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
                            return text.replace(/"/g, '""');
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
        csvData = "data:application/csv;charset=utf-8," + encodeURIComponent(csv);

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveOrOpenBlob(
            new Blob([csv], { type: "text/plain;charset=utf-8;" }),
            filename,
        );
    } else {
        $("<a></a>")
            .attr({ download: filename, href: csvData, target: "_blank" })
            .appendTo("body")
            .get(0)
            .click()
            .remove();
    }
}

// Dark mode toggle
function darkmode() {
    document.body.classList.add("darkm");
    localStorage.setItem("mode", "dark");
}

function nodark() {
    document.body.classList.remove("darkm");
    localStorage.setItem("mode", "light");
}

function checkDarkMode(checkbox) {
    if (localStorage.getItem("mode") == "dark") {
        darkmode();
        checkbox.checked = true;
    } else {
        nodark();
        checkbox.checked = false;
    }
}

function getFromLocalStorage(key) {
    return window.localStorage.getItem(key);
}

function removeFromLocalStorage(key) {
    window.localStorage.removeItem(key);
}

// Public API
export { exportTableToCSV, darkmode, nodark, checkDarkMode, getFromLocalStorage, removeFromLocalStorage };
