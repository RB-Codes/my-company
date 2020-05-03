
welcome();
topage();
//validateform();

function welcome() {
  alert("Welcome!")

}

function topage() {
  var txt;
  var con2 = confirm("Want to contiue?");
  if (con2) {
    txt = "You are welcome!";
    alert(txt);
  } else {
    txt = "Why you Cancel?!";
    alert(txt);
  }

}

//  function validateForm() {
//  var x = document.forms["myForm"]["fname"].value;
//  if (x == "") {
//  alert("Name must be filled out");
//  return false;
//  }
//  }

function klik() {
  var nomm = prompt("Give a number between 0 and 5")

  while (nomm <= 0 || nomm > 5) {
    nomm = prompt("Try again!")
  }

  for (var i =0; i < nomm; i++ ){
    var stik = document.createElement('img');
    stik.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/1/1a/USB_Drive.png');
  
   var container = document.getElementById('good');
   container.appendChild(stik);  
  }

 


}




