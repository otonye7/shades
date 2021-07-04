import { FooterContainer } from './footer.styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

const Footer = () => {
    return (
        <FooterContainer>
            <div className='container'>
            <div className='first'>
                <h5 className='text'>AFFILIATE PROGRAM</h5>
                <h5 className='text'>SHIPPING and RETURN POLICY</h5>
                <h5 className='text'>BLUE LIGHT GLASSES</h5>
                <h5 className='text'>FISHING SUNGLASSES</h5>
                <h5 className='text'>RUNNING SUNGLASSES</h5>
                <h5 className='text'>POLARIZED SUNGLASSES</h5>
                <h5 className='text'>S0H0 APP</h5>
            </div>

            <div className='second'>
                <h5 className='text'>OUR STORY</h5>
                <h5 className='text'>FAQS</h5>
                <h5 className='text'>COPYRIGHTS</h5>
                <h5 className='text'>PRIVACY POLICY</h5>
                <h5 className='text'>TERMS OF SERVICE</h5>
                <h5 className='text'>POLARIZED SUNGLASSES</h5>
                <h5 className='text'>CONTACT US</h5>
            </div>

            <div className='second'>
                <h5 className='text'>JOIN OUR MAILING LIST</h5>
             <div className='icons'>
                 <FacebookIcon />
                 <TwitterIcon />
                 <PinterestIcon />
                 <InstagramIcon />
                 <YouTubeIcon />
                 <SlowMotionVideoIcon />
             </div>
             <br />
             <div className='border'></div>
            <h5 className='bottom-text'>© 2021, S0H0QUEST. All rights reserved</h5>
            </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;