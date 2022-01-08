import React, { useState } from "react";
import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

type PropsType = {
  severity: AlertColor;
  message: string;
};

const Notification: React.FC<PropsType> = ({
  severity,
  message,
}: PropsType) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export { Notification };
