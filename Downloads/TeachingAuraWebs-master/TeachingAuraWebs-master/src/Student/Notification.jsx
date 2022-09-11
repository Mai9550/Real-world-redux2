import {React, useState } from 'react'
import { Resizable } from 'react-resizable';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './Notification.css'

const notif = [
  {name:'first notification'},
  {name:'second notification'},
  {name:'third notification'},
  {name:'fourth notification'},
   {name:'fifth notification'},
  {name:'sixth notification'},
  {name:'seventh notification'},
  {name:'eighth notification'},
  {name:'third notification'},
  {name:'fourth notification'},
   {name:'fifth notification'},
  {name:'sixth notification'},
  {name:'seventh notification'},
  {name:'eighth notification'},

]

export default function Notification() {
  const[compsize, setComSize] = useState({width:'100%', height:200})

  // On top layout
  const onResize = (event, {element, size, handle}) => {
    setComSize({ height: size.height});
  };

 
    return (
      <Resizable height={compsize.height} width={compsize.width} onResize={onResize}>
        <div className="box" 
              style={{width: compsize.width + 'px', 
              height:compsize.height + 'px',
              border:'1px solid black'}}>
                
          <div className="notficationContainer" 
                style={{overflow:'hidden',display:'flex',flexDirection:'column'}} >
                 
            {
      <ul>
        {
          notif.map((item,index)=>(
            <li key={item+index} 
            style={{color:'white'}}
            ><AcUnitIcon/> {item.name} </li>
          ))
        }
      </ul>
    }
          </div>
        </div>
      </Resizable>
  )
}
