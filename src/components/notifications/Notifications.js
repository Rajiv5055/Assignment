import React from 'react';
import './Notifications.css'

const Notifications=()=>{
  return(
  	<div className='notificationBox'>
  	<div class="btn-group">
		  <a href='#home' className='notificationbut'>Notifications</a>
		  <a href='#home' className='eventbut'>Events</a>
     </div>
    <div className='notifications'>
        <div className='media'>
            <div className='adminBody'>
            </div>
            <div className='media-body'>
              <h4 className='admin'>Admin</h4>
              <p className='notice'>Your faculty uploaded the syllabus.</p>
              <p className='time'>3 min ago</p>
            </div>
        </div>
        <hr/>
        <div className='media'>
            <div className='adminBody'>
            </div>
            <div className='media-body'>
              <h4 className='admin'>Admin</h4>
              <p className='notice'>Your faculty uploaded the syllabus.</p>
              <p className='time'>3 min ago</p>
            </div>
        </div>
        <hr/>
        <div className='media'>
            <div className='adminBody'>
            </div>
            <div className='media-body'>
              <h4 className='admin'>Admin</h4>
              <p className='notice'>Your faculty uploaded the syllabus.</p>
              <p className='time'>3 min ago</p>
            </div>
        </div>
        <hr/>
        <div className='media'>
            <div className='adminBody'>
            </div>
            <div className='media-body'>
              <h4 className='admin'>Admin</h4>
              <p className='notice'>Your faculty uploaded the syllabus.</p>
              <p className='time'>3 min ago</p>
            </div>
        </div>
        <hr/>
        <div className='media'>
            <div className='adminBody'>
            </div>
            <div className='media-body'>
              <h4 className='admin'>Admin</h4>
              <p className='notice'>Your faculty uploaded the syllabus.</p>
              <p className='time'>3 min ago</p>
            </div>
        </div>
        <hr/>
        <div className='media'>
            <div className='adminBody'>
            </div>
            <div className='media-body'>
              <h4 className='admin'>Admin</h4>
              <p className='notice'>Your faculty uploaded the syllabus.</p>
              <p className='time'>3 min ago</p>
            </div>
        </div>
        <hr/>
        <div>
         <p className='view'>View All</p>
        </div>
    </div>
    </div>
  );
}

export default Notifications;
