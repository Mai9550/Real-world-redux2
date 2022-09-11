/* eslint-disable react/function-component-definition */
import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import getMonthName from "../../helpers/getMonthName";
import vector from "../../assets/image/SVG/vector.svg";
import "./date-picker.css";
import { useTimeLine } from "../../contexts/TimeLineContext";

export default function DatePicker(props) {
  const { setDateValue } = useTimeLine();
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [month, setMonth] = React.useState<string>(
    getMonthName(new Date().getMonth())
  );
  const [year, setYear] = React.useState<number>(new Date().getFullYear());
  const onSelect = (value) => {
    setMonth(getMonthName(value.getMonth()));
    setYear(value.getFullYear());
  };

  return (
    <div className="flex flex-col items-center relative">
      {/* <div
        className="flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center py-2 px-4 h-[38px] w-[150px] -top-4 absolute"
        style={{ backgroundImage: `url(${vector})` }}
      >
        <p className="flex text-white mb-3 text-sm font-medium">{month}</p>
      </div> */}

      <div className="w-full bg-white rounded-[30px] py-0">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={value}
            onChange={(newValue) => {
              onSelect(newValue);
              setValue(newValue);
              // props.setDateValue(newValue);
              setDateValue(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      {/* <p className="bg-[#2697fe] text-sm font-medium text-white rounded-full py-2 px-4 -translate-y-4">
        {year}
      </p> */}
    </div>
  );
}
