let screen=document.getElementById('abc')
buttons= document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button text is',buttonText);
        if(buttonText=='=')
        {
            screen.value=eval(screenValue);
        }
        else if(buttonText=='CLEAR')
        {
            screen.value="";
            screenValue=screen.value;
        }
        else{
            screenValue +=buttonText;
            console.log(screenValue);
            screen.value=screenValue;
        }
    })
}