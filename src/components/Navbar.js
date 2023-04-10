import React from 'react';
import { Crew } from './Crew';
import { Destination } from './Destination';
import { Home } from './Home';
import { BGnavbarselect, Closeicon, Headerline, Logo, Menuicon, Menulist, Mobilestack, Overlayscreen, Roundexplore, Stylednavbar } from './styled/Navbar/Navbar.styled';
import { Attribution, AttributionA, Hstack, Styledspacetourism, Vstack } from './styled/Spacetourism.styled';
import { Technology } from './Technology';
import menuicon from './assets/shared/icon-hamburger.svg';
import closeicon from './assets/shared/icon-close.svg';

export const Navbar = () => {
    const [clickNav, setClicknav] = React.useState({
        activePage:'home',
        allPages:['home','destination','crew','technology'],
    });
    const toggleActive = (index) => {
        setClicknav({...clickNav, activePage:clickNav.allPages[index]})
    }

    function toggleActiveStyles(index){
        if(clickNav.allPages[index] === clickNav.activePage) {
            return 'active';
        }
        else{
            return 'inactive'
        }
    }

    const [toExplore, setToexplore] = React.useState(false);
    const exploreHandle = () => {
        setToexplore(true);
    }

    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <Styledspacetourism>
        <Stylednavbar>
            <Logo src={require('./assets/shared/logo.svg').default} alt='logo' />
            <Headerline/>
            <Vstack>
                <BGnavbarselect>
                {clickNav.allPages.map((page,index)=>
                    <Hstack>
                        <p className={toggleActiveStyles(index)}
                            key={index}
                            onClick={()=>{
                                toggleActive(index);
                                exploreHandle();
                            }}
                        >
                            <b>0{index}&nbsp;&nbsp;</b>{page}
                        </p>
                    </Hstack>
                )}
                </BGnavbarselect>
                {!toExplore || clickNav.activePage === 'home'?(
                    <Roundexplore onClick={() => {
                        exploreHandle();
                        toggleActive(1);
                    }}>
                        Explore
                    </Roundexplore>
                ):null}
            </Vstack>
            <Menuicon src={menuicon} alt='menuicon' onClick={()=>setToggleMenu(true)} />
                {toggleMenu && (
                    <>
                    <Overlayscreen/>
                    <Menulist>
                        <Closeicon src={closeicon} alt='closeicon' onClick={()=>setToggleMenu(false)} />
                        {clickNav.allPages.map((page,index)=>
                            <Mobilestack>
                                <p className={toggleActiveStyles(index)}
                                    key={index}
                                    onClick={()=>{
                                        toggleActive(index);
                                        exploreHandle();
                                        setToggleMenu(false);
                                    }}
                                >
                                    <b>0{index}</b>&nbsp;&nbsp;{page}
                                </p>
                            </Mobilestack>
                        )}
                    </Menulist>
                    </>
                )}
        </Stylednavbar>
        {clickNav.activePage === 'home'?(
            <Home/>
        ):''}
        {(clickNav.activePage === 'destination') && toExplore?(
            <Destination/>
        ):''}
        {clickNav.activePage === 'crew'?(
            <Crew/>
        ):''}
        {clickNav.activePage === 'technology'?(
            <Technology/>
        ):''}
        <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Space tourism multipage.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
        </footer>
    </Styledspacetourism>
  )
}
