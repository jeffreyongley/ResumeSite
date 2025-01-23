import React from 'react'
import csusb from '../media/csusb.jpg'
import '../css/Education.css';
import { useNavigate } from "react-router-dom";


const Button = ({ children, onClick }) => {
    return (
    <button className='menu-button' onClick={onClick}>
        {children}
    </button>
    );
};
// testing github config again
function Education() {

    const navigate = useNavigate();

    return (
        <div className="App" style={{ justifyContent: 'space-evenly' }}>
            <div className="name">California State University - San Bernardino</div>
            <div className="title">B.S. in Computer Science, Class of 2021</div>
            <div className="csusb-container"><img src={csusb} className='csusb' alt="portrait"></img></div>            
            <div className="description">
                I earned my Bachelor of Science in Computer Science from California State University, San Bernardino in May 2021. During my time at CSUSB, I completed a diverse range of courses, including Software Engineering, Advanced Algorithms, Introduction to Machine Learning, and Artificial Intelligence. These courses provided hands-on experience with various programming languages, such as Python, JavaScript, and C++.
            </div> 
            <div>
                <Button onClick={() =>navigate('/ResumeSite')}>Main Menu</Button>
            </div>

        </div>
    );
};



export default Education;
