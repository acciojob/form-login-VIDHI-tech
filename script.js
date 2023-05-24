function getFormvalue() {
    //Write your code here
	 var form = document.getElementById("form1");
  
  // Get the values of the first name and last name input fields
  var firstName = form.elements.fname.value;
  var lastName = form.elements.lname.value;
  
  // Display an alert with the first and last name
  alert( firstName + " " + lastName);
}
