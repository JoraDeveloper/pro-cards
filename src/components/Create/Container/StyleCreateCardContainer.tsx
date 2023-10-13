import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
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
  maxHeight: "70%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0px 80px",
  padding: "0px 40px",
});

export const Actions = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  padding: "0px 40px",
  marginTop: "30px",
  gap: "20px",
});

export const Footer = styled(Box)({
  padding: "30px 0",
  textAlign: "center",
  fontSize: "1.2rem",
  color: "#ffffff",
});
