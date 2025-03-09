let stat = false;

function like(id)
{
    const likeButton = document.getElementById(id);
    if(!stat) 
    {
        stat = true;
        likeButton.innerText = "❤️";
    }
    if(stat)
    {    
        stat = false;
        likeButton.innerText = "♡";
    }
}