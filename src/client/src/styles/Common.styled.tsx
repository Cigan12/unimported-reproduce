import styled from 'styled-components';

export const StyledContainer = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
    margin: auto;
    position: relative;
    @media (${({ theme }) => theme.media.tablet}) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media (${({ theme }) => theme.media.laptopM}) {
        max-width: 1170px;
        padding: 0;
    }
`;

export const StyledRoot = styled.div`
    overflow: hidden;
    min-height: 100vh;
`;
