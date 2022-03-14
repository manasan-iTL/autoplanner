import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState("")

    const value = {
        user,
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, async (user) => {
            if(user) {
              console.log(user)
              setUser(user)
              const userData = {
                  email: user.email,
                  name: user.displayName,
                  created_at: serverTimestamp()
              }
              console.log(userData)
              const userRef = doc(db, 'users', user.uid)
              const userDoc = await getDoc(userRef)
              console.log(userDoc)

              if(!userDoc.exists()) {
                  await setDoc(userRef, userData)
                  console.log("Register!!")
              }
            } else {
                setUser(user)
            }
        })
        return () => {
            unsubscribed()
        }
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

