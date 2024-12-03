// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
  // signInWithGoogleRedirect,
  signout,
  auth,
} from '../../utils/firebase/firebase.utils';
import SignupForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

function Authentication() {
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
    <AuthenticationContainer>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignInForm />
      <SignupForm />
      <button onClick={signOut} style={{ display: 'none' }}>
        Sign out
      </button>
    </AuthenticationContainer>
  );
}

export default Authentication;
