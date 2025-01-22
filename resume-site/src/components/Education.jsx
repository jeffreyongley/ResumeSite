import React from 'react'

export default function Education() {
    return (
        <div className="App">
            {/* <header className="App-header">
                
            </header> */}
            <div className="App-body" >
                <div className="college-name">California State University - San Bernardino</div>
                <div className="degree">Bachelor of Science Degree in Computer Science </div>
                {/* <div className="picture"><img src={logo} className='App-logo' alt="portrait"></img></div> */}
                <div className="description">
                I earned my Bachelor of Science in Computer Science from California State University, San Bernardino in May 2021. During my time at CSUSB, I completed a diverse range of courses, including Software Engineering, Advanced Algorithms, Introduction to Machine Learning, and Artificial Intelligence. These courses provided hands-on experience with various programming languages, such as Python, JavaScript, and C++.
                </div>
                {/* <Button onClick={() =>navigate('/workExperience')}>Work Experience</Button>
                <Button onClick={() =>navigate('/Education')}>Education</Button>
                <Button onClick={() =>navigate('/langAndTech')}>Languages and Technologies</Button> */}
            </div>
        </div>
    )
}
