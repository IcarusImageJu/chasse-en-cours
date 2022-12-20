import { collection, getDocs } from 'firebase/firestore';
import firestore from '../firebase/firestore';
import type { HuntApi } from './models';

export const getHunts = async () => {
  const querySnapshot = await getDocs(collection(firestore, '/hunts'));

  return querySnapshot.docs;
};
