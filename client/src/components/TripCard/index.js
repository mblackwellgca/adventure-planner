import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import TripDetails from "../TripDetails";
import { Card, CardContent, TextField, Typography, Fab } from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
const CardStyled = styled(Card)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 545,
  minHeight: 345,
  padding: 2,
  margin: "0 auto",
  backgroundColor: "#DDD",
});

export default function TripCard() {
  const [details, setDetails] = useState([]);
  const detailNameRef = useRef();
  useEffect(() => {
    console.log(details);
    if (details.length > 0) {
      localStorage.setItem("details", JSON.stringify(details));
    }
  }, [details]);
  useEffect(() => {
    const storedDetails = JSON.parse(localStorage.getItem("details"));
    if (storedDetails) {
      setDetails(storedDetails);
    }
  }, []);

  function handleAddDetails(e) {
    const detail = detailNameRef.current.value;
    if (detail === "") return;
    console.log(detail);
    setDetails((prevDetails) => {
      return [...prevDetails, { id: uuidv4(), detail: detail }];
    });
    detailNameRef.current.value = null;
  }

  return (
    <CardStyled className="gradient-card">
      <CardContent>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "32px",
            fontWeight: 500,
            textAlign: "center",
            textShadow: "3px 3px rgba(50, 50, 70, 0.5)",
          }}
          variant="h4"
        >
          Trip Details
        </Typography>

        <TextField
          inputRef={detailNameRef}
          id="outlined-basic"
          label="Add Details"
          variant="outlined"
        />
        {details.map((detail) => {
          return <TripDetails key={uuidv4()} detail={detail.detail} />;
        })}
        <Fab
          color="primary"
          aria-label="add"
          onClick={(e) => {
            handleAddDetails(e);
          }}
        >
          <AddIcon />
        </Fab>
      </CardContent>
    </CardStyled>
  );
}
