import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import React, { Fragment } from 'react'

export default function TodoDetail({todoDetails,openDialog,setOpenDialog,setTodoDetails}) {
  return (
    <Fragment>
        <Dialog onClose={()=>setOpenDialog(false)} open={openDialog} >
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button onClick={()=>{
                    setOpenDialog(false)
                    setTodoDetails(null)
                }}>
                Close
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
  )
}
