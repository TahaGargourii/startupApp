import React from "react";
//import "../myuser/Myuser.css"
import "./sidebar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarData from "./Sidebardat";
import Paper from '@mui/material/Paper';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactData from "./ContactData";
import InvestorData from "./InvestorData";


const Sidebar = () => {
    return (
        <div>
            <div className="navBar">



                <div class="flex-items">
                    <h1>FOLLOWUP</h1>
                </div>
                <div class="flex-items">

                </div>
                <div class="flex-items">
                    <AccountCircleIcon className="icon1" />

                </div>

            </div>

            <div className="content">
                <div class="container">

                    <div class="card1">
                        <Paper className="paperCard">
                            <h2> Toatal Portfolio Revenue </h2>
                            <div className="paperCardContent">

                                <AttachMoneyIcon className="am" />
                                <h3> 487.330.119 </h3>
                            </div>
                        </Paper>
                    </div>
                    <div class="card2">

                        <Paper className="paperCard">
                            <h2>Total Startups</h2>
                            <div className="paperCardContent">

                                <PeopleIcon />
                                <h3> 4 </h3>
                            </div>
                        </Paper>




                    </div>
                    <div class="card3">
                        <Paper className="paperCard">
                            <h2> Total Portfolio </h2>
                            <div className="paperCardContent">

                                <AttachMoneyIcon className="am" />
                                <h3> 244,333,198 </h3></div>

                        </Paper>


                    </div>
                    <div class="contacts">
                        <Paper className="contactPaper">
                            <h6> Contacts </h6>
                            <div>{ContactData.map((val, key) => {
                                return (
                                    <a className="contactsItems" key={key} id={window.location.pathname === val.link ? "active" : ""} onClick={() => { window.location.pathname = val.link }}>
                                        <div className="avatar">{val.avatar}</div>
                                        <div className="investorName">{val.name}</div>
                                    </a>
                                )
                            })}
                            </div>

                        </Paper>
                    </div>
                    <div class="Investors">
                        <Paper className="paperInvestor">
                            <h6>  Investors </h6>
                            <div>{InvestorData.map((val, key) => {
                                return (
                                    <a className="contactsItems" key={key} id={window.location.pathname === val.link ? "active" : ""} onClick={() => { window.location.pathname = val.link }}>
                                        <div className="avatar">{val.avatar}</div>
                                        <div className="investorName">{val.name}</div>
                                    </a>
                                )
                            })}
                            </div>

                        </Paper>
                    </div>

                    <div class="investedFunds">
                        <Paper className="investedFundsPaper">
                            <h2> Invested Funds</h2>
                            <div className="ListStartup">
                                <ul>
                                    <li> Labbesni </li>
                                    <li> Hello Brico </li>
                                </ul>
                                <div id="my-pie-chart"></div>
                            </div>




                        </Paper>
                    </div>

                    <div class="dataroom">
                        <Paper className="PaperDataRoom">
                            <h6> Data Room </h6>

                        </Paper>
                    </div>


                    <div class="monthlyUpdates">
                        <Paper className="PaperMonthlyupdates">
                            <h6>  Monthly Updates</h6>
                        </Paper>
                    </div>
                </div>
            </div>
            <div className="sidebar">

                <div className="row">{SidebarData.map((val, key) => {
                    return (
                        <a className="item" key={key} id={window.location.pathname === val.link ? "active" : ""} onClick={() => { window.location.pathname = val.link }}>
                            <div className="icon">{val.icon}</div>
                            <div className="title1">{val.title}</div>



                        </a>

                    )
                })}
                </div>
            </div>
        </div>

    )
}
export default Sidebar