import { styled, Box, Typography } from "@mui/material";

export const Container = styled(Box)({
  height: "100%",
  width: "100%",
  overflow: "hidden",
});

export const EditorContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  border: "2px solid #eee",
  borderRadius: "5px",
  backgroundColor: "#ffffff",
  overflow: "hidden",
});

export const EditorTitle = styled(Typography)({
  fontSize: "1.4rem",
  padding: "10px",
});

export const EditorHolder = styled(Box)({
  flexGrow: 1,
  overflow: "auto",
  padding: "10px",
  "& .ce-block__content": {
    maxWidth: "calc(100% - 80px) !important",
  },
  "& .ce-toolbar__content": {
    maxWidth: "calc(100% - 100px) !important",
  },
  "& .cdx-block": {
    maxWidth: " 100% !important",
  },
});
