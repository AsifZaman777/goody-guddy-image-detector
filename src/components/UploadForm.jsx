// src/components/UploadForm.js
import  { useState, useEffect } from 'react';
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
      setSelectedFile(null); // Clear selected file after upload starts
    }
  }

  const progressLogic = () => {
    if (progress > 0 && progress < 100) {
      return <progress className="progress w-56" value={progress} max="100" />;
    }
  }

  useEffect(() => {
    if (url) {
      console.log('Uploaded image URL:', url);
      setSelectedFile(null); // Reset the selected file state
    }
  }, [url]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".jpeg,.png"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-neutral font-normal mt-5 mx-5">Upload</button>
      </form>

      {progress > 0 && progressLogic()}

      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default UploadForm;
