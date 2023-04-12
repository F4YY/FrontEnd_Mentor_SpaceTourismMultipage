import styled from "styled-components";
import bgscreen from '../assets/home/background-home-mobile.jpg';

export const Styledspacetourism = styled.div`
    //Color:
    --Dark-space: hsl(230, 35%, 7%);
    --Light-green-space: hsl(231, 77%, 90%);
    --White: hsl(0, 0%, 100%);
    //Typography:
    font-size: 14px;
    font-weight: 400;
    --Bellefair-font: 'Bellefair', serif;
    --BarlowCondensed-font:'Barlow Condensed', sans-serif;
    --Barlow-font: 'Barlow', sans-serif;
    position: relative;
    display:flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
    span{
        opacity:.25;
    }
    footer{
        background: url(${bgscreen});
        background-color:var(--Dark-space);
    }
    @keyframes opensidenavmobile {
        0% {
            transform: translate3d(70%,0,0);
        }
        50%{
            transform: translate3d(-10%,0,0);
        }
        100%{
            transform: translate3d(0,0,0);
        }
    }
    @keyframes rotation {
        from {
            rotate:0deg;
        }
        to{
            rotate:-360deg;
        }
    }
    @keyframes expand {
        0% {
            transform:scale(0.3);
        }
        50%{
            transform:scale(1.2);
        }
        100%{
            transform:scale(1);
        }
    }
    @keyframes topdown {
        0% {
            transform:translate3d(0,-300%,0);
        }
        50%{
            transform:translate3d(0,20%,0);
        }
        100%{
            transform:translate3d(0,0,0);
        }
    }
    @keyframes slidefromleft {
        0% {
            transform:translate3d(-150%,0,0);
        }
        50%{
            transform:translate3d(30%,0,0);
        }
        100%{
            transform:translate3d(0,0,0);
        }
    }
    @keyframes slidefromright {
        0% {
            transform:translate3d(150%,0,0);
        }
        50%{
            transform:translate3d(-30%,0,0);
        }
        100%{
            transform:translate3d(0,0,0);
        }
    }
    @keyframes appearing {
        0% {
            filter: blur(50px)
        }
        50% {
            filter: blur(10px)
        }
        100%{
            filter: blur(0px)
        }
    }
`
export const Vstack = styled.div`
    display:flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display:flex;
    flex-direction: row;
`
export const Loadingicon = styled.img`
    width:20%;
    height:auto;
    margin:10% auto 0;
    animation: rotation .8s infinite linear
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    color: var(--Light-green-space);
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    p{
        font-size: .7rem;
    }
`

