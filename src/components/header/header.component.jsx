import { HeaderContainer } from './header.styles';
import VoicemailIcon from '@material-ui/icons/Voicemail';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>
            <div className='container'>
            <div className='logo-container'>
                <VoicemailIcon />
                <div className='logo-text'>
                    <Link to='/' className='samo-text'>S0H0QUEST</Link>
                </div>
            </div>

            <div className='nav-links'>
                <div className='navs'>
                    <h5 className='nav-text'>Sunglasses</h5>
                </div>
                <div className='navs'>
                    <h5 className='nav-text'>Sports</h5>
                </div>
                <div className='navs'>
                    <h5 className='nav-text'>Bluelight</h5>
                </div>
                <div className='navs'>
                    <h5 className='nav-text'>Accessories</h5>
                </div>
                <div className='navs'>
                    <h5 className='nav-text'>Sales</h5>
                </div>
                <div className='navs'>
                    <h5 className='nav-text'>Learnmore</h5>
                </div>
                </div>

                <div className='header-icons'>
                    <div className='searchicons'>
                        <SearchIcon />
                    </div>
                    <Link to='/login' className='personicons'>
                        <PersonIcon />
                    </Link>
                    <div className='carticons'>
                        <LocalGroceryStoreIcon />
                    </div>
            </div>
            </div>
            <div className='border-bottom'></div>
        </HeaderContainer>
        
    )
}

export default Header;