// Core
import styled from 'styled-components';

// Variables
import { colors } from '../../../assets/colors';

// Components
import { ButtonStyle } from '../../elements/ui/Button/styles';

export const Container = styled.section`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: ${colors.blue.base};

    & ${ ButtonStyle } {
        
    }
`;

export const BackButton = styled.button`
`;

export const Title = styled.span`
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${colors.yellow.base};
`;
