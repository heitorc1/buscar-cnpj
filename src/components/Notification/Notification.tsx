import React, { useState } from "react";
import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

type PropsType = {
  severity: AlertColor;
  message: string;
  state: boolean;
};

const Notification: React.FC<PropsType> = ({
  severity,
  message,
  state,
}: PropsType) => {
  const [open, setOpen] = useState(state);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClick={handleClose}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export { Notification };
