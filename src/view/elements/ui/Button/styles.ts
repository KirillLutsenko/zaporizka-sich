// Core
import styled from 'styled-components';

// Variables
import { colors } from '../../../../assets/colors';

export const ButtonStyle = styled.button`
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    position: relative;
    border: 2px solid ${colors.yellow.base};
    color: ${colors.yellow.base};
    transition: .2s;
    background: transparent;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        border: 2px solid rgba(0, 0, 0, 0);
        transition: .4s;
    }

    &:hover:after {
        border-color: ${colors.yellow.base};
        width: calc(100% - 10px);
        height: calc(100% + 10px);
    }
    
    &:disabled {
        opacity: 0.4;
    }

    &:disabled:hover {
        background: grey;
        &:disabled:hover {
            cursor: not-allowed;
        }
    }
`;
