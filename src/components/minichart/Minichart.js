import React from 'react'
import MiniChart from 'react-mini-chart'
import useLibrary from '../../hooks/useLibrary';

function Minichart() {
  const { books } = useLibrary()
  const data = []
  books.map(book => {
    data.push(book.rating)
  })

console.log(data)
  return (
    <div className="__minichart-container">
      <p>Given rates chart</p>
      <MiniChart
        dataSet={[1,2,3,4,5]}
        width={150}
        height={150}
        labelFontSize={20}
        strokeColor="#00605B"
        activePointColor="#111D1D" />
    </div>
  )
}

export default Minichart