
let res = "";
const display = document.getElementsByClassName("display")[0]; 

const calculate = (event)=>{

    const val = event.target.innerText;
    
    if(val=="Reset"){
        display.innerText = "";
        res = "";
    }else{

        if(val=="="){
            try{
                display.innerText = eval(res)
                
            }catch{
                display.innerText = "SYNTAX ERROR";
            }
            
        }else{
            res= res + val;
            display.innerText = res;
        }
    }
}


const but = document.getElementsByClassName("but");

for(let i=0;i<but.length;i++){
    but[i].addEventListener('click',calculate);
}
