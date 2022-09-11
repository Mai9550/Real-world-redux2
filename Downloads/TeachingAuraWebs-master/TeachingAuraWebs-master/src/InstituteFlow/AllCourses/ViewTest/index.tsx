import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeadSub from '../../../components/HeadSub';
import Side_Menu from '../../../components/Side_Menu';
import SearchIc from '../../../icon/drawable/SearchIc';
import p1 from '../../../assets/image/p1.jpg';

const ViewTest = () => {
  const navigate = useNavigate();
  return (
    <div className="content_full_container box_ladto">
      <Side_Menu/>
      <div className="content_box content_box22">
        <header className="heder_nav">
          <div className="box_vc_nav_right box_vc_nav_right22">
              <a
                  onClick={() => navigate(-1)}
              >
                  <i className="fa fa-long-arrow-left"/>
              </a>
              <h4>AC code: 4895</h4>
              <span>Figma Course</span>
          </div>
          <div className="box_vc_nav_left">
            <HeadSub />
          </div>
        </header>

        <div className="flex-grow grid grid-cols-3 gap-x-5 w-full pl-[40px] overflow-y-auto">
          <div className="flex flex-col space-y-3 items-center w-full bg-white rounded-[30px] px-2 py-4 overflow-y-auto">
            <h2 className='text-xl font-bold w-full'>List of students</h2>
            <div className="flex w-full bg-[#EEEEEE] rounded-[20px] p-2 space-x-3 mt-2">
              <button type="button" className='rounded-[20px] p-3 bg-[#CDCDCD]'><SearchIc /></button>
              <input type="text" name="search" id="search" placeholder='Search Somthings' className='bg-transparent flex-grow' />
            </div>

            {
              new Array(5).fill(0).map((_, index) => {
                return (
                  <button key={index} className='flex items-center p-3 space-x-3 rounded-[25px] bg-[#EEEEEE] w-[90%]'>
                    <img src={p1} className='h-[32px] w-[32px] rounded-full object-cover' alt="S" />
                    <span>Reza Hashemi</span>
                  </button>
                )
              })
            }
          </div>

          <div className="flex flex-col justify-between col-span-2 w-full border-l-[6px] border-[#EEEEEE] pl-[20px] py-4 pr-[40px] overflow-y-auto">
            <div>
              <h2 className='text-xl font-bold'>Design Test</h2>
              <p className='text-sm text-[#888888] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>            
              <div className="grid grid-cols-3 gap-3 mt-3">
                {
                  new Array(5).fill(0).map((_, index) => {
                    return (
                      <button key={index} type="button" 
                      className='w-full truncate bg-[#FF3998] p-3 rounded-[20px] text-white'>Attachment 1.pdf</button>
                    )
                  })
                }
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='text-xl font-bold'>Submissions</h2>
              <div className="grid grid-cols-3 gap-3 mt-3">
                {
                  new Array(5).fill(0).map((_, index) => {
                    return (
                      <button key={index} type="button" 
                      className='w-full truncate bg-[#2697FE] p-3 rounded-[20px] text-white'>Attachment 1.pdf</button>
                    )
                  })
                }
              </div>
            </div>

            <div className="flex w-full p-2 bg-[#EEEEEE] rounded-[30px] mt-10">
              <label htmlFor="score" className='flex-grow space-y-1'>
                <span className='px-4 text-xs text-[#888888]'>Score</span>
                <input type="number" name="score" id="score" className='w-full font-bold bg-transparent px-4'/>
              </label>
              <button type="button" className='rounded-[20px] bg-[#2697FE] hover:opacity-75 text-white px-12'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTest;