import React, { useEffect, useState, useCallback, useMemo } from "react";
import "./simpleMap.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";

const tunisCenterCoord = [36.9797, 10.7642];
const zoom = 8;
function DisplayPosition({ map }) {
  const [position, setPosition] = useState(map.getCenter());

  const onClick = useCallback(() => {
    map.setView(tunisCenterCoord, zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);
  return (
    <p style={{ color: "white" }}>
      Latitude: {position.lat.toFixed(4)}, Longitude: {position.lng.toFixed(4)}{" "}
      <button className="rounded btn btn-primary" onClick={onClick}>
        Center
      </button>
    </p>
  );
}

function SimpleMap() {
  const [map, setMap] = useState(null);
  const tunisCenterCoord = [36.9797, 10.7642];

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={tunisCenterCoord}
        zoom={zoom}
        scrollWheelZoom={true}
        whenCreated={setMap}
        id="map"
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Street Map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satelite view">
            <TileLayer
              attribution='&copy; <a href="http://www.esri.com/">Esri</a> contributors'
              url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <Marker position={tunisCenterCoord}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    ),
    []
  );

  return (
    <div>
      {displayMap}
      <div
        style={{
          backgroundColor: "#4F77AA",
          width: "350px",
          marginLeft: "53%",
        }}
        className="rounded"
      >
        {map ? <DisplayPosition map={map} /> : null}
      </div>
    </div>
  );
}

export default SimpleMap;
