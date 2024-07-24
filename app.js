 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth , onAuthStateChanged , createUserWithEmailAndPassword }  from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 
const firebaseConfig = {
  apiKey: "AIzaSyBmQRiy96aBUhyZEOMz1ZZJhaNLrjs-oag",
  authDomain: "sinup-1a61e.firebaseapp.com",
  projectId: "sinup-1a61e",
  storageBucket: "sinup-1a61e.appspot.com",
  messagingSenderId: "618847816827",
  appId: "1:618847816827:web:6dbc31c83c88a7483fa6de"
};

 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signup_email = document.querySelector('#signup_email');
const signup_password = document.querySelector('#signup_password');
const signup_btn = document.querySelector('#signup_btn');
const form1 = document.querySelector('#form1');


signup_btn.addEventListener('click',createuseraccount );
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is logged in")
    
    const uid = user.uid;
    // ...
  } else {
    
    console.log("user is not logged in")

  }
});
 
function createuseraccount(){
// console.log(signup_email.value);
// console.log(signup_password.value);

createUserWithEmailAndPassword(auth , signup_email.value , signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
    form1.reset(); // Reset the form
    signup_email.value = ''; // Clear email input
    signup_password.value = '';  
  })
 

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
 
    alert(errorMessage)
    // ..
  });

}