import { FeaturesContainer } from './features.styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import MicIcon from '@material-ui/icons/Mic';
import BluetoothIcon from '@material-ui/icons/Bluetooth';

const Features = () => {
    return (
        <FeaturesContainer>
            <div className='container'>
            <div className='first-container'>
                <h2 className='title'>Blue Light Glasses</h2>
                <div className='vision'>
                    <VisibilityIcon />
                    <h6 className='text'>Prevents Blurry Vision</h6>
                </div>
                <div className='vision'>
                    <VisibilityIcon />
                    <h6 className='text'>No More Eye Fatique</h6>
                </div>
                <div className='vision'>
                   <SportsHandballIcon />
                    <h6 className='text'>Better Sleep</h6>
                </div>
                <div className='vision'>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            <div className='first-container'>
                <h2 className='title'>Audio Sun Glasses</h2>
                <div className='vision'>
                    <MicIcon />
                    <h6 className='text'>Integrated Microphones</h6>
                </div>
                <div className='vision'>
                    <BluetoothIcon />
                    <h6 className='text'>Bluetooth Enabled</h6>
                </div>
                <div className='vision'>
                     <MicIcon />
                    <h6 className='text'>Open Ear Audio</h6>
                </div>
                <div className='vision'>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            </div>
        </FeaturesContainer>
    )
}

export default Features