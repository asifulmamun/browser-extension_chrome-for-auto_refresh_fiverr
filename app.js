// Set the value to form
chrome.storage.sync.get([
    'tBoxUrlOne',
    'tBoxUrlTwo',
    'activated_time'
], (data) => {

    // set to local storage in chrome for variable
    localStorage.setItem('rurlone', data.tBoxUrlOne);
    localStorage.setItem('rurltwo', data.tBoxUrlTwo);
    localStorage.setItem('activated_time', data.activated_time);

});

// data
var rurlone = localStorage.getItem('rurlone');
var rurltwo = localStorage.getItem('rurltwo');
var activated_time = JSON.parse(localStorage.getItem('activated_time'));

console.log('rurlone: ' + rurlone);
console.log('rurltwo: ' + rurltwo);
console.log('activated_time: ' + activated_time);



/* 
    GLOBAL VARIABLE
*/

var new_tab_url_1 = 'https://www.fiverr.com/seller_dashboard';
var new_tab_url_2 = 'https://www.fiverr.com/inbox';
var offline_url = 'http://localhost/fiverr-extension.html';

var new_tab_url_1 = 'http://127.0.0.1';
var new_tab_url_2 = 'http://127.0.0.1';

let time_from = 300; // min seconde for refresh
let time_to = 1200; // max second for refresh


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
console.log('The local time is now 24hrs = ' + time_for_action);


/*
    =======================================
    Random second for refresh the exist tab
    =======================================
*/
function refresh_me(time_from, time_to) {

    let rfrsh_sec = 1000 * Math.floor(Math.random() * time_to) + 1000 * time_from; // 1000 nano second multiple with number and give second

    console.log(`I'm refreshing you in ${Math.floor(
        eval((rfrsh_sec / 1000) / 60)
    )
        } min`);
    setTimeout(function () {

        location.reload();

    }, rfrsh_sec);
}



/*
    =======================================
    Create new tab and close new tab
    =======================================
*/
function new_tab_1(new_tab_url_1) {

    // window.open(new_tab_url_1, "_blank");
    // open(new_tab_url_1, '_self').close(); // Open new tab with url and close current tab
    window.location.href = new_tab_url_1;
}

function new_tab_2(new_tab_url_2) {

    // window.open(new_tab_url_2, "_blank");
    // open(new_tab_url_2, '_self').close(); // Open new tab with url and close current tab
    window.location.href = new_tab_url_2;

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

        new_tab_1(new_tab_url_1);

    }
    else if (do_action == 3) {

        refresh_me(time_from, time_to);

    }
    else if (do_action == 4) {

        new_tab_2(new_tab_url_2);

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

if(activated_time.indexOf(time_for_action) > -1){
    trigger_refrsh_redrct();
}else{
    console.log('Sleeping Time');
    window.location.href = offline_url;
}


