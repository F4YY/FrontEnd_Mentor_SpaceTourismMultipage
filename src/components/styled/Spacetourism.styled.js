import styled from "styled-components";

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
`
export const Vstack = styled.div`
    display:flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display:flex;
    flex-direction: row;
`

