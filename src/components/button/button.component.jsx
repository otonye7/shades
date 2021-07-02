import PropTypes from 'prop-types';
import { ButtonContainer } from './button.styles';

const Button = ({children, handleClick}) => {
    return (
        <ButtonContainer>
            <button onClick={handleClick}>
                {children}
            </button>
        </ButtonContainer>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    handleClick: PropTypes.func
}

export default Button