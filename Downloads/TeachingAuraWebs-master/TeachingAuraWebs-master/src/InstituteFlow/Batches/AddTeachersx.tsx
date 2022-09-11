import React, {useEffect, useState} from "react";
import AccordCustom from "./AccordCustom";
import Button from '@mui/material/Button';
import {useInjection} from "inversify-react";
import {AxiosInstance} from "axios";
import {SignInDetails} from "../../LoginFlow/SignInDetails";
import {RefreshBatchStudentsAndTeachers} from "../../observables/RefreshEvents";


const AddTeachersx = (props) => {
    let listOfStudent: String[] = []

    const client = useInjection<AxiosInstance>("client");
    const instituteId = useInjection<SignInDetails>("signInDetails").id

    const [Teachers, setTeachers] = useState([]);
    const fetchData = async () => {
        //console.log(instituteId)
        client.get(`/institute/${instituteId}/teachers`).then((response => {
            //console.log("dekh le1 => : " + JSON.stringify(response.data))
            const data = response.data;
            //data=0 1 2 3 4 5
            client.get(`/institute/${instituteId}/batch/${props.batchId}/teachers`).then((response => {
                //response 1 2 5
                const temp = data.filter((itr) => !response.data.map((obj) => obj['id']).includes(itr['id']))
                setTeachers(temp)
            })).catch(e => {
                //console.log("chiii=> ");
                console.log(e)
            })

            //console.log("=>>>1:: " + JSON.stringify(Teachers))
        })).catch(e => console.log(e))


//      console.log("=>>>>>>>>>>" + JSON.stringify(BatchStudents))

    }
    useEffect(() => {
        fetchData()

        const subscription = RefreshBatchStudentsAndTeachers.subscribe(() => {
            fetchData()
        })
        return () => {
            subscription.unsubscribe()
        }

    }, [])

    const HandleCheck = (e, id) => {
        (!e) ? listOfStudent.push(id) : listOfStudent = ((listOfStudent.length > 0) ? listOfStudent.filter((itr) => itr != id) : [])
        //console.log(listOfStudent)
    }
    const HandleAddTeachers = (e) => {
        props.setBover(1)

        listOfStudent.map((itr) =>
            client.post(`/institute/${instituteId}/batch/${props.batchId}/teacher/${itr}`).then((response) => {
                    console.log("ye raha resposnse => : " + JSON.stringify(response.data))
                    RefreshBatchStudentsAndTeachers.next()
                }
            ).catch((e) => console.log("error=> " + e))
        )

    }

    return (
        <div className="flex-grow overflow-y-auto">
            <div className="space-y-5 px-[40px]">
                {
                    Teachers.map((itr, i) => (
                        <AccordCustom
                            isx={itr['id']}
                            uName={itr['name']}
                            uKey={itr['id']}
                            uPhone={itr["contactNumber"]}
                            uEmail={itr["email"]}
                            value={itr['id']}
                            profilePic={itr["profilePicURL"]}
                            addbtnShow={true}
                            isSelected={(e) => HandleCheck(e, itr['id'])}
                        />
                    ))
                }
            </div>
            <div className="box_st_positio bottom-0 sticky">
                <Button variant="contained" style={{
                    background: "#fff",
                    padding: "8px 80px",
                    borderRadius: "15px",
                    textTransform: "capitalize",
                    color: "#333"
                }} onClick={HandleAddTeachers}>Add</Button>
            </div>
        </div>
    );

    /*
        return (
            <>

                <React.Fragment>
                    {

                    }
                    <AccordCustomHandleAddStudents
                        uName={"Reza Hashemi"}
                        uEmails={"Reza00498895@gmail.com"}
                        uPhones={"+98 903 965 0049"}
                        uKey={"user1"}
                        addbtnShow={true}
                    />


                    <AccordCustom
                        uName={"Reza Hashemi"}
                        uEmails={"Reza00498895@gmail.com"}
                        uPhones={"+98 903 965 0049"}
                        uKey={"user1"}
                        addbtnShow={true}
                    />
                </React.Fragment>


                <div className="box_st_positio">

                    <Button variant="contained" style={{
                        background: "#fff",
                        color: "#333",
                        padding: "8px 80px",
                        borderRadius: "15px",
                        textTransform: "capitalize"
                    }}>Add</Button>
                </div>
            </>
        );*/
};

export default AddTeachersx;
