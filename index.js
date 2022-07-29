const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

function pressed(){
    let a='', b='';
    for(let i=0; i<15; i++)
    {
        a+=characters[Math.floor(Math.random()*characters.length)];
        b+=characters[Math.floor(Math.random()*characters.length)];
    }
    document.getElementById('2').innerText=a;
    document.getElementById("3").innerText=b;
}

function CopyToClipboard(name) {
    let copyText = document.getElementById(name);

    //copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerText)
    .then(()=>{
        alert("Copied the text: " + copyText.innerText);
    });

    /* Alert the copied text */
}