// src/hooks/useStorage.js
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../pages/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

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
        const storageRef = ref(storage, `Images/${fileId}-${file.name}-${file.CreationDate}`);
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
            () => {
                // Handle successful uploads
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                    setError(null);
                });
            }
        );
    };

    return { progress, error, url, startUpload };
};

export default useStorage;
