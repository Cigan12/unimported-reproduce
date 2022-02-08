import React from 'react';
import { StyledRoot } from 'styles/Common.styled';
import { useTranslation } from 'react-i18next';

export const MainView: React.FC = () => {
    const [__] = useTranslation();

    return (
        <StyledRoot>
            <main>{__('Главная')}</main>
        </StyledRoot>
    );
};
