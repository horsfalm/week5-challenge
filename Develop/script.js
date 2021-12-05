var todayDate = moment().format("dddd, MMMM Do");
$("#currentDay").append(todayDate);

// var currentTime = moment().format("ha");

// var startOfCalendar = new Date(1638568800000);
var beginPoint = 1638655200000;
var appointmentInterval = 3600000;

var table = $('<table>');

var array = [
    appt1 = beginPoint,
    appt2 = appt1+appointmentInterval,
    appt3 = appt2+appointmentInterval,
    appt4 = appt3+appointmentInterval,
    appt5 = appt4+appointmentInterval,
    appt6 = appt5+appointmentInterval,
    appt7 = appt6+appointmentInterval,
    appt8 = appt7+appointmentInterval,
    appt9 = appt8+appointmentInterval,
]

for(i=0; i<array.length; i++) {
    // time slot
    var date = new Date(array[i]);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);

    var row = $('<tr>').addClass('row')
        .append($('<td>').addClass('hour').text(formattedTime))
        .append($('<td>').addClass('description').attr('id', "c2-r" + [i]))
        .append($('<td>').addClass('saveBtn').html('<i class="fa fa-calendar-check"></i>'));
    table.append(row);
};

$('.container').append(table).addClass('table');

if (Date.now() < date) {
    $('.description').addClass('past')
} else if (Date.now() > date) {
    $('.description').addClass('future')
} else {
    $('.description').addClass('present')
};

$('.description').on("click", function() {
    var text = $(this)
        .text()
        .trim();   
    var textInput = $("<textarea>")
        .addClass("description")
        .val(text);
    $(this).replaceWith(textInput);
})