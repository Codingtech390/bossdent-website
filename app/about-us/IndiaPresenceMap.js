"use client";

import { useEffect } from "react";

const cities = [
  { name: "Kashmir", lat: 34.0837, lng: 74.7973 },
  { name: "Dehradun", lat: 30.3165, lng: 78.0322 },
  { name: "Rohtak", lat: 28.8955, lng: 76.6066 },
  { name: "Sonipat", lat: 28.9931, lng: 77.0151 },
  { name: "Delhi", lat: 28.6139, lng: 77.209 },
  { name: "Gurgaon", lat: 28.4595, lng: 77.0266 },
  { name: "Mathura", lat: 27.4924, lng: 77.6737 },
  { name: "Patna", lat: 25.5941, lng: 85.1376 },
  { name: "Hajipur", lat: 25.6884, lng: 85.209 },
  { name: "Muzzafarpur", lat: 26.1209, lng: 85.3647 },
  { name: "Chhapra", lat: 25.7771, lng: 84.7474 },
  { name: "Darbhanga", lat: 26.1542, lng: 85.8918 },
  { name: "Purnia", lat: 25.7771, lng: 87.4753 },
  { name: "Katihar", lat: 25.5377, lng: 87.5706 },
  { name: "Bhagalpur", lat: 25.2425, lng: 86.9842 },
  { name: "Silligudi", lat: 26.7271, lng: 88.3953 },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { name: "Raipur", lat: 21.2514, lng: 81.6296 },
  { name: "Shimoga", lat: 13.9299, lng: 75.5681 },
];

export default function IndiaPresenceMap() {
  useEffect(() => {
    let map;
    import("leaflet").then((L) => {
      // Avoid re-init if already mounted
      if (document.getElementById("bossdent-map")?._leaflet_id) return;

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Custom blue pin icon matching brand color
      const brandIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            width: 14px;
            height: 14px;
            background: #26A7EB;
            border: 2.5px solid #ffffff;
            border-radius: 50%;
            box-shadow: 0 0 0 2px #26A7EB, 0 2px 6px rgba(0,0,0,0.35);
          "></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        popupAnchor: [0, -10],
      });

      map = L.map("bossdent-map", {
        center: [22.5, 82.0],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // Clean light tile layer (CartoDB Positron — minimal, no clutter)
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      // Add city markers
      cities.forEach(({ name, lat, lng }) => {
        const marker = L.marker([lat, lng], { icon: brandIcon }).addTo(map);
        marker.bindPopup(
          `<div style="
            font-family: sans-serif;
            font-size: 13px;
            font-weight: 600;
            color: #1B4873;
            padding: 2px 4px;
          ">${name}</div>`,
          { closeButton: false, offset: [0, -4] },
        );
        marker.on("mouseover", function () {
          this.openPopup();
        });
        marker.on("mouseout", function () {
          this.closePopup();
        });
      });
    });

    return () => {
      // Cleanup on unmount
      if (map) map.remove();
    };
  }, []);

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <div
        id="bossdent-map"
        style={{ width: "100%", height: "500px", borderRadius: "16px" }}
      />
    </>
  );
}
