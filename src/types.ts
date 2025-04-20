type Transformation = {
  type: string;
  config: {
    old: number;
    new: number;
  };
};

export type Series = {
  name: string;
  transformations: Transformation[];
};

export type SeriesList = Series[];
