let stat = false;

function like(id)
{
    if(document.getElementById(id).innerHTML === "♡") {
        document.getElementById(id).innerHTML = "❤️";
    } else {
        document.getElementById(id).innerHTML = "♡";
    }
}