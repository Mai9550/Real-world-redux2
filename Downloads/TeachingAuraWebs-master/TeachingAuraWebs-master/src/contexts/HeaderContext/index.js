import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { axiosApiInstance } from '../../inversify.config';

export const HeaderContext = createContext();
export const useHeader = () => {
  return useContext(HeaderContext);
};

const HeaderProvider = ({ children }) => {
  const [instituteInfo, setInstituteInfo] = useState(null);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchInstituteInfo = useCallback((instituteId) => {  
    if (!instituteInfo) {
      setLoading(true);
    }
    axiosApiInstance.get(`/institute/${instituteId}`).then((response) => {
      const apidata = response.data;
      setLoading(false);
      setInstituteInfo(apidata);

    }).catch(function (error) {
        setLoading(false);
        setError(error);
    });
  }, [instituteInfo]);

  const value = useMemo(() => {
    return {
      submitting, instituteInfo, loading, error, setInstituteInfo, fetchInstituteInfo, setSubmitting, setLoading,
    };
  }, [submitting, instituteInfo, error, loading]);

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
};

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderProvider;
