
function validateForm() {
  var count=0; 
    let x = document.forms.myForm.name.value;
    if (x == ""|| x.length<4) {
      alert("Name must be filled out and should have a min of 4 characters");
      count++;
      return false;
    }
    let y = document.forms.myForm.email.value;
    let atposition=y.indexOf("@");  
    let dotposition=y.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=y.length){  
          alert("Please enter a valid e-mail address");      
          count++;
      return false;  
    }  
    let z = document.forms.myForm.subject.value;
    if (z == "") {
      alert("subject must be filled out");
      count++
      return false;
    }
    let a = document.forms.myForm.message.value;
    if (a == ""||a.length<10) {
      alert("message must be filled out and should have a min of 10 characters");
      count++
      return false;
    }
    if(count==0){
      alert("Thank you");
    }
 }