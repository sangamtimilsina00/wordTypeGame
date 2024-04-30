const words=["github","peaceful","loyal","lively","coding","extension"]
setInterval(addWord,2500);
let typeWord="";
let score=0;
let __typeWord=document.getElementById("__typeWord");
let __score=document.getElementById("__score");
function addWord(){
        let index=Math.floor(Math.random()*words.length);
        
        document.body.append(createSpan(words[index]));


}
function createSpan(word){
    const span=document.createElement("span");
    span.innerHTML=word;
    span.id=word;
    let r=Math.random() *window.innerWidth;
    span.style.position="absolute";
    span.style.padding="5px"
    span.style.top="70px";
    span.style.right=`${r}px`
    
   let i= setInterval(drop,50);
   span.idd=i;
    let position=70;
    function drop(){
        position++;
        span.style.top=`${position}px`
        if(position>window.innerHeight-80){
            span.remove();
            clearInterval(i);
            window.location.reload();
            
            

            alert(`Game Over. Your Score is : ${score} `)
            console.log(`game over by ${span.innerHTML}`);
        
        }
    }



    return span;
}

document.onkeyup= function(e){
    if(e.key==="Escape" || e.key==="Alt" || e.key==="CapsLock" || e.key==="Shift" || e.key==="Control")return;
    if(e.key==" " || e.key=="Enter"){
       let elem= document.getElementById(typeWord);
       if(elem){
        clearInterval(elem.idd);
           elem.remove();


           score++;
           __score.innerHTML=score;
        }
        typeWord="";
        __typeWord.innerHTML=typeWord;
    }
    else if(e.key=="Backspace"){
        typeWord=typeWord.substring(0,typeWord.length-1);
        __typeWord.innerHTML=typeWord;
    }
    else{
        typeWord+=e.key;
        __typeWord.innerHTML=typeWord;

    } 
    console.log("your score :",score);
    console.log("type word is :", typeWord);
   
    

};

