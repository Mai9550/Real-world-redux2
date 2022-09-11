import React from 'react';
import CourseIc from '../../icon/drawable/CourseIc';
import EnterIcon from '../../icon/enterIcon';
import { useNavigate } from "react-router-dom";
import id from 'date-fns/locale/id';

const CourseCard = ({ name, desc, batch, props }) => {
  const date = new Date(batch['startDate']);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start rounded-[20px] space-y-3 bg-[#2697fe] text-white p-3">
      <p className="bg-white rounded-full py-2 px-6 font-semibold truncate text-black mx-auto">
        {batch['name']}
      </p>
      <h1 className="mt-[21px] truncate font-bold text-xl flex items-center space-x-[15px] w-full">
        <CourseIc color="white" />
        <span>{name}</span>
      </h1>
      <p className="mt-[15px] max-h-8 truncate w-full">{desc}</p>
      <p className="bg-white mt-[17px] text-black py-1 px-2 text-xs rounded-full">
        From: {`${date.getMonth() + 1}/${date.getDate()}`}
      </p>

      
      
          <button type="submit" 
          onClick={() => {
                   navigate("/batch", { state: { batchId: batch['id'], courseId:batch['courseId'] } })
               }}

            className="mt-[13px] font-bold flex items-center justify-center rounded-[20px] w-full bg-white text-black py-3" >
            <EnterIcon />
            <span>Enter</span>

          </button>
        

   
        

    </div>

  );

};

export default CourseCard;


// {
//   props.data.map((itr) => (
//     <button type="submit" onClick={() => {
//       navigate("/batch", { state: { batchId: itr.id, courseId: props.data[0]['courseId'] } })
//     }}

//       className="mt-[13px] font-bold flex items-center justify-center rounded-[20px] w-full bg-white text-black py-3" >
//       <EnterIcon />
//       <span>Enter</span>

//     </button>)
//   )
// }