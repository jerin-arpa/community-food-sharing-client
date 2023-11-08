import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const setUserName = (name) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log('Display name updated successfully');
            })
            .catch(error => {
                console.error('Error updating display name:', error);
            });
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            console.log('User in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                axios.post('https://community-food-sharing-server-six.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('Token Response', res.data);
                    })
            }
            else {
                axios.post('https://community-food-sharing-server-six.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('Token Response', res.data);
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [user]);


    const authInfo = {
        user,
        loading,
        createUser,
        googleSignUp,
        logOut,
        signIn,
        setUserName,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;