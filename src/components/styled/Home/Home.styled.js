import styled from "styled-components";
import bghomedesktop from '../../assets/home/background-home-desktop.jpg';
import bghometablet from '../../assets/home/background-home-tablet.jpg';
import bghomemobile from '../../assets/home/background-home-mobile.jpg';

export const Vstack = styled.div`
    display:flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display:flex;
    flex-direction: row;
`
//Styled for Home:
export const Styledhome = styled.div`
    display:flex;
    background-image: url(${bghomedesktop});
    background-color: var(--Dark-space);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    min-height: 100vh;
    z-index: 0;
    @media screen and (max-width:1025px) {
        background-image: url(${bghometablet});
        background-size: contain;
        flex-direction:column;
    }
    @media screen and (max-width:913px) {
        background-image: url(${bghometablet});
        background-position: bottom;
    }
    @media screen and (max-width:1025px) and (max-height:769px) {
        background-image: url(${bghometablet});
        background-size: cover;
        background-position: 0 50%;
    }
    @media screen and (max-width:600px) {
        background-image: url(${bghomemobile});
        background-size: cover;
        background-position: bottom;
    }
`
export const Herodesc = styled(Vstack)`
    h1{
        font-family: var(--Bellefair-font);
        font-weight: 400;
        font-size: 150px;
        line-height: 172px;
        color: var(--White);
        text-transform: uppercase;
        margin:24px 0 0 165px;
    }
    h5{
        font-size: 28px;
        font-weight: 400;
        font-family: var(--BarlowCondensed-font);
        color:var(--Light-green-space);
        text-transform: uppercase;
        line-height: 34px;
        letter-spacing: 4.725px;
        margin: 387px 0 0 165.5px;
    }
    p{
        font-family: var(--Barlow-font);
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color:var(--Light-green-space);
        width: 444px;
        margin: 24px 0 131px 165.5px;
    }
    @media screen and (max-width:1025px) {
        text-align:center;
        h1{
            font-size: 13em;
            line-height: 100px;
            margin:7% auto 0;
        }
        h5{
            font-size: 1.6em;
            line-height: 19px;
            margin:30% auto 0;
        }
        p{
            font-size: 15px;
            line-height: 2.2em;
            width: auto;
            margin:7% 24%;
        }
    }
    @media screen and (max-width:1025px) and (max-height:769px) {
        text-align:center;
        h1{
            font-size: 11em;
            line-height: 100px;
            margin:5% auto 0;
        }
        h5{
            font-size: 1.5em;
            line-height: 19px;
            margin:13% auto 0;
        }
        p{
            font-size: 1.2em;
            line-height: 2.2em;
            width: auto;
            margin:2% 20%;
        }
    }
    @media screen and (max-width:600px) {
        h1{
            font-size: 80px;
            line-height: 100px;
            text-align: center;
            margin:16px auto;
        }
        h5{
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            margin:40% auto 0;
        }
        p{
            font-size: 15px;
            line-height: 25px;
            text-align: center;
            width: auto;
            margin:16px 24px;
        }
    }
    @media screen and (max-height:601px) {
        text-align:center;
        h1{
            font-size: 10em;
            line-height: 100px;
            margin:4% auto 0;
        }
        h5{
            font-size: 1.4em;
            line-height: 19px;
            margin:17% auto 0;
        }
        p{
            font-size: 1.3em;
            line-height: 2.2em;
            width: auto;
            margin:2% 15% 0;
        }
    }
    @media screen and (max-height:541px) {
        text-align:center;
        h1{
            font-size: 8em;
            line-height: 100px;
            margin:4% auto 0;
        }
        h5{
            font-size: 1.2em;
            line-height: 19px;
            margin:17% auto 0;
        }
        p{
            font-size: 1.1em;
            line-height: 2.2em;
            width: auto;
            margin:2% 15% 0;
        }
    }
`