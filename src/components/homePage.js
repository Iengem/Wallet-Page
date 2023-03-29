import React from 'react';
import Sidenav from './sideBar';
import {BsChevronDown, BsArrowRight} from 'react-icons/bs'
import frame from '../images/Frame 222.png'
import frame2 from '../images/Frame 228.png'
import christian from '../images/christian.png'

const HomePage = () =>{
    return(
        <div className='page'>
            <Sidenav />
            <div className='homePagecontent'>
                <div className='content-header-one performance'>
                    <div className='header-box'>
                        <h2>Goals</h2>
                        <div className='progressbarCont'><p className='progressBar'></p></div>
                        <p>40% Completed</p>
                    </div>
                    <div className='header-box'>
                        <h2>PM Reviews</h2>
                        <div className='progressbarCont'><p className='progressBar'></p></div>
                        <p>40% Completed</p>
                    </div>
                    <div className='header-box'>
                        <h2>360 Appraisal</h2>
                        <div className='progressbarCont'><p className='progressBar'></p></div>
                        <p>40% Completed</p>
                    </div>
                    <div className='header-box'>
                        <h2>Self performance review</h2>
                        <div className='progressbarCont'><p className='progressBar'></p></div>
                        <p>40% Completed</p>
                    </div>
                </div>
                <div className='homepageGrid adminHomepage'>
                    <div className='goalCont'>
                        <div className='homepageGrid-header'>
                            <h2>Goals Metrics</h2>
                        </div>
                        <div className='goalContent'>
                            <img src={frame}/>
                        </div>
                    </div>
                    <div className='performanceCont'>
                        <div className='homepageGrid-header'>
                            <h2>Performance review</h2>
                            <div className='homeselect'>
                                <p>Quarter <BsChevronDown  className='arrowDown' /></p>
                                <p>2022 <BsChevronDown  className='arrowDown' /></p>
                            </div>
                        </div>
                        <div className='performanceGrid'>
                            <div className='performance-grid-content'>
                                <img src={frame2} className='frame'/>
                            </div>
                        </div>
                    </div>
                </div>                
                <div className='employeePage employeeFooter'>
                    <div className='performanceGrid'>
                    <div className='homepageGrid-header header2'>
                            <h2>Employee Status</h2>
                            <div className='homeselect'>
                                <p>View All <BsArrowRight  className='arrowDown' /></p>
                            </div>
                        </div>
                        <div className='performance-grid-header'>
                            <h2>Employee</h2>
                            <h2>Employee ID</h2>
                            <h2>Email Address</h2>
                            <h2>Role</h2>
                            <h2>Gender</h2>
                            <h2>Status</h2>
                        </div>
                        <div className='performance-grid-content'>
                            <div className='performance-grid-column'>
                                <div>
                                    <img src={christian}/>
                                    <p>Christian Apithy</p>
                                </div>
                            </div>
                            <div className='performance-grid-column date'>
                                <p>44312</p>
                            </div>
                            <div className='performance-grid-column date'>
                                <p>danghoang87hl@gmail.com</p>
                            </div>
                            <div className='performance-grid-column middle'>
                                <p>Staff</p>
                            </div>
                            <div className='performance-grid-column date'>
                                <p>Female</p>
                            </div>
                            <div className='performance-grid-column date last'>
                                <p>Inactive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage