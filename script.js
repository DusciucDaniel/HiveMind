let stat = false;

function like(id)
{
    const likeButton = document.getElementById("1");
    if(!stat) 
    {
        stat = true;
        likeButton.innerHTML = "❤️";
    }
    if(stat)
    {    
        stat = false;
        likeButton.innerHTML = "♡";
    }
}