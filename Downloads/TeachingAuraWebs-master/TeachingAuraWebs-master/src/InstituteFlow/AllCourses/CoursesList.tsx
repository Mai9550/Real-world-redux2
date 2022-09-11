import React from 'react';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { useNavigate } from 'react-router-dom';
import bgCourse from '../../assets/image/SVG/bgCourse.svg';
import EnterIc from '../../icon/drawable/EnterIc';
import BatchesIc from '../../icon/drawable/BatchesIc';

const CoursesList = props => {
	const navigate = useNavigate();

	return (
		<div
			className='class_ver'
			style={{
				backgroundImage: `url(${bgCourse})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='box_alss_ver'>
				<h4>{props.liTitle}</h4>
			</div>

			<div className='box_alss_ver2 box_alss_ver2xd'>
				<button
					type='button'
					onClick={() => {
						navigate(`/course/${props.courseId}`);
					}}
					style={{ marginRight: '15px' }}
					className='d-flex align-items-center'
				>
					{/* <FileOpenIcon sx={{ width: '18px', marginRight: '14px' }} /> */}
					<EnterIc />
					<span className='ml-1'>Enter</span>
				</button>
				<button
					type='button'
					onClick={() =>
						navigate('/AllBatches', {
							state: { courseId: props.courseId },
						})
					}
					className='d-flex align-items-center'
				>
					{/* <LocalPoliceIcon sx={{ width: '18px', marginRight: '14px' }} /> */}
					<BatchesIc />
					<span className='ml-1'>View batches</span>
				</button>
			</div>
		</div>
	);
};

export default CoursesList;
