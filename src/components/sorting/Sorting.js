import './sorting.css'
import React from 'react'

const CRITERIA = [
  { label: "Date", value: "date" },
  { label: "Title", value: "title" },
  { label: "Author", value: "author" },
  { label: "Rate", value: "rate" },
]

function Sorting({ sortBy, onChange }) {
  return (
    <div className="__sorting-list">
      <p>Sort books by</p>
      {
        CRITERIA.map(({ label, value }) => (
          <div
            className={`__sorting-list-criteria ${sortBy == value && "__sorting-list-criteria--active"}`}
            onClick={() => { onChange(value) }}
            key={value}
          >
            {label}
          </div>
        ))
      }
    </div>
  )
}

export default Sorting