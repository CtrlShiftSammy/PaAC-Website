import React from "react";
import EventCard from "../components/eventCard";
import '../components/events/event.css';
import NavBar from "../components/navbar";

function Events () {
    return <div>
    <section className="events">
    <NavBar></NavBar>
            <div className="event-head">
                <h1>Upcoming Events</h1>
                <div className="event-tiles">
                    <EventCard
                        title="Stargazing"
                        date="06 Sept, 1:30 pm – 4:00 pm"
                        venue="Football Ground, IIT Roorkee"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        link="https://www.facebook.com/events/170989841008984/"
                        linkDes="Share"
                    />
                </div>
            </div>
            <br/><br/>
            <div className="event-head">
                <h1>Previous Events</h1>
                <div className="event-tiles">
                    <EventCard
                        title="Telescope Simulation Workshop"
                        date="23 August, 7:30 pm – 9:30 pm"
                        venue="LHC"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        link="https://www.facebook.com/events/170989841008984/"
                        linkDes="Details"
                    />
                    <EventCard
                        title="Stargazing"
                        date="03 August, 1:30 pm – 4:00 pm"
                        venue="Football Ground, IIT Roorkee"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        link="https://www.facebook.com/events/170989841008984/"
                        linkDes="Details"
                    />
                </div>
            </div>
            <br/><br/>
        </section>
        </div>
  };

export default Events;
