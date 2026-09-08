"use client";

import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const SERVICE_AREAS = [
  {
    name: "Bexley",
    position: [51.4416, 0.1487] as [number, number],
    description: "Professional home cleaning services in Bexley.",
  },
  {
    name: "Bexleyheath",
    position: [51.456, 0.148] as [number, number],
    description: "Reliable domestic cleaning services in Bexleyheath.",
  },
  {
    name: "Welling",
    position: [51.461, 0.108] as [number, number],
    description: "Home cleaning services available throughout Welling.",
  },
  {
    name: "Sidcup",
    position: [51.426, 0.103] as [number, number],
    description: "Reliable domestic cleaning services in Sidcup.",
  },
  {
    name: "Eltham",
    position: [51.451, 0.05] as [number, number],
    description: "Professional home cleaning services in Eltham.",
  },
  {
    name: "Erith",
    position: [51.48, 0.175] as [number, number],
    description: "Professional residential cleaning in Erith.",
  },
  {
    name: "Dartford",
    position: [51.446, 0.216] as [number, number],
    description: "Regular, deep and end of tenancy cleaning in Dartford.",
  },
  {
    name: "Bromley",
    position: [51.406, 0.015] as [number, number],
    description: "Professional home cleaning services in Bromley.",
  },
  {
    name: "Swanley",
    position: [51.397, 0.174] as [number, number],
    description: "Domestic cleaning and end of tenancy services in Swanley.",
  },
];

export default function AreaMap() {
  return (
    <section className="relative h-125 w-full overflow-hidden rounded-xl border border-border shadow-sm">
      <MapContainer
        center={[51.438, 0.085]}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomright" />

        {SERVICE_AREAS.map((area) => (
          <CircleMarker
            key={area.name}
            center={area.position}
            radius={10}
            pathOptions={{
              color: "white",
              weight: 3,
              fillColor: "var(--primary)",
              fillOpacity: 1,
            }}
          >
            <Popup>
              <div className="min-w-45">
                <h3 className="mb-1 text-base font-semibold">{area.name}</h3>

                <p className="text-sm text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </section>
  );
}
