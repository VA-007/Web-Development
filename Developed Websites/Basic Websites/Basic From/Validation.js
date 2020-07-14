function check_name ()
{
  var input_name = document.getElementById('name').value;
  
  if(input_name.length==0)
  {
    document.getElementById('name_alert').innerHTML = "<span style='color: #f20000;'>Mandatory Field!</span>";
  }
  else if(input_name.length < 2)
  {
    document.getElementById('name_alert').innerHTML = "<span style='color: #a239ca'>Too Short!</span>";
  }
  else
  {
    document.getElementById('name_alert').innerHTML = "<span style='color: #30d13b;'>Your Name has been accepted</span>";
  }
}


function myFunction() 
{
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}