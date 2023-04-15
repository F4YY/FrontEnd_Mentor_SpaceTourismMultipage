import React from 'react';
import {
    AverageDistance,
    Destibarselect,
    Destidesc,
    Hstack,
    Hstackflexi,
    Styleddesti,
    Styledimage,
    Vstack
} from './styled/Destination/Desti.styled';
import Datas from '../data.json';
import { useSwipeable } from 'react-swipeable';

export const Destination = () => {
    const [selectDesti, setSelectdesti] = React.useState({
        activeSelection:'moon',
        allSelections:['moon','mars','europa','titan'],
    });
    const toggleActive = (index) => {
        setSelectdesti({...selectDesti, activeSelection:selectDesti.allSelections[index]})
    }

    function toggleActiveStyles(index){
        if(selectDesti.allSelections[index] === selectDesti.activeSelection) {
            return 'active';
        }
        else{
            return 'inactive'
        }
    }

    const swipeviews = useSwipeable({
        onSwipedLeft: () => {
            if (selectDesti.activeSelection === selectDesti.allSelections[0]) {
                setSelectdesti({...selectDesti, activeSelection:selectDesti.allSelections[1]})
            } else if (selectDesti.activeSelection === selectDesti.allSelections[1]){
                setSelectdesti({...selectDesti, activeSelection:selectDesti.allSelections[2]})
            } else {
                setSelectdesti({...selectDesti, activeSelection:selectDesti.allSelections[3]})
            }
        },
        onSwipedRight: () => {
            if (selectDesti.activeSelection === selectDesti.allSelections[3]) {
                setSelectdesti({...selectDesti, activeSelection:selectDesti.allSelections[2]})
            } else if (selectDesti.activeSelection === selectDesti.allSelections[2]){
                setSelectdesti({...selectDesti, activeSelection:selectDesti.allSelections[1]})
            } else {
                setSelectdesti({...selectDesti, activeSelection:selectDesti.allSelections[0]})
            }
        }
    })
  return (
    <Styleddesti>
        <Destidesc>
            <h5>
                <span>01</span>&nbsp;&nbsp;<b>Pick your destination</b>
            </h5>
            <Destibarselect>
                {selectDesti.allSelections.map((selection,index)=>
                    <Hstack>
                        <p className={toggleActiveStyles(index)}
                            key={index}
                            onClick={()=>{
                                toggleActive(index);
                            }}
                        >
                            {selection}
                        </p>
                    </Hstack>
                )}
            </Destibarselect>
            <Hstackflexi {...swipeviews}>
                {selectDesti.activeSelection === 'moon'?(
                    <>
                        <Styledimage
                            src={require(`./assets/destination/image-moon.png`)} alt='moon'
                        />
                        <Vstack>
                            <h2>
                                {Datas.destinations[0].name}
                            </h2>
                            <p className='description'>
                                {Datas.destinations[0].description}
                            </p>
                            <AverageDistance>
                                <Vstack>
                                    <p>
                                        Avg. distance
                                    </p>
                                    <h6>
                                        {Datas.destinations[0].distance}
                                    </h6>
                                </Vstack>
                                <Vstack>
                                    <p>
                                        Est. travel time
                                    </p>
                                    <h6 className='h6_destitravel'>
                                        {Datas.destinations[0].travel}
                                    </h6>
                                </Vstack>
                            </AverageDistance>
                        </Vstack>
                    </>)
                    : ''
                }
                {selectDesti.activeSelection === 'mars'?(
                    <>
                        <Styledimage
                            src={require(`./assets/destination/image-mars.png`)} alt='mars'
                        />
                        <Vstack>
                            <h2>
                                {Datas.destinations[1].name}
                            </h2>
                            <p className='description'>
                                {Datas.destinations[1].description}
                            </p>
                            <AverageDistance>
                                <Vstack>
                                    <p>
                                        Avg. distance
                                    </p>
                                    <h6>
                                        {Datas.destinations[1].distance}
                                    </h6>
                                </Vstack>
                                <Vstack>
                                    <p>
                                        Est. travel time
                                    </p>
                                    <h6 className='h6_destitravel'>
                                        {Datas.destinations[1].travel}
                                    </h6>
                                </Vstack>
                            </AverageDistance>
                        </Vstack>
                    </>
                    ) : ''
                }
                {selectDesti.activeSelection === 'europa'?(
                    <>
                        <Styledimage
                            src={require(`./assets/destination/image-europa.png`)} alt='europa'
                        />
                        <Vstack>
                            <h2>
                                {Datas.destinations[2].name}
                            </h2>
                            <p className='description'>
                                {Datas.destinations[2].description}
                            </p>
                            <AverageDistance>
                                <Vstack>
                                    <p>
                                        Avg. distance
                                    </p>
                                    <h6>
                                        {Datas.destinations[2].distance}
                                    </h6>
                                </Vstack>
                                <Vstack>
                                    <p>
                                        Est. travel time
                                    </p>
                                    <h6 className='h6_destitravel'>
                                        {Datas.destinations[2].travel}
                                    </h6>
                                </Vstack>
                            </AverageDistance>
                        </Vstack>
                    </>
                    ) : ''
                }
                {selectDesti.activeSelection === 'titan'?(
                    <>
                        <Styledimage
                            src={require(`./assets/destination/image-titan.png`)} alt='titan'
                        />
                        <Vstack>
                            <h2>
                                {Datas.destinations[3].name}
                            </h2>
                            <p className='description'>
                                {Datas.destinations[3].description}
                            </p>
                            <AverageDistance>
                                <Vstack>
                                    <p>
                                        Avg. distance
                                    </p>
                                    <h6>
                                        {Datas.destinations[3].distance}
                                    </h6>
                                </Vstack>
                                <Vstack>
                                    <p>
                                        Est. travel time
                                    </p>
                                    <h6 className='h6_destitravel'>
                                        {Datas.destinations[3].travel}
                                    </h6>
                                </Vstack>
                            </AverageDistance>
                        </Vstack>
                    </>
                    ) : ''
                }
            </Hstackflexi>
        </Destidesc>
    </Styleddesti>
  )
}
