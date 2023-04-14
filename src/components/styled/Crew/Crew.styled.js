import styled from "styled-components";
import bgcrewdesktop from '../../assets/crew/background-crew-desktop.jpg';
import bgcrewtablet from '../../assets/crew/background-crew-tablet.jpg';
import bgcrewmobile from '../../assets/crew/background-crew-mobile.jpg';

export const Vstack = styled.div`
    display:flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display:flex;
    flex-direction: row;
`
//Styled for Crew:
export const Styledcrew = styled.div`
    background-image: url(${bgcrewdesktop});
    background-size: cover;
    background-position:bottom;
    background-color: var(--Dark-space);
    background-repeat: no-repeat;
    min-height: 100vh;
    z-index:0;
    @media screen and (max-width:1025px){
        background-image: url(${bgcrewtablet});
        background-position:auto;
    }
    @media screen and (max-width:600px){
        background-image: url(${bgcrewmobile});
        background-position:auto;
    }
`
export const Crewdesc = styled(Vstack)`
    h3{
        font-family: var(--Bellefair-font);
        font-weight: 400;
        font-size: 56px;
        line-height: 64px;
        text-transform: uppercase;
        color: var(--White);
        margin: 15px 0 0 165.5px;
        //for animation:
        animation: topdown .8s ease-in-out;
        animation-direction: alternate;
        animation-iteration-count: 1;
    }
    h4{
        font-family: var(--Bellefair-font);
        font-weight: 400;
        font-size: 32px;
        line-height: 37px;
        text-transform: uppercase;
        color: var(--White);
        mix-blend-mode: normal;
        opacity: 0.5;
        margin: 154px 0 0 165.5px;
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
        width: 444px;
        height: 128px;
        color: var(--Light-green-space);
        margin:27px 0 0 165px;
        //for animation:
        animation: slidefromright .5s ease-out;
        animation-direction: alternate;
        animation-iteration-count: 1;
    }
    .activecrew{
        background-color: var(--White);
        opacity:1;
    }
    .inactivecrew{
        background-color: var(--White);
        opacity:.17;
    }
    //for tablet screen:
    @media screen and (max-width:1181px), (max-width:1115px) {
        h3{
            font-size: 4em;
            text-align: left;
            margin: 15px 0 0 5%;
        }
        h4{
            font-size: 2.4em;
            text-align: left;
            margin:10% 0 0 5%;
        }
        h5{
            font-size: 1.8em;
            line-height: 19px;
            text-align:left;
            letter-spacing: 2.7px;
            margin:20% 0 0 5%;
        }
        p{
            width: auto;
            text-align: left;
            margin:2% 48% 0 5%;
        }
    }
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        h3{
            font-size: 4em;
            text-align: center;
            margin:8px auto 0;
        }
        h4{
            font-size: 2.5em;
            text-align: center;
            margin:60px auto 0;
        }
        h5{
            font-size: 1.8em;
            line-height: 19px;
            text-align:left;
            letter-spacing: 2.7px;
            margin:20% 0 0 5%;
        }
        p{
            width: auto;
            text-align: center;
            margin:16px 18% 40px;
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
            font-size: 2.25em;
            line-height: 28px;
            margin:20px 0 0;
        }
        h4{
            font-size: 1.6em;
            line-height: 18px;
            margin:530px 0 0;
            opacity:.5;
        }
        h5{
            font-size: 1.5em;
            line-height: 19px;
            letter-spacing: 2.7px;
            margin:35% auto 0;
        }
        p{
            font-size: 1.25em;
            width: auto;
            line-height: 1.65em;
            margin:25px 5% 20%;
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
            font-size: 2.25em;
            line-height: 28px;
            margin:20px 0 0;
        }
        h4{
            font-size: 1.6em;
            line-height: 18px;
            margin:530px 0 0;
            opacity:.5;
        }
        h5{
            font-size: 1.5em;
            line-height: 19px;
            letter-spacing: 2.7px;
            margin:20% auto 0;
        }
        p{
            font-size: 1.25em;
            width: auto;
            line-height: 1.65em;
            margin:25px 5% 0;
        }
    }
`
export const Hslidespreader = styled(Hstack)`
    margin:120px 0 94px 167px;
    //for tablet screen:
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        margin:0 auto 87%;
    }
    //for mobile screen:
    @media screen and
        (max-width:600px),
        (max-width:386px),
        (max-width:281px)
    {
        position: absolute;
        top:59%;
        margin:0 35%;
    }
    @media screen and
        (max-height:601px),
        (max-height:386px)
    {
        position: absolute;
        top:65%;
        margin:0 43%;
    }
    @media screen and (max-height:415px) {
        top:67%;
        margin:0 42%;
    }
    @media screen and (max-height:376px) {
        top:64%;
        margin:0 40%;
    }
`
export const Hcirlceslider = styled.button`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--White);
    margin:0 24px 0 0;
    cursor: pointer;
    :hover{
        opacity:.5;
    }
    @media screen and (min-width:819px) and (max-height:1181px) {
        margin:0 10px;
    }
    @media screen and (max-width:600px) {
        margin:0 16px 0 0;
    }
`
export const Crewpic = styled.img`
    position:absolute;
    right:137px;
    bottom:0;
    width:auto;
    height:auto;
    //for animation:
    animation: appearing .6s linear;
    //for tablet screen:
    @media screen and (max-width:1181px), (max-width:1115px) {
        right:2%;
    }
    @media screen and (max-width:1025px), (max-width:913px), (max-width:821px), (max-width:769px) {
        right:15%;
    }
    //for mobile screen:
    @media screen and (max-width:600px) {
        right:6.5%;
        top:20%;
        width: 75%;
        height: 37%;
        padding:0 6%;
        border-bottom: 1px solid grey;
    }
    @media screen and (max-height:601px){
        top:280px;
        width: 35%;
        height: 35%;
        right:25%;
        padding:0 6%;
        border-bottom: 1px solid grey;
    }
    @media screen and (max-height:415px){
        top:240px;
        width: 40%;
        height: 40%;
        right:23%;
        padding:0 6%;
        border-bottom: 1px solid grey;
    }
    @media screen and (max-height:376px){
        top:200px;
    }
    @media screen and (max-width:281px) {
        top:20%;
    }
`