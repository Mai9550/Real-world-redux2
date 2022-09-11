import React from "react";
import Grid from '@mui/material/Grid';
import WaveIc from "../../icon/drawable/WaveIc";
import TickIc from "../../icon/drawable/TickIc";

const Schedule_De = (props) => {
  return (
      <div className={props.s_active?"box_rial_card box_r_activ relative rounded-[30px]" : "box_rial_card rounded-[30px]"}>
        {props.s_active && (
          <div className="left-0 bottom-0 absolute">
            <TickIc />
          </div>
        )}
        <div className="flex justify-between">
        <div>
        <h4>{props.s_value}</h4>
        <span>{props.s_name}</span>
        </div>
        {props.s_show && <WaveIc />}
        </div>
      </div>
  );
};

export default Schedule_De;
