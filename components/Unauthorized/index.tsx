import React, { useEffect } from 'react';

const Unauthorized = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-4">
      <span>NO AUTORIZADO</span>
      <span>No cuenta con los permisos necesarios para poder acceder a esta página</span>
    </div>
  );
};

export default Unauthorized;
