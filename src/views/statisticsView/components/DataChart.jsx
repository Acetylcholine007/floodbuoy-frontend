import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ArgumentScale, Animation } from "@devexpress/dx-react-chart";
import { curveCatmullRom, line } from "d3-shape";
import { scalePoint } from "d3-scale";

const PREFIX = "Demo";

const classes = {
  title: `${PREFIX}-title`,
  chart: `${PREFIX}-chart`,
};

const Line = (props) => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

const StyledDiv = styled("div")(() => ({
  [`&.${classes.title}`]: {
    textAlign: "center",
    width: "100%",
    marginBottom: "10px",
  },
}));

const Text = ({ text }) => {
  const [mainText, subText] = text.split("\\n");
  return (
    <StyledDiv className={classes.title}>
      <Typography component="h3" variant="h5">
        {mainText}
      </Typography>
      <Typography variant="subtitle1">{subText}</Typography>
    </StyledDiv>
  );
};

const Root = (props) => (
  <Legend.Root
    {...props}
    sx={{ display: "flex", margin: "auto", flexDirection: "row" }}
  />
);
const Label = (props) => (
  <Legend.Label {...props} sx={{ mb: 1, whiteSpace: "nowrap" }} />
);
const Item = (props) => (
  <Legend.Item {...props} sx={{ flexDirection: "column-reverse" }} />
);

const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: "30px",
  },
}));

const energyConsumption = [
  {
    country: "USA",
    hydro: 59.8,
    oil: 937.6,
    gas: 582,
    coal: 564.3,
    nuclear: 187.9,
  },
  {
    country: "China",
    hydro: 74.2,
    oil: 308.6,
    gas: 35.1,
    coal: 956.9,
    nuclear: 11.3,
  },
  {
    country: "Russia",
    hydro: 40,
    oil: 128.5,
    gas: 361.8,
    coal: 105,
    nuclear: 32.4,
  },
  {
    country: "Japan",
    hydro: 22.6,
    oil: 241.5,
    gas: 64.9,
    coal: 120.8,
    nuclear: 64.8,
  },
  {
    country: "India",
    hydro: 19,
    oil: 119.3,
    gas: 28.9,
    coal: 204.8,
    nuclear: 3.8,
  },
  {
    country: "Germany",
    hydro: 6.1,
    oil: 123.6,
    gas: 77.3,
    coal: 85.7,
    nuclear: 37.8,
  },
];

const DataChart = () => {
  const [data, setData] = useState(energyConsumption);

  return (
    <Paper>
      <StyledChart data={data} className={classes.chart}>
        <ArgumentScale factory={scalePoint} />
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries
          name="Hydro-electric"
          valueField="hydro"
          argumentField="country"
          seriesComponent={Line}
        />
        <Legend
          position="bottom"
          rootComponent={Root}
          itemComponent={Item}
          labelComponent={Label}
        />
        <Title
          text="Flood Level\n(meters)"
          textComponent={Text}
        />
        <Animation />
      </StyledChart>
    </Paper>
  );
};

export default DataChart;
