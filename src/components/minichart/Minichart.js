import React from 'react'
import MiniChart from 'react-mini-chart'

function Minichart({rates}) {
  return (
    <div className="__minichart-container">
      <p>Given rates chart</p>
      <MiniChart
        dataSet={rates}
        width={150}
        height={150}
        labelFontSize={20}
        strokeColor="#00605B"
        activePointColor="#111D1D" />
    </div>
  )
}

export default Minichart