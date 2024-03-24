import React, { useState, useRef, useEffect } from 'react';
import './SpinWheel.css'; // Import CSS for styling
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';

const SpinWheel = ({
    winningNumber,
    result1,
    setResult1,
    setResult2,
    result2,
    setResult3,
    result3,
    SpinWheelNumber,
    setOpen
}) => {
    const canvasRef = useRef(null);
    const [spinning, setSpinning] = useState(false);
    // const [result, setResult] = useState(null);
    useEffect(() => {
        if (result1 !== undefined && result2 !== undefined && result3 !== undefined &&
            result1 !== null && result2 !== null && result3 !== null) {
            console.log('result1, result2, result3:', { result1, result2, result3 });
        }
    }, [result1, result2, result3]);


    const colors = ['#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845']; // Example colors
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; // Numbers to display on segments

    const spinWheel = () => {
        if (!spinning) {
            setSpinning(true);
            const ctx = canvasRef.current.getContext('2d');
            const sections = 8; // Number of wheel sections
            const angle = (2 * Math.PI) / sections;
            const centerX = canvasRef.current.width / 2;
            const centerY = canvasRef.current.height / 2;
            const startAngle = Math.random() * Math.PI * 2; // Random starting angle

            //  winningNumber = 3; // Specify the winning number here

            const spinDuration = 5000; // 5 seconds

            let spinAngle = 0;
            const spinInterval = setInterval(() => {
                spinAngle += Math.PI / 36; // Speed of spinning
                drawWheel(ctx, sections, angle, centerX, centerY, startAngle + spinAngle, numbers);
                if (spinAngle >= 2 * Math.PI) {
                    clearInterval(spinInterval);
                    // Calculate the selected segment based on the winning number
                    const selectedSegment = (winningNumber - 1) % sections; // Adjust to 0-based indexing
                    if (SpinWheelNumber == 'SpinWheelOne') {
                        setResult1(selectedSegment);
                        setOpen(true)
                    } else if (SpinWheelNumber == 'SpinWheelTwo') {
                        setResult2(selectedSegment);
                        setOpen(true)
                    } else if (SpinWheelNumber == 'SpinWheelThree') {
                        setResult3(selectedSegment);
                        setOpen(true)
                    }
                    setSpinning(false);
                }
            }, 2000 / 60); // 60 FPS

            setTimeout(() => clearInterval(spinInterval), spinDuration);
        }
    };

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        drawWheel(ctx, numbers.length, (2 * Math.PI) / numbers.length, canvasRef.current.width / 2, canvasRef.current.height / 2, 0, numbers);
    }, []); 



    const drawWheel = (ctx, sections, angle, centerX, centerY, startAngle, numbers) => {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        for (let i = 0; i < sections; i++) {
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, 200, startAngle + i * angle, startAngle + (i + 1) * angle);
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();

            // Write number on the segment
            ctx.fillStyle = 'white';
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const textAngle = startAngle + (i * angle) + (angle / 2);
            const radius = 120; // Distance from center
            const x = centerX + (radius * Math.cos(textAngle));
            const y = centerY + (radius * Math.sin(textAngle));
            ctx.fillText(numbers[i], x, y);
        }
    };

    return (
        <>
            <div className='spin-wheel-container-main'>
                <div className="spin-wheel-container">
                    <canvas ref={canvasRef} width={350} height={350} className={`spin-wheel ${spinning ? 'spinning' : ''}`} />
                </div>
                <div className='spin-wheel-container-lower'>
                    <Button onClick={spinWheel} disabled={spinning} variant="outlined">Spin the Wheel</Button>
                    <div className='' >
                        {result1 && (
                            <div className="result">
                                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                                    You won: {result1}
                                </Alert>
                            </div>
                        )}
                        {result2 && (
                            <div className="result">
                                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                                    You won: {result2}
                                </Alert>
                            </div>
                        )}
                        {result3 && (
                            <div className="result">
                                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                                    You won: {result3}
                                </Alert>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpinWheel;
