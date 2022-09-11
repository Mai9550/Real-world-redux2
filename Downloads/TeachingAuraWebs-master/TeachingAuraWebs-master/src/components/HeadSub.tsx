import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useInjection} from 'inversify-react';
import {SignInDetails} from '../LoginFlow/SignInDetails';
import {RefreshProfile} from '../observables/RefreshEvents';
import {useHeader} from '../contexts/HeaderContext';
import ProfileIc from '../icon/drawable/ProfileIc';
import OutIc from '../icon/drawable/OutIc';
import PropTypes from 'prop-types';
import {getDownloadURL, getStorage, ref} from 'firebase/storage';
import {InstituteControllerService, StudentControllerService, TeacherControllerService} from "../client";

const HeadSub = ({active}) => {
    // const { instituteInfo, fetchInstituteInfo } = useHeader();
    const signInDetails = useInjection<SignInDetails>('signInDetails');
    const navigate = useNavigate();

    async function logOut() {
        await signInDetails.SignOut();
        navigate('/v2/signup');
    }

    const [logo, setLogo] = useState("https://cdn.glitch.global/f1b16922-0983-4ea8-87da-df0548a027df/Group%2042.svg?v=1643963395426");
    const [name, setName] = useState("")
    const storage = getStorage();
    const storageRef = ref(storage, signInDetails.id + '/institute/profile');

    const fetchData = async () => {
        if (signInDetails.role == 'admin') {
            InstituteControllerService.getInstituteById(signInDetails.id + '').then(data => {
                setData(data);
                setName(data['instituteName']);
                setLogo(data['logo'] + "")
            })
        } else if (signInDetails.role == 'student') {
            StudentControllerService.getById(signInDetails.id + '').then(data => {
                setData(data);
                setName(data['name']);
                setLogo(data['profilePicURL'] + "")
            })
        } else {
            TeacherControllerService.getTeacher(signInDetails.id + '').then(data => {
                setData(data);
                setName(data['name']);
                setLogo(data['profilePicURL'] + "")
            })
        }
        await console.log(data)
    }
    const [data, setData] = useState({});
    useEffect(() => {
        fetchData();
        const subscription = RefreshProfile.subscribe(() => {
            fetchData()
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <>
            <div className='ball_icon_box'>
                <i className='fa fa-bell'></i>
                <span>0</span>
            </div>

            <div
                className={`${
                    active === 'profile' ? 'bg-[#2697FE] text-white' : ''
                } profile_box`}
            >
                <div className='image_profile_box'>
                    {/* <img src={logo}/> */}
                    <img src={logo}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src="https://cdn.glitch.global/f1b16922-0983-4ea8-87da-df0548a027df/Group%2042.svg?v=1643963395426";
                        }}
                    />
                </div>

                <h4>{name}</h4>

                <div className='profiel_derowpdowN space-y-2 mt-3'>
                    <Link to='/Profile' className='flex items-center mt-1'>
                        <ProfileIc/>
                        <span className='mx-auto'>Profile</span>
                    </Link>

                    <a
                        onClick={e => logOut()}
                        href='#'
                        className='activ_hover flex items-center mb-1'
                    >
                        <OutIc/>
                        <span className='mx-auto'>Log out</span>
                    </a>
                </div>
            </div>
        </>
    );
};

HeadSub.propTypes = {
    active: PropTypes.string,
};
HeadSub.defaultProps = {
    active: '',
};

export default HeadSub;
