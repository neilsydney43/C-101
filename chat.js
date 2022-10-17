// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyC2PKxQ_kb5NTOLtDWLNVoYYb364-rwuKY",
    authDomain: "kwitter-c08fc.firebaseapp.com",
    databaseURL: "https://kwitter-c08fc-default-rtdb.firebaseio.com",
    projectId: "kwitter-c08fc",
    storageBucket: "kwitter-c08fc.appspot.com",
    messagingSenderId: "460851232000",
    appId: "1:460851232000:web:f6845aa42c646c380747e5"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



