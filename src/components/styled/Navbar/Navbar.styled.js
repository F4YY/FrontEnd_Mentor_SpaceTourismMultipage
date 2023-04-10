import styled from "styled-components";

export const Vstack = styled.div`
    display:flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display:flex;
    flex-direction: row;
`
//Styled for Navbar:
export const Stylednavbar = styled(Hstack)`
    position: absolute;
    display: flex;
    width: 1385px;
    height: 96px;
    left: 55px;
    top: 40px;
    align-items: center;
    z-index:1;
    @media screen and (max-width:1025px) {
        width: 729px;
        height: 96px;
        left: 39px;
        top: 0px;
    }
    @media screen and (max-width:600px) {
        width:87%;
        height:40px;
        left: 25px;
        top: 30px;
        justify-content: space-between;
        align-items: center;
        margin:0;
    }
`
export const Logo = styled.img`
    width: 48px;
    height: 48px;
    @media screen and (max-width:600px) {
        width: 13%;
        height: auto;
    }
`
export const Headerline = styled.div`
    display: flex;
    width: 473px;
    height: 1px;
    background-color:var(--White);
    mix-blend-mode: normal;
    opacity: 0.25;
    margin:0 -30px 0 64px;
    z-index:1;
    @media screen and (max-width:1281px) {
        width: 350px;
    }
    @media screen and (max-width:1181px) {
        width: 300px;
    }
    @media screen and (max-width:1025px) {
        display: none;
    }
    @media screen and (max-width:600px) {
        display: none;
    }
`
export const BGnavbarselect = styled.div`
    position:absolute;
    display:flex;
    width: 707px;
    height: 96px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    align-items: center;
    padding-left: 123px;
    top:0;
    right: 0;
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
        margin:0 50px 0 0;
        :hover{
            ::after{
                content:"";
                margin-top: 55px;
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
    #destination{
        p:nth-child(2){
            color: red;
        }
    }
    .active{
            ::after{
                content:"";
                color:black;
                margin-top: 55px;
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
            margin-top: 55px;
            height: 3px;
            width: 100%;
            background-color: none;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    @media screen and (max-width:1281px) {
        padding-left: 93px;
        left: 430px;
    }
    @media screen and (max-width:1181px) {
        padding-left: 93px;
        left: 350px;
    }
    @media screen and (max-width:1025px) {
        width: 450px;
        height: 96px;
        left: 440px;
        top: 0px;
        padding: 0 48px;
        p{
            font-size: 1.3em;
        }
        b{
            display: none;
        }
    }
    @media screen and (max-width:913px) {
        left: 330px;
    }
    @media screen and (max-width:821px) {
        left: 235px;
    }
    @media screen and (max-width:769px) {
        left: 185px;
    }
    @media screen and (max-width:721px) {
        left: 150px;
    }
    @media screen and (max-width:600px) {
        display: none;
    }
    @media screen and (max-height:415px) {
        left:auto;
    }
    @media screen and (max-height:394px) {
        left:265px;
    }
    @media screen and (max-height:376px) {
        left:100px;
    }
    @media screen and (max-height:361px) {
        left:170px;
    }
    @media screen and (max-height:281px) {
        left:80px;
    }
`
export const Roundexplore = styled.button.attrs({
    type:'submit'
})`
    position:relative;
    display: flex;
    width: 274px;
    height: 274px;
    border-radius: 50%;
    border-style:none;
    background-color: var(--White);
    justify-content: center;
    align-items: center;
    cursor:pointer;
    margin: 1080px 175px 0 386px;
    font-family: var(--Bellefair-font);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    color: var(--Dark-space);
    text-transform: uppercase;
    ::after{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    ::after{
        content: "";
        background-color: var(--White);
        opacity:.1;
        transition: transform 0.43s ease-in-out;
    }
    :hover{
        ::after{
            transform: scale(1.6);
        }
    }
    :active{
        ::after{
            transform: scale(1.5);
        }
    }
    @media screen and (max-width:1025px) {
        width: 270px;
        height: 270px;
        margin:740% 0 0 110%;
    }
    @media screen and (max-width:913px) {
        margin:740% 0 0 90%;
    }
    @media screen and (max-width:821px) {
        margin:650% 0 0 70%;
    }
    @media screen and (max-width:769px) {
        margin:550% 0 0 62%;
    }
    @media screen and (max-width:1025px) and (max-height:769px) {
        margin:400% 0 0 110%;
    }
    @media screen and (max-width:721px) {
        margin:555% 0 0 55%;
    }
    /* @media screen and (max-height:721px) {
        margin:450% 0 0 0;
    } */
    @media screen and (max-height:601px) {
        margin:450% 0 0 110%;
    }
    @media screen and (max-width:600px) {
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 1.25px;
        width: 160px;
        height: 160px;
        margin:650% auto auto;
    }
    @media screen and (max-height:541px) {
        margin:380% 0 0 50%;
    }
    @media screen and (max-height:415px) {
        margin:400% 0 0 85%;
    }
    @media screen and (max-height:394px) {
        margin:430% 0 0 75%;
    }
    @media screen and (max-height:376px) {
        margin:400% 0 0 65%;
    }
    @media screen and (max-height:361px) {
        margin:380% 0 0 50%;
    }
    @media screen and (max-height:281px) {
        margin:380% 0 0 40%;
    }
`
//Styled for mobile menu icon:
export const Menuicon = styled.img`
    width: 30px;
    height: 25px;
    display: none;
    cursor: pointer;
    @media screen and (max-width:600px){
        display:flex;
        margin:0;
    }
`
export const Overlayscreen = styled.div`
    position:fixed;
    flex-direction: column;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    opacity:.5;
    background:var(--Very-dark-blue);
`
export const Menulist = styled(Vstack)`
    position: fixed;
    flex-direction: column;
    top:0;
    right:0;
    width: 70%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    padding:118px 0 0;
`
export const Mobilestack = styled(Vstack)`
    font-size: 18px;
    font-family: var(--BarlowCondensed-font);
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    color:var(--White);
    margin: 16px 0 0 32px;
`
export const Closeicon = styled.img`
    width: 10%;
    height: auto;
    cursor: pointer;
    position: absolute;
    top:5.5%;
    right:10%;
`