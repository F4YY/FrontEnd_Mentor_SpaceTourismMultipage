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
    const [destination, setDestination] = React.useState({
        activeDestination: Datas.destinations[0].name,
        allDestinations:[Datas.destinations[0].name, Datas.destinations[1].name, Datas.destinations[2].name, Datas.destinations[3].name]
    });
    const [description, setDescription] = React.useState({
        activeDescription: Datas.destinations[0].description,
        allDescriptions: [Datas.destinations[0].description, Datas.destinations[1].description, Datas.destinations[2].description, Datas.destinations[3].description]
    });
    const [distance, setDistance] = React.useState({
        activeDistance: Datas.destinations[0].distance,
        allDistances: [Datas.destinations[0].distance, Datas.destinations[1].distance, Datas.destinations[2].distance, Datas.destinations[3].distance]
    });
    const [travelTime, setTravelTime] = React.useState({
        activeTravelTime: Datas.destinations[0].travel,
        allTravelTimes: [Datas.destinations[0].travel, Datas.destinations[1].travel, Datas.destinations[2].travel, Datas.destinations[3].travel]
    });

    const toggleActive = (index) => {
        setDestination({...destination, activeDestination:destination.allDestinations[index]})
        setDescription({...description, activeDescription:description.allDescriptions[index]})
        setDistance({...distance, activeDistance:distance.allDistances[index]})
        setTravelTime({...travelTime, activeTravelTime:travelTime.allTravelTimes[index]})
    }

    function toggleActiveStyles(index){
        if(destination.allDestinations[index] === destination.activeDestination) {
            return 'active';
        }
        else{
            return 'inactive'
        }
    }

    const swipeviews = useSwipeable({
        onSwipedLeft: () => {
            if (destination.activeDestination === destination.allDestinations[0]) {
                setDestination({...destination, activeDestination:destination.allDestinations[1]})
                setDescription({...description, activeDescription:description.allDescriptions[1]})
                setDistance({...distance, activeDistance:distance.allDistances[1]})
                setTravelTime({...travelTime, activeTravelTime:travelTime.allTravelTimes[1]})
            } else if (destination.activeDestination === destination.allDestinations[1]){
                setDestination({...destination, activeDestination:destination.allDestinations[2]})
                setDescription({...description, activeDescription:description.allDescriptions[2]})
                setDistance({...distance, activeDistance:distance.allDistances[2]})
                setTravelTime({...travelTime, activeTravelTime:travelTime.allTravelTimes[2]})
            } else {
                setDestination({...destination, activeDestination:destination.allDestinations[3]})
                setDescription({...description, activeDescription:description.allDescriptions[3]})
                setDistance({...distance, activeDistance:distance.allDistances[3]})
                setTravelTime({...travelTime, activeTravelTime:travelTime.allTravelTimes[3]})
            }
        },
        onSwipedRight: () => {
            if (destination.activeDestination === destination.allDestinations[3]) {
                setDestination({...destination, activeDestination:destination.allDestinations[2]})
                setDescription({...description, activeDescription:description.allDescriptions[2]})
                setDistance({...distance, activeDistance:distance.allDistances[2]})
                setTravelTime({...travelTime, activeTravelTime:travelTime.allTravelTimes[2]})
            } else if (destination.activeDestination === destination.allDestinations[2]){
                setDestination({...destination, activeDestination:destination.allDestinations[1]})
                setDescription({...description, activeDescription:description.allDescriptions[1]})
                setDistance({...distance, activeDistance:distance.allDistances[1]})
                setTravelTime({...travelTime, activeTravelTime:travelTime.allTravelTimes[1]})
            } else {
                setDestination({...destination, activeDestination:destination.allDestinations[0]})
                setDescription({...description, activeDescription:description.allDescriptions[0]})
                setDistance({...distance, activeDistance:distance.allDistances[0]})
                setTravelTime({...travelTime, activeTravelTime:travelTime.allTravelTimes[0]})
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
                {destination.allDestinations.map((destination,index)=>
                    <Hstack>
                        <p className={toggleActiveStyles(index)}
                            key={index}
                            onClick={()=>{
                                toggleActive(index);
                            }}
                        >
                            {destination}
                        </p>
                    </Hstack>
                )}
            </Destibarselect>
            <Hstackflexi {...swipeviews}>
                {destination.activeDestination && (
                    <>
                        <Styledimage
                            src={require(`./assets/destination/image-${destination.activeDestination}.png`)} alt={destination.activeDestination}
                        />
                        <Vstack>
                            <h2
                                style={{
                                    color: (destination.activeDestination === 'moon') ? '#55d8f2' : (destination.activeDestination === 'mars') ? '#fc694c' : (destination.activeDestination === 'europa') ? '#b43ffc' : (destination.activeDestination === 'titan') ? '#facc4d' : 'var(--Dark-space)'
                                }}
                            >
                                {destination.activeDestination}
                            </h2>
                            <p className='description'>
                                {description.activeDescription}
                            </p>
                            <AverageDistance>
                                <Vstack>
                                    <p>
                                        Avg. distance
                                    </p>
                                    <h6>
                                        {distance.activeDistance}
                                    </h6>
                                </Vstack>
                                <Vstack>
                                    <p>
                                        Est. travel time
                                    </p>
                                    <h6 className='h6_destitravel'>
                                        {travelTime.activeTravelTime}
                                    </h6>
                                </Vstack>
                            </AverageDistance>
                        </Vstack>
                    </>
                )}
            </Hstackflexi>
        </Destidesc>
    </Styleddesti>
  )
}
