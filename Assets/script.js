
$(function () {

  var saveBtn = $(".saveBtn")
  saveBtn.on('click', saveRow)


  
  var hour = dayjs().format('H')
  console.log(hour)

  
  var date = dayjs().format('dddd, MMMM DD');
  console.log(date);
 
  var currentDay = $("#currentDay");
  currentDay.text(date);
  for (var i = 9; i < 18; i++) {
    var elem = $("#hour-" + i + " textarea");
    var savedText = localStorage.getItem("hour-" + i);
    elem.val(savedText);

    if (i == hour) {
      $("#hour-" + i).addClass("present");
    } else if (i < hour) {
      $("#hour-" + i).addClass("past");
    } else if (i > hour) {
      $("#hour-" + i).addClass("future");
    }

  }

});

function saveRow(event) {
  var savedText = $(event.currentTarget).parent().children("textarea").val();
  var name = $(event.currentTarget).parent().attr('id');
  
  localStorage.setItem(name, savedText)
} 

