import {
  DatePicker,
  DateView,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./index.css";

interface DatePickerProps {
  views?: DateView[];
}

export const DatePickerWrapper = ({ views = ["year"] }: DatePickerProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="datepicker-wrapper">
      <DatePicker views={views} />
    </div>
  </LocalizationProvider>
);
