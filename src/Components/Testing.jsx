import React from 'react'
import infos from '../JavaScripts/info';

const Testing = () => {
    console.log(Object.entries(infos.details).map((detail) => detail[1]));
  return (
    <div>Testing</div>
  )
}

export default Testing