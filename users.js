
//fonction normale
function handleResponse(response){
    return response.json();
}

//fonction fléché
 const handleData= (data)=>{
     console.log(data);
     let tableLines;
    for (let index =0; index<data.length; index++){
        const user = data[index];
        const tableLine = `
               <tr>
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                    <td>${user.email}</td>
               </tr>
        `;
        tableLines =tableLines +tableLine;
       // console.log(user)
    }
    document.getElementById("users-body").innerHTML=tableLines;


}

function fetchUser(){
   fetch("https://jsonplaceholder.typicode.com/users")
       .then((response)=>handleResponse(response))
       .then((data)=> handleData(data));
    }


// two ways to write a function






// function fetchUser(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response)=>handleResponse(response))
//         .then(function (data){
//             console.log(data);
//             return data;
//         });
//
// }

// function fetchUser(){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(function(response){
//             //json -> javascript objet annotation
//             return response.json();
//         }).then(function (data){
//         console.log(data);
//         return data;
//     })
//
// }
