import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { axiosApiInstance } from '../../inversify.config';

export const NotificationsContext = createContext();
export const useNotifications = () => {
  return useContext(NotificationsContext);
};

const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [viewNotifications, setViewNotifications] = useState(false);

  const fetchNotifications = useCallback(
    (instituteId) => {
      if (!notifications) {
        setLoading(true);
      }
      axiosApiInstance
        .get(`/institute/${instituteId}/notice`)
        .then((response) => {
          const apidata = response.data;
          setLoading(false);
          setNotifications(apidata);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    },
    [notifications],
  );

  const value = useMemo(() => {
    return {
      submitting,
      viewNotifications,
      setViewNotifications,
      notifications,
      loading,
      error,
      setNotifications,
      fetchNotifications,
      setSubmitting,
      setLoading,
    };
  }, [submitting, viewNotifications, notifications, error, loading]);

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotificationsProvider;
