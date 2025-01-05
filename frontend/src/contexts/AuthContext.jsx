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
import useAxiosInstance from "../hooks/useAxiosInstance";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosInstance();

  const signUpWithEmailAndPassword = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const signInWithEmailandPass = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signInwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).then(async ({ user }) => {
      console.log(user);
      const userInfo = {
        name: user.displayName,
        image: user.photoURL,
        email: user.email,
      };
      return await axiosSecure.post(`/users`, userInfo);
    });
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const authObserver = onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential);
      setLoading(false);
      console.log(userCredential);
    });

    // unmount the observer
    return () => authObserver();
  }, []);

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
