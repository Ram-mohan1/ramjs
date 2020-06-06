function opentab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function myFunction3() {
    document.body.style.backgroundColor = "white";
    document.getElementById("card").style.backgroundColor = "white";
    document.getElementById("card1").style.backgroundColor = "skyblue";
    document.getElementById("rightcolumn").style.backgroundColor = "white";
    document.getElementById("rightcolumn").style.color = "black"
    document.getElementById("leftcolumn").style.backgroundColor = "white";
    document.getElementById("leftcolumn").style.color = "black";
    document.getElementById("leftcolumn").style.fontSize = "bold";
    document.getElementById("footer").style.backgroundColor = "white";
    document.getElementById("footer").style.color = "black";
    document.getElementById("footer1").style.backgroundColor = "white";
    document.getElementById("footer1").style.color = "black";
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("header").style.color = "black";

}

function myFunction1() {
    document.body.style.backgroundColor = "black";
    document.getElementById("card").style.backgroundColor = "black";
    document.getElementById("card1").style.backgroundColor = "black";
    document.getElementById("rightcolumn").style.backgroundColor = "black";
    document.getElementById("rightcolumn").style.color = "white";
    document.getElementById("leftcolumn").style.backgroundColor = "black";
    document.getElementById("leftcolumn").style.color = "white";
    document.getElementById("footer").style.backgroundColor = "black";
    document.getElementById("footer1").style.backgroundColor = "black";
    document.getElementById("footer").style.color = "white";
    document.getElementById("footer1").style.color = "white";
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("header").style.color = "white";

}

function reload() {
    location.reload();
}


function myFunction(button) {
    var x = document.getElementById("myP");
    if (x.contentEditable == "false") {
        x.contentEditable = "true";
        button.innerHTML = "Disable Editing!";
    } else {
        x.contentEditable = "false";
        button.innerHTML = "Stop Editing and SAVE!!";
    }
}

function myFunction5(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var name = document.getElementById("name_row" + no);
    var age = document.getElementById("age_row" + no);

    var name_data = name.innerHTML;
    var age_data = age.innerHTML;

    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}

function save_row(no) {
    var name_val = document.getElementById("name_text" + no).value;
    var age_val = document.getElementById("age_text" + no).value;

    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("age_row" + no).innerHTML = age_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var new_name = document.getElementById("new_name").value;
    var new_age = document.getElementById("new_age").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
    document.getElementById("new_name").value = "";
    document.getElementById("new_age").value = "";
}

function alertFunction() {
    alert("Your Data Has been submitted!!");
}

function mynavbarFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function datacharge() {
    alert("Editing my Intro causes Data Charges!!");
}