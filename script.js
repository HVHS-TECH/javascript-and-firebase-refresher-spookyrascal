var messageSpace = getElementbyId("welcomeMessage");
messageSpace.innerHTML = "You've connected to the JavaScript!";





<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCOOawgnK0_Y_k4z4UaHU-PJpWLyMY4PYA",
    authDomain: "carmenogrady---13comp.firebaseapp.com",
    projectId: "carmenogrady---13comp",
    storageBucket: "carmenogrady---13comp.firebasestorage.app",
    messagingSenderId: "407567845415",
    appId: "1:407567845415:web:a797271c6ea774a702e602",
    measurementId: "G-KQSLYWH8GW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
