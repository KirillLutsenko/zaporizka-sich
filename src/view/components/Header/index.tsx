// Core
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { BurgerIcon } from '../../../assets/icons/burger-icon';
import { Button } from '../../elements/ui/Button';

// Components
import { HeaderNavigation } from '../HeaderNavigation';

// Components
// import { Button } from '../../elements/ui/Button';

// Styles
import * as S from './styles';

export const Header = () => {
    const [ navMenuOpen, setNavMenuOpen ] = useState(false);

    return (
        <S.HeaderContainer>
            <S.BurgerBlock
                onClick = { () => setNavMenuOpen(true) }>
                <BurgerIcon />
            </S.BurgerBlock>
            <Link to = '/'>
                <S.Logo />
            </Link>
            <S.NavButtonsBlock>
                <Button
                    to = 'register'>
                    Log In
                </Button>
            </S.NavButtonsBlock>
            {/* <Link to = '/items'>Items</Link> */}
            <HeaderNavigation
                navMenuOpen = { navMenuOpen }
                setNavMenuOpen = { setNavMenuOpen }
            />
        </S.HeaderContainer>
    );
};
