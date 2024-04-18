let movieArray = [];

function typeTicket() {
    let movie = document.getElementById("moviePicker").value;
    let amount = document.getElementById("amountField").value;
    let firstname = document.getElementById("firstNameField").value;
    let lastname = document.getElementById("lastNameField").value;
    let email = document.getElementById("emailField").value;
    let number = document.getElementById("numberField").value;

    let outPut = {
        "moviePicker": movie,
        "amountField": amount,
        "firstNameField": firstname,
        "lastNameField": lastname,
        "emailField": email,
        "numberField": number,
    }
    movieArray.push(outPut);
    console.log(outPut);
    out(outPut);
}

document.getElementById("moviePicker").value = " ";
document.getElementById("amountField").value = " ";
document.getElementById("firstNameField").value = " ";
document.getElementById("lastNameField").value = " ";
document.getElementById("emailField").value = " ";
document.getElementById("numberField").value = " ";


function out () {
    let ut = "The order: " + " ";
    ut +=
        "<table><tr><td>Movie: </td><td>Amount: </td><td>First name: </td><td>Last name: </td><td>Email: " +
        "</td><td>Number: </td></tr></table>";

    for (let a = 0; a < movieArray.length; a++) {
        ut +=
            +"<tr<td>"
            + movieArray[a].moviePicker + "</td><td>"
            + "</td><td>" + movieArray[a].amountField
            + "</td><td>" + movieArray[a].firstNameField + "</td><td>"
            + "</td><td>" + movieArray[a].lastNameField
            + "</td><td>" + movieArray[a].emailField + "</td><td>"
            + movieArray[a].numberField + "</td></tr>"
            + "</table>";
    }
    document.getElementById("orderField").innerHTML = ut;
    console.log(ut);
}

ut += "You ordered this type of tickets: ";
const typeArray = document.getElementById("clickButton");
for (let type of typeArray) {
    if (type.checked) {
        ut += type.value + " ";

    }


}
