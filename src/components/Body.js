import React from 'react'
import Stories from './Stories';
import SideBar from './SideBar';

export default function Body() {
  return (
    <div id='content'>
        <Stories/>
        <SideBar/>
    </div>
  )
}
