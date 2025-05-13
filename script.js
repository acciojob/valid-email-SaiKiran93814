function validEmail(str) {
  //your JS code here.
	 const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
  
  // Test the string against the regex and return true if valid, otherwise false
  return regex.test(str);
}

// Do not change the code below.
//const str = prompt("Enter an email address.");
alert(validEmail(str));
