import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import details from "./CardDetails";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     [theme.breakpoints.down("md")]: {
//       flexDirection: "column",
//     },
//   },
// }));

export default function () {
  // const classes = useStyles();
  // const checked = useWindowPosition("header");
  return (
    <div id="styled-cards">
      <HomeCard detail={details[0]} />
      <HomeCard detail={details[1]} />
      <HomeCard detail={details[2]} />
      <HomeCard detail={details[3]} />
    </div>
  );
}
