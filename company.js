
function confirm() {
     var txt;
     if (confirm("Want to contiue?")) {
       txt = "You are welcome!";
     } else {
       txt = "Why you Cancel?!";
     }

   }

   function validateForm() {
     var x = document.forms["myForm"]["fname"].value;
     if (x == "") {
       alert("Name must be filled out");
       return false;
     }
   }

   function welcome(
        text = ("wlcome")
   )
