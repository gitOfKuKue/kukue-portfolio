import React from "react";

const Certifications = ({
  certificate: { certificateId, certificateName, place },
}) => {
  return (
    <>
      <div className="border-b-2 border-b-iconic py-3">
        <h1 className="text-font text-xl">{certificateName}</h1>
        <p className="text-font-light mb-2">({place})</p>
      </div>
    </>
  );
};

export default Certifications;
