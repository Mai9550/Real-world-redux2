import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { axiosApiInstance } from '../../inversify.config';

export const TeacherContext = createContext();
export const useTeacher = () => {
  return useContext(TeacherContext);
};

const TeacherProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchAllTeachers = useCallback((instituteId) => {  
    if (teachers.length <= 0) {
      setLoading(true);
    }
    axiosApiInstance.get(`/institute/${instituteId}/teachers`).then((response) => {
      const apidata = response.data;
      setLoading(false);
      setTeachers(apidata);

    }).catch(function (error) {
        setLoading(false);
        setError(error);
    });
  }, [teachers]);

  const value = useMemo(() => {
    return {
      submitting, teachers, loading, error, setTeachers, fetchAllTeachers, setSubmitting, setLoading,
    };
  }, [submitting, teachers, error, loading]);

  return (
    <TeacherContext.Provider value={value}>
      {children}
    </TeacherContext.Provider>
  );
};

TeacherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TeacherProvider;
