import React from 'react'
import Grid from '@mui/material/Grid';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SchoolIcon from '@mui/icons-material/School';
const course = [
    {name:"course one",desc:"course one descr", date:'date',pyt:"python course"},
    {name:"course two",desc:"course two descr", date:'date',pyt:"python course"},
    {name:"course three",desc:"course three descr", date:'date',pyt:"python course"},
    {name:"course four",desc:"course four descr", date:'date',pyt:"python course"},
    {name:"course five",desc:"course five descr", date:'date',pyt:"python course"},
    {name:"course one",desc:"course one descr", date:'date ',pyt:"python course"},
    {name:"course two",desc:"course two descr", date:'date',pyt:"python course"},
    {name:"course three",desc:"course three descr", date:'date',pyt:"python course"},
    {name:"course four",desc:"course four descr", date:'date',pyt:"python course"},
    {name:"course five",desc:"course five descr", date:'date',pyt:"python course"},
     {name:"course one",desc:"course one descr", date:'date',pyt:"python course"},
    {name:"course two",desc:"course two descr", date:'date',pyt:"python course"},
    {name:"course three",desc:"course three descr", date:'date',pyt:"python course"},
    {name:"course four",desc:"course four descr", date:'date',pyt:"python course"},
    {name:"course five",desc:"course five descr", date:'date',pyt:"python course"},
   
]

function Courses() {
  return (
    <div style={{marginTop:'10px',padding:'5px'}} >
        <p> Courses</p>
        <div style={{maxWidth:'890px', display:'flex', flexDirection:'row', flexWrap:'wrap'}} >
            {
                course.map((item,index)=>(
                    <div 
                    style={{backgroundColor:'#2697FE', 
                            color:'white', 
                            margin:'5px',
                            width:'170px',
                            height:'190px', 
                            padding:'5px',
                            borderRadius:'10px',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between'
                            }} >
                        <p style={{backgroundColor:'white',
                                    color:'black', 
                                    alignSelf:'center',
                                    borderRadius:'25px',
                                    padding:'5px',
                                    lineHeight:'5px',
                                    cursor:'pointer'
                                }}>
                                        {item.name} </p>
                         <p><SchoolIcon/> {item.pyt} </p>               
                        <p>{item.desc} </p>
                        <p style={{backgroundColor:'white',
                                    justifyContent:'center',
                                    
                                    color:'black', 
                                    borderRadius:'25px', 
                                   width:'100px',
                                   
                                    lineHeight:'5px',
                                    padding:'10px'}}>
                                    {item.date} </p>
                        <button style={{backgroundColor:'white',
                                         color:'black',
                                         borderRadius:'10px'
                                         }} ><ConfirmationNumberIcon/> Enter</button>
                    </div>
                ))
            }
        </div>
       </div>
  )
}

export default Courses