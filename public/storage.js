var config = {
  apiKey: "AIzaSyASQQsl1qo1KxD0_1hC4v2FcjtkjazRpSk",
  authDomain: "fir-poc-452ad.firebaseapp.com",
  databaseURL: "https://fir-poc-452ad.firebaseio.com",
  storageBucket: "fir-poc-452ad.appspot.com",
  messagingSenderId: "1054653308759"
};
firebase.initializeApp(config);

const storage = firebase.storage();

const storageRef = storage.ref();

const savedFileRef = storageRef.child('saved-file.txt');

savedFileRef.getDownloadURL()
.then((url) => {
  document.getElementById('download').href = url;
})

const onFormSubmitted = () => {
  savedFileRef.putString(document.getElementById('textarea').value);
  return false;
};
