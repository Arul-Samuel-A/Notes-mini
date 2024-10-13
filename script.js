const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
let notesEl = document.getElementById("notes-el");
let savedItems = document.getElementById("saved-items");
let notesArray = JSON.parse(localStorage.getItem("notesArray")) || [];
let something = "";

function renderNotes() {
    something = "";
    for (let i = notesArray.length-1; i > -1 ; i--) {
        something += `<li>${notesArray[i]}</li>`;
    }
    savedItems.innerHTML = something; 
}



document.addEventListener("DOMContentLoaded", function () {
    renderNotes();
});

saveBtn.addEventListener("click", function () {
    if (notesEl.value) { 
        notesArray.push(notesEl.value);
        localStorage.setItem("notesArray", JSON.stringify(notesArray)); 
        renderNotes(); 
        notesEl.value = ""; 
    }
});

clearBtn.addEventListener("dblclick", function () {
    localStorage.clear(); 
    notesArray = []; 
    renderNotes();
});


