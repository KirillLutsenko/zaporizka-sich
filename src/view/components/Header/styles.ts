// Core
import styled from 'styled-components';

// Variables
import { colors } from '../../../assets/colors';
import { variables } from '../../../assets/variables';

// Images
import backgroundImage from '../../../assets/images/header-image.png';
import logo from '../../../assets/images/logo.png';

// Components
import { ButtonStyle } from '../../elements/ui/Button/styles';


export const HeaderContainer = styled.section`
    position: relative;
    display: flex;
    width: 100%;
    height: 840px;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    
    ${ ButtonStyle } {
        position: absolute;
        top: 2rem;
        right: 2rem;
        color: ${colors.blue.base};
        border-color: ${colors.blue.base};

        &:hover:after {
            border-color: ${colors.blue.base};
        }
    }
`;

export const Logo = styled.div`
    position: absolute;
    top: 1.5rem;
    left: calc((100% - 105px)/2);
    height: 120px;
    width: 105px;
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform ${variables.transition};

    &:hover {
        transform: scale(1.05);
    }
`;

export const NavButtonsBlock = styled.div`  
`;

export const BurgerBlock = styled.div`
    position: absolute;
    top: 2.5rem;
    left: 3rem;
    height: fit-content;

    & svg {
        width: 24px;
        height: 20px;
        stroke: ${colors.blue.base};
        fill: ${colors.blue.base};
        transition: transform ${variables.transition};
    }

    &:hover {
        & svg {
            cursor: pointer;
            transform: scale(1.2);
        }
    }
`;
