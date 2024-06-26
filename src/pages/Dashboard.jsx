import Navbar from '../components/Navbar';
import UploadForm from '../components/UploadForm';
import ImageGallery from '../components/ImageGallery';

//url login prevent
const checkUser = () => {
    const email = localStorage.getItem('email');
    if (window.location.pathname === '/dashboard' && !email) {
        window.location.href = '/login';
    }
}
checkUser();

const Dashboard = () => {
    return (
        <div className='mx-auto my-5'>
            <Navbar />
            <div className="text-center my-10">
                <UploadForm />
            </div>
            <div className="text-left my-20 overflow-y-auto max-h-screen">
                <ImageGallery />
            </div>
        </div>
    );
};

export default Dashboard;
