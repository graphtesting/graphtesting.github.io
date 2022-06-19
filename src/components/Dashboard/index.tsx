import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { auth, db, logout } from '../../firebase';
import {
  query,
  collection,
  getDocs,
  doc,
  setDoc,
  where,
  addDoc,
} from 'firebase/firestore';
import { Form, Header } from '..';
import './styles.css';

export default () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const [userSavedData, setUserSavedData] = useState<any>();
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  const fetchUserHistory = async () => {
    try {
      const q = query(collection(db, 'users', user?.uid, 'saved'));
      const doc = await getDocs(q);
      const data = doc.docs.map(d => d.data());
      setUserSavedData(data);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  const addToUserCollection = async (collectionName, collectionData) => {
    try {
      await setDoc(doc(db, 'users', user?.uid, 'saved', collectionName), {
        collectionData,
      });
      alert('Success');
      fetchUserHistory();
    } catch (err) {
      console.error(err);
      alert('An error occured while posting user data');
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
    fetchUserHistory();
  }, [user, loading]);
  useEffect(() => {}, [userSavedData]);
  return (
    <>
      <Header name={name} user={user} logout={logout} />;
      <div className="form">
        <Form
          addToUserCollection={addToUserCollection}
          history={userSavedData}
        />
      </div>
    </>
  );
};
