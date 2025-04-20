import { useState } from "react";
import { Button } from "@mui/material";

import { SeriesList } from "../types";

import "./index.css";
import { SeriesComponent } from "./Series";

export const SeriesListComponent = () => {
  const [seriesList, setSeriesList] = useState<SeriesList>([]);

  const onAddSeries = () => {
    const newSeries = {
      name: "",
      transformations: [],
    };
    setSeriesList((prev) => [...prev, newSeries]);
  };

  return (
    <>
      <div className="scroll-container">
        {seriesList.length > 0 &&
          seriesList.map((series, index) => (
            <SeriesComponent series={series} index={index} />
          ))}
      </div>
      <Button variant="contained" onClick={onAddSeries} id="add-button">
        Add Series +
      </Button>
    </>
  );
};
