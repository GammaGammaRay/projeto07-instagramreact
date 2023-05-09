import React from 'react'
import Stories from './Stories';
import SideBar from './SideBar';
import Posts from './Posts';

export default function Body() {
  return (
    <div id='content'>
      <div className="content__main">
        <Stories/>
        <Posts />
      </div>
        <SideBar/>
    </div>
  )
}
