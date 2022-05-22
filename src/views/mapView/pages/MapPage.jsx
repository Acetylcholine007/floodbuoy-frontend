import { Box } from "@mui/material";
import React from "react";
import dummyMap from "/images/dummyMap.png";

const MapPage = () => {
  return (
    <Box sx={{ height: "100%", boxSizing: "border-box", width: "100%" }}>
      <img
        src={dummyMap}
        alt="Dummy Map"
        style={{ height: "100%", objectFit: "cover", width: "100%" }}
      />
    </Box>
  );
};

export default MapPage;
