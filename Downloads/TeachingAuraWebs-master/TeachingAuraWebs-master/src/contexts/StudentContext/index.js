import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { axiosApiInstance } from '../../inversify.config';
import { InstituteControllerService } from '../../client';

export const StudentContext = createContext();
export const useStudent = () => {
  return useContext(StudentContext);
};

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [courses, setCourses] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const fetchAllStudents = useCallback(
    (instituteId) => {
      if (students.length <= 0) {
        setLoading(true);
      }

      InstituteControllerService.getInstituteStudents(instituteId)
        .then((response) => {
          setLoading(false);
          setStudents(response);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    },
    [students],
  );

  const fetchAllCourses = useCallback(
    (studentId) => {
      if (courses.length <= 0) {
        setLoading(true);
      }
      axiosApiInstance
        .get(`/student/${studentId}/courses`)
        .then((response) => {
          const apidata = response.data;
          setLoading(false);
          setCourses(apidata);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    },
    [courses],
  );

  const fetchAllAnnouncements = useCallback(
    (studentId) => {
      if (announcements.length <= 0) {
        setLoading(true);
      }
      axiosApiInstance
        .get(`/student/${studentId}/announcements`)
        .then((response) => {
          const apidata = response.data;
          setLoading(false);
          setAnnouncements(apidata);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    },
    [announcements],
  );

  const value = useMemo(() => {
    return {
      submitting,
      students,
      loading,
      error,
      courses,
      announcements,
      fetchAllAnnouncements,
      fetchAllCourses,
      setStudents,
      fetchAllStudents,
      setSubmitting,
      setLoading,
    };
  }, [submitting, students, error, loading, courses, announcements]);

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  );
};

StudentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StudentProvider;
