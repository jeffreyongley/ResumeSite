import React from 'react'
import csusb from '../media/csusb.jpg'
import '../css/Education.css';

function Education() {
    // return (
    //     <div className="App">
    //         <div className="App-body">
    //             <div className="degree">Bachelor of Science Degree in Computer Science </div>
    //             <div className="description">
    //                 I earned my Bachelor of Science in Computer Science from California State University, San Bernardino in May 2021. During my time at CSUSB, I completed a diverse range of courses, including Software Engineering, Advanced Algorithms, Introduction to Machine Learning, and Artificial Intelligence. These courses provided hands-on experience with various programming languages, such as Python, JavaScript, and C++.
    //             </div> 
    //             <div className='picture'><img src={csusb} alt="CSUSB" className="csusb-image" /></div>
    //         </div>
    //     </div>
    // )

    return (
        <div className="App">
            <div className="App-body" >
            <div className="degree">Jeffrey Ongley</div>
            <div className="descrip">Software Engineer</div>
            {/* <div className="picture"><img src={logo} className='App-logo' alt="portrait"></img></div> */}
            
            </div>
        </div>
    );
};



export default Education;
