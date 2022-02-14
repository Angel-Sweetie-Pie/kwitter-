
var firebaseConfig = {
  apiKey: "AIzaSyBebzuRKOgC6ZsjEm9XIvdKHHnvHfzvnkw",
  authDomain: "kwitter-app-cf90d.firebaseapp.com",
  databaseURL: "https://kwitter-app-cf90d-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-cf90d",
  storageBucket: "kwitter-app-cf90d.appspot.com",
  messagingSenderId: "486431081929",
  appId: "1:486431081929:web:12d04900686df155cbd418"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);



     user_name = localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
     
     function addRoom()
     {
       room_name = document.getElementById("room_name").value;
     
       firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
       });
     
         localStorage.setItem("room_name", room_name);
         
         window.location = "kwitter_page.html";
     }
     
     function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row;
         });
       });
     
     }
     
     getData();
     
     function redirectToRoomName(name)
     {
       console.log(name);
       localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
     }
     
     function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
         window.location = "index.html";
     }
     