import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase/firebase.config";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authObserver = onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential);
      setLoading(false);
    });

    // unmount the observer
    return () => authObserver();
  }, []);

  const signUpWithEmailAndPassword = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const signInWithEmailandPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signInwithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    signUpWithEmailAndPassword,
    signInWithEmailandPass,
    signInwithGoogle,
    user,
    loading,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
