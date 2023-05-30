import './sorting.css'
import React from 'react'

function Sorting({ sortBy }) {
  return (
    <>
      <p>Sort books by</p>
      <div className="__sorting-list">
        <div className="__sorting-list-criteria" onClick={() => { sortBy("date") }}>Date</div>
        <div className="__sorting-list-criteria" onClick={() => { sortBy("title") }}>Title</div>
        <div className="__sorting-list-criteria" onClick={() => { sortBy("author") }}>Author</div>
        <div className="__sorting-list-criteria" onClick={() => { sortBy("rate") }}>Rate</div>
      </div>
    </>



  )
}

export default Sorting