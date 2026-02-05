import React, { useState } from "react";

interface OpenInMapsButtonProps {
  address: string;
}

const OpenInMapsButton = (props: OpenInMapsButtonProps) => {
  const { address } = props;

  const openInMaps = (address: string) => {
    const encoded = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encoded}`,
      "_blank",
    );
  };

  if (
    address === "Private Performance" ||
    address === "Live on TV" ||
    address === "Private Corporate Dinner"
  )
    return <button disabled>🚫 {address}</button>;
  return (
    <button
      className="bg-gold-100 hover:bg-gold-120 rounded p-1"
      onClick={() => openInMaps(address)}
    >
      📍 {address}
    </button>
  );
};

export default OpenInMapsButton;
