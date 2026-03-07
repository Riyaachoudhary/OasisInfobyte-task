const input=document.getElementById('inputBox');
const buttons=document.querySelectorAll('button');

let str='';
for(let i=0; i<buttons.length; i++){
    let buttonsElement= buttons?.[i];

    buttonsElement.addEventListener('click',(e)=>{
        
        let innerHTML=e.target.innerHTML;
        if(innerHTML==='AC'){
            str='';
            input.value=str;
        }

        else if(innerHTML==='DEL'){
            str=str.substring(0, str.length-1);
            input.value=str;
        }

        else if (innerHTML==='='){
            try{
            str=eval(str);
            input.value=str;
            }
             catch{
                input.value="Error";
                str="";
             }
        }

        else{
        str+=e.target.innerHTML;
        input.value=str;
        }
    });

}

