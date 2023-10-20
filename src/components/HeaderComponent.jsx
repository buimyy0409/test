import { Avatar, Button, Dropdown, Input, Space } from 'antd'
import { SearchNormal1 } from 'iconsax-react'
import React from 'react'

const HeaderComponent = () => {
  return (
    <div className='row'>
        <div className='col p-3'>
            <Input style={{width:'80%'}} prefix={<SearchNormal1 size={18} color='#676767'/>}
            placeholder='Search...'
            bordered={false}/>
        </div>
        <div style={{padding: '0 15px'}}>
            <Button>
            <Space>
            <Avatar size={20}>VA</Avatar>
            MindX
            </Space>
            </Button>
        </div>
    </div>
  )
}

export default HeaderComponent