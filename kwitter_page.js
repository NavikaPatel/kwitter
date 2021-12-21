const firebaseConfig = {
      apiKey: "AIzaSyAAlz3OGW4fpscLvnnzXKruiKy-1n_bSpc",
      authDomain: "kwitter-47b42.firebaseapp.com",
      databaseURL: "https://kwitter-47b42-default-rtdb.firebaseio.com",
      projectId: "kwitter-47b42",
      storageBucket: "kwitter-47b42.appspot.com",
      messagingSenderId: "86463158109",
      appId: "1:86463158109:web:af37084cb7a9206c287ab4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}