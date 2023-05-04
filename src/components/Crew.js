import React from 'react';
import { Crewdesc, Crewpic, Hcirlceslider, Hslidespreader, Styledcrew } from './styled/Crew/Crew.styled';
import Datas from '../data.json';
import { useSwipeable } from 'react-swipeable';

export const Crew = () => {
  const [selectCrew, setselectCrew] = React.useState({
    activeCrew:'douglas',
    allCrews:['douglas','mark','victor','anou'],
  });
  const toggleActive = (index) => {
      setselectCrew({...selectCrew, activeCrew:selectCrew.allCrews[index]})
  }

  function toggleActiveStyles(index){
      if(selectCrew.allCrews[index] === selectCrew.activeCrew) {
          return 'activecrew';
      }
      else{
          return 'inactivecrew'
      }
  }

  const swipeviews = useSwipeable({
    onSwipedLeft: () => {
        if (selectCrew.activeCrew === selectCrew.allCrews[0]) {
            setselectCrew({...selectCrew, activeCrew:selectCrew.allCrews[1]})
        } else if (selectCrew.activeCrew === selectCrew.allCrews[1]){
            setselectCrew({...selectCrew, activeCrew:selectCrew.allCrews[2]})
        } else {
            setselectCrew({...selectCrew, activeCrew:selectCrew.allCrews[3]})
        }
    },
    onSwipedRight: () => {
        if (selectCrew.activeCrew === selectCrew.allCrews[3]) {
            setselectCrew({...selectCrew, activeCrew:selectCrew.allCrews[2]})
        } else if (selectCrew.activeCrew === selectCrew.allCrews[2]){
            setselectCrew({...selectCrew, activeCrew:selectCrew.allCrews[1]})
        } else {
            setselectCrew({...selectCrew, activeCrew:selectCrew.allCrews[0]})
        }
    }
})

  return (
    <Styledcrew>
      <Crewdesc {...swipeviews}>
        <h5>
          <span>02</span><b>&nbsp;&nbsp;Meet your crew</b>
        </h5>
        {selectCrew.activeCrew === 'douglas' && (
          <>
            <h4>
              {Datas.crew[0].role}
            </h4>
            <h3>
              {Datas.crew[0].name}
            </h3>
            <p>
              {Datas.crew[0].bio}
            </p>
            <Crewpic
              src={require(`./assets/crew/image-douglas-hurley.png`)} alt='douglas'
            />
          </>
        )}
        {selectCrew.activeCrew === 'mark' && (
          <>
            <h4>
              {Datas.crew[1].role}
            </h4>
            <h3>
              {Datas.crew[1].name}
            </h3>
            <p>
              {Datas.crew[1].bio}
            </p>
            <Crewpic
              src={require(`./assets/crew/image-mark-shuttleworth.png`)} alt='mark'
            />
          </>
        )}
        {selectCrew.activeCrew === 'victor' && (
          <>
            <h4>
              {Datas.crew[2].role}
            </h4>
            <h3>
              {Datas.crew[2].name}
            </h3>
            <p>
              {Datas.crew[2].bio}
            </p>
            <Crewpic
              src={require(`./assets/crew/image-victor-glover.png`)} alt='victor'
            />
          </>
        )}
        {selectCrew.activeCrew === 'anou' && (
          <>
            <h4>
              {Datas.crew[3].role}
            </h4>
            <h3>
              {Datas.crew[3].name}
            </h3>
            <p>
              {Datas.crew[3].bio}
            </p>
            <Crewpic
              src={require(`./assets/crew/image-anousheh-ansari.png`)} alt='anou'
            />
          </>
        )}
        <Hslidespreader>
        {selectCrew.allCrews.map((selection,index)=>
          <Hcirlceslider className={toggleActiveStyles(index)}
              key={index}
              onClick={()=>{
                  toggleActive(index);
              }}
          >
          </Hcirlceslider>
        )}
        </Hslidespreader>
      </Crewdesc>
    </Styledcrew>
  )
}
