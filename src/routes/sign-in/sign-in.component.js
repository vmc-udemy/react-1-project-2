import {
  signInWithGooglePopup,
  signout,
  auth,
} from '../../utils/firebase/firebase.utils';

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  const signOut = () => {
    signout(auth)
      .then(() => {
        console.log('sign-out successful');
      })
      .catch((error) => {
        // An error happened.
        console.log('sign-out unsuccessful', error);
      });
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default SignIn;