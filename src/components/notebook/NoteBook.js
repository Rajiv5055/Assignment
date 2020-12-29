import React from 'react';
import './NoteBook.css';

class NoteBook extends React.Component{
  constructor(props){
    super(props)
    this.state = {
       Notices:[]
    }
    this.addNote = this.addNote.bind(this);
  }

  addNote(event){
    console.log("working");
    if(this.theNote.value !== ""){
      var newItem = {
        note:this.theNote.value
      }
    }
    else {
      var newItem = {
        note:'Please Enter Something...'
      }
    }

    this.setState((prevState) => {
      return {
        Notices:prevState.Notices.concat(newItem)
      }
    });

    this.theNote.value="";
    event.preventDefault();
  }
  render(){
    return(
     <div className='notebook'>
          <form onSubmit={this.addNote} className='write'>
            <input ref={(note)=>this.theNote=note} type='text' placeholder='Share something with your class..'/>
              <div className='buton'>
              <a href='#home' className='cancel'>Cancel</a>
                <div className='Shr'>
                  <button className='share' href='#home'>Share</button>
                  <button className='share1' href='#home'></button>
                </div>
              </div>
          </form>

          <div className='content'>
           {this.state.Notices.map( (val) =>
             <div className='contentBody'>
                <div className='body1'>
                </div>
                <div className='media-body'>
                <div className='d-flex'>
                  <h4 className='admin1'>Admin</h4>
                  <div className='time1'>
                  <p>12.50pm</p>
                 </div>
                 </div>
                  <p className='notice1'>{val.note}</p>
                </div>
            </div>
           )}
             
          </div>
     </div>
  );
  }
	
}

export default NoteBook;