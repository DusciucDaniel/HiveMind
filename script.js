let stat = false;

function like(id)
{
    const likeButton = document.getElementById(id);
    if(!stat) stat = true;
    if(stat) stat = false;
}