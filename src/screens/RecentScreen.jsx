import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FolderScreen from './FolderScreen'

const RecentScreen = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-8' style={{backgroundColor:'#fafafa'}}>
            <HeaderComponent/>
            <FolderScreen/>
        </div>
        </div>
    </div>
  )
}

export default RecentScreen