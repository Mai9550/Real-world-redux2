import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { axiosApiInstance } from "../../inversify.config";

export const TimeLineContext = createContext();
export const useTimeLine = () => {
  return useContext(TimeLineContext);
};

const TimeLineProvider = ({ children }) => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dateValue, setDateValue] = useState(null);

  const fetchSchedule = useCallback(
    (instituteId,signInDetails) => {
      if (schedule.length <= 0) {
        setLoading(true);
      }
      axiosApiInstance
        .get(`/${signInDetails.role}/${signInDetails.id}/institute/${instituteId}/schedule`)
        .then((response) => {
          const apidata = response.data;
          setLoading(false);
          setSchedule(apidata);
          // console.log(apidata);
        })
        .catch(function (error) {
          setLoading(false);
          setError(error);
        });
    },
    [schedule]
  );

  const value = useMemo(() => {
    return {
      loading,
      error,
      schedule,
      dateValue,
      setDateValue,
      fetchSchedule,
      setLoading,
    };
  }, [schedule, dateValue, error, loading]);

  return (
    <TimeLineContext.Provider value={value}>
      {children}
    </TimeLineContext.Provider>
  );
};

TimeLineProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TimeLineProvider;
