import React, { Component } from 'react';
import './team.css';
import { Row, Col } from 'react-bootstrap';
import sanjay from './assets/team/SanjayDhar.jpg';
import nirmohi from './assets/team/nirmohiUncle.jpg';
import dlitt from './assets/team/dlittphD.jpeg';

class Team extends Component {
  render() {
    return (
      <div className="text-center team-wrapper mt-lg-5 mt-3">
        <h1>The Leadership Team</h1>
        <p>
          Know the people who lead team PRAKHAR to achieve the vision &amp;
          goals
        </p>
        <Row className="w-75 mx-auto team-horizontal mt-4">
          <Col className="col-md-3 col-12">
            <img
              src={sanjay}
              alt="team member: Sanjay Dhar"
              className="img-fluid"
            />
          </Col>
          <Col className="col-md-9 col-12 text-left team-member mb-4">
            <h5>David Rana</h5>
            <p className="team-member-role">Founder And Managing Trustee</p>
            <p className="team-member-description">
              David was founded in Khatima ,Uttarakhand by David, Currently studying in Delhi University.
              Preparing for website development.A beginner is the title of website developer. &amp; Participates in social work since childhood.
            </p>
          </Col>
        </Row>

        <Row className="w-75 mx-auto mt-4">
          <Col className="col-md-4 col-12">
            <Row>
              <Col className="col-12">
                <img
                  src={nirmohi}
                  alt="team member: Nirmohi"
                  className="img-fluid"
                />
              </Col>
              <Col className="col-12 text-left team-member mb-4">
                <h5>Vibhanshu Rana</h5>
                <p className="team-member-role">Member: Advisory Board </p>
                <p className="team-member-description">
                  Vibhanshu Rana, Professional software engineer since last 5 years.He founded the Youth team.
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-4 col-12">
            <Row>
              <Col className="col-12">
                <img
                  src={dlitt}
                  alt="team member: D.Lit PhD"
                  className="img-fluid"
                />
              </Col>
              <Col className="col-12 text-left team-member mb-4">
                <h5>Vijeta Rana</h5>
                <p className="team-member-role">Member: Advisory Board </p>
                <p className="team-member-description">
                  Vijeta Rana, For the past many years, a good teacher is the one who guides the children and  a Youth leader.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Team;
