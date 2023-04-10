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
    justify-content:center;
    overflow: hidden;
    min-height: 100vh;
    span{
        opacity:.25;
    }
    footer{
        background: url(${bgscreen});
        background-color:var(--Dark-space);
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

