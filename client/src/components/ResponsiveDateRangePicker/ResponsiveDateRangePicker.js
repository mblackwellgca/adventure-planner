import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker";
import {
  useMediaQuery,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const CardStyled = styled(Card)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 545,
  minHeight: 345,
  padding: 2,
  margin: 3,
  backgroundColor: "#DDD",
});

export default function ResponsiveDateRangePicker() {
  const [value, setValue] = useState([null, null]);
  const matches = useMediaQuery("(pointer:fine)");

  let startDate = new Date(value[0]);
  let endDate = new Date(value[1]);

  useEffect(() => {
    if (value !== [null, null]) {
      localStorage.setItem("value", JSON.stringify(value));
    }
  }, [value]);

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("value"));
    if (value) {
      setValue(value);
      startDate = new Date(value[0]);
      endDate = new Date(value[1]);
    }
  }, []);

  return (
    <CardStyled>
      <CardContent>
        <Typography variant="h4">Travel Dates</Typography>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {value[(0, 1)] != null ? (
            <Typography sx={{ p: 2 }} variant="h6">{`${
              startDate.getMonth() + 1
            }/${startDate.getDate()}/${startDate.getFullYear()} - ${
              endDate.getMonth() + 1
            }/${endDate.getDate()}/${endDate.getFullYear()} `}</Typography>
          ) : null}
          <Stack spacing={3}>
            {!matches ? (
              <MobileDateRangePicker
                startText="Start"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            ) : (
              <DesktopDateRangePicker
                startText="Start"
                value={value}
                onChange={(newValue) => {
                  console.log(newValue);
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            )}
          </Stack>
        </LocalizationProvider>
      </CardContent>
    </CardStyled>
  );
}
