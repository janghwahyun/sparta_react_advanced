import React from 'react';
import { useSelector } from 'react-redux';
import { apiKey } from './firebase';

const Permit = props => {
  const user_info = useSelector(state => state.user.user);
  const _session_Key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_Key) ? true : false;

  if (is_session && user_info) {
    return <>{props.children}</>;
  }
  return null;
};

export default Permit;
