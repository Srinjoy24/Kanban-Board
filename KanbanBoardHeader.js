import React from 'react'
import "./css/KanbanBoardHeader.css"
import Display from './Display'

function KanbanBoardHeader() {
  return (
    <div classname="KanbanHeader">
        <div classname= "KanbanHeaderContent">
            <Display/>
        </div>
      
    </div>
  )
}

export default KanbanBoardHeader
