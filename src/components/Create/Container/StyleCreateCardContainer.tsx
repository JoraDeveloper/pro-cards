import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgb(39, 38, 59)",
  height: "100%",
});

export const Title = styled(Typography)({
  fontSize: "3rem",
  padding: "40px 0",
  textAlign: "center",
  color: "#ffffff",
});

export const EditorContainer = styled(Box)({
  flexGrow: 1,
});

export const Footer = styled(Box)({
  padding: "30px 0",
  textAlign: "center",
  fontSize: "1.2rem",
  color: "#ffffff",
});