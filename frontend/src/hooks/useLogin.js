import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const login = async (username, password) => {

    const success = handleInputErrors(username, password)
    if(!success) return;

    setLoading(true);
    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if(data.error) {
            throw new Error(data.error);
        }
        const authUser = {
            ...data,
            profilePicture: data.profilePicture || `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(data.fullName || data.username || "User")}&size=64`,
        };
        localStorage.setItem("ChatSphere-user", JSON.stringify(authUser));
        setAuthUser(authUser);
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  }
    return { loading, login };
}

export default useLogin

function handleInputErrors(username, password) {
    if(!username || !password) {
        toast.error('Please fill in all the fields');
        return false;
    }

    return true;
}