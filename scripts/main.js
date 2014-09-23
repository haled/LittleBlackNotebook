// sample data to use for testing the UI interactions
var notebook = {
  title: 'My Notes Thing',
  located: 'Unknown',
  notes: [
    {
      id: 0,
      title:  'Todo List',
      text:  'This is supposed to be a to-do list but I have not come close to implementing anything like that.',
      createDateTime:  '8/18/2014',
      modifyDateTime:  '8/18/2014'
    },
    {
      id: 1,
      title:  'Did this Work',
      text:  'If you see this message, stuff is working as expected.',
      createDateTime:  '8/18/2014',
      modifyDateTime:  '8/18/2014'
    }
  ]
};

// end sample data


function getListOfNotes(currentNotebook) {
  var list = '';
  for (i = 0; i < currentNotebook.notes.length; i++) {
    list += "<li><a onclick=loadSelectedNote(" + i + ")>" + currentNotebook.notes[i].title + "</a></li>";
  }
  return list;
}

function createNewNote() {
  var note = {
    id: 3,
    title: "Untitled",
    text: "Type note here.",
    createDateTime: "9/21/2014",
    modifyDateTime: "9/21/2014"
  };

  notebook.notes[notebook.notes.length] = note;
  alert("length -> " + notebook.notes.length);
  $("#notes-list").html(getListOfNotes(notebook));

}

function loadSelectedNote(id) {
  $("#note-title").val(notebook.notes[id].title);
  $("#note-area").val(notebook.notes[id].text);
  $("#btnSave").click(function() {
      alert("saving index -> " + id);
      var noteText = $("#note-area").val();
      var noteTitle = $("#note-title").val();
      notebook.notes[id].text = noteText;
      notebook.notes[id].title = noteTitle;
      $("#notes-list").html(getListOfNotes(notebook));
  });
}

$("#notes-list").html(getListOfNotes(notebook));


