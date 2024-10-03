
//fonction normale
function handleResponse(response){
    return response.json();
}

//fonction fléché
     const handleData= (data)=>{
         console.log(data);

         let tableLines="";
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
        }
        document.getElementById("users-body").innerHTML=tableLines;
    }

    function fetchUser(){
        document.getElementById("grid").innerHTML="";
        document.getElementById("headers").innerHTML="";
        document.getElementById("users-body").innerHTML="";
        const head = `
                        <th>Nom</th>
                        <th>Phone</th>
                        <th>Email</th>
                    `
        document.getElementById("headers").innerHTML=head;
       fetch("https://jsonplaceholder.typicode.com/users")
           .then((response)=>handleResponse(response))
           .then((data)=> handleData(data));
        }

     //=================================GRID on Grid===================================//

    function  handleResponseGrille(response){
        return response.json();
    }

    const  handleDataGrille=(data)=>{
         let grills="";
        for (let i = 0; i < data.length; i++) {
            const userGrill = data[i];

            const grill =` 
              <div class="col-6">
                <div class="p-3 border bg-light rounded-2">
                              <p style="font-weight: bold ">${userGrill.name}</p>
                              <p >${userGrill.phone}</p>
                              <p >${userGrill.email}</p>
                </div>
             </div>           
                 `
           grills=grills+grill;
        }
        document.getElementById("grid").innerHTML=grills
        console.log(data)
    }

    function fetchUserGrille(){
        document.getElementById("grid").innerHTML="";
        document.getElementById("headers").innerHTML="";
        document.getElementById("users-body").innerHTML="";
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=>handleResponseGrille(response))
            .then((data)=>handleDataGrille(data));
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
