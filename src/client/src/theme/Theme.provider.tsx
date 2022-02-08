import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme.constant';

export const GlobalThemeProvider: React.FC = ({ children }) => {
    return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};
