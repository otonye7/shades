import React, { useState } from 'react';
import { SubHeaderContainer } from './menu-icon.styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SubHeader from '../subheader/subheader.component';

const BurgerIcon = () => {
    const [open, setopen] = useState(false);

    const handleClick = () => setopen(!open)

    return (
        <SubHeaderContainer>

            <div className='nav-icons' onClick={handleClick}>
                {
                    open ? <CloseIcon /> : <MenuIcon />
                }
            </div>

            <div className='sub-icon'>
                <SubHeader className='sub' open={open} />
            </div>

        </SubHeaderContainer>
    )
}


export default BurgerIcon;