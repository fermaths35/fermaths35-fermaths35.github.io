function showIt() {
  document.getElementById("div1").style.visibility = "visible";
}


function showIt2() {
  document.getElementById("div2").style.visibility = "visible";
}
 // after 1 secs

function showIt3() {
  document.getElementById("div3").style.visibility = "visible";
}
 // after 1 secs

function showIt4() {
  document.getElementById("div4").style.visibility = "visible";
}
 // after 1 secs

function showIt5() {
  document.getElementById("div5").style.visibility = "visible";
}
 // after 1 secs


function masquer_div(id)
{
  if (document.getElementById(id).style.display == 'none')
  {
       document.getElementById(id).style.display = 'block';
  setTimeout("showIt()", 1000); // after 1 sec
  setTimeout("showIt2()", 2000);
  setTimeout("showIt3()", 3000);
  setTimeout("showIt4()", 4000);
  setTimeout("showIt5()", 5000);
  }
  else
  {
       document.getElementById(id).style.display = 'none';
	   
  }

}