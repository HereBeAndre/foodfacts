import { GroupedMenu } from "../../shared/MenuButton";
import { Series } from "../../types";

import "./index.css";

interface SeriesProps {
  series: Series;
  index: number;
  // Passed down from SeriesList to find and delete the series
  onDeleteSeries?: (index: number) => void;
}

export const SeriesComponent = ({ series, index }: SeriesProps) => {
  const handleReplaceIngredient = () => {
    console.log("Replace Ingredient");
  };

  const handleReplaceMaterial = () => {
    console.log("Replace Material");
  };

  return (
    <div key={`${series.name}__${index}`} className="series-box">
      {series.name} + index: {index}
      <GroupedMenu
        onReplaceIngredient={handleReplaceIngredient}
        onReplaceMaterial={handleReplaceMaterial}
      />
    </div>
  );
};
