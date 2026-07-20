import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { getDicebearAvatarSvg } from '../utils/avatar';

const useSignup = () => {
  const [loading, setLoading] = React.useState(false);
  const {setAuthUser}=useAuthContext()
  const signup = async({fullName, username, password, confirmPassword, gender}) => {
    const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
    if(!success) return;

    setLoading(true);
    try {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fullName, username, password, confirmPassword, gender}),
        });

        const data = await res.json();
        if(data.error) {
            throw new Error(data.error);
        }
        
        // Generate avatar locally for new user
        const authUser = {
            ...data,
            profilePicture: getDicebearAvatarSvg(data.fullName || data.username || "User", 48),
        };
        
        // localstorage
        localStorage.setItem("ChatSphere-user",JSON.stringify(authUser))
        // context
        setAuthUser(authUser);

    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  };
  return {loading, signup};
};

export default useSignup

function handleInputErrors({fullName, username, password, confirmPassword, gender}) {
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all the fields');
        return false;
    }

    if(password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }

    if(password.length < 6) {
        toast.error('Password must be atleast 6 characters long');
        return false;
    }

    return true;
}