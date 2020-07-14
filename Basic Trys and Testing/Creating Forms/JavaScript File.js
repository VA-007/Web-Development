function check_name ()
{
  var input_name = document.getElementById('name').value;
  
  if(input_name.length==0)
  {
    document.getElementById('name_alert').innerHTML = "Mandatory Field!";
  }
  else if(input_name.length < 2)
  {
    document.getElementById('name_alert').innerHTML = "Too Short!";
  }
  else
  {
    document.getElementById('name_alert').innerHTML = "Your Name has been accepted";
  }
} 