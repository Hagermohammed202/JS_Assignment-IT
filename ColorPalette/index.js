let colorOne=document.querySelector('div.one');
let colorTwo=document.querySelector('div.two');
let colorthree=document.querySelector('div.three');
let colorfour=document.querySelector('div.four');
let colorfive=document.querySelector('div.five');
const btn=document.querySelector('button');
function copyColor(color)
{
    navigator.clipboard.writeText(color);
    alert("color copied");
}
function GenerateColor(item)
{
    let Hex='0123456789abcdef';
    let color="#";
    for(let i=0;i<6;++i)
    {
        let indx=Math.floor(Math.random()*16);
        color+=Hex[indx];
    }
    if(color=="#000000")
        GenerateColor(item);
    else
    {
        item.style.backgroundColor=color;
        item.innerHTML=color;
        item.onclick = () => {
        copyColor(color);
    }
}
}
function GeneratePalette()
{
    GenerateColor(colorOne);
    GenerateColor(colorTwo);
    GenerateColor(colorthree);
    GenerateColor(colorfour);
    GenerateColor(colorfive);
}
btn.addEventListener('click',GeneratePalette)