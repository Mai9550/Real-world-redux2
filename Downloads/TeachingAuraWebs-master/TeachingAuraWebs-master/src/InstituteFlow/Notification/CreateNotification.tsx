/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-loop-func */
import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

import Select from 'react-select';
import {useInjection} from 'inversify-react';
import axios, {AxiosInstance} from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import {generateId} from '../AllCourses/AddCourses';
import {SignInDetails} from '../../LoginFlow/SignInDetails';
import {RefreshAnnouncements} from '../../observables/RefreshEvents';
import HeadSub from '../../components/HeadSub';
import SideMenu from '../../components/Side_Menu';
import UploadedFiles from './UploadedFiles';
import {TeacherControllerService} from "../../client";

const customStyles = {
    control: (base, state) => ({
        ...base,
        background: '#EEEEEE',
        // height
        marginTop: state.isFocused ? '20px' : '20px',
        // match with the menu
        borderRadius: state.isFocused ? '30px' : '30px',
        // Overwrittes the different states of border
        borderColor: state.isFocused ? '#EEEEEE' : '#EEEEEE',
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        '&:hover': {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? 'gray' : 'gray',
        },
    }),
    menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0,
    }),
    menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0,
    }),
};

const CreateNotification = () => {
    const navigate = useNavigate();
    const Input = styled('input')({
        display: 'none',
    });

    const client = useInjection<AxiosInstance>('client');
    // const signIndetails = useInjection<SignInDetails>('signInDetails').id;

    const finalData = {
        attachmentIds: [],
        batches: [''],
        content: '',
        id: '',
    };
    const [instituteBatches, setInstituteBatches] = useState([]);
    const [courseList, setCourseList] = useState([]);
    const [batchList, setBatchList] = useState([]);
    const getInstituteBatches = async () => {
        if (signInDetails.role == 'admin') {
            client.get(`/institute/${signInDetails.id}/batch`).then(response => {
                setInstituteBatches(response.data);
                setCourseList(
                    response.data.map(i => ({
                        value: i.courseId,
                        label: i.courseName,
                    })),
                );
                setBatchList(
                    response.data.map(i => ({
                        value: i.id,
                        label: i.name,
                        courseId: i.courseId,
                    })),
                );
            })

        } else {
            client.get(`/teacher/${signInDetails.id}/batches`).then(response => {
                const data = response.data.filter(r => r.instituteId === navigationParam.selectedInstituteId)
                setInstituteBatches(data);
                setCourseList(
                    data.map(i => ({
                        value: i.courseId,
                        label: i.courseName,
                    })),
                );
                setBatchList(
                    data.map(i => ({
                        value: i.id,
                        label: i.name,
                        courseId: i.courseId,
                    })),
                );
                console.log(data)

            })
        }
    };
    useEffect(() => {
        getInstituteBatches();
    }, []);

    const [selectedCourseOption, setSelectedCourseOption] = useState(
        [],
    );
    const [selectedBatchOption, setSelectedBatchOption] = useState([]);

    // handle onChange event of the dropdown of courses
    const handleCourseChange = e => {
        setSelectedCourseOption(e);
    };
    // handle onChange event of the dropdown of batch
    const handleBatchChange = e => {
        setSelectedBatchOption(e);
    };
    const exclient = axios.create({
        baseURL: 'https://teachingaura-dk6fq7sbfa-uc.a.run.app/api/',
    });

    async function uploadFile(url, file) {
        // console.log("step4", file)
        await exclient.put(url, file, {
            headers: {
                'Content-Type': file.type,
            },
        });
    }
    const signInDetails = useInjection<SignInDetails>('signInDetails');
    const location = useLocation();
    const navigationParam = location.state;

    // upload file button
    const [allAttachments, setAllAttachments] = useState([]);
    const [content, setContent] = useState('');
    let listOfAttachments;
    const uploadAttachment = async files => {
        listOfAttachments = [];

        console.log('files=> ', files);
        const id = (signInDetails.role == 'admin') ? signInDetails.id : navigationParam['']

        for (let itr = 0; itr < files.length; itr += 1) {
            const data = {
                attachmentType: '',
                id: generateId(),
                name: files[itr].name,
                url: '',
            };
            if (files[itr].type.includes('pdf')) {
                data.attachmentType = 'PDF';
            } else if (files[itr].type.includes('image')) {
                data.attachmentType = 'IMAGE';
            } else if (files[itr].type.includes('video')) {
                data.attachmentType = 'VIDEO';
            } else {
                return;
            }

            await client
                .post(`/institute/${(signInDetails.role==='admin'?signInDetails.id:navigationParam.selectedInstituteId)}/attachment/upload-url`, data)
                .then(async response => {
                    data.url = response.data.url;
                    await uploadFile(data.url, files[itr]).then(async r => {
                        await client
                            .get(`/institute/${(signInDetails.role==='admin'?signInDetails.id:navigationParam.selectedInstituteId)}/attachment/${data.id}`)
                            .then(async response => {
                                data.url = response.data.url;
                                listOfAttachments.push(response.data);
                            });
                    });
                });

            const temp = listOfAttachments.concat(allAttachments);
            await setAllAttachments(temp);
        }

        const temp = listOfAttachments.concat(allAttachments);
        await setAllAttachments(temp);
    };

    const deleteAttachment = async (e, id) => {
        setAllAttachments(allAttachments.filter(itr => itr['id'] !== id));
    };

    const HandleDescription = e => {
        setContent(e.target.value);
    };
    const CreateNotice = () => {
        finalData.attachmentIds = allAttachments.map(r => r['id']);
        finalData.batches = selectedBatchOption.map(r => r['value']);
        finalData.content = content;
        finalData.id = generateId();

        console.log(finalData)
        client.post(`/institute/${(signInDetails.role==='admin'?signInDetails.id:navigationParam.selectedInstituteId)}/notice`, finalData).then(r => {
            RefreshAnnouncements.next();
            navigate(-1)
        }).catch(e => console.log(e))

    };

    return (
        <div className={(signInDetails.role=='admin')?"content_full_container box_ladto":""}>
            {(signInDetails.role=='admin') ? <SideMenu/>:true}
            <div className={(signInDetails.role=='admin')?"content_box content_box22":"content_box content_box22 ml-0"}>
            <header className="heder_nav  ">
                    <div className="box_vc_nav_right box_vc_nav_right22">
                        <a onClick={() => navigate(-1)}>
                            <i className="fa fa-long-arrow-left"/>
                        </a>
                        <h4 style={{borderRight: 0}}>Create Notification</h4>
                    </div>
                    <div className="box_vc_nav_left">
                        <HeadSub/>
                    </div>
                </header>

                <div className="flex flex-col flex-grow px-[40px] overflow-y-auto">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="card border-0"
                                style={{
                                    backgroundColor: '#EEEEEE',
                                    borderRadius: '30px',
                                }}
                            >
                                <div className="card-body">
                                    <label
                                        htmlFor="notification-desc"
                                        style={{width: '100%'}}
                                    >
                                        <small
                                            style={{color: '#888888', marginTop: '5px'}}
                                        >
                                            Notification Description
                                        </small>
                                        <br/>
                                        <textarea
                                            id="notification-desc"
                                            rows={3}
                                            style={{
                                                width: '100%',
                                                border: 'none',
                                                outline: 'none',
                                                padding: '2px',
                                                resize: 'none',
                                                background: 'transparent',
                                            }}
                                            onChange={HandleDescription}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="flex space-y-4 flex-col w-[60%]">
                            <div className="bg-[#EEEEEE] rounded-[30px]">
                                <Select
                                    isMulti
                                    placeholder="Select course"
                                    styles={customStyles}
                                    value={selectedCourseOption}
                                    options={courseList} // list of the data
                                    onChange={handleCourseChange} // assign onChange function
                                />

                                {selectedCourseOption && (
                                    <div
                                        style={{marginTop: 20, lineHeight: '25px'}}
                                    />
                                )}
                            </div>

                            <div className="bg-[#EEEEEE] rounded-[30px]">
                                <Select
                                    isMulti
                                    placeholder="Select Batches"
                                    styles={customStyles}
                                    value={selectedBatchOption}
                                    options={batchList.filter(i =>
                                        selectedCourseOption
                                            .map(r => r['value'])
                                            .includes(i['courseId']),
                                    )} // list of the data
                                    onChange={handleBatchChange} // assign onChange function
                                />

                                {selectedBatchOption && (
                                    <div
                                        style={{marginTop: 20, lineHeight: '25px'}}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="max-w-[30%] flex flex-col items-center">
                            <label
                                htmlFor="contained-button-file"
                                className="btnx_hede2dc flex justify-center"
                            >
                                <Input
                                    accept="*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={e => uploadAttachment(e.target.files)}
                                />
                                <Button
                                    variant="contained"
                                    component="span"
                                    className="btnx_hede flex item-center"
                                >
                                    <CreateNewFolderIcon/>
                                    <span>Upload Files</span>
                                </Button>
                            </label>

                            {allAttachments.length > 0 && (
                                <div className="flex flex-col rounded-[30px] mt-2 bg-white p-4">
                                    <p className="text-center font-bold text-[#888888] pb-3 border-b border-[#EEEEEE]">
                                        Uploaded File
                                    </p>
                                    {allAttachments.map(itr => (
                                        <UploadedFiles
                                            key={itr['id']}
                                            name={itr['name']}
                                            id={itr['id']}
                                            onDelete={deleteAttachment}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-center mt-auto py-4">
                        <button
                            type="button"
                            className="btn btn-primary bg-[#2697FE] text-white rounded-[30px] px-12 py-3"
                            onClick={CreateNotice}
                            style={{
                                padding: '1rem 4rem',
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNotification;
