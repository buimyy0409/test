import React from 'react'
import HeaderComponent from '../components/HeaderComponent'

const RecentScreen = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-8' style={{backgroundColor:'#fafafa'}}>
            <HeaderComponent/>
        </div>
        <div className='col bg-white'>sider</div>
        </div>
    </div>
  )
}

export default RecentScreen