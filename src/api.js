import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB86Rc8_IQe_J3RtcHV6D0z4C3uzWR65P8",
  authDomain: "vanlife-716a4.firebaseapp.com",
  projectId: "vanlife-716a4",
  storageBucket: "vanlife-716a4.appspot.com",
  messagingSenderId: "728456866835",
  appId: "1:728456866835:web:72f56a99f62c84a3dce3e6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVanDetail(id) {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

// export async function getVans() {
//   const response = await fetch("/api/vans");
//   if (!response.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: response.statusText,
//       status: response.status,
//     };
//   }
//   const resData = await response.json();

//   return resData.vans;
// }

// export async function getVanDetail(id) {
//   const response = await fetch(`/api/vans/${id}`);

//   if (!response.ok) {
//     throw {
//       message: "Failed to fetch van data",
//       statusText: response.statusText,
//       status: response.status,
//     };
//   }

//   const resData = await response.json();
//   return resData.vans;
// }

// export async function getHostVans() {
//   const response = await fetch("/api/host/vans");

//   if (!response.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: response.statusText,
//       status: response.status,
//     };
//   }

//   const resData = await response.json();
//   return resData.vans;
// }

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
