import React, { createContext, useEffect, useState } from "react";
import app from "../Services/firebase.config";
export const AuthContext = createContext();
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(
    //     {user:"fardinKhan",email:"fk@dk.com"}
    // );
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(loading,user);

    // // signup 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // // login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    // // logout
    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser,
    };
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;