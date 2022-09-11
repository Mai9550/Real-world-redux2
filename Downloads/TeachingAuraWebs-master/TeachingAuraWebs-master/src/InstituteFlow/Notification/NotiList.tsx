import React from 'react';
import {useInjection} from 'inversify-react';
import {AxiosInstance} from 'axios';
import downloadIcon from '../../icon/svg/Download Ic.svg';
import {openInNewTab} from '../Batches/ViewTest';
import {SignInDetails} from '../../LoginFlow/SignInDetails';
import {Grid} from "@mui/material";

const NotiList = ({data}) => {
    const client = useInjection<AxiosInstance>('client');
    const instituteId = useInjection<SignInDetails>('signInDetails').id;

    let attachmentLink;
    const getAttachmentById = async id => {
        attachmentLink = (
            await client.get(`/institute/${instituteId}/attachment/${id}`)
        ).data.url;
    };

    return (
        <div className="card border-0 flex-grow bg-[#2697FE] "
             style={{background: '#2697FE', borderRadius: 30, color: "#ffffff"}}>
            <div className="card-body flex items-end justify-between" style={{display: "flex", alignItems: "center"}}>
                <blockquote className="blockquote mb-0 flex flex-wrap flex-grow">
                    <p
                        style={{
                            fontSize: '20px',
                            display: "flex",
                            alignItems: "center",
                            margin: 0
                            //padding: 10,
                            //paddingBottom: 0,
                        }}
                    >
                        {data?.content}
                    </p>
                    <Grid container direction={'row'}>
                        {data?.attachmentDetailsList.map(r => (
                            <Grid container direction={"row"} style={{cursor:"pointer",background: "#7DC1FE", width: "fit-content"}}
                                  className={'px-3 py-2 rounded-[20px] mr-2 mt-2'}
                                  onClick={async () => {
                                      await getAttachmentById(r?.id);
                                      openInNewTab(attachmentLink);
                                  }}
                            >
                                <span className={'mr-2'}>{r?.name}</span>
                                <img src={downloadIcon} alt=""/>
                            </Grid>
                        ))}
                    </Grid>
                </blockquote>
                <div className="relative ">
                    <button
                        style={{color: '#ffffff'}}
                        className="btn dropdown-toggle border-0 rounded-0px"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    />
                    <ul
                        style={{borderRadius: '35px', padding: 0, border: 'none'}}
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                    >
                        <div className="container flex space-x-6 w-full px-4 pb-4 pt-3">
                            <div className="flex flex-col">
                                <p style={{fontSize: 24, color: "#888888", marginBottom: 2}}>Course:</p>
                                <ul className="list-item">
                                    {data?.batches?.map(r => (
                                        <li className="whitespace-nowrap text-sm">
                                            - {r?.courseName}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col" style={{fontSize: 24}}>
                                <p style={{fontSize: 24, color: "#888888", marginBottom: 2}}>Batch:</p>

                                <div className="flex flex-col space-y-2">
                                    {data?.batches.map(r => (
                                        <button
                                            type="button"
                                            style={{
                                                fontSize: 13,
                                                background: '#90D0F0'
                                            }}
                                            className="btn truncate"
                                        >
                                            Batch - {r.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NotiList;