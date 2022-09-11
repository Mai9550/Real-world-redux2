import React, { useEffect, useState } from 'react';
import LecturesL from './LecturesL';
import { useInjection } from 'inversify-react';
import { AxiosInstance } from 'axios';
import { SignInDetails } from '../../LoginFlow/SignInDetails';
import {
	RefreshBatchStudentsAndTeachers,
	RefreshLectures,
} from '../../observables/RefreshEvents';

const LecturesSubc = props => {
	const [lectureView, setLectureView] = useState(1);
	const [lecturesData, setLecturesData] = React.useState([]);
	const client = useInjection<AxiosInstance>('client');
	const signInDetails = useInjection<SignInDetails>('signInDetails');

	const load = async () => {
		const response = await client.get(
			'/institute/' + signInDetails.id + '/schedule'
		);
		const lectures = response.data;

		await Promise.all(
			lectures.map(async (indexData, i) => {
				const batch = await client.get(
					'/institute/' + signInDetails.id + '/batch/' + indexData['batchId']
				);
				lectures[i]['batchName'] = batch.data.name;
				lectures[i]['courseName'] = batch.data.courseName;
			})
		);

		setLecturesData(
			props.batchId == undefined
				? lectures
				: lectures.filter(function (lecture) {
						return lecture['batchId'] === props.batchId;
				  })
		);
	};

	useEffect(() => {
		load();
		const subscription = RefreshLectures.subscribe(() => {
			load();
		});
		return () => {
			subscription.unsubscribe();
		};
	}, []);

	return (
		<div className='flex flex-col flex-grow relative overflow-y-auto'>
			<div className='px-[40px]' style={{ paddingTop: 10 }}>
				<div className='bbox_ted_f'>
					<button
						className={lectureView === 1 ? 'active_v text-xl' : ''}
						onClick={() => setLectureView(1)}
					>
						Past lectures
					</button>
					<button
						className={lectureView === 2 ? 'active_v' : ''}
						onClick={() => setLectureView(2)}
					>
						Live lectures
					</button>
					<button
						className={lectureView === 3 ? 'active_v' : ''}
						onClick={() => setLectureView(3)}
					>
						Upcoming lectures
					</button>
				</div>
			</div>

			<div className='className_over_view_con flex-grow overflow-y-auto px-[40px]'>
				<div className={lectureView === 1 ? 'd_blocks px-4' : 'd_nones'}>
					<LecturesL
						instituteId={props.instituteId}
						lecturesData={lecturesData.filter(function (lecture) {
							return lecture['endTime'] < Date.now();
						})}
					/>
				</div>

				<div className={lectureView === 2 ? 'd_blocks px-4' : 'd_nones'}>
					<LecturesL
						instituteId={props.instituteId}
						lecturesData={lecturesData.filter(function (lecture) {
							return (
								lecture['startTime'] <= Date.now() &&
								lecture['endTime'] >= Date.now()
							);
						})}
					/>
				</div>

				<div className={lectureView === 3 ? 'd_blocks px-4' : 'd_nones'}>
					<LecturesL
						instituteId={props.instituteId}
						lecturesData={lecturesData.filter(function (lecture) {
							return lecture['startTime'] > Date.now();
						})}
					/>
				</div>
			</div>
		</div>
	);
};
export default LecturesSubc;
