import './sorting.css'
import React from 'react'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function Sorting({sortBy}) {
  return (
    <>
    <p>Sort books by</p>
    <div onClick={()=>{sortBy("date")}}>Date</div>
    <div>Title</div>
    <div>Author</div>
    <div>Rate</div>
    <ToggleButtonGroup type="radio" name="options" defaultValue={"date"}>
        <ToggleButton id="tbg-radio-4" value={"date"} onChange={(event)=>sortBy(event)}>
          Date
        </ToggleButton>
        <ToggleButton id="tbg-radio-1" value={"title"} onChange={(event)=>sortBy(event)}>
          Title
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={"author"} onChange={(event)=>sortBy(event)}>
          Author
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={"rate"} onChange={(event)=>sortBy(event)}>
          Rate
        </ToggleButton>
      </ToggleButtonGroup>
      </>
  )
}

export default Sorting