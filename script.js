let btn = document.querySelector("button");
let inputs = document.querySelectorAll("input");

let N=1;

window.addEventListener("load",function(){
    inputs[0].focus()
})

inputs.forEach(function(input,i){
    input.addEventListener("input",function(e){
        if(inputs[i].value.length == 1){
            inputs[i].disabled = true;
           if(i !== inputs.length-1){
               inputs[i+N].disabled = false
               inputs[i+N].focus();
           }else{
            btn.classList.add("active");
           } 
        }
    })
})