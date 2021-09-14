function signup(){
  var name=document.getElementById("name").value;
  var username=document.getElementById("username").value;
  var pass=document.getElementById("pass").value;
  firebase.auth().createUserWithEmailAndPassword(name, username, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
