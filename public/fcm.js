var config = {
  apiKey: "AIzaSyASQQsl1qo1KxD0_1hC4v2FcjtkjazRpSk",
  authDomain: "fir-poc-452ad.firebaseapp.com",
  databaseURL: "https://fir-poc-452ad.firebaseio.com",
  storageBucket: "fir-poc-452ad.appspot.com",
  messagingSenderId: "1054653308759"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
const requestPermission = async () => {
  console.log('Requesting permission...');

  await messaging.requestPermission();
  console.log('Notification permission granted.');

  const token = await messaging.getToken();
  console.log('Token: ', token);
};

messaging.onMessage((payload) => {
  console.log("Message received. ", payload);
});
