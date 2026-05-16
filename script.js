


const labels = document.querySelectorAll('.form-controls label')

for(const label of labels){
  
  label.innerHTML= label.innerText.split("").map((letter, index) =>
  `<span style="transition-delay:${index*100}ms">${letter}</span>`).join("")
};

const inputField = document.querySelector('input[type="password"]'), myBar =
document.querySelector('.myBar'), message= document.querySelector('.message');

inputField.addEventListener('input', (e)=>{
  const input = e.target.value
  
  myBar.style.width =`${input.length *10}%`
  
  if(input.length<5){
    myBar.style.backgroundColor= 'red'
    message.textContent= `password Strength: Weak`
  }else if(input.length >=5 && input.length<8){
    myBar.style.backgroundColor= 'orange'
    message.textContent= `password Strength: Medium`
  } else{
    myBar.style.backgroundColor= 'green'
    message.textContent= `password Strength: Strong`
  }
})