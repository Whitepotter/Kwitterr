
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBAg4bV_JYuYe1R5MF3XKvaFvjx7F-bYO0",
      authDomain: "kwitter-c2867.firebaseapp.com",
      databaseURL: "https://kwitter-c2867-default-rtdb.firebaseio.com",
      projectId: "kwitter-c2867",
      storageBucket: "kwitter-c2867.appspot.com",
      messagingSenderId: "996851489030",
      appId: "1:996851489030:web:56069b6bf9aac1a18c6687"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
   
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!!";

function add_Room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding user"
      });

      localStorage.setItem("room_name",room_name);
      window.location = "Kwitter_page.html";
}
function getData() { 
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirect(this.id)'> #"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "Kwitter_page.html";
}

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}