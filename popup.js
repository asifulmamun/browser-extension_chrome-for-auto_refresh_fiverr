
/* 
    ==================================
        activate time in array
    ==================================
*/
// var active_time = []; // time slot


function btn_time_clicked(btn_val) {
    alert(btn_val);
    // let want_push = btn_val.value;
    // console.log(active_time.indexOf(want_push));
    // console.log(want_push);

    // if (active_time.indexOf(want_push) == -1) {
    //     active_time.push(want_push); // if data no exist add data to array

    //     btn_val.style.backgroundColor = 'green';
    //     console.log(active_time);

    // } else if (active_time.indexOf(want_push) !== -1) {
    //     active_time.splice(active_time.indexOf(want_push), want_push); // remove data value if clicked and  exist, this value

    //     btn_val.style.backgroundColor = 'inherit';
    //     console.log(active_time);
    // }

}

// document.getElementById('btn_1').addEventListener('click', function(){
//     btn_time_clicked('hi my dear');
// }); 

function myFunction() {
    alert('btn_val');
    // let want_push = btn_val.value;
    // console.log(active_time.indexOf(want_push));
    // console.log(want_push);

    // if (active_time.indexOf(want_push) == -1) {
    //     active_time.push(want_push); // if data no exist add data to array

    //     btn_val.style.backgroundColor = 'green';
    //     console.log(active_time);

    // } else if (active_time.indexOf(want_push) !== -1) {
    //     active_time.splice(active_time.indexOf(want_push), want_push); // remove data value if clicked and  exist, this value

    //     btn_val.style.backgroundColor = 'inherit';
    //     console.log(active_time);
    // }

}



/* 
    ================================
    Data store from popup form to chrome storage with manifest storage permission.
    It will work when click thu popup page form button for submmit.
    ===============================
*/

document.getElementById('submit').addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // store url
    let tBoxUrlOne = document.getElementById('rurlone').value;
    chrome.storage.sync.set({ tBoxUrlOne });
    // console.log(tBoxUrlOne);

    // store url
    let tBoxUrlTwo = document.getElementById('rurltwo').value;
    chrome.storage.sync.set({ tBoxUrlTwo });
    // console.log(tBoxUrlTwo);


    // store url
    // chrome.storage.sync.set({ active_time });
    // console.log(active_time);

});

// Set the value to form
chrome.storage.sync.get([
    'tBoxUrlOne',
    'tBoxUrlTwo'
], (tBoxData) => {

    document.getElementById('rurlone').value = tBoxData.tBoxUrlOne;
    document.getElementById('rurltwo').value = tBoxData.tBoxUrlTwo;

    // console.log(tBoxData);

});