
function calculator(event){
 event.preventDefault();


 console.log("make calculation");
 const firstNumber= document.getElementById("firstNumber");
 const ValueOfFirstNumber = firstNumber.value;
 console.log(ValueOfFirstNumber);

 const secondNumber= document.getElementById("secondNumber");
 const ValueOfSecondNumber = secondNumber.value;
 console.log(ValueOfSecondNumber);

 const operation = document.getElementById("operation");
 const selectedOperation = operation.value;
 console.log(selectedOperation)
 console.log(selectedOperation)
 let result =0;
 if(Number(selectedOperation) === 1){
  result = parseInt(ValueOfFirstNumber) + parseInt(ValueOfSecondNumber);

 }else if(Number(selectedOperation) === 2){
  result =  Number(ValueOfFirstNumber) * Number(ValueOfSecondNumber);

 }else if (Number(selectedOperation) ===3){
  result =  Number(ValueOfFirstNumber) - Number(ValueOfSecondNumber);

 }else if (Number(selectedOperation) ===4){
  result =  Number(ValueOfFirstNumber) / Number(ValueOfSecondNumber);

 }else if (Number(selectedOperation) ===5){
  result= parseInt(ValueOfFirstNumber) % parseInt(ValueOfSecondNumber);
 }

 const Name= document.getElementById("name");
 const ValueOfName = Name.value;
 console.log( ValueOfName);

 //Initiales
 const nameAndSurname =ValueOfName.split(" ");
 const initials = `${nameAndSurname[0][0]} ${nameAndSurname[1][0]}`;

 // nameAndSurname[0][0];
 // nameAndSurname[1][0];

 const op= document.getElementById("operation");
 // const value = op.options[op.selectedIndex].value
 const text =op.options[op.selectedIndex].text;
 console.log(text);

 console.log("================================")
 console.log(nameAndSurname);
 console.log("================================")

 //concatenation
 let nameAndResult = ValueOfName+" " + " "+result;
 nameAndResult = ` ${ValueOfName} ` + `${text}`+ " la  de 6 et de 5 est " + `${result}`;
 console.log("result " + result, typeof result);

 // nameAndResult = `${nameAndResult} ${result}`
 document.getElementById("result").innerHTML = nameAndResult;

 // length of a character chain
 const length = nameAndResult.length;
 console.log("length  " + length);

}
