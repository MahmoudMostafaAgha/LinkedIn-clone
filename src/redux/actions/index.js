import { auth , db, provider, storage } from "../../firebase";
import {signInWithPopup} from "firebase/auth";
import * as actions from "./actions"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
export function signInAPI() {
    return (dispatch) => {
      signInWithPopup(auth, provider)
        .then((payload) => {
          dispatch(actions.setUser(payload.user));
        })
        .catch((error) => alert(error.message));
    };
  }

  export function getUserAuth(){
    return (dispatch)=>{
      auth.onAuthStateChanged(async(user)=>{
        if(user){
          dispatch(actions.setUser(user))
        };
      })
    }
  };

  export function signOutAPI(){
    return (dispatch) => {
      auth.signOut()
        .then(() => {
          dispatch(actions.setUser(null));
        })
        .catch((error) => alert(error.message));
    };
  }

  export function postArticleAPI(payload) {
    return (dispatch) => {
      dispatch(actions.setLoading(true));
      if (payload.image) {
        const storageRef = ref(storage, `images/${payload.image.name}`);
        const uploadRef = uploadBytesResumable(storageRef, payload.image);
        uploadRef.on(
          "state_changed",
          () => {
            getDownloadURL(uploadRef.snapshot.ref)
              .then((downloadURl) => {
                const collRef = collection(db, "articles");
                addDoc(collRef, {
                  actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                  },
                  comments: 0,
                  video: payload.video,
                  description: payload.description,
                  shareImg: downloadURl,
                });
                 dispatch(actions.setLoading(false));
              })
              .catch((error) => {
                console.error(error);
                alert(error);
                 dispatch(actions.setLoading(false));
              });
          }
        );
      } else if (payload.video) {
        const collRef = collection(db, "articles");
        addDoc(collRef, {
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          comments: 0,
          video: payload.video,
          description: payload.description,
          shareImg: payload.image,
        });
        dispatch(actions.setLoading(false));
      } else {
        const collRef = collection(db, "articles");
        addDoc(collRef, {
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          comments: 0,
          video: payload.video,
          description: payload.description,
          shareImg: payload.image,
        })
          .then(() => {
            dispatch(actions.setLoading(false));
          })
          .catch((error) => {
            console.error(error);
            alert(error);
            dispatch(actions.setLoading(false));
          });
      }
    };
  }
 export function getArticlesAPI() {
  return (dispatch) => {
    const collRef = collection(db, "articles");
     const orderedRef = query(collRef, orderBy("actor.date", "desc"));
     onSnapshot(orderedRef, (snapshot) => {
     let  payload = snapshot.docs.map((doc) => doc.data());
       dispatch(actions.getArticle(payload));
     });
  };  
}