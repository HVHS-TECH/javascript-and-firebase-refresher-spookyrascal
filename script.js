// ===== CONNECT JS =====
const messageSpace = document.getElementById("welcomeMessage");
const input = document.getElementById("textInput");
const changeBtn = document.getElementById("changeBtn");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");

messageSpace.textContent = "You've connected the JavaScript! 🎉";

// ===== BUTTON: UPDATE HEADING =====
changeBtn.addEventListener("click", () => {
    messageSpace.textContent = input.value || "You pressed the button!";
});

// ===== FIREBASE CONFIG =====
const firebaseConfig = {
    apiKey: "AIzaSyCOOawgnK0_Y_k4z4UaHU-PJpWLyMY4PYA",
    authDomain: "carmenogrady---13comp.firebaseapp.com",
    projectId: "carmenogrady---13comp",
    storageBucket: "carmenogrady---13comp.appspot.com",
    messagingSenderId: "407567845415",
    appId: "1:407567845415:web:a797271c6ea774a702e602"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ===== SAVE TO FIREBASE =====
saveBtn.addEventListener("click", () => {
    db.collection("messages").add({
        text: input.value
    });
});

// ===== LOAD FROM FIREBASE =====
loadBtn.addEventListener("click", async () => {
    const snapshot = await db.collection("messages").get();
    snapshot.forEach(doc => {
        messageSpace.textContent = doc.data().text;
    });
});
