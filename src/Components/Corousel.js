import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import './style.css';
import movie from './Images/movie.jpg';
import Avenger from './Images/Avenger.jpg';
import trance from './Images/trance.jpg';


const breakPoints = [
  { width: 1200, itemsToShow: 1 },
];



function Corousel() {
  return (
    <div>
      <div className="corousel">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={movie}/></Item>
          <Item><img src={Avenger}/></Item>
          <Item><img src={trance}/></Item>
          <Item>Item Four</Item>
          <Item>Item Five</Item>
          <Item>Item Six</Item>
          <Item>Item Seven</Item>
          <Item>Item Eight</Item>
        </Carousel>
      </div>
    </div>
  );
}

 export default Corousel;
