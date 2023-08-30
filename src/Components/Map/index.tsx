import React from "react";

const Map = () => {
  return (
    <div className="map">
      <iframe
        className="mapbox"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9511.14480743632!2d69.20984073021512!3d41.3298361502687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8b303ea6cb%3A0xc10570ee75a17d5!2sSaba%20Darmon!5e0!3m2!1sru!2s!4v1690019085744!5m2!1sru!2s"
        width="600"
        height="450"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
