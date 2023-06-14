async function ShowIteam(){
    try{let temp=[]
        const url = await fetch("https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane")
        const jsonData= await url.json()
        const Box= document.getElementById("outLineBox")
        jsonData.forEach(element=> {element.country.forEach(open=>{
       const wordnode=document.createElement("div")
        wordnode.setAttribute("class","inner-box")
        wordnode.innerHTML=`      <!-- BOxOutLine -->
        <div class="ibBox" style=" width:80%;max-height: 100%;border-radius: 10px;background:linear-gradient(to left,#a680ff,#dd80e3);
        box-shadow: 0 5px 8px 5px rgb(107, 107, 107);">
        <div class="Header" style=" display: flex;justify-content: center;border-bottom:1px solid gray;font: bold;font-size:2vw;border-radius: 3%;"><h5>Country Info</h5></div>
        <div class="card-body" style="diplay:block;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
            <div class="inner-text" id="inner-text" styel="font-size:1vw;">Country ID  :${ open.country_id}</div>
            <div class="inner-text" id="inner-text" styel="font-size:1vw;">Country Name:</div>
            <div class="inner-text" id="inner-text" styel="font-size:1vw;">Probability :${ open.probability}</div>
            <div class="inner-text" id="inner-text" styel="font-size:1vw;">Economic Po :</div>
        </div>
    </div> `
    temp.push(wordnode) })
    }); Box.append(... temp)
    }
    catch{
        console.log("Show item Error",error)
    }
}  
document.getElementById('firstone').addEventListener('keyup',Besttwo)
async function Besttwo(){
    
    var b=document.querySelectorAll(".ibBox")
    for(i=0;i<b.length;i++){
    document.getElementById('inner-text').value;
    if(b[i].innerHTML.includes(0.139) ){
    b[i].style.display='block';
    }else{
        b[i].style.display='none';
    }
    }   
}

document.getElementById('firstone').addEventListener('keyup',Bestsec)
async function Bestsec(){
    
    var b=document.querySelectorAll(".ibBox")
    for(i=0;i<b.length;i++){
    document.getElementById('inner-text').value;
    if(b[i].innerHTML.includes(0.121) ){
    b[i].style.display='block';
    }else{
        b[i].style.display='none';
    }
    }   
}

document.getElementById('inp').addEventListener('keyup',keyupfun)

function keyupfun(){
    var a=document.querySelectorAll(".ibBox")
    for(i=0;1<a.length;i++){
    var val=document.getElementById('inp').value.toLowerCase();
    if(a[i].innerHTML.toLocaleLowerCase().indexOf(val) != -1){
    a[i].style.display='block';
    }else{
        a[i].style.display='none';
    }
    }
}

ShowIteam()