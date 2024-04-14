import testImage from "../assets/goody.jpeg";

const ImageGallery = () => {
  const downloadLogic = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = testImage;
    downloadLink.download = "goody.jpeg";
    downloadLink.click();
  };

  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
      <div className="card w-96 glass">
        <figure>
          <img
            src={testImage}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <p>Date-of-upload :</p>
          <p>Uploaded by:</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={downloadLogic}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
