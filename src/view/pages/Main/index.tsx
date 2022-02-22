// Core
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';
import { Header } from '../../components/Header';

// Styles
import * as S from './styles';

const Main: FC = () => {
    return (
        <S.Container>
            <Header />
            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
