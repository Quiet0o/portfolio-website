import React from "react";

const calculateMonths = (startDate) => {

    const start = new Date(startDate);
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());

    if (now.getDate() < start.getDate()) {
        months--;
    }

    return months;
};

const Work = () => {
    const presentWorkStartDate = "2024-03-01"; // Start date for the current job
    const presentWorkMonths = calculateMonths(presentWorkStartDate);

    return (
        <div className="contact-form-page">
            <div className="project-text">
                <h2>
                    <span>0.2</span> Where I’ve Worked <hr />
                </h2>
            </div>
            <div className="timeline-container">
                <div className="timeline">
                    <div className="timeline-item">
                        <h3>Junior Frontend Developer</h3>
                        <p>Infocomp Sp. z o.o.</p>
                        <p><strong>Mar 2024 – Present ({presentWorkMonths} months)</strong></p>
                        <p>Working on the SEZAM application - a system for electronic circulation of documents, public procurement, and invoices using AngularJS.</p>
                    </div>
                    <div className="timeline-item">
                        <h3>Junior Backend Developer</h3>
                        <p>BAMIZ</p>
                        <p><strong>Jun 2023 – Feb 2024 (9 months)</strong></p>
                        <p>Worked in teams to develop online shops using PHP, Symfony, and various technologies.</p>
                    </div>
                    <div className="timeline-item">
                        <h3>PHP Web Developer (Intern)</h3>
                        <p>BAMIZ</p>
                        <p><strong>May 2022 (1 month)</strong></p>
                        <p>Worked on an employee management application, performing a graphical UI overhaul for improved UX.</p>
                    </div>
                    <div className="timeline-item">
                        <h3>PHP Web Developer (Intern)</h3>
                        <p>BAMIZ</p>
                        <p><strong>May 2021 (1 month)</strong></p>
                        <p>Contributed to an employee management application, focusing on designing and implementing key features.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
