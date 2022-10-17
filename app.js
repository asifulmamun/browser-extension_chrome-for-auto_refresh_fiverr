// Set the value to form
chrome.storage.sync.get([
    // 'tBoxUrlOne',
    // 'tBoxUrlTwo',
    'activated_time'
], (data) => {

    // set to local storage in chrome for variable
    // localStorage.setItem('rurlone', data.tBoxUrlOne);
    // localStorage.setItem('rurltwo', data.tBoxUrlTwo);
    localStorage.setItem('activated_time', data.activated_time);

});

// data
// var rurlone = localStorage.getItem('rurlone');
// var rurltwo = localStorage.getItem('rurltwo');
var activated_time = JSON.parse(localStorage.getItem('activated_time'));
var offline_url = '//asifulmamun.github.io/data/visit/fiverr-extension.html'; // sleeping time url when offline
let time_from = 10; // min minute
let time_to = 15; // max minute

// console.log('rurlone: ' + rurlone);
// console.log('rurltwo: ' + rurltwo);
// console.log('activated_time: ' + activated_time);


/* 
    ==============================================
    Get 24hrs from +0 UTC to your time by function
    ==============================================
*/
function calcTime(city, offset) {

    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000 * offset));

    // return time as a string
    // return "The local time for city"+ city +" is "+ nd.toLocaleString();
    return nd.toLocaleString();
}
const time_for_action = new Date(calcTime('Dhaka', '+6')).getHours(); // get the time 24hrs UTC
// console.log('The local time is now 24hrs = ' + time_for_action);


/*
    =======================================
    Random second for refresh the exist tab
    =======================================
*/
function refresh_me(time_from, time_to) {

    let rfrsh_sec = 1000 * 60 * Math.floor(Math.random() * eval(time_to - time_from + 1) + time_from);

    console.log(`I'm refreshing you in ${Math.floor(
        eval(((rfrsh_sec / 1000) / 60))
    )
        } min`);

    setTimeout(function () {

        location.reload();

    }, rfrsh_sec);
}



/* 
    ==================================
    The trigger with Random Number
    Random number with random action for do operation
    ==================================
*/

function trigger_refrsh_redrct() {

    var do_action = Math.floor(Math.random() * 5) + 1;

    if (do_action == 1) {

        refresh_me(time_from, time_to);

    }
    else if (do_action == 2) {

        refresh_me(time_from, time_to);
        // new_tab_1(new_tab_url_1);

    }
    else if (do_action == 3) {

        refresh_me(time_from, time_to);

    }
    else if (do_action == 4) {

        refresh_me(time_from, time_to);
        // new_tab_2(new_tab_url_2);

    }
    else if (do_action == 5) {

        refresh_me(time_from, time_to);

    }
}


/* 
==============================================
    FINAL EXECUTION TIME
==============================================
*/

if (activated_time.indexOf(time_for_action) > -1) {
    trigger_refrsh_redrct();
} else {
    console.log('Sleeping Time');
    window.location.href = offline_url;
}

