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
  for (i = 0; i < 2; i++) {
    list += "<li><a onclick=loadSelectedNote(" + i + ")>" + currentNotebook.notes[i].title + "</a></li>";
  }
  return list;
}

function loadSelectedNote(id) {
  $("#note-area").val(notebook.notes[id].text);
  $("#btnSave").click(function() {
      var noteText = $("#note-area").val();
      notebook.notes[id].text = noteText;
  });
}

$("#notes-list").html(getListOfNotes(notebook));


