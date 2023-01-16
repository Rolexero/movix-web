import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useCallback, useState } from "react";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase.config";
import { SignInModel, SignUpModel } from "../types/model";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/configure";
import { addAuthUser } from "../store/userslice";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signUp = useCallback(
    async (signUpData: SignUpModel) => {
      setIsLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          signUpData.email,
          signUpData.password
        )
          .then(async (user) => {
            await setDoc(doc(db, "users", user.user.uid), {
              uid: user.user.uid,
              displayName: signUpData.displayName,
              email: signUpData.email,
            }).then(() => {
              toast.success("Sign up successful");
              navigate("/signin");
            });
          })
          .catch((err) => {
            toast.error(err.message);
          });
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        toast.error(message);
      }
      setIsLoading(false);
    },
    [navigate]
  );

  const signIn = useCallback(
    async (signinData: SignInModel) => {
      setIsLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          signinData.email,
          signinData.password
        )
          .then(async (user) => {
            toast.success("Successfully logged in");
            const docRef = doc(db, "users", user.user.uid);
            try {
              const docSnap = await getDoc(docRef);
              dispatch(
                addAuthUser({
                  token: docSnap?.data()?.uid,
                  displayName: docSnap?.data()?.displayName,
                  email: docSnap?.data()?.email,
                })
              );

              console.log(docSnap.data());
            } catch (error) {
              console.log(error);
            }
            navigate("/homepage");
          })
          .catch((err) => {
            if (err.message.includes("wrong-password")) {
              toast.error("Invalid Password");
            }
            if (err.message.includes("user-not-found")) {
              toast.error("User not found");
            }
          });
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        toast.error(message);
      }
      setIsLoading(false);
    },
    [dispatch, navigate]
  );

  return { signUp, isLoading, isSuccess, signIn };
};

export default useHttp;
