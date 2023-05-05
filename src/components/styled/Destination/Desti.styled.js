import styled from "styled-components";
import bgdestidesktop from '../../assets/destination/background-destination-desktop.jpg';
import bgdestitablet from '../../assets/destination/background-destination-tablet.jpg';
import bgdestimobile from '../../assets/destination/background-destination-mobile.jpg';

export const Vstack = styled.div`
    display:flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display:flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:1025px), (max-width:600px) {
        flex-direction: column;
    }
`
//Styled for Destination:
export const Styleddesti = styled.div`
    background-image: url(${bgdestidesktop});
    background-size: cover;
    background-position:bottom;
    background-color: var(--Dark-space);
    background-repeat: no-repeat;
    min-height: 100vh;
    z-index:0;
    @media screen and (max-width:1025px){
        background-image: url(${bgdestitablet});
    }
    @media screen and (max-width:600px){
        background-image: url(${bgdestimobile});
    }
`
export const Destidesc = styled(Vstack)`
    h2{
        font-family: var(--Bellefair-font);
        font-weight: 400;
        font-size: 100px;
        line-height: 115px;
        color: var(--White);
        text-transform: uppercase;
        margin:135px 274.5px 0 157.5px;
        transition: all 1s ease-in-out;
        /* //for animation:
        animation: expand 1s ease-in-out;
        animation-direction: alternate;
        animation-iteration-count: 1; */
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
    p{
        font-family: var(--Barlow-font);
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: var(--Light-green-space);
        margin:14px 164px 0 157px;
        //for animation:
        animation: slidefromleft .5s ease-out;
        animation-direction: alternate;
        animation-iteration-count: 1;
    }
    .description{
        padding-bottom: 54px;
        border-bottom: 1px solid #383B4B;
    }
    //for tablet screen:
    @media screen and (max-width:1181px), (max-width:1115px) {
        h2{
            font-size: 750%;
            text-align: left;
            margin:25% 0 0;
        }
        h5{
            font-size: 1.8em;
            line-height: 19px;
            text-align:left;
            letter-spacing: 2.7px;
            margin:20% 0 0 5%;
        }
        p{
            text-align: left;
            margin:1% 8% 0 0;
        }
    }
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        h2{
            font-size: 750%;
            text-align: center;
            margin:16% auto 0;
        }
        h5{
            font-size: 1.8em;
            line-height: 19px;
            text-align:left;
            letter-spacing: 2.7px;
            margin:20% 0 0 5%;
        }
        p{
            text-align: center;
            margin:1% 18% 0;
        }
    }
    @media screen and (max-width:600px){
        h2{
            font-size: 500%;
            text-align: center;
            margin:23% auto 0;
        }
        h5{
            font-size: 1.5em;
            line-height: 19px;
            letter-spacing: 2.7px;
            margin:35% auto 0;
        }
        p{
            text-align: center;
            margin:0 7.9%;
        }
        .description{
            padding-bottom: 7%;
            border-bottom: 1px solid #383B4B;
        }
    }
    @media screen and (max-height:601px){
        h2{
            font-size: 500%;
            text-align: center;
            margin:15% auto 0;
        }
        h5{
            font-size: 1.5em;
            line-height: 19px;
            letter-spacing: 2.7px;
            margin:20% auto 0;
        }
        p{
            text-align: center;
            margin:0 7.9%;
        }
        .description{
            padding-bottom: 7%;
            border-bottom: 1px solid #383B4B;
        }
    }
`
export const Styledimage = styled.img`
    width:445px;
    height:445px;
    border-radius: 50%;
    margin:97px auto auto 230px;
    box-shadow: 30px 30px 100px 50px hsl(231, 77%, 90%,.03);
    //for animation:
    animation: rotation 80s infinite linear;
    @media screen and (max-width:1181px){
        margin:97px 50px 0 150px;
    }
    @media screen and (max-width:1025px){
        margin:97px auto 0;
    }
    @media screen and (max-width:600px){
        width:65%;
        height:auto;
        margin:3% auto 0;
    }
    @media screen and (max-height:601px){
        width:45%;
        height:auto;
        margin:3% auto 0;
    }
`
export const Destibarselect = styled(Hstack)`
    display:flex;
    width: 285px;
    height: 34px;
    align-items: center;
    position:absolute;
    top:280px;
    left:832px;
    p{
        position:relative;
        font-size: 16px;
        font-weight: 400;
        font-family: var(--BarlowCondensed-font);
        color:var(--White);
        text-transform: uppercase;
        line-height: 19px;
        letter-spacing: 2.7px;
        cursor:pointer;
        margin:0 35px 0 0;
        :hover{
            ::after{
                content:"";
                margin-top: 30px;
                height: 3px;
                width: 100%;
                background-color: var(--White);
                opacity:.5;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        :active{
            ::after{
                transform: scale(.95);
            }
        }
    }
    .active{
            ::after{
                content:"";
                color:black;
                margin-top: 30px;
                height: 3px;
                width: 100%;
                background-color: var(--White);
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    .inactive{
        ::after{
            content:"";
            margin-top: 30px;
            height: 3px;
            width: 100%;
            background-color: none;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    @media screen and (max-width:1181px){
        left:650px;
    }
    @media screen and (max-width:1025px){
        position:initial;
        margin:60% auto -63%;
        justify-content: center;
        p{
            font-size:1.6em;
            margin:0 20px 0;
        }
    }
    @media screen and (max-width:821px){
        position:initial;
        margin:70% auto -80%;
        justify-content: center;
        p{
            font-size:1.6em;
            margin:0 20px 0;
        }
    }
    @media screen and (max-width:600px){
        position:initial;
        margin:85% auto -85%;
        justify-content: center;
        p{
            font-size: 1.3em;
            margin:0 10px 0;
        }
    }
    @media screen and (max-height:601px){
        margin:55% auto -55%;
    }
    @media screen and (max-height:415px){
        margin:59% auto -59%;
    }
    @media screen and (max-height:385px){
        margin:59% auto -59%;
    }
    @media screen and (max-height:376px){
        margin:57% auto -57%;
    }
    @media screen and (max-height:281px){
        margin:60% auto -60%;
    }
`
export const AverageDistance = styled(Hstackflexi)`
    gap:68px;
    margin:0 0 0 157.5px;
    h6{
        font-family: var(--Bellefair-font);
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        text-transform: uppercase;
        color: var(--White);
        margin:12px 0 118px 0;
    }
    p{
        font-family: var(--BarlowCondensed-font);
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        text-transform: uppercase;
        color: var(--Light-green-space);
        margin:28px 0 0 0;
    }
    @media screen and (max-width:1181px){
        margin:0;
    }
    @media screen and (max-width:1025px){
        flex-direction: row;
        width:auto;
        gap:10%;
        text-align: center;
        justify-content: center;
        align-items: flex-end;
        margin:0 0 7%;
        h6{
            font-size: 2.3em;
            margin:12px auto 3%;
        }
        p{
            font-size: 1.3em;
            margin:30% auto 0;
        }
    }
    @media screen and (max-width:821px){
        margin:0 0 10%;
    }
    @media screen and (max-width:600px){
        gap:6%;
        align-items: center;
        flex-direction:column;
        margin:8% auto 10%;
        h6{
            font-size: 1.9em;
            margin:12px auto 20%;
        }
        p{
            font-size: 1em;
            margin:0;
        }
        .h6_destitravel{
            margin:12px 0 0;
        }
    }
    @media screen and (max-height:601px){
        margin:8% 0 10%;
        h6{
            font-size: 1.9em;
            text-align: center;
            margin:12px auto 3%;
        }
        p{
            font-size: 1em;
            margin:0;
        }
    }
`