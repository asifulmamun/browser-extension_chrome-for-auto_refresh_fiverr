/* 
    ==================================
        activate time in array
    ==================================
*/

var active_time = []; // global array changable
var activated_time = JSON.parse(localStorage.getItem('activated_time')); // get from local storage and convert to json to array
active_time = active_time.concat(activated_time); // array added to changable array
console.log(activated_time);  //activated time

// time slot button get value and set in array
function btn_time_clicked(want_push) {

    if (active_time.indexOf(want_push) == -1) {

        active_time.push(want_push); // if data no exist add data to array

        active_time.sort(function (a, b) { return a - b }); // sorting
        console.log(active_time); // printing

        document.getElementById(`btn_${want_push}`).style.background = '#27542c'; // set color
        document.getElementById(`btn_${want_push}`).style.color = '#fff'; // set color

    } else if (active_time.indexOf(want_push) !== -1) {

        active_time.splice(active_time.indexOf(want_push), 1); // remove data value if clicked and  exist, this value

        active_time.sort(function (a, b) { return a - b }); // sorting
        console.log(active_time); // printing

        document.getElementById(`btn_${want_push}`).style.background = '#11160f'; // set default color
        document.getElementById(`btn_${want_push}`).style.color = 'red'; // set default color
    }

    // localStorage.setItem('runtime', JSON.stringify(active_time));
    let activated_time = JSON.stringify(active_time);
    chrome.storage.sync.set({ activated_time }); // set to local storage this active time
    localStorage.setItem('activated_time', activated_time);

}


/* 
    =================================
    ACTIVATED TIME BUTTON DESIGN
    =================================
*/
    for(var i = 0; i <= active_time.length-1; i++){

        // console.log(activated_time[i]);

        document.getElementById(`btn_${activated_time[i]}`).style.background = '#27542c'; // set default color
        document.getElementById(`btn_${activated_time[i]}`).style.color = '#fff'; // set default color

    }


/* 
    ================================
    EVENT ACTIVATE HOUR'S 
    ================================
*/
document.getElementById('btn_1').addEventListener('click', function () {

    btn_time_clicked(1);
});
document.getElementById('btn_2').addEventListener('click', function () {

    btn_time_clicked(2);
});
document.getElementById('btn_3').addEventListener('click', function () {

    btn_time_clicked(3);
});
document.getElementById('btn_4').addEventListener('click', function () {

    btn_time_clicked(4);
});
document.getElementById('btn_5').addEventListener('click', function () {

    btn_time_clicked(5);
});
document.getElementById('btn_6').addEventListener('click', function () {

    btn_time_clicked(6);
});
document.getElementById('btn_7').addEventListener('click', function () {

    btn_time_clicked(7);
});
document.getElementById('btn_8').addEventListener('click', function () {

    btn_time_clicked(8);
});
document.getElementById('btn_9').addEventListener('click', function () {

    btn_time_clicked(9);
});
document.getElementById('btn_10').addEventListener('click', function () {

    btn_time_clicked(10);
});
document.getElementById('btn_11').addEventListener('click', function () {

    btn_time_clicked(11);
});
document.getElementById('btn_12').addEventListener('click', function () {

    btn_time_clicked(12);
});
document.getElementById('btn_13').addEventListener('click', function () {

    btn_time_clicked(13);
});
document.getElementById('btn_14').addEventListener('click', function () {

    btn_time_clicked(14);
});
document.getElementById('btn_15').addEventListener('click', function () {

    btn_time_clicked(15);
});
document.getElementById('btn_16').addEventListener('click', function () {

    btn_time_clicked(16);
});
document.getElementById('btn_17').addEventListener('click', function () {

    btn_time_clicked(17);
});
document.getElementById('btn_18').addEventListener('click', function () {

    btn_time_clicked(18);
});
document.getElementById('btn_19').addEventListener('click', function () {

    btn_time_clicked(19);
});
document.getElementById('btn_20').addEventListener('click', function () {

    btn_time_clicked(20);
});
document.getElementById('btn_21').addEventListener('click', function () {

    btn_time_clicked(21);
});
document.getElementById('btn_22').addEventListener('click', function () {

    btn_time_clicked(22);
});
document.getElementById('btn_23').addEventListener('click', function () {

    btn_time_clicked(23);
});
document.getElementById('btn_0').addEventListener('click', function () {

    btn_time_clicked(0);
});



/* 
    ================================
    Data store from popup form to chrome storage with manifest storage permission.
    It will work when click thu popup page form button for submmit.
    ===============================
*/

// document.getElementById('submit').addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     // store url
//     let tBoxUrlOne = document.getElementById('rurlone').value;
//     chrome.storage.sync.set({ tBoxUrlOne });
//     // console.log(tBoxUrlOne);

//     // store url
//     let tBoxUrlTwo = document.getElementById('rurltwo').value;
//     chrome.storage.sync.set({ tBoxUrlTwo });
//     // console.log(tBoxUrlTwo);

// });

// // Get the value to form
// chrome.storage.sync.get([
//     'tBoxUrlOne',
//     'tBoxUrlTwo'
// ], (tBoxData) => {

//     document.getElementById('rurlone').value = tBoxData.tBoxUrlOne;
//     document.getElementById('rurltwo').value = tBoxData.tBoxUrlTwo;

//     // console.log(tBoxData);

// });