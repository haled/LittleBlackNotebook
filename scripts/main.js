// hold javascript code
var notebook = {
  title: 'My Notes Thing',
  located: 'Unknown',
  notes: [
    {
      title:  'Todo List',
      text:  'This is supposed to be a to-do list but I have not come close to implementing anything like that.',
      createDateTime:  '8/18/2014',
      modifyDateTime:  '8/18/2014'
    },
    {
      title:  'Did this Work',
      text:  'This is supposed to be a to-do list but I have not come close to implementing anything like that.',
      createDateTime:  '8/18/2014',
      modifyDateTime:  '8/18/2014'
    }
  ]
};



function getListOfNotes(currentNotebook) {
  var list = '';
  for (i = 0; i < 2; i++) {
    list += "<li>" + currentNotebook.notes[i].title + "</li>";
  }
  return list;
}

document.getElementById("notes-list").innerHTML = getListOfNotes(notebook);

