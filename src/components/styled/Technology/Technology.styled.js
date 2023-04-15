import styled from "styled-components";
import bgtechdesktop from '../../assets/technology/background-technology-desktop.jpg';
import bgtechtablet from '../../assets/technology/background-technology-tablet.jpg';
import bgtechmobile from '../../assets/technology/background-technology-mobile.jpg';

export const Vstack = styled.div`
    display:flex;
    flex-direction: column;
`
export const Vstackflexi = styled(Vstack)`
    //for tablet screen:
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        flex-direction: row;
    }
    @media screen and (max-width:600px), (max-height:601px) {
        flex-direction: row;
    }
`
export const Hstack = styled.div`
    display:flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        flex-direction: column;
    }
`
//Styled for Technology:
export const Styledtech = styled.div`
    background-image: url(${bgtechdesktop});
    background-size: cover;
    background-position:bottom;
    background-color: var(--Dark-space);
    background-repeat: no-repeat;
    min-height: 100vh;
    z-index:0;
    //for tablet screen:
    @media screen and (max-width:1025px) {
        background-image: url(${bgtechtablet});
    }
    //for mobile screen:
    @media screen and (max-width:600px) {
        background-image: url(${bgtechmobile});
    }
`
export const Techdesc = styled(Vstack)`
    h3{
        font-family: var(--Bellefair-font);
        font-weight: 400;
        font-size: 56px;
        line-height: 64px;
        text-transform: uppercase;
        color: var(--White);
        margin: 11px 0 0 80px;
        //for animation:
        animation: slidefromleft .6s linear;
    }
    h5{
        font-size: 28px;
        font-weight: 400;
        font-family: var(--BarlowCondensed-font);
        color:var(--Light-green-space);
        text-transform: uppercase;
        line-height: 34px;
        letter-spacing: 4.725px;
        margin: 212px 0 0 166.5px;
    }
    h6{
        font-family: var(--BarlowCondensed-font);
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
        text-transform: uppercase;
        color: var(--Light-green-space);
        margin: 137px 0 0 80px;
    }
    p{
        width:444px;
        height:192px;
        font-family: var(--Barlow-font);
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: var(--Light-green-space);
        margin:17px 0 214px 80px;
        //for animation:
        animation: appearing .6s linear;
    }
    .activetech{
        background-color: var(--White);
        opacity:1;
    }
    .inactivetech{
        background-color: var(--White);
        opacity:.17;
    }
    //for tablet screen:
    @media screen and (max-width:1181px), (max-width:1115px) {
        h3{
            font-size: 3.6em;
            text-align: left;
            margin:5% 0 0;
        }
        h5{
            font-size: 1.8em;
            line-height: 19px;
            text-align:left;
            letter-spacing: 2.7px;
            margin:20% 0 0 5%;
        }
        h6{
            font-size: 1.5em;
            text-align: left;
            margin:10% 0 0;
        }
        p{
            width: auto;
            text-align: left;
            margin:3% 60% 8% 0;
        }
    }
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        h3{
            font-size: 4.5em;
            text-align: center;
            margin:5% auto 0;
        }
        h5{
            font-size: 1.8em;
            line-height: 19px;
            text-align:left;
            letter-spacing: 2.7px;
            margin:20% 0 0 5%;
        }
        h6{
            font-size: 1.9em;
            text-align: center;
            margin:8% auto 0;
        }
        p{
            width: auto;
            text-align: center;
            margin:5% 18% 8%;
        }
    }
    //for mobile screen:
    @media screen and
        (max-width:600px),
        (max-width:386px),
        (max-width:281px)
    {
        text-align: center;
        h3{
            font-size: 2.4em;
            margin:0;
        }
        h5{
            font-size: 1.5em;
            line-height: 19px;
            letter-spacing: 2.7px;
            margin:35% auto 0;
        }
        h6{
            font-size: 1.3em;
            margin:3% 0;
        }
        p{
            font-size: 1.2em;
            width:auto;
            height:auto;
            margin:0 5% 10%;
        }
    }
    @media screen and
        (max-height:601px),
        (max-height:415px),
        (max-height:386px),
        (max-height:376px)
    {
        text-align: center;
        h3{
            font-size: 2.4em;
            margin:0;
        }
        h5{
            font-size: 1.5em;
            line-height: 19px;
            letter-spacing: 2.7px;
            margin:20% auto 0;
        }
        h6{
            font-size: 1.3em;
            margin:3% 0;
        }
        p{
            font-size: 1.2em;
            width:auto;
            height:auto;
            margin:0 5% 10%;
        }
    }
`
export const Vslidespreader = styled(Vstackflexi)`
    margin:137px 0 0 165px;
    //for tablet screen:
    @media screen and (max-width:1181px), (max-width:1115px) {
        margin:65% 60px 0 60px;
    }
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        margin:65% auto 0;
    }
    //for mobile screen:
    @media screen and (max-width:600px) {
        margin:70% auto 0;
    }
    @media screen and (max-height:601px) {
        margin:50% auto 0;
    }
    @media screen and (max-height:415px) {
        margin:55% auto 0;
    }
    @media screen and (max-height:376px) {
        margin:58% auto 0;
    }
    @media screen and (max-height:361px) {
        margin:55% auto 0;
    }
    @media screen and (max-height:281px) {
        margin:59% auto 0;
    }
`
export const Vcirlceslider = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-family: var(--Bellefair-font);
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 2px;
    color: var(--Dark-space);
    background-color: var(--White);
    border-style: none;
    margin:0 0 32px 0;
    cursor: pointer;
    :hover{
        opacity:.5;
    }
    //for tablet screen:
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        margin:0 16px 0;
    }
    //for mobile screen:
    @media screen and (max-width:600px) {
        width: 40px;
        height: 40px;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 1px;
        margin:0 16px 32px 0;
    }
    @media screen and (max-height:601px) {
        width: 60px;
        height: 60px;
        font-size: 1.5em;
        line-height: 18px;
        letter-spacing: 1px;
        margin:0 16px 32px 0;
    }
`
export const Techpic = styled.img`
    position:absolute;
    display: block;
    right:0;
    top:272px;
    width: 515px;
    height: 527px;
    //for animation:
    animation: topdown .5s ease-out;
    animation-direction: alternate;
    animation-iteration-count: 1;
    //for tablet screen:
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        display: none;
    }
    //for mobile screen:
    @media screen and (max-width:600px), (max-height:601px){
        display: none;
    }
`
export const Techpicmobile = styled(Techpic)`
    display: none;
    width: 120%;
    height: auto;
    object-position: 3em 0;
    //for tablet screen:
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        display: block;
        width: 100%;
        top:240px;
        left:0;
        object-position: center;
    }
    //for mobile screen:
    @media screen and (max-width:600px) {
        display: block;
        top:200px;
    }
    @media screen and (max-height:601px) {
        display: block;
        top:250px;
        width: 100%;
        object-position: center;
    }
    @media screen and (max-width:281px) {
        top:150px;
    }
`