import { Card } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
Chart.register(...registerables);
Chart.defaults.color = "#FFFFFF";
Chart.register(zoomPlugin);

function DataChart({ chartData, options }) {
  return (
    <Card sx={{ backgroundColor: "primary.main" }}>
      <Line
        data={chartData}
        options={{
          plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
              },
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                mode: "xy",
              },
            },
          },
          ...options,
        }}
      />
    </Card>
  );
}

export default DataChart;
