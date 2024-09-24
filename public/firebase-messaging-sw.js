importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
let config = {
        apiKey: "AIzaSyA50xc6MmXgKfnwJB1GbaFs1sX5Ig_HMb8",
        authDomain: "pollo-national-35fd5.firebaseapp.com",
        projectId: "pollo-national-35fd5",
        storageBucket: "pollo-national-35fd5.appspot.com",
        messagingSenderId: "147586619394",
        appId: "1:147586619394:web:3812d6935d95cb2a6a2f1b",
        measurementId: "G-B72W9SV8ND",
 };
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/images/default/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
