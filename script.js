function like(id)
{
    console.log("sad");
    if(document.getElementById(id).innerHTML === "♡") {
        document.getElementById(id).innerHTML = "❤️";
    } else {
        document.getElementById(id).innerHTML = "♡";
    }
}