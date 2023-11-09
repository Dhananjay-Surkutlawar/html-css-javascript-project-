var isStatus = document.getElementById('str'); // Select the <h3> element with id "str"
var addFriend = document.getElementById('add'); // Select the "Add Friend" button

addFriend.addEventListener("click", function () {
    if (isStatus.textContent === "Stranger") {
        isStatus.textContent = "Friends";
    } else {
        isStatus.textContent = "Stranger";
    }
});
// function sum(arr) 
// {
//     for(let i=0;i<arr.length;i++){
//         let sum=0;
//         sum=sum+arr.isArray(arr.sum);

//     }
    
// }
// console.log()

var sum=0;
function sum(arr)
{
    for (let index = 0; index < array.length; index++) {
        
        if(Array.isArray(arr[i]))
        sum(arr[i])
        else
        {
            sum=sum+arr[i]
        }
        return sum
    }

}