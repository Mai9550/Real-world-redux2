import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { axiosApiInstance } from '../../inversify.config';

export const DialogContext = createContext();
export const useDialog = () => {
  return useContext(DialogContext);
};

const DialogProvider = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState(null);  
  const [loading, setLoading] = useState(false);
  const [openTopic, setOpenTopic] = useState(false);

  const value = useMemo(() => {
    return {
      currentTopic, openTopic, setOpenTopic, loading, setCurrentTopic, setLoading
    };
  }, [currentTopic, openTopic, loading]);

  return (
    <DialogContext.Provider value={value}>
      {children}
    </DialogContext.Provider>
  );
};

DialogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DialogProvider;
