import React from 'react'

const TabbarComponent = ({title, right}) => {
  return (
    <div className='row'>
      <div className='col'>
        <h5 style={{fontWeight: 'bold'}}>{title}</h5>
      </div>
        <div style={{padding: '0 15px'}}>{right}</div>
    </div>
  )
}

export default TabbarComponent