import React, { Fragment } from 'react';
import {BsExclamationTriangle} from "react-icons/bs"

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <BsExclamationTriangle /> Page Not Found
      </h1>
      <p className='large'>Sorry, this page does not exist</p>
    </Fragment>
  );
};

export default NotFound;