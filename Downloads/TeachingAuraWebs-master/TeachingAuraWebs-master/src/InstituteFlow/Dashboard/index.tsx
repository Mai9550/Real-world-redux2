import React, { useEffect, useState } from 'react';
import '../../assets/css/style.scss';
import Header from '../../components/Header';
import Side_Menu from '../../components/Side_Menu';
import LecturesSubc from './LecturesSubc';
import { useInjection } from 'inversify-react';
import { AxiosInstance } from 'axios';
import { SignInDetails } from '../../LoginFlow/SignInDetails';
import { useNavigate } from 'react-router-dom';
import OverView from './OverView';
import OverViewNew from './OverViewNew';

const Dashboard = () => {
	const [overView, setOverView] = useState(1);
	const signInDetails = useInjection<SignInDetails>('signInDetails');
	const [overviewData, setOverviewData] = React.useState({});

	const client = useInjection<AxiosInstance>('client');

	const loader = async () => {
		const response = await client.get(
			'/institute/' + signInDetails.id + '/overview'
		);
		await console.log('=>> ', response.data);
		setOverviewData(response.data);
	};

	const navigate = useNavigate();
	useEffect(() => {
		navigate('/instituteHome');
		loader();
		//console.log(overView)
	}, []);

	return (
		<div className='content_full_container box_ladto'>
			<Side_Menu active={'home'}/>

			<div
				className={overView === 2 ? 'content_box content_box22' : 'content_box'}
			>
				<Header title='Home' />

				<div className='conte_box_deboard p-0'>
					<div className='px-[40px] mb-4'>
						<div className='grid grid-cols-3 gap-x-4 sm:grid-cols-4 lg:grid-cols-5 space-x-3'>
							<button
								className={`${
									overView === 1
										? 'box_flex_btn box_flex_btn_primary'
										: 'box_flex_btn box_flex_btn_grey'
								} font-bold m-0 capitalize rounded-[25px]`}
								onClick={() => setOverView(1)}
							>
								overview
							</button>

							<button
								className={`${
									overView === 2
										? 'box_flex_btn box_flex_btn_primary'
										: 'box_flex_btn box_flex_btn_grey'
								} font-bold m-0 capitalize rounded-[25px]`}
								onClick={() => setOverView(2)}
							>
								lectures
								<span className={'font-wg-500'}>
									{['pastLectures', 'upcomingLectures', 'liveLectures']
										.map(r => overviewData[r])
										.reduce((x, y) => x + y)}
								</span>
							</button>

							{/* <div
								className={
									overView === 2 ? 'dash_btn_lect box_flex_' : 'dash_btn_lect'
								}
							>
								<button
									className={`${
										overView === 2 ? 'box_flex_btn' : 'box_flex_btn'
									} font-bold m-0 py-3 rounded-[25px]`}
									onClick={() => setOverView(2)}
								>
									lectures
									<span>
										{['pastLectures', 'upcomingLectures', 'liveLectures']
											.map(r => overviewData[r])
											.reduce((x, y) => x + y)}
									</span>
								</button>
							</div> */}
						</div>
					</div>

					{overView === 2 ? (
						<LecturesSubc />
					) : (
						<OverView overviewData={overviewData} />
					)}
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
