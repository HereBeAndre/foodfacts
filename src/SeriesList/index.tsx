import { useState } from "react";
import { Button, TextField } from "@mui/material";

import { GroupedMenu } from "../shared/MenuButton";
import { SeriesList } from "../types";

import "./index.css";

export const SeriesListComponent = () => {
  const [seriesList, setSeriesList] = useState<SeriesList>([]);

  const onAddSeries = () => {
    const newSeries = {
      id: crypto.randomUUID(), // See Series interface
      name: "",
      transformations: [],
    };
    setSeriesList((prev) => [...prev, newSeries]);
  };

  const deleteSeries = (seriesId: string) => {
    const newSeriesList = seriesList.filter(({ id }) => id !== seriesId);
    setSeriesList(newSeriesList);
  };

  const handleReplaceIngredient = () => {
    console.log("Replace Ingredient");
  };

  const handleReplaceMaterial = () => {
    console.log("Replace Material");
  };

  return (
    <>
      <div className="scroll-container">
        {seriesList.length > 0 &&
          seriesList.map(({ id }, index) => (
            <div key={id} className="series-box">
              <div className="series-top">
                <p>{`Series ${index + 1}`}:</p>
                <TextField label="Name" variant="outlined" />
                <Button variant="contained" onClick={() => deleteSeries(id)}>
                  Delete Series
                </Button>
              </div>
              <GroupedMenu
                onReplaceIngredient={handleReplaceIngredient}
                onReplaceMaterial={handleReplaceMaterial}
              />
            </div>
          ))}
      </div>
      <Button variant="contained" onClick={onAddSeries} id="add-button">
        Add Series +
      </Button>
    </>
  );
};
