import { createContext, useContext, useState, useEffect } from 'react';
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
} from 'firebase/auth';
import { auth } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

// import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const GoogleContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [logInFlag, setLogInFlag] = useState(false);
  const [headerTall, setHeaderTall] = useState(0);

  const googleLogIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const googleLogOut = () => {
    signOut(auth);
    setUser(false);
    setLogInFlag(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLogInFlag(true);
        console.log(currentUser, '--currentUser');
        // const emailIdAndDB = doc(db,`user/${currentUser.displayName}`);
        // setDoc(emailIdAndDB)
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const getHeaderTall = (tall) => {
    setHeaderTall(tall);
  };

  return (
    <AuthContext.Provider
      value={{
        googleLogIn,
        googleLogOut,
        getHeaderTall,
        user,
        headerTall,
        logInFlag,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => {
  return useContext(AuthContext);
};
