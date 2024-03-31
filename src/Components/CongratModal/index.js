import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CongratModal({
  open, setOpen, result1, result3, result2,setOpenSignUpModal
}) {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log('result1,result2,result3 inside ', { result1, result2, result3 })
  }, [result1, result2, result3])

  const handelContinue = () =>{
    setOpen(false);
    setOpenSignUpModal(true)
  }
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div class="card">
              <div class="text-right cross"> <i class="fa fa-times"></i> </div>
              <div class="card-body text-center">
                <img src="https://img.icons8.com/bubbles/200/000000/trophy.png" />
                <h4>CONGRATULATIONS!</h4>
                <p>You have Won the Luckey Draw</p>
                <p>please continue to clam the reward</p>
                <Button onClick={handelContinue} variant="outlined">CONTINUE</Button>

              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}