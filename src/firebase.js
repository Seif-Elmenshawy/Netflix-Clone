    import { initializeApp } from "firebase/app";
    import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
    import { addDoc, collection, getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: "AIzaSyBvJyliGBGeYnWdFYH4wQPskTHrzzKHpgQ",
    authDomain: "netflix-clone-36d4a.firebaseapp.com",
    projectId: "netflix-clone-36d4a",
    storageBucket: "netflix-clone-36d4a.firebasestorage.app",
    messagingSenderId: "156186848991",
    appId: "1:156186848991:web:137c05745a68e140d1c36a"
    };

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app)

    const db = getFirestore(app)

    const signup = async (name, email, password)=>{
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user  = res.user
            await addDoc(collection(db, 'user'),{
                uid: user.uid,
                name,
                authProvider:'local',
                email,
            })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const login = async (email, password)=>{
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const logout = ()=>{
        signOut(auth)
    }

    export {auth, db, login, signup, logout}