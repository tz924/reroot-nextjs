import React, { useState, useRef, useContext } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Typography from "@mui/material/Typography";
import styles from "./breakdown.module.scss";
import { contrastColor } from "contrast-color";
import colorSteps from "color-steps";

export default function Breakdown({ breakdown, getParamText, getParameter }) {
  const lightest = "#F2E4E2";
  const darkest = "#BA4D3A";
  const scores = Object.entries(breakdown);
  const bgColors =
    scores.length > 0
      ? colorSteps(lightest, darkest, scores.length)
      : ["D8D8D8"];

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        height: "2rem",
        backgroundColor: "#D8D8D8",
      }}
    >
      {breakdown ? (
        scores.map(([p, score], index) => {
          const parameter = getParameter(p);

          return (
            <OverlayTrigger
              key={parameter.id}
              placement="top"
              overlay={
                <Tooltip id={`${index}-tooltip`}>
                  {`${getParamText(parameter)}: ${score}`}
                </Tooltip>
              }
            >
              <Box
                sx={{
                  width: `${parseFloat(score)}%`,
                  backgroundColor: bgColors[index],
                  borderWidth: "0",
                  textAlign: "center",
                  lineHeight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  "&:hover": {
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              ></Box>
            </OverlayTrigger>
          );
        })
      ) : (
        <span
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          Adjust preferences on the left
        </span>
      )}
    </Stack>
  );
}
