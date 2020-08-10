



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDyqLMgL6gKcZYFLnt5ie8UWgRu5TAXUiI",
    authDomain: "form1-b6258.firebaseapp.com",
    databaseURL: "https://form1-b6258.firebaseio.com",
    projectId: "form1-b6258",
    storageBucket: "form1-b6258.appspot.com",
    messagingSenderId: "443194749867",
    appId: "1:443194749867:web:ce3af9c51a7367fd5e58ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	 const auth = firebase.auth();
	 //authenticate
  
  function signUp(){
	  
	  var email = document.getElementById("email");
	  var password = document.getElementById("password"); 
	  
	  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	  promise.catch(e => alert(e.message));
	  
	  alert("Signed Up");
	 
  }
  
  function signIn(){
	  
	  var email = document.getElementById("email");
	  var password = document.getElementById("password"); 
	  
	  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	  promise.catch(e => alert(e.message));
	   alert( "signed in");

	  
  }
  
  function signOut(){
	  
	  auth.signOut();
	  alert("Signed out")
	  
  }
  
  auth.onAuthStateChanged(function(user){
	  
	  if(user){
		  
		  var email =user.email;
		  alert("Active user " + email);
		  
	  }else{
		  
		  alert("no active user");
		  
	  }
	 
  
  });
  
  
  