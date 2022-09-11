import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { axiosApiInstance } from '../../inversify.config';

export const BatchContext = createContext();
export const useBatch = () => {
  return useContext(BatchContext);
};

const BatchProvider = ({ children }) => {
  const [batchData, setBatchData] = useState(null); 
  const [allBatches, setAllBatches] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchBatchData = useCallback((instituteId, batchId) => {  
    if (!batchData) {
      setLoading(true);
    }
    axiosApiInstance.get(`/institute/${instituteId}/batch/${batchId}`).then((response) => {
      const apidata = response.data;
      setLoading(false);
      setBatchData(apidata);

    }).catch(function (error) {
        setLoading(false);
        setError(error);
    });
  }, [batchData]);

  const fetchAllBatches = useCallback((instituteId) => {  
    if (allBatches.length <= 0) {
      setLoading(true);
    }
    axiosApiInstance.get(`/institute/${instituteId}/batch`).then((response) => {
      const apidata = response.data;
      setLoading(false);
      setAllBatches(apidata);

    }).catch(function (error) {
        setLoading(false);
        setError(error);
    });
  }, [allBatches]);

  const value = useMemo(() => {
    return {
      submitting, allBatches, batchData, loading, error, fetchAllBatches, setBatchData, fetchBatchData, setSubmitting, setLoading,
    };
  }, [submitting, batchData, error, loading]);

  return (
    <BatchContext.Provider value={value}>
      {children}
    </BatchContext.Provider>
  );
};

BatchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BatchProvider;
