import React, { useState } from "react";
import "./css/events.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useWindowSize from "./WindowSize";
import EventCards from "./EventCards";
import SearchIcon from '@mui/icons-material/Search';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Magnum2022 from "./images/magnum opus 2022.jpg"

function Events() {
    const [navappear, setNavappear] = useState(false);
    const [step0, setstep0] = useState(true);
    const [step1, setstep1] = useState(false);
    const [step2, setstep2] = useState(false);
    const [radiotext, setradiotext] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const size = useWindowSize();
    const user = "admin";
    return (
        <div className="eventpage">
            <div className="side-nav">
                <div className="input-group mb-4">
                    <input type="text" className="form-control shadow-none" placeholder="Search by title..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-success" type="button" id="button-addon2"><SearchIcon /></button>
                    <div style={{ display: (size.width >= 801) ? "none" : "block" }} className="temp-button"><button className="btn btn-secondary" onClick={() => setNavappear(!navappear)} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{ display: (size.width <= 800) ? (navappear ? "block" : "none") : "block" }}>
                    <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>EVENT CATEGORIES</p>
                    <nav id="sideEvents">
                        <ul>
                            <li><span>All Events</span></li>
                            <li><span>Past Events</span></li>
                            <li><span>Upcoming Events</span></li>
                            <li><span>Categories</span></li>
                        </ul>
                    </nav>
                    <div className="eventsname"><a className="eventsname-link" href={void(0)}>Convocation</a></div>
                    <div className="eventsname"><a className="eventsname-link" href={void(0)}>Magnum Opus</a></div>
                </div>
            </div>
            <div className="content">
                <button style={{ display: (user === "admin" && step0) ? "block" : "none" }} onClick={() => { setstep0(false); setstep1(true); }} className="btn add-event-button"><AddIcon /> CREATE AN EVENT</button>
                <div className="add-event" style={{ display: (step1 || step2) ? "block" : "none" }}>
                    <div className="add-event-header">Tell Us About Your Event</div>
                    <div className="add-addons">
                        <div className="add-hr1"></div>
                        <div style={{backgroundColor: step2?"green":"rgb(169, 220, 244)"}} className="add-hr2"></div>
                    </div>
                    <div style={{ display: (step1) ? "block" : "none" }} className="get-in-touch">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend"><DriveFileRenameOutlineIcon /></span>
                                    <input type="text" className="form-control shadow-none" placeholder="Event Name" aria-describedby="inputGroupPrepend" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend"><DateRangeIcon /></span>
                                    <div style={{padding: "0"}} className="form-control" aria-describedby="inputGroupPrepend"><DatePicker wrapperClassName="date-picker" placeholderText="Start Date" onChange={(date) => setStartDate(date)} value={startDate} /></div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <input type="text" className="form-control shadow-none" placeholder="Start Time" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <input type="text" className="form-control shadow-none" placeholder="Duration" required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-check form-check-inline">
                                    <input onChange={(event) => setradiotext(event.target.value)} className="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Offline" required />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Offline</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={(event) => setradiotext(event.target.value)} className="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Online" required />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Online</label>
                                </div>
                            </div>
                            <div style={{display: radiotext==="Offline"?"block":"none"}} className="col-md-6">
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend"><LocationOnIcon /></span>
                                    <input type="text" className="form-control shadow-none" placeholder="Venue" aria-describedby="inputGroupPrepend" required />
                                </div>
                            </div>
                            <div style={{display: radiotext==="Offline"?"block":"none"}} className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control shadow-none" placeholder="City" required />
                                </div>
                            </div>
                            <div style={{display: radiotext==="Online"?"block":"none"}} className="col-md-12">
                                <div className="input-group">
                                    <input type="text" className="form-control shadow-none" placeholder="Email Address" required />
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="button" onClick={() => { setstep1(false); setstep0(true);}} className="btn btn-outline-success">Cancel</button>
                                <button type="submit" onClick={() => { setstep1(false); setstep2(true); }} className="btn btn-primary float-end">Next</button>
                            </div>
                        </form>
                    </div>
                    <div style={{display: step2?"block":"none"}} className="get-in-touch">
                    <form>
                        <div className="add-event-photo">
                            <label style={{height: "100%"}} htmlFor="add-photo">
                                <div><AddPhotoAlternateIcon style={{fontSize: "85px", color: "white", backgroundColor: "green", margin: "5% auto 2%"}} /></div>
                                <input id="add-photo" type="file" />
                                Upload Photo
                            </label>
                        </div>
                        <div>
                            <div><FileCopyIcon style={{marginRight: "2%"}} />Description:</div>
                            <div className="mt-4">
                            <textarea className="form-control" rows="6"></textarea>
                            </div>
                        </div>
                        <div className="add-event-end-buttons">
                            <button type="button" onClick={() => {setstep1(true); setstep2(false);}} className="btn btn-outline-success">Previous</button>
                            <button className="btn btn-primary float-end">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
                <EventCards img={Magnum2022} heading="Magnum Opus 2022" start="Starts: Feb 17, 2022" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
                <EventCards img={Magnum2022} heading="ALUMNI MEET 2020: MAGNUM OPUS" start="Starts: Feb 08, 2020" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
                <EventCards img={Magnum2022} heading="Magnum Opus 2019" start="Starts: Feb 17, 2019" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
                <EventCards img={Magnum2022} heading="Magnum Opus 2015" start="Starts: Feb 17, 2022" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
                <EventCards img={Magnum2022} heading="Magnum Opus 2022" start="Starts: Dec 28, 2015" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
            </div>
        </div>
    );
}

export default Events;