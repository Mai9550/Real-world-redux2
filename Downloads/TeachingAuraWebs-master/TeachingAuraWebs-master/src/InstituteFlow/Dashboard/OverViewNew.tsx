import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import TeacherBlack from '../../assets/image/SVG/teacher-black.svg';

const OverViewNew: React.FC = () => {
	return (
		<div className='overview-dash'>
			<Container>
				<Row>
					<Col md={12}>
						<div className='top_btn'>
							<Button>Overview</Button>
							<Button>
								LEctures <span>30</span>
							</Button>
						</div>

						<div className='mt-4'>
							<p className='font-sz-24px font-wg-500'>All</p>
							<p className='font-sz-16px mt-2'>Sunday, 28 Sep 2021</p>

							<div className='d-flex mt-3'>
								{[
									{ icon: TeacherBlack, label: 'Courses', count: 20 },
									{ icon: TeacherBlack, label: 'Teachers', count: 48 },
									{ icon: TeacherBlack, label: 'Students', count: 80 },
								].map((data, key) => (
									<div key={key} className='d-flex align-items-center bg-grey'>
										<Image
											alt={data.label}
											src={data.icon}
											className='img-fluid mr-2'
										/>

										<p>
											{data.label}: {data.count}
										</p>
									</div>
								))}
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default OverViewNew;
