import useFirestore from '../hooks/useFireStore.js';

const ImageGallery = () => {
    const { photos, loading } = useFirestore();

    const downloadLogic = (imageUrl, imageName) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.setAttribute('download', imageName || 'downloaded_image.jpeg');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:gap-8 justify-center mt-10 px-4 lg:px-8 xl:px-10">
            {photos.map((photo, index) => (
                <div key={index} className="card w-full glass">
                    <figure>
                        <img
                            src={photo.imageUrl}
                            alt={photo.name || 'image'}
                            className="object-cover w-full h-56 md:h-64"
                        />
                    </figure>
                    <div className="card-body px-4 py-2 md:p-4">
                        <p className="text-sm md:text-base">Date-of-upload: {photo.createdAt ? new Date(photo.createdAt.seconds * 1000).toLocaleDateString() : 'Unknown'}</p>
                        <p className="text-sm md:text-base">Uploaded by: {photo.userEmail || 'Anonymous'}</p>
                        <div className="card-actions flex justify-end mt-2">
                            <button
                                className="btn btn-primary text-sm md:text-base"
                                onClick={() => downloadLogic(photo.imageUrl, photo.name)}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
