import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full bg-gray-200 rounded-lg border shadow-md">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.978521960532!2d-79.3816002!3d43.648615199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b351cde7e69bd%3A0x84d218f9deea12af!2sManer%20Law!5e0!3m2!1sen!2sca!4v1768679834593!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '0.5rem' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
