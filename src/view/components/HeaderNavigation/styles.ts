// Core
import styled from 'styled-components';

// Variables
import { variables } from '../../../assets/variables';
import { colors } from '../../../assets/colors';

// Types
type NavigationContainerT = {
    navMenuOpen: boolean;
}

export const NavigationContainer = styled.section<NavigationContainerT>`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: ${({ navMenuOpen }) => navMenuOpen ? '0' : '-400px'};
    padding: 4rem 2rem;
    width: 400px;
    height: 100%;
    background-color: ${colors.blue.base};
    transition: left ${variables.transition};
    z-index: 2;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    border-bottom: 1px solid ${colors.yellow.base};
`;

export const CloseButtonBlock = styled.div`
    position: absolute;
    top: 1rem;
    right: 2rem;
    width: 16px;
    height: 16px;
    cursor: pointer;

    & svg {
        width: 16px;
        height: 16px;
        stroke: #fff;
        fill: #fff;
        transition: stroke ${variables.transition}, fill ${variables.transition};
    }

    &:hover {
        & svg {
            stroke: ${colors.yellow.base};
            fill: ${colors.yellow.base};
        }
    }
`;

export const Title = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${colors.yellow.base};
    margin-bottom: 2rem;
`;

export const Chapter = styled.span`
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 1rem;
    color: ${colors.yellow.base};

    &:last-child {
        margin-bottom: 0;
    }
`;
