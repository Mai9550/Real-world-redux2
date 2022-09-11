import Grid from "@mui/material/Grid";
import React from "react";

export default function ViewAnswers(props) {
    const Students = () => (
        <Grid style={{background: "#eeeeee", padding: 20, margin: 10, borderRadius: 30}}>
            dskjfnsdk
        </Grid>
    )
    const ListOfStudents = () => {
        return (
            <Grid style={{padding: 40}}>
                <Students/>
                <Students/>
                <Students/>
            </Grid>
        )
    }
    const SearchBox = () => {
        return (
            <Grid container direction={"column"} xs={12}>

                <Grid style={{padding: 20}} container xs={12}>
                    <i className="fa fa-search"/>

                    <Grid style={{background: "pink"}} xs={12}>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
    return (
        <Grid style={{padding: 10, borderRight: 10}}>
            <Grid xs={6} style={{padding: 30, borderRadius: 30, background: "#ffffff"}}>
                List of Students
                <SearchBox/>
                <Grid>
                    <ListOfStudents/>
                </Grid>
            </Grid>
        </Grid>
    )
}
