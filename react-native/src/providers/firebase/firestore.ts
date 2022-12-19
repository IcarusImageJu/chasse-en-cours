import type { Firestore } from 'firebase/firestore';
import { firebaseFirestore } from '../../../firebaseConfig';

const firestore = firebaseFirestore as Firestore;
export default firestore;
