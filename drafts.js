"use strict";

export function saveDraft(draftName) {
    const currentDate = new Date().toLocaleString();
    const savedBanzuke = window.localStorage.getItem("savedBanzuke");
    if (!savedBanzuke) return;

    const draft = {
        name: draftName,
        date: currentDate,
        mainContent: savedBanzuke,
    };

    let drafts = getDrafts();
    drafts.unshift(draft);
    window.localStorage.setItem("drafts", JSON.stringify(drafts));
    return draft;
}

export function getDrafts() {
    const drafts = window.localStorage.getItem("drafts");
    return drafts ? JSON.parse(drafts) : [];
}

export function loadDraft(draftDate) {
    const drafts = getDrafts();
    const draft = drafts.find(d => d.date === draftDate);
    if (draft) {
        document.getElementById("tableLiner").innerHTML = draft.mainContent;
        return true;
    }
    return false;
}

export function deleteDraft(draftDate) {
    let drafts = getDrafts();
    drafts = drafts.filter(d => d.date !== draftDate);
    window.localStorage.setItem("drafts", JSON.stringify(drafts));
}

export function displayDrafts(draftsTableId) {
    const draftsTable = document.getElementById(draftsTableId);
    const drafts = getDrafts();

    draftsTable.innerHTML = '';
    drafts.forEach(draft => {
        const draftRow = document.createElement("tr");
        draftRow.innerHTML = `
            <td title="${draft.name}" class="dname"><b>${draft.name}</b></td>
            <td>${draft.date}</td>
            <td>
                <button onclick="deleteDraft('${draft.date}')">❌</button>
                <button onclick="loadDraft('${draft.date}')">Load</button>
            </td>`;
        draftsTable.appendChild(draftRow);
    });
}

export function setupDraftEventHandlers() {
    document.getElementById("saveDraft").addEventListener("click", function() {
        document.getElementById("saveDialog").show();
    });

    document.getElementById("saveDraftButton").addEventListener("click", function() {
        const draftName = document.getElementById("draftName").value;
        if (draftName) {
            saveDraft(draftName);
            displayDrafts("draftsTable");
            document.getElementById("draftName").value = "";
        }
        document.getElementById("saveDialog").close();
    });

    document.getElementById("closeDialog").addEventListener("click", function() {
        document.getElementById("saveDialog").close();
    });

    document.getElementById("draftName").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("saveDraftButton").click();
        }
    });
}
