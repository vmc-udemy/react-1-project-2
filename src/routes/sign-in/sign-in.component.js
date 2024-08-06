// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  signout,
  auth,
} from '../../utils/firebase/firebase.utils';

function SignIn() {
  // useEffect(() => {
  //   // the following won't work due to: https://firebase.google.com/docs/auth/web/redirect-best-practices?hl=en&authuser=0&_gl=1*1q2anev*_ga*MzE3MDYzNTI3LjE3MjI5MzYwNjA.*_ga_CW55HF8NVT*MTcyMjk3MDcyOS42LjEuMTcyMjk3MzgzOS42MC4wLjA.
  //   getRedirectResult(auth)
  //     .then(async response => {
  //       if(response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //         console.log(userDocRef);
  //       }
  //     })
  // }, []);

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
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default SignIn;
