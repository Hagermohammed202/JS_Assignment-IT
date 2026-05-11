const mode=document.querySelector('div#model');
const openbtn=document.querySelector('button#open');
const overlay=document.querySelector('span#overLay');
const closebtn=document.querySelector('button#cancel')
openbtn.addEventListener('click',showModal);
function showModal()
{
model.style.display='block';
model.style.opacity=1;
openbtn.style.opacity=0;
}
function hideModal()
{
    model.style.display='none';
    model.style.opacity=0;
    openbtn.style.opacity=1;
}
closebtn.addEventListener('click',hideModal);
overlay.addEventListener('click',hideModal);

