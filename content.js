/* 
    GLOBAL VARIABLE
*/
var new_tab_url_1 = 'https://www.fiverr.com/seller_dashboard';
var new_tab_url_2 = 'https://www.fiverr.com/inbox';


/*
    =======================================
    Random second for refresh the exist tab
    =======================================
*/
function refresh_me() {
    let time_from = 10; // min seconde
    let time_to = 50; // max second

    let rfrsh_sec = 1000 * Math.floor(Math.random() * time_to) + 1000 * time_from; // 1000 nano second multiple with number and give second

    // console.log(`I'm refreshing you in ${rfrsh_sec / 1000} seconds`);

    setTimeout(function () {
        location.reload();
    }, rfrsh_sec);
}


/*
    =======================================
    Create new tab and close new tab
    =======================================
*/
function new_tab_1(new_tab_url_1){
    // window.open(new_tab_url_1, "_blank");
    // open(new_tab_url_1, '_self').close(); // Open new tab with url and close current tab
    window.location.href = new_tab_url_1;
}

function new_tab_2(new_tab_url_2){
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
var do_action = Math.floor(Math.random() * 5) + 1;

if (do_action == 1) {
    refresh_me();
}
else if (do_action == 2) {
    new_tab_1(new_tab_url_1);
}
else if (do_action == 3) {
    refresh_me();
}
else if (do_action == 4) {
    new_tab_2(new_tab_url_2);
}
else if (do_action == 5) {
    refresh_me();
}