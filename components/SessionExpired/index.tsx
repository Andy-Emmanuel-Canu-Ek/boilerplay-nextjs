import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import paths from 'shared/constants/paths';

const SessionExpired = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(paths.login);
  }, []);

  return <></>;
};

export default SessionExpired;
