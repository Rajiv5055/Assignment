import React from 'react';
import BeautyBeast from './Images/BeautyBeast.jpg';
import Avenger from './Images/Avenger.jpg';
import Chakra from './Images/Chakra.jpg';
import trance from './Images/trance.jpg';
import kgf from './Images/kgf.png';
import BlackPanther from './Images/BlackPanther.jpg';
import Carousel from "react-elastic-carousel";
import Item1 from './Item1';
import "./style.css";
import { Button, Modal } from 'react-bootstrap';
import blutooth from './Images/Icons/blutooth.png';
import messenger from './Images/Icons/messenger.png';
import Whatsapp from './Images/Icons/Whatsapp.png';
import Instagram from './Images/Icons/Instagram.jpg';
import gmail from './Images/Icons/gmail.png';
import Facebook from './Images/Icons/Facebook.jfif';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 }
];

class Movies extends React.Component {
  constructor(){
  	super();
  	this.state = {
  		show: false
  	}
  }
  handleModal(){
  	this.setState({show: !this.state.show })
  }
  render(){
  return (
    <div>
      <h1 className='bg-dark text-white' style={{ textAlign: "left", padding: "10px" }}>MOVIES</h1>
      <div className="movies">
        <Carousel breakPoints={breakPoints}>
          <Item1><div className="card bg-dark mg-3" >
		  <img className="card-img-top" src={BeautyBeast} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">Beauty & Beast</h4>
          <a href="#" class="btn btn-danger">Play</a>
			    <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
		   </div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
		  <img className="card-img-top" src={Avenger} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">Avengers: End Game</h4>
          <a href="#" class="btn btn-danger">Play</a>
			    <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
			</div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
			  <img className="card-img-top" src={BlackPanther} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">Black Panther</h4>
          <a href="#" class="btn btn-danger">Play</a>
			    <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
			</div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
			  <img className="card-img-top" src={trance} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">Trance</h4>
          <a href="#" class="btn btn-danger">Play</a>
			    <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
			</div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
			  <img className="card-img-top" src={kgf} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">KGF:Chapter 1</h4>
          <a href="#" class="btn btn-danger">Play</a>
			   <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
			</div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
			  <img className="card-img-top" src={Chakra} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">Chakra</h4>
          <a href="#" class="btn btn-danger">Play</a>
			    <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
			</div>
		  </Item1>    
        </Carousel>
      </div>
      <Modal show={this.state.show} onHide={()=> this.handleModal()}>
      <Modal.Header className="bg-dark" closeButton > <h1 className="text-white"> Share With.. </h1></Modal.Header>
      <Modal.Body className=" bg-dark shareoptions">
           <a href="#"><img src={Instagram} width="60px" height="60px"/><p>Instagram</p></a>   
           <a href="#"><img src={Facebook} width="60px" height="60px"/><p>Facebook</p></a>
           <a href="#"><img src={gmail} width="60px" height="60px"/><p>Gmail</p></a>
           <a href="#"><img src={Whatsapp} width="60px" height="60px"/><p>WhatsApp</p></a>
           <a href="#"><img src={blutooth} width="60px" height="60px"/><p>Blutooth</p></a>
           <a href="#"><img src={messenger} width="60px" height="60px"/><p>Messenger</p></a>    
      </Modal.Body>
      <Modal.Footer className="bg-dark">
      <a onCLick={()=>this.handleModal()} className="btn btn-danger"> Share </a>
      </Modal.Footer>
      </Modal>
    </div>
  );
 }
}

 export default Movies;