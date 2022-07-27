
const container=document.querySelector(".container");
const cardbody=document.querySelector(".card-body");
const form=cardbody.querySelector(".form");
const inputtext=form.querySelector("#guessinNumber");
const btn=form.querySelector("#btn");
const cardba=document.querySelector(".cardb");
const resultmessage=cardba.querySelector(".resultText");
const remainingattempts=cardba.querySelector("#rem");

const lostwonmessage=document.querySelector(".wonlosmess");
const newm=document.createElement("p");



let totalwons=0;
let totallost=0;
let attempts=0;
let totalattempts=5;



form.addEventListener("submit", function(event){
    event.preventDefault();
      const atm=attempts++;
     logic(atm);
      if(attempts>5){
        inputtext.disabled=true;
        btn.disabled=true;
      }else{
        let guessnumber=Number(inputtext.value);

        checkresult(guessnumber);
        
        
       
         
      }


      guessnumber="";
});

function logic(v){
    
       if(v<5){remainingattempts.innerHTML=`Remains attempts: ${
        totalattempts-attempts  }`;
    } 
     
}

function checkresult(value){
    
    const rnum=randomNumber(5);
    
    if(value===rnum){
        resultmessage.innerHTML = ` you won ` ;
        totalwons++;
        

    }else{
        resultmessage.innerHTML = ` you lost.random number was=${rnum} ` ;
        totallost++;
    

}
          lostwonmessage.innerHTML = `won : ${totalwons} , lost : ${totallost} `;
          newm.innerHTML=`hi man won : ${totalwons}`;
          cardba.appendChild(newm);
}





function randomNumber(limit){
   return Math.floor(Math.random() * limit) + 1;
}