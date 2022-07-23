import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRef, useState, useEffect } from "react";

const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

export const GoogleMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom: 4, disableDefaultUI: true }));
    }
  }, [ref, map]);

  return (
    <Wrapper apiKey={"AIzaSyDl5Dzght-xb4Y9vieduMNP5IJVoTDVtZQ"} render={render}>
      <div ref={ref} className="w-72 h-72" />
    </Wrapper>
  );
};
