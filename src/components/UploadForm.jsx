

const UploadForm = () => {
  return (
    <div>
      <form>
      <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
      <button className="btn btn-neutral font-normal mt-5 mx-5">Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;
