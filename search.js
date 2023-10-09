bodySearch = document.getElementById("search-result");

function searchTopic() {
  var search = document.getElementById("search-bar").value;
  bodySearch.innerHTML = "";
  for (var i = 0; i < videos.length; i++) {
    if (
      isWordPresent(videos[i][0], search) || isWordPresent(videos[i][1], search) 
    ) {
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

      bodySearch.appendChild(row);
    }
  }
  for (var i = 0; i < notes.length; i++) {
    if (
      isWordPresent(notes[i][0], search) ||
      isWordPresent(notes[i][1], search)
    ) {
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

      bodySearch.appendChild(row);
    }
  }
}

function isWordPresent(sentence, word) {
  var regex = new RegExp(word, "i");
  return regex.test(sentence);
}
