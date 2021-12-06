//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBYaJnnQe4sr84G56C-9LKvjENbVE_0obc",
      authDomain: "kwitter-ffcd5.firebaseapp.com",
      databaseURL: "https://kwitter-ffcd5-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffcd5",
      storageBucket: "kwitter-ffcd5.appspot.com",
      messagingSenderId: "876695663818",
      appId: "1:876695663818:web:0a00944683faee8446b033"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name : user_name,
  message:msg,
  like:0       
});
document.getElementById("msg").value ="";

      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"
    }












//End code
      } });  }); }
getData();
