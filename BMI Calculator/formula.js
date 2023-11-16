window.onload=()=>{
    // console.log("helo")
    const button =document.querySelector('#btn')
    button.addEventListener('click',calculate)

 }

 function calculate()
 {
    const weight = document.getElementById('Weight').value;
    const height = document.getElementById('Height').value;
    const result= document.querySelector('.result')

    if(!height || height<=0 || !weight || weight<= 0)
   {
       result.innerText="Enter valid height or code"
       
   }
   else
   {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    result.innerText=`Your BMI is ${bmi.toFixed(2)}`

   }




 }