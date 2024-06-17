// src/hooks/useFirestore.js
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../pages/config'; // Adjust path as necessary

const useFirestore = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'images'), (snapshot) => {
            const fetchedPhotos = snapshot.docs.map((doc) => doc.data());
            setPhotos(fetchedPhotos);
        });

        return () => unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
    }, []);

    return photos;
};

export default useFirestore;
