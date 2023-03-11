import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar({ setKeyword }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "60%",
      }}
    >
      <IconButton type="button" sx={{ ml: 6 }} aria-label="search">
        <SearchIcon />
      </IconButton>{" "}
      <TextField
        id="input-with-sx"
        color="primary"
        fullWidth={true}
        size="small"
        onChange={(e) => setKeyword(e.target.value)}
        inputProps={{
          style: {
            height: "1vh",
          },
        }}
      />
    </Box>
  );
}
