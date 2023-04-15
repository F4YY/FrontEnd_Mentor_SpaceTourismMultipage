import React from 'react';
import { Vstack } from './styled/Crew/Crew.styled';
import { Hstackflexi, Styledtech, Techdesc, Techpic, Techpicmobile, Vcirlceslider, Vslidespreader } from './styled/Technology/Technology.styled';
import Datas from '../data.json';
import { useSwipeable } from 'react-swipeable';

export const Technology = () => {
  const [selectTech, setSelecttech] = React.useState({
    activeTech:1,
    allTech:[1,2,3],
  });
  const toggleActive = (index) => {
      setSelecttech({...selectTech, activeTech:selectTech.allTech[index]})
  }

  function toggleActiveStyles(index){
      if(selectTech.allTech[index] === selectTech.activeTech) {
          return 'activetech';
      }
      else{
          return 'inactivetech'
      }
  }

  const swipeviews = useSwipeable({
    onSwipedUp: () => {
      if (selectTech.activeTech === selectTech.allTech[0]) {
        setSelecttech({...selectTech, activeTech:selectTech.allTech[1]})
      } else {
        setSelecttech({...selectTech, activeTech:selectTech.allTech[2]})
      }
    },
    onSwipedDown: () => {
      if (selectTech.activeTech === selectTech.allTech[2]) {
          setSelecttech({...selectTech, activeTech:selectTech.allTech[1]})
      } else {
          setSelecttech({...selectTech, activeTech:selectTech.allTech[0]})
      }
    },
    onSwipedLeft: () => {
      if (selectTech.activeTech === selectTech.allTech[0]) {
          setSelecttech({...selectTech, activeTech:selectTech.allTech[1]})
      } else {
          setSelecttech({...selectTech, activeTech:selectTech.allTech[2]})
      }
    },
    onSwipedRight: () => {
      if (selectTech.activeTech === selectTech.allTech[2]) {
          setSelecttech({...selectTech, activeTech:selectTech.allTech[1]})
      } else {
          setSelecttech({...selectTech, activeTech:selectTech.allTech[0]})
      }
    }
})

  return (
    <Styledtech>
      <Techdesc>
        <h5>
          <span>03</span>&nbsp;&nbsp;<b>Space launch 101</b>
        </h5>
        <Hstackflexi {...swipeviews}>
          <Vstack>
            <Vslidespreader>
            {selectTech.allTech.map((selection,index)=>
              <Vcirlceslider
                className={toggleActiveStyles(index)}
                key={index}
                onClick={()=>{
                    toggleActive(index);
                }}
              >
                {selection}
              </Vcirlceslider>
            )}
            </Vslidespreader>
          </Vstack>
          <Vstack>
            <h6>
              The terminology...
            </h6>
            {selectTech.activeTech === 1 ?(
            <>
              <h3>
                  {Datas.technology[0].name}
              </h3>
              <p>
                  {Datas.technology[0].description}
              </p>
              <Techpic
                src={require(`./assets/technology/image-launch-vehicle-portrait.jpg`)} alt='vechicle-potrait'
              />
              <Techpicmobile
                src={require(`./assets/technology/image-launch-vehicle-landscape.jpg`)} alt='vechicle-landscape'
              />
            </>):''
            }
            {selectTech.activeTech === 2 ?(
            <>
              <h3>
                  {Datas.technology[1].name}
              </h3>
              <p>
                  {Datas.technology[1].description}
              </p>
              <Techpic
                src={require(`./assets/technology/image-spaceport-portrait.jpg`)} alt='spaceport-potrait'
              />
              <Techpicmobile
                src={require(`./assets/technology/image-spaceport-landscape.jpg`)} alt='spaceport-landscape'
              />
            </>):''
            }
            {selectTech.activeTech === 3 ?(
            <>
              <h3>
                  {Datas.technology[2].name}
              </h3>
              <p>
                  {Datas.technology[2].description}
              </p>
              <Techpic
                src={require(`./assets/technology/image-space-capsule-portrait.jpg`)} alt='capsule-potrait'
              />
              <Techpicmobile
                src={require(`./assets/technology/image-space-capsule-landscape.jpg`)} alt='capsule-landscape'
              />
            </>):''
            }
          </Vstack>
        </Hstackflexi>
      </Techdesc>
    </Styledtech>
  )
}
