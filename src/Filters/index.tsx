import { Grid } from "@mui/material";
import { MultipleSelectChip } from "../shared/MultiSelectChip";
import { DatePickerWrapper } from "../shared/DatePicker";

// Hardcoded - should be replaced with API call
// ~~~~~~~~~~
const CATEGORY_OPTIONS = [
  "pizza",
  "mayo",
  "cheese",
  "tomato",
  "plant-based cheese",
] as const;

const AGGREGATE_OPTIONS = ["category", "department", "country"] as const;
// ~~~~~~~~~~

interface GridProps {
  children: React.ReactNode;
}

const LabelGrid = ({ children }: GridProps) => (
  <Grid size={{ xs: 4, md: 2 }} alignContent={"center"}>
    {children}
  </Grid>
);

const FieldGrid = ({ children }: GridProps) => (
  <Grid size={{ xs: 8, md: 10 }}>{children}</Grid>
);

export const Filters = () => (
  <Grid container>
    <LabelGrid>
      <p>Filter:</p>
    </LabelGrid>
    <FieldGrid>
      <MultipleSelectChip
        inputLabel="Category"
        selectOptions={CATEGORY_OPTIONS}
      />
    </FieldGrid>

    <LabelGrid>
      <p>Sales year:</p>
    </LabelGrid>
    <FieldGrid>
      <DatePickerWrapper />
    </FieldGrid>

    <LabelGrid>
      <p>Aggregate by:</p>
    </LabelGrid>
    <FieldGrid>
      <MultipleSelectChip inputLabel="" selectOptions={AGGREGATE_OPTIONS} />
    </FieldGrid>
  </Grid>
);
