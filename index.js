var btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    var set = '0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        let random = Math.floor(Math.random()*16);
        color += set.charAt(random);
    }
    document.getElementById("color").innerHTML = color;
    document.body.style.backgroundColor = color;
})