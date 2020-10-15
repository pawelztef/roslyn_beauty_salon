import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'


export default ({open, message, closeHandler}) => {

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={115000}
        onClose={closeHandler}
      >
        <MuiAlert elevation={10} variant="standard" onClose={closeHandler} severity="success">
          {message}
        </MuiAlert>

      </Snackbar>
    </>
  )

}
