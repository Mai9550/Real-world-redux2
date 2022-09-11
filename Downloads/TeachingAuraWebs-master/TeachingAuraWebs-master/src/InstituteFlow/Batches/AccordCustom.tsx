import React, { useEffect, useState } from 'react';
// Accodina
import { withStyles } from '@mui/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// component
import DeleteModulsC from '../StudentsDes/DeleteModulsC';
import { useInjection } from 'inversify-react';
import { AxiosInstance } from 'axios';
import { SignInDetails } from '../../LoginFlow/SignInDetails';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

// icon

// Accodiantion

import TrushSquare from '../../assets/image/SVG/trush-square.svg';

const Accordion = withStyles({
	root: {
		backgroundColor: '#fff',
		borderRadius: 30,
		boxShadow: '0px 0px 20px #0001',
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			margin: 'auto',
		},
	},
	expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
		backgroundColor: '#2697fe',
		marginBottom: -1,
		padding: '0px 15px',

		color: ' #fff',

		borderRadius: 30,

		minHeight: 56,
		'&$expanded': {
			minHeight: 56,
			borderRadius: 30,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
	root: {
		borderRadius: 30,
		padding: '40px',
		fontSize: '25px',
		fontWeight: '450',
	},
}))(MuiAccordionDetails);

const AccordCustom = props => {
	const storage = getStorage();
	const [logo, setLogo] = useState("https://cdn.glitch.global/f1b16922-0983-4ea8-87da-df0548a027df/Group%2042.svg?v=1643963395426");

	useEffect(() => {
		setLogo(props["profilePic"]);
	}, []);

	const [batches, setBatches] = useState([]);

	const [expanded, setExpanded] = React.useState('panel1');

	const client = useInjection<AxiosInstance>('client');
	const instituteId = useInjection<SignInDetails>('signInDetails').id;

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	// Accodiantion End
	const [checked, setChecked] = React.useState(false);

	const getBatches = id => {
		if (props['verify'] === 'student') {
			client
				.get(`/institute/${instituteId}/student/${id}/batch`)
				.then(r => {
					setBatches(r.data);
					console.log(r.data);
				})
				.catch(e => console.log(e));
		}
	};

	useEffect(() => {
		getBatches(props['isx']);
		setChecked(false);
	}, []);

	const handleChange2 = event => {
		setChecked(event.target.checked);
		props.isSelected(checked);
		//console.log(checked);
	};

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleCloses = () => setOpen(false);

	const navigate = useNavigate();

	return (
		<React.Fragment>
			<Accordion
				square
				expanded={expanded === props.uKey}
				onChange={
					props.addbtnShow === true
						? handleChange(props.uKey)
						: handleChange(props.uKey)
				}
			>
				<AccordionSummary
					className='accord_Summarey'
					expandIcon={
						<ArrowDropDownIcon style={{ color: '#fff', fontSize: '30px' }} />
					}
					aria-controls={props.uKey}
					id={props.uKey}
				>
					<div className='study_inner2'>
						<div className='imgbox_vs'>
							<img src={logo}
									onError={({ currentTarget }) => {
										currentTarget.onerror = null; // prevents looping
										currentTarget.src="https://cdn.glitch.global/f1b16922-0983-4ea8-87da-df0548a027df/Group%2042.svg?v=1643963395426";
									}}
							/>
						</div>
						<div>
							<h4>{props.uName}</h4>
							{/* <Typography
								variant='subtitle2'
								className='name_tie'
								display='block'
								gutterBottom
							>
								{props.uName}
							</Typography> */}

							<Typography
								variant='caption'
								className='name_subs'
								display='block'
							>
								{props.uEmails}
							</Typography>
							<Typography
								variant='caption'
								className='name_subs'
								display='block'
							>
								{props.uPhones}
							</Typography>
						</div>
					</div>

					<div
						className={
							props.addbtnShow === true && !props.addbtnbtn === true
								? 'd_blocks vsbd'
								: 'd_nones'
						}
					>
						<Checkbox
							checked={checked}
							onChange={handleChange2}
							inputProps={{ 'aria-label': 'controlled' }}
							className={checked === true ? 'chebox_custom2' : 'chebox_custom'}
						/>
					</div>

					<div
						className={props.addbtnbtn === true ? 'd_blocks vsbd' : 'd_nones'}
					>
						<button
							className='boxdv d-flex justify-content-center align-items-center'
							onClick={handleOpen}
						>
							{/* <i className='fa fa-trash'></i> */}

							<img
								alt='delete'
								src={TrushSquare}
								className='img-fluid'
								width='28px'
							/>
						</button>
					</div>
				</AccordionSummary>

				<div className='d_blocks student_details'>
					<AccordionDetails>
						<div className='d-flex justify-content-between align-items-center'>
							<h4>
								<i className='fa fa-phone mr-3'></i>
								{props.uPhone}
							</h4>

							{/* <Typography
							variant='subtitle2'
							className='name_tie marvd'
							component='div'
						>
							<i className='fa fa-phone' style={{ marginRight: '10px' }}></i>
							{props.uPhone}
						</Typography> */}

							{/*<Typography variant="subtitle2" className="name_tie" component="div" gutterBottom>*/}
							{/*    <i className="fa fa-envelope" style={{marginRight: "10px"}}></i>*/}
							{/*    {props.uEmail}*/}
							{/*</Typography>*/}

							<div
								className={
									props.addCode === true
										? 'd_blocks  box_alss_ver2 vsd_show'
										: 'd_nones'
								}
							>
								{console.log(batches)}
								{batches.map(i => (
									<span
										style={{
											background: props.liNotsColor,
											cursor: 'pointer',
											borderRadius: 20,
											padding: '10px 20px',
											marginRight: '10px',
											fontSize: '18px',
										}}
										onClick={() =>
											navigate('/batch', {
												state: {
													batchId: i['batchDetails']['id'],
													courseId: i['id'],
												},
											})
										}
									>
										{i['batchDetails']['name']}
										<br />
										{i['name']}
									</span>
								))}
							</div>
						</div>
					</AccordionDetails>
				</div>
			</Accordion>
			<DeleteModulsC
				open_mode={open}
				closemode={handleCloses}
				ids={props.isx}
				verifys={props.verify}
				batchId={props.batchId}
				name={props.uName}
			/>
		</React.Fragment>
	);
};

export default AccordCustom;
