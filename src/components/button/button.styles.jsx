import styled from 'styled-components';
import { getButtonColor } from '../../utils/utils';

export const ButtonContainer = styled.div`
    button {
        min-width: 25px;
        width: 80px;
        height: 38px;
        letter-spacing: 0.5px;
        line-height: 28px;
        padding: 0 18px 0 18px;
        font-size: 15px;
        background-color: ${getButtonColor};
        color: white;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;