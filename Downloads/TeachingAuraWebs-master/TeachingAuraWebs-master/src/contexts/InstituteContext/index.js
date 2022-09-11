import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { axiosApiInstance } from "../../inversify.config";

export const InstituteContext = createContext();
export const useInstitute = () => {
  return useContext(InstituteContext);
};

const InstituteProvider = ({ children }) => {
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedInstituteId, setSelectedInstituteId] = useState(null);
  const [selectedInstitute, setSelectedInstitute] = useState(null);

  const fetchInstitutes = useCallback(
    (signInDetails) => {
      if (institutes.length <= 0) {
        setLoading(true);
      }
      axiosApiInstance
        .get(`/${signInDetails.role}/${signInDetails.id}/institutes`)
        .then((response) => {
          const apidata = response.data;
          setLoading(false);
          setInstitutes(apidata);
          console.log(apidata);
        })
        .catch(function (error) {
          setLoading(false);
          setError(error);
        });
    },
    [institutes]
  );

  const value = useMemo(() => {
    return {
      loading,
      error,
      institutes,
      selectedInstitute, 
      selectedInstituteId,
      setSelectedInstituteId,
      setSelectedInstitute,
      fetchInstitutes,
      setLoading,
    };
  }, [institutes, error, loading, selectedInstitute, selectedInstituteId]);

  return (
    <InstituteContext.Provider value={value}>
      {children}
    </InstituteContext.Provider>
  );
};

InstituteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InstituteProvider;
