function check_name() 
{
  var input_name = document.getElementById('name').value;

  if (input_name.length == 0) 
  {
    document.getElementById('name_alert').innerHTML = "Mandatory Field!";
    document.getElementById('name_alert').style.color = "#f20000";
  }
  else if (input_name.length < 3) 
  {
    document.getElementById('name_alert').style.color = "#f20000";
    document.getElementById('name_alert').innerHTML = "Name too short";
  } 
  else
  {
    document.getElementById('name_alert').innerHTML = "Your Name has been accepted";
    document.getElementById('name_alert').style.color = "#30d13b";
  }
} 



function check_text() 
{
  var input_name = document.getElementById('whyR').value;

  if (input_name.length == 0) 
  {
    document.getElementById('text_alert').innerHTML = "Mandatory Field!";
    document.getElementById('text_alert').style.color = "#f20000";
  }
  else if (input_name.length < 10) 
  {
    document.getElementById('text_alert').style.color = "#f20000";
    document.getElementById('text_alert').innerHTML = "Too short! Atleast 10 words";
  } 
  else
  {
    document.getElementById('text_alert').innerHTML = "Your response has been recorded!";
    document.getElementById('text_alert').style.color = "#30d13b";
  }
}



// -------------Show Password Function------------
function myFunction() 
{
  var x = document.getElementById("password"); 
  if (x.type === "password") 
  { 
    x.type = "text"; 
  }
  else 
  { 
    x.type = "password"; 
  }
}


// -----------Slider Value Function-------
function show_value(x)
{
 document.getElementById("slider_value").innerHTML=x;
}