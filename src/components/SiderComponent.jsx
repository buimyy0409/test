import { Layout, Menu } from 'antd';
import { CloudLightning, Element4, Star1 } from 'iconsax-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const {Sider} = Layout;
const SiderComponent = () => {
    const navigate = useNavigate()
    const menuOptions ={
        size : 22,
        color:'#676767'
    }
    const items = [
        {
            key: '',
            icon: <Element4 size={menuOptions.size} color={menuOptions.color}/>,
            label: 'All'
        },
        {
            key: 'active',
            icon: <CloudLightning size={menuOptions.size} color={menuOptions.color}/>,
            label:'Active'
        },
        {
            key: 'completed',
            icon: <Star1 size={menuOptions.size} color={menuOptions.color}/>,
            label:'Completed'

        }
    ]
  return (
    <Sider theme='light' collapsed style={{height:'100vh'}}>
        <Menu items={items} onClick={(e)=> navigate(`/${e.key}`)} />
    </Sider>
  )
}

export default SiderComponent;