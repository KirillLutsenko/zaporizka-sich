// Core
import React, { FC } from 'react';

// Components
import { CloseIcon } from '../../../assets/icons/close-icon';

// Styles
import * as S from './styles';

// Types
type HeaderNavigationT = {
    navMenuOpen: boolean;
    setNavMenuOpen: (navMenuOpen: boolean) => void;
}

export const HeaderNavigation: FC<HeaderNavigationT> = ({ navMenuOpen, setNavMenuOpen }) => {
    return (
        <S.NavigationContainer navMenuOpen = { navMenuOpen }>
            <S.CloseButtonBlock onClick = { () => setNavMenuOpen(false) }>
                <CloseIcon />
            </S.CloseButtonBlock>
            <S.Title>
                Список разделов:
            </S.Title>
            <S.Chapter>
                Сечи
            </S.Chapter>
            <S.Chapter>
                Курени
            </S.Chapter>
            <S.Chapter>
                Галерея
            </S.Chapter>
            <S.Chapter>
                Контакты
            </S.Chapter>
        </S.NavigationContainer>
    );
};
