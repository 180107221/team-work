var n1,n2, action;
function calc(n){
  document.getElementById('ascreen').value+=n;

}

function answer(operand){
  switch answer(operand){
    case '+':
      n1 = document.getElementById('ascreen').value;
      action = '+';
      document.getElementById("ascreen").value="+";
      break;

    case '-':
      n1 = document.getElementById('ascreen').value;
      action = '-';
      document.getElementById("ascreen").value="-";
      break;

   case "=";
     n2 = document.getElementById("ascreen").value;
     if (action==="-")document.getElementById("ascreen").value=parseInt(n1) - parseInt(n2);
     if (action==="+")document.getElementById("ascreen").value=parseInt(n1) + parseInt(n2);
     break;
  }

}