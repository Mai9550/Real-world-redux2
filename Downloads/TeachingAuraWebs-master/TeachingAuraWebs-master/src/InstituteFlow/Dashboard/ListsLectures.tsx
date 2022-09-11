import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useInjection} from 'inversify-react';
import {AxiosInstance} from 'axios';
import {SignInDetails} from '../../LoginFlow/SignInDetails';
import {openInNewTab} from '../Batches/ViewTest';
import bgPoly from '../../assets/image/SVG/bgPoly.svg';
import EnterIc from '../../icon/drawable/EnterIc';

import Clock from '../../assets/image/SVG/clock.svg';
import Calendar from '../../assets/image/SVG/calendar.svg';
import Grid from "@mui/material/Grid";

const ListsLectures = props => {
    const client = useInjection<AxiosInstance>('client');
    const signInDetails = useInjection<SignInDetails>('signInDetails');

    const OpenLecture = id => {
        //client.get(`/schedule/meeting/${props}`)

        //console.log("ewjkdnjkwd",id)

        client
            .get(`/schedule/meeting/${id}`)
            .then(r => {
                openInNewTab(r.data);
            })
            .catch(e => console.log(e));
    };
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <Grid container
                  xs={12}
                  className={'py-3 pl-4 pr-3 mb-2'}
                  style={{
                      borderRadius: 25,
                      backgroundImage: `url(${bgPoly})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                  }}
            >
                <Grid className='box_alss_ver' xs={12}>
                    <Grid container xs={4}>
                        <h4
                            className='d-flex align-items-center'
                        >
                            {props.liTitle}
                        </h4>
                    </Grid>
                    <Grid container alignItems={"center"} xs={7.5}>
                        <Grid xs={5}>

                        <span className='d-flex align-items-center'>
						<img
                            alt='calendar'
                            src={Calendar}
                            className='img-fluid mr-1'
                            width='24px'
                        />

                            {props.liDate}
					</span>
                        </Grid>
                        <Grid xs={2.75}>

                        <span className='d-flex align-items-center'>
						<img
                            alt='clock'
                            src={Clock}
                            className='img-fluid mr-1'
                            width='24px'
                        />{' '}
                            {props.liStartTime}
					</span>
                        </Grid>
                        <Grid xs={3.25}>

                            <span className='d-flex align-items-center'>
						<img
                            alt='clock'
                            src={Clock}
                            className='img-fluid mr-1'
                            width='24px'
                        />{' '}
                                {props.liEndTime}
					</span>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        className='box_alss_ver2 flex items-center justify-between'
                        style={{
                            justifyContent: 'space-between',
                        }}

                        xs={7.5}
                    >

                        <Grid></Grid>
                        {/*<button onClick={() => navigate("/batch", {state: {batchId: props.batchId, courseId: props.courseId}})}>*/}
                        <Grid
                            onClick={() =>
                                navigate('/batch', {
                                    state: {
                                        batchId: props.batchId,
                                        courseId: props.courseId,
                                    },
                                })
                            }
                            style={{
                                background: '#FFD981',
                                borderRadius: 20,
                                padding: "0.4rem 1.2rem",
                                cursor: "pointer"
                            }}
                        >
                            <span className={'p-0'}>{props.liAcCode}</span>
                            <br/>
                            <span className={'p-0'}>{props.courseName}</span>

                        </Grid>
                        {/*</button>*/}
                        <Grid>
                            <button onClick={() => OpenLecture(props.liZoomL)}
                                    className='flex items-center'
                                    style={{borderRadius: 25, padding: '1rem 2rem'}}

                            >

                                <EnterIc/>
                                <span style={{paddingLeft: 10}}>Enter</span>

                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ListsLectures;
