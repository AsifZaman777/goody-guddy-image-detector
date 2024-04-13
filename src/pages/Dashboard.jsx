import Navbar from '../components/Navbar';
import UploadForm from '../components/UploadForm';
import ImageGallery from '../components/ImageGallery';

const Dashboard = () => {
    return (
        <div className='max-w-5xl mx-auto my-5'>
        <Navbar />
        <div className="my-5">
            <UploadForm />
        </div>
        <div className="my-5">
            <ImageGallery />
        </div>
    </div>
    );
};

export default Dashboard;