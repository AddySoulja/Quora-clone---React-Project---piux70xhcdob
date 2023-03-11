import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

//user collection name
export const usersCollection = () => {
  return collection(db, "user");
};
export const postsCollection = () => {
  return collection(db, "post");
};

export const getUser = async (userId) => {
  const docRef = doc(db, usersCollection(), userId);
  const user = await getDoc(docRef);
  return { id: user.id, ...user.data() };
};
export const userDetails = async (uid) => {
  const querySnapshot = await getDocs(usersCollection());
  let user = { username: "" };
  querySnapshot.forEach((doc) => {
    const { username, id } = {
      ...doc.data(),
    };
    if (uid === id) {
      user.username = username;
    }
  });
  return user;
};
export const addPost = async (body) => {
  const addedPost = await addDoc(postsCollection(), body);
  return addedPost;
};

export const addUser = async (userId, { username, email }) => {
  const addedUser = await addDoc(usersCollection(), {
    id: userId,
    username,
    email,
  });
  return addedUser;
};

export const deletePost = async (id) => {
  const docToBeDeleted = doc(db, "post", id);

  await deleteDoc(docToBeDeleted);
};

export const fetchPosts = async () => {
  const querySnapshot = await getDocs(postsCollection());

  let posts = [];

  querySnapshot.forEach((doc) => {
    posts.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return posts;
};

export const addAnswers = async (question) => {
  await updateDoc(doc(db, "post", question.id), {
    ...question,
  });
};
