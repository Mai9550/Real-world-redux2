import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { axiosApiInstance } from '../../inversify.config';
import generateId from '../../helpers/generateId';

export const AllCoursesContext = createContext();
export const useAllCourses = () => {
  return useContext(AllCoursesContext);
};

const AllCoursesProvider = ({ children }) => {
  const initials = {
    description: '',
    name: '',
    subjects: [
      {
        id: generateId(),
        topics: [],
      },
    ],
  };
  const [currentCourse, setCurrentCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSubjectId, setCurrentSubjectId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [newCourse, setNewCourse] = useState(initials);

  const navigate = useNavigate();

  const onLoadCourse = useCallback(
    (instituteId, courseId) => {
      if (!currentCourse) {
        setLoading(true);
      }
      axiosApiInstance
        .get(`/institute/${instituteId}/course/${courseId}`)
        .then(response => {
          setLoading(false);
          const apidata = response.data;
          apidata.subjects.map(itr =>
            itr.topics.sort((a, b) => {
              return a.ordering - b.ordering;
            }),
          );
          //console.log("response init => ",apidata)
          setCurrentCourse(apidata);
        })
        .catch(error => {
          setLoading(false);
          setError(error);
        });
    },
    [currentCourse],
  );

  const fetchAllCourses = useCallback(
    instituteId => {
      if (courses.length <= 0) {
        setLoading(true);
      }
      axiosApiInstance
        .get(`/institute/${instituteId}/course`)
        .then(response => {
          const apidata = response.data;
          setLoading(false);
          setCourses(apidata);
        })
        .catch(error => {
          setLoading(false);
          setError(error);
        });
    },
    [courses],
  );

  const onUpdateCourse = useCallback(
    (instituteId, courseId) => {
      setSubmitting(true);
      const data = {
        instituteId,
        ...currentCourse,
      };
      axiosApiInstance
        .put(`/institute/${instituteId}/course/${courseId}`, data)
        .then(response => {
          setSubmitting(false);
          //console.log("response final => ",response.data)
          navigate(-1);

        })
        .catch(error => {
          setSubmitting(false);
          setError(error);
        });
    },
    [currentCourse],
  );

  const onAddCourse = useCallback(
    instituteId => {
      setSubmitting(true);
      const data = {
        ...newCourse,
        instituteId,
        id: generateId(),
      };
      axiosApiInstance
        .post(`/institute/${instituteId}/course`, data)
        .then(response => {
          setSubmitting(false);
          navigate(-1);
        })
        .catch(error => {
          setSubmitting(false);
          setError(error);
        });
    },
    [newCourse],
  );

  const value = useMemo(() => {
    return {
      currentCourse,
      onAddCourse,
      courses,
      newCourse,
      currentSubjectId,
      submitting,
      loading,
      error,
      fetchAllCourses,
      setNewCourse,
      onUpdateCourse,
      setCurrentSubjectId,
      setError,
      setCurrentCourse,
      setLoading,
      onLoadCourse,
    };
  }, [
    currentCourse,
    newCourse,
    submitting,
    currentSubjectId,
    courses,
    error,
    loading,
  ]);

  return (
    <AllCoursesContext.Provider value={value}>
      {children}
    </AllCoursesContext.Provider>
  );
};

AllCoursesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllCoursesProvider;
