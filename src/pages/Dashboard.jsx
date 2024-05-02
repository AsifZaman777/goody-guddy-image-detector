import Navbar from '../components/Navbar';
import UploadForm from '../components/UploadForm';
import ImageGallery from '../components/ImageGallery';

//show name of user from local storage
// const user = localStorage.getItem('email');

const Dashboard = () => {
    return (
        <div className='max-w-5xl mx-auto my-5'>
        <Navbar />
        <div className="text-center my-10">
            <UploadForm />
        </div>
        <div className="text-left my-20">
            <ImageGallery />
        </div>
    </div>
    );
};

export default Dashboard;