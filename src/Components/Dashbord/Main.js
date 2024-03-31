import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SpinWheel from '../SpinWheel';
import CongratModal from '../CongratModal';
import './style.css';
import BasicModal from '../CustomerSignUp/SignUpModal';
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../../redux/Counter/CounterSlice';
import { signIn } from '../../redux/Authentication/AuthSlice';
function Main(props) {
  const { posts, title } = props;
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);
  const [open, setOpen] = useState(false);
  const [resultForModal, setResultForModal] = useState();
  const [openSignUpModal, setOpenSignUpModal] = useState(false)
  const [openSignInModal, setOpenSignInModal] = useState(false)
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter.value)

  let winningNumber = 0

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        dispatch(signIn({ token }));
    }
}, []); 


  return (
    <>
     <button onClick={()=>{dispatch(increment())}}>+</button>
     <button onClick={()=>{dispatch(decrement())}}>-</button>
      <CongratModal setOpenSignUpModal={setOpenSignUpModal} setOpen={setOpen} open={open} result1={result1} result2={result3} result3={result3} />
      <BasicModal openSignUpModal={openSignUpModal} setOpenSignUpModal={setOpenSignUpModal} />
      <Grid item xs={12} md={12} sx={8} >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        <div className='spin-wheel-main-div' >
          <SpinWheel
            result1={result1}
            setResult1={setResult1}
            winningNumber={5}
            SpinWheelNumber={'SpinWheelOne'}
            setOpen={setOpen} open={open}
          />
          <SpinWheel
            result2={result2}
            setResult2={setResult2}
            winningNumber={3}
            SpinWheelNumber={'SpinWheelTwo'}
            setOpen={setOpen} open={open}
          />
          <SpinWheel
            result3={result3}
            setResult3={setResult3}
            winningNumber={2}
            SpinWheelNumber={'SpinWheelThree'}
            setOpen={setOpen} open={open}
          />
        </div>
      </Grid>
    </>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;