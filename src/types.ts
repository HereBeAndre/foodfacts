type Transformation = {
  type: string;
  config: {
    old: number;
    new: number;
  };
};

export type Series = {
  // Not part of the original interface, but needed for stable reference to delete the series
  id: string;
  name: string;
  transformations: Transformation[];
};

export type SeriesList = Series[];
