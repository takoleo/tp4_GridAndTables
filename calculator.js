
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

  let result =0;
  if(selectedOperation == 1){
      result = parseInt(ValueOfFirstNumber) + parseInt(ValueOfSecondNumber);
  }else if(selectedOperation == 2){
   result =  Number(ValueOfFirstNumber) * Number(ValueOfSecondNumber);
  }else if (selectedOperation==3){
   result =  Number(ValueOfFirstNumber) - Number(ValueOfSecondNumber);
  }else if (selectedOperation==4){
   result =  Number(ValueOfFirstNumber) / Number(ValueOfSecondNumber);
  }else if (selectedOperation==5){
   result= parseInt(ValueOfFirstNumber) % parseInt(ValueOfSecondNumber);
  }


  console.log(result, typeof result);
  document.getElementById("result").innerHTML = result;
 }
