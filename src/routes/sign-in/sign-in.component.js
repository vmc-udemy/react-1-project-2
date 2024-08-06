import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signout,
  auth,
} from '../../utils/firebase/firebase.utils';

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
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
