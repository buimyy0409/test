import React, { useState } from 'react'
import { Trash } from 'iconsax-react';
import { Input} from 'antd';

const Home = () => {
    const [tasks, setTasks] = useState([])
    const [checked, setChecked] = useState(false);

  function handleCheckbox() {
    setChecked(!checked);
  }

  function deleteTodo(index) {
    const items = tasks;
        items.splice(index,1);
        setTasks([...items]);
      }


return (
    <div>        
    <div className='todoContainer'>
      <div className='todo'>
        <Input
          type="checkbox"
          name="checkbox"
          onChange={handleCheckbox}
          checked={checked}
        />
      </div>

      <Trash
        className='deleteIcon'
        onClick={deleteTodo}
      />
    </div></div>
  );
}


export default Home;