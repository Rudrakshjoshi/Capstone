
import React from "react";
import GoogleMapReact from "google-map-react";
import FromTo from "./FromTo/FromTo";


const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function MapRide() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
  <div className="map_conatiner">
    <div id="mapp" >
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px"></iframe>
        </div> 
   
        </div>

  );

}
