import React from 'react';
import Navbar from './navBar';
import Sidebar from './sideBar';
import {BsChevronDown} from 'react-icons/bs';
import citransfer from '../images/ci_transfer.png';
import Wallet from '../images/wallet.png';
import copy from '../images/copy.png';
import {Link} from 'react-router-dom';
import christian from '../images/christian.png'
import amen from '../images/Amen.png'
import emmanuel from '../images/Emmanuel.png'
import somo from '../images/somo.png'
import oscar from '../images/oscar.png'

const wallet = () =>{
    return(
        <div className='App'>
            <Navbar />
            <div className='page'>
                <Sidebar />                
                <div className='content wallet'>
                    <div className='walletHeader'>
                        <div className='walletHeader-left'>
                            <p>Current Balance</p>
                            <div>
                                <h2>223,345.00</h2>
                                <p>USDT <BsChevronDown/></p>
                            </div>
                            <h4>20.00 USD</h4>
                        </div>
                        <div className='walletHeader-right'>
                            <div>
                                <h2><img src={citransfer}/></h2>
                                <p>Send</p>
                            </div>
                            <div>
                                <h2><img src={Wallet}/></h2>
                                <p>Receive</p>
                            </div>
                            <div>
                                <h2><img src={copy}/></h2>
                                <p>Copy</p>
                            </div>
                        </div>
                    </div>
                    <div className='employeePage secondWallet'>
                        <div className='performanceGrid'>
                            <h2 className='performance-header'>Transaction History</h2>
                            <div className='performance-grid-header'>
                                <h2>Employee Name</h2>
                                <h2>Wallet ID</h2>
                                <h2>Amount (USDT) <BsChevronDown /></h2>
                                <h2>Transaction ID</h2>
                                <h2>Date</h2>
                                <h2>Status</h2>
                            </div>
                            <div className='performance-grid-content'>
                                <div className='performance-grid-column'>
                                     <div>
                                         <img src={christian}/>
                                         <p>Christian Apithy</p>
                                     </div>
                                     <div>
                                         <img src={amen}/>
                                         <p>Amen Dossou-Yovo</p>
                                     </div>
                                     <div>
                                         <img src={emmanuel}/>
                                         <p>Emmanuel Sossou</p>
                                     </div>
                                     <div>
                                         <img src={somo}/>
                                         <p>Somogyi Adrián</p>
                                     </div>
                                     <div>
                                         <img src={oscar}/>
                                         <p>Oscar Kossou</p>
                                     </div>
                                </div>
                                <div className='performance-grid-column'>
                                    <p>11233711111199</p>
                                    <p>11233711111199</p>
                                    <p>11233711111199</p>
                                    <p>11233711111199</p>
                                    <p>11233711111199</p>
                                </div>
                                <div className='performance-grid-column'>
                                    <p>+223.345.00 <small>USD</small></p>
                                    <h2>-223.345.00 <small>USD</small></h2>
                                    <p>+223.345.00 <small>USD</small></p>
                                    <h2>-223.345.00 <small>USD</small></h2>
                                    <h2>-223.345.00 <small>USD</small></h2>
                                </div>
                                <div className='performance-grid-column'>
                                    <p>11233711111199</p>
                                    <p>11233711111199</p>
                                    <p>11233711111199</p>
                                    <p>11233711111199</p>
                                    <p>11233711111199</p>
                                </div>
                                <div className='performance-grid-column'>
                                    <p>Jan 1, 2022. 2:30 PM</p>
                                    <p>Mar 6, 2022. 2:30 PM</p>
                                    <p>Jan 1, 2022. 2:30 PM</p>
                                    <p>Jan 1, 2022. 2:30 PM</p>
                                    <p>Jan 1, 2022. 2:30 PM</p>
                                </div>
                                <div className='performance-grid-column'>
                                    <div>
                                        <h2 className='Pending'>Pending</h2>
                                    </div>
                                    <div>                                
                                        <h2 className='Successful'>Successful</h2>
                                    </div>
                                    <div>
                                        <h2 className='Cancelled'>Cancelled</h2>
                                    </div>
                                    <div>
                                        <h2 className='Successful'>Successful</h2>
                                    </div>
                                    <div>
                                        <h2 className='Successful'>Successful</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default wallet