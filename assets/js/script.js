var todayDate = moment().format("dddd, MMMM Do");
$("#currentDay").append(todayDate).append(" (Sydney, Australia)");
var table = $('<table>');

// start calendar at 9:00AM AEST on Monday, Dec 6 2021
var originPoint = 1638709200000;

// days between cal creation and when it is opened
var futureDate = new Date(); // date when cal is viewed
var deltaMS = futureDate.getTime() - originPoint; // diff in mS from cal creation
var deltaD = Math.floor(deltaMS / (1000 * 3600 * 24)); // diff in days from cal creation
var beginPoint = originPoint + deltaD * (24 * 3600 * 1000); // midnight on date cal is viewed
var apptInterval = 3600000; // in hour in mS

// calendar according to acceptance criteria
var timeArray = [
    time1 = beginPoint+32400000, // 9AM
    time2 = time1+apptInterval, // 10AM
    time3 = time2+apptInterval, // 11AM
    time4 = time3+apptInterval, // 12PM
    time5 = time4+apptInterval, // 1PM
    time6 = time5+apptInterval, // 2PM
    time7 = time6+apptInterval, // 3PM
    time8 = time7+apptInterval, // 4PM
    time9 = time8+apptInterval, // 5PM
]

// create calendar
for(i=0; i<timeArray.length; i++) {
    var date = new Date(timeArray[i]);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    var row = $('<tr>').addClass('row')
        .append($('<td>').addClass('hour').text(formattedTime))
        .append($('<textarea>').addClass('textarea').attr('id', "c2r" + [i]).attr('name', "appt"))
        .append($('<button>').addClass('saveBtn').html('<i class="fa fa-calendar-check"></i>').attr('id', "c3r" + [i]));
    table.append(row);
};

$('.container').append(table).addClass('table');

if (Date.now() > time2) {
    $('#c2r0').addClass('past')
} else if (Date.now() < time1) {
    $('#c2r0').addClass('future')
} else {
    $('#c2r0').addClass('present')
};

if (Date.now() > time3) {
    $('#c2r1').addClass('past')
} else if (Date.now() < time2) {
    $('#c2r1').addClass('future')
} else {
    $('#c2r1').addClass('present')
};

if (Date.now() > time4) {
    $('#c2r2').addClass('past')
} else if (Date.now() < time3) {
    $('#c2r2').addClass('future')
} else {
    $('#c2r2').addClass('present')
};

if (Date.now() > time5) {
    $('#c2r3').addClass('past')
} else if (Date.now() < time4) {
    $('#c2r3').addClass('future')
} else {
    $('#c2r3').addClass('present')
};

if (Date.now() > time6) {
    $('#c2r4').addClass('past')
} else if (Date.now() < time5) {
    $('#c2r4').addClass('future')
} else {
    $('#c2r4').addClass('present')
};

if (Date.now() > time7) {
    $('#c2r5').addClass('past')
} else if (Date.now() < time6) {
    $('#c2r5').addClass('future')
} else {
    $('#c2r5').addClass('present')
};

if (Date.now() > time8) {
    $('#c2r6').addClass('past')
} else if (Date.now() < time7) {
    $('#c2r6').addClass('future')
} else {
    $('#c2r6').addClass('present')
};

if (Date.now() > time9) {
    $('#c2r7').addClass('past')
} else if (Date.now() < time8) {
    $('#c2r7').addClass('future')
} else {
    $('#c2r7').addClass('present')
};

if (Date.now() > (time9 + apptInterval)) {
    $('#c2r8').addClass('past')
} else if (Date.now() < time9) {
    $('#c2r8').addClass('future')
} else {
    $('#c2r8').addClass('present')
};

var btn1 = $('#c3r0');
var btn2 = $('#c3r1');
var btn3 = $('#c3r2');
var btn4 = $('#c3r3');
var btn5 = $('#c3r4');
var btn6 = $('#c3r5');
var btn7 = $('#c3r6');
var btn8 = $('#c3r7');
var btn9 = $('#c3r8');

var task1 = $("#c2r0");
var task2 = $("#c2r1");
var task3 = $("#c2r2");
var task4 = $("#c2r3");
var task5 = $("#c2r4");
var task6 = $("#c2r5");
var task7 = $("#c2r6");
var task8 = $("#c2r7");
var task9 = $("#c2r8"); 

var appt1 = $(task1);
var appt2 = $(task2);
var appt3 = $(task3);
var appt4 = $(task4);
var appt5 = $(task5);
var appt6 = $(task6);
var appt7 = $(task7);
var appt8 = $(task8);
var appt9 = $(task9);

// event listener
$(btn1).click(function() {
    if ($(task1).val()) {
    task1.replaceWith(appt1).addClass('setAppt');
    }
});

$(btn2).click(function() {
    if ($(task2).val()) {
    task2.replaceWith(appt2).addClass('setAppt');
    }
});

$(btn3).click(function() {
    if ($(task3).val()) {
    task3.replaceWith(appt3).addClass('setAppt');
    }
});

$(btn4).click(function() {
    if ($(task4).val()) {
    task4.replaceWith(appt4).addClass('setAppt');
    }
});

$(btn5).click(function() {
    if ($(task5).val()) {
    task5.replaceWith(appt5).addClass('setAppt');
    }
});

$(btn6).click(function() {
    if ($(task6).val()) {
    task6.replaceWith(appt6).addClass('setAppt');
    }
});

$(btn7).click(function() {
    if ($(task7).val()) {
    task7.replaceWith(appt7).addClass('setAppt');
    }
});

$(btn8).click(function() {
    if ($(task8).val()) {
    task8.replaceWith(appt8).addClass('setAppt');
    }
});

$(btn9).click(function() {
    if ($(task9).val()) {
    task9.replaceWith(appt9).addClass('setAppt');
    }
});

var apptTasks = [];

// localStorage.setItem(apptTasks.JSON.stringify(apptTasks));
// localStorage.getItem(apptTasks);
