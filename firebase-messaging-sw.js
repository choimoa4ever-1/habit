// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCrC937iMemrKSM8MHH2ApugATMTzQjQJ8",
  projectId: "my-habit-app-4fbdd",
  messagingSenderId: "931923917300",
  appId: "1:931923917300:web:74686913e60f57373861a1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(
    payload.notification.title,
    { body: payload.notification.body, icon: '/icon.png' }
  );
});