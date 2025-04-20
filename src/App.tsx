import { Filters } from "./Filters";
import { SeriesListComponent } from "./SeriesList";

import "./App.css";

function App() {
  return (
    <div className="container">
      <p>Configure:</p>
      <Filters />
      <SeriesListComponent />
    </div>
  );
}

export default App;
