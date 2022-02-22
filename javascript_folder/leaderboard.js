// init function will be performed as soon as the page finishes loading
window.onload = init;

function init(){
    // calling the populateTable function
    populateTable();
}

// function to populate the table by highest score
function populateTable() {
    // linking table DOM to javascript
    let table = document.getElementById('table');

    // users_data variable
    let users_data;

    //Loop through localStorage data
    for (let i=0; i<localStorage.length; i++) {
        // pushing objects into the user_data variable
        users_data = (JSON.parse(localStorage.getItem(localStorage.key(i))))
    
        // calling the sort_Scores function
        Sort_Scores(users_data);
    
        // appending data into the html table
        for (let j=0;j<5; j++) {
            table.innerHTML += '<li> <div class="col col-1" data-label="Rank">' +
            (j+1) + '</div> <div class="col col-2" data-label="First Name">' + 
            users_data[j].firstname + '</div> <div class="col col-3" data-label="Surname">'+
            users_data[j].surname + '</div> <div class="col col-4" data-label="Score">' +
            users_data[j].highscore + '</div> </li>';
        }

    }
}

// function to sort scores by highest score using the data stored into the users_data variable
function Sort_Scores(users_data) {
    // sorting users data by lowest scores by performing bubble sort
    // Outer for loop
    for (let a = 0; a < users_data.length - 1; a++) {
        // inner for loop
        for (let b = 0; b < (users_data.length - a - 1); b++) {
            if ( users_data[b].highscore > users_data[b + 1].highscore) {
                var temp_value =  users_data[b];
                users_data[b] =  users_data[b + 1];
                users_data[b + 1] = temp_value;
            }
        } 
    } 
    //Reverse array
    users_data.reverse();
}