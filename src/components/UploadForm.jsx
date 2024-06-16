// src/components/UploadForm.js
import { useState,useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { progress, error, url, startUpload } = useStorage();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedFile) {
      startUpload(selectedFile);
      setSelectedFile(null);
    }
  }

  //useEffect to print the url once the image is uploaded
  useEffect(() => {
    if (url) {
    //reset the form
    }
  } , [url]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".jpeg,.png"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <button className="btn btn-neutral font-normal mt-5 mx-5">Upload</button>
      </form>

      {progress > 0 && (
        <div>Progress: {progress}%</div>
      )}
      {error && (
        <div>Error: {error}</div>
      )}
  
    </div>
  );
};

export default UploadForm;
