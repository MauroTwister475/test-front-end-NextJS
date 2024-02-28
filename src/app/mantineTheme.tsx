"use client";
import { createTheme } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export const theme = createTheme({
  components: {
    DatePickerInput: DatePickerInput.extend({
      classNames: {
        root:'datePicker',
        label:'my-label-class',
        input:'my-input-class',
      },
      styles: {
        root: { },
        input: { 
          paddingBlock: "4px",
          outline: 'none',
          borderColor: '#5F8D4E',
        },
      },
    }) 
  },
});

