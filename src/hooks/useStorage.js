// src/hooks/useStorage.js
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage, db } from '../pages/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';


const filesArray = [];

const useStorage = () => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const startUpload = (file) => {
        if (!file) {
            setError("No file provided");
            return;
        }

        const fileId = uuidv4();
        const storageRef = ref(storage, `${fileId}-${file.name}-${file.lastModified}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Get upload progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (error) => {
                // Handle errors
                setError(error.message);
                setProgress(0);
            },
            async () => {
                // Handle successful uploads
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setUrl(downloadURL);
                    setError(null);

                    // Add file object to filesArray
                    const fileObj = {
                        imageUrl: downloadURL,
                        createdAt: new Date(),
                        userEmail: localStorage.getItem('email'),
                    };
                    filesArray.push(fileObj);
                    console.log(filesArray);

                    // Add file object to Firestore
                    await addDoc(collection(db, "images"), fileObj);
                } catch (error) {
                    setError(error.message);
                }
            }
        );
    };

    return { progress, error, url, startUpload };
};

export default useStorage;
