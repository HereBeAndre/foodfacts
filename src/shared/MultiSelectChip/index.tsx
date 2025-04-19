import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(option: string, options: readonly string[], theme: Theme) {
  return {
    fontWeight: options.includes(option)
      ? theme.typography.fontWeightBold
      : theme.typography.fontWeightRegular,
  };
}

interface MultipleSelectChipProps {
  inputLabel: string;
  selectOptions: readonly string[];
}

export const MultipleSelectChip = ({
  inputLabel,
  selectOptions,
}: MultipleSelectChipProps) => {
  const theme = useTheme();
  const [options, setOptions] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof options>) => {
    const {
      target: { value },
    } = event;
    setOptions(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>{inputLabel}</InputLabel>
        <Select
          labelId={`multiple-chip-label-${inputLabel}`}
          id={`multiple-chip-${inputLabel}`}
          multiple
          value={options}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={inputLabel} />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {selectOptions.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, options, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
