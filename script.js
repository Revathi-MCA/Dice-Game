
function roll(){
    const input=document.getElementById("inputbox").value;
    const resdiv=document.getElementById("resdiv");
    const imgdiv=document.getElementById("imgdiv");
    const values=[];
    const images=[];
    
    for(let i=0;i<input;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="images/dice${value}.png">`);
    }
    resdiv.textContent=`Dice : ${values}`;
    imgdiv.innerHTML=images;
}