var videoTab = document.getElementById("videoTab");
var notesTab = document.getElementById("notesTab");
var videoTabButton = document.getElementById("videoTabButton");
var notesTabButton = document.getElementById("notesTabButton");

var open = "v";

function openNotes() {
    if (open=="v") {
        open = "n";
        videoTab.style.display = "none";
        notesTab.style.display = "block";
        videoTabButton.className = "inactiveTab";
        notesTabButton.className = "activeTab";
    }
}

function openVideos() {
  if (open == "n") {
    open = "v";
    videoTab.style.display = "block";
    notesTab.style.display = "none";
    videoTabButton.className = "activeTab";
    notesTabButton.className = "inactiveTab";
  }
}