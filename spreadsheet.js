const sheetID = "1LRCIgTujEgamdGLq3abxxo8CH50qrvaBwAl6Xl0OCe8";
const sheetTitle = "Links";
const sheetVideosRange = "B4:D102";
const sheetNotesRange = "F4:H102";
const fullVideosURL = "https://docs.google.com/spreadsheets/d/" + sheetID + "/gviz/tq?sheet=" + sheetTitle + "&range=" + sheetVideosRange;
const fullNotesURL = "https://docs.google.com/spreadsheets/d/" + sheetID + "/gviz/tq?sheet=" + sheetTitle + "&range=" + sheetNotesRange;

var bodyVideos = document.getElementById("body-videos");
var bodyNotes = document.getElementById("body-notes");

var videos = [], notes = [];
window.onload = function () {
  
  fetch(fullVideosURL)
    .then((res) => res.text())
    .then((rep) => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      var i = 0;
      while (data.table.rows[i]) {
        videos.push([data.table.rows[i].c[0].v, data.table.rows[i].c[1].v, data.table.rows[i].c[2].v]);
        i++;
      }
      for (var i = 0; i < videos.length; i++) {
        var row = document.createElement("tr");
        var topicCell = document.createElement("td");
        var topicName = document.createElement("a");
        topicName.setAttribute("href", videos[i][2]);
        topicName.setAttribute("target", "_blank");
        topicName.textContent = videos[i][0];
        topicCell.appendChild(topicName);
        topicCell.setAttribute("data-label", "Topic");
        var subjectCell = document.createElement("td");
        subjectCell.textContent = videos[i][1];
        subjectCell.setAttribute("data-label", "Subject");

        row.appendChild(topicCell);
        row.appendChild(subjectCell);

        bodyVideos.appendChild(row);
      }
    });

  fetch(fullNotesURL)
    .then((res) => res.text())
    .then((rep) => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      var i = 0;
      while (data.table.rows[i]) {
        notes.push([data.table.rows[i].c[0].v, data.table.rows[i].c[1].v, data.table.rows[i].c[2].v]);
        i++;
      }
      for (var i = 0; i < notes.length; i++) {
        var row = document.createElement("tr");
        var topicCell = document.createElement("td");
        var topicName = document.createElement("a");
        topicName.setAttribute("href", notes[i][2]);
        topicName.setAttribute("target", "_blank");
        topicName.textContent = notes[i][0];
        topicCell.appendChild(topicName);
        topicCell.setAttribute("data-label", "Topic");
        var subjectCell = document.createElement("td");
        subjectCell.textContent = notes[i][1];
        subjectCell.setAttribute("data-label", "Subject");

        row.appendChild(topicCell);
        row.appendChild(subjectCell);

        bodyNotes.appendChild(row);
      }
    });

}
