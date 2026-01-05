import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full bg-gray-200 rounded-lg border shadow-md">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5795.074712885612!2d-80.439111!3d43.428492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b8b652a090cad%3A0x86941e78c380fbde!2sEasyWebToGo%20%E2%80%93%20Fast%20%26%20Simple%20Websites!5e0!3m2!1sen!2sca!4v1767577881717!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '0.5rem' }}
        allowFullScreen={true}
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default Map;
