
  var print = function (msg)
{
    
  document.getElementById("output").innerHTML = "Length is " + msg + "(Including the space)";
}

document.getElementById("btn").onclick = function (event)
{  
  
  print(document.getElementById('str').value.split(" ").length);
  
}
  
