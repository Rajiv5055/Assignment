import React from 'react';
import JL50 from './Images/JL50.jpg';
import Mirzapur2 from './Images/Mirzapur2.jpg';
import witcher from './Images/witcher.jpg';
import dark from './Images/dark.jpg';
import bhaukal from './Images/bhaukal.jpg';
import tvseries from './Images/tvseries.jpg';
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
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4},
  { width: 1200, itemsToShow: 5 }
];

class Webseries extends React.Component {
	constructor(){
  	super();
  	this.state = {
  		show: false
  	}
  }
  handleModal(){
  	this.setState({ show: !this.state.show })
  }
  render(){
  return (
    <div>
      <h1 className='bg-dark text-white' style={{ textAlign: "left" }}>WEB SERIES</h1>
      <div className="movies">
        <Carousel breakPoints={breakPoints}>
          <Item1><div className="card bg-dark mg-3" >
		  <img className="card-img-top" src={bhaukal} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">BHAUKAL</h4>
			    <a href="#" class="btn btn-danger">Play</a>
			   <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
		   </div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
		  <img className="card-img-top" src={Mirzapur2} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">Mirzapur 2</h4>
			    <a href="#" class="btn btn-danger">Play</a>
			    <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
			</div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
			  <img className="card-img-top" src={JL50} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">JL 50</h4>
			    <a href="#" class="btn btn-danger">Play</a>
			    <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
			</div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
			  <img className="card-img-top" src={witcher} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger"> The Witcher </h4>
			    <a href="#" class="btn btn-danger">Play</a>
			    <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
			</div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
			  <img className="card-img-top" src={dark} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">Dark</h4>
			    <a href="#" class="btn btn-danger">Play</a>
			    <a onClick={()=>this.handleModal()} href="#" class="btn btn-danger">Share With Friends</a>
			  </div>
			</div>
		  </Item1>
          <Item1><div className="card bg-dark mg-3" >
			  <img className="card-img-top" src={tvseries} alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title text-danger">TV Series</h4>
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
      <a onCLick={()=> this.handleModal()} className="btn btn-danger"> Share </a>
      </Modal.Footer>
      </Modal>
    </div>
    );
   }
}

 export default Webseries;