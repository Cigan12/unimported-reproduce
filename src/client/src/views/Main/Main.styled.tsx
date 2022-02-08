import styled from 'styled-components';

export const StyledMainView = styled.div`
    background-color: ${({ theme }) => theme.colors.main};
`;

export const StyledTitle = styled.h2`
    font: ${({ theme }) => theme.fonts.FO6002433};
    color: ${({ theme }) => theme.colors.main};
    text-align: center;
    margin-top: 56px;
    margin-bottom: 40px;
    @media (${({ theme }) => theme.media.tablet}) {
        font: ${({ theme }) => theme.fonts.FO6002838};
        margin-top: 100px;
        margin-bottom: 64px;
    }
`;
