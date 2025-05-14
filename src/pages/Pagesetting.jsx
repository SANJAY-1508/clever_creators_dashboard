import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Pagesetting = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col lg="4" className="text-center">
          <section class="profile-picture">
            <h4>
              <span style={{ fontSize: "18px" }}>Profile Picture</span>
            </h4>
          </section>
        </Col>
        <Col lg="8" className="text-center">
          <div className="avatar-wrapper">
            <span className="avatar-initial">P</span>
            <div className="camera-icon">
              <i className="fas fa-camera"></i>
            </div>
          </div>
        </Col>
      </Row>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="4" className="text-center">
            <div>
              <section class="update-details">
                <h4>
                  <span style={{ fontSize: "18px" }}>
                    Update Profile Details
                  </span>
                </h4>
              </section>
            </div>
          </Col>
          <Col lg="8" className="text-center">
            <section class="update-details">
              <form>
                <label>
                  Name* <input type="text" required />
                </label>
                <label>
                  Email* <input type="email" required />
                </label>
                <label>
                  Mobile* <input type="text" required />
                </label>
                <button type="submit">Save</button>
              </form>
            </section>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg="4">
            <div>
              <section class="change-password">
                <h3>
                  <span style={{ fontSize: "18px" }}>Change Password</span>
                </h3>
              </section>
            </div>
          </Col>
          <Col lg="8">
            <form>
              <label>
                Current Password <input type="password" required />
              </label>
              <label>
                New Password <input type="password" minlength="6" required />
              </label>
              <label>
                Retype New Password{" "}
                <input type="password" minlength="6" required />
              </label>
              <button type="submit">Save</button>
            </form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg="4">
            <div>
              <section class="update-details">
                <h3>
                  <span style={{ fontSize: "18px" }}>Delete Profile</span>
                </h3>
              </section>
            </div>
          </Col>
          <Col lg="8">
            <div>
              <section>
                <form>
                  <label>
                    <input type="checkbox" required /> I agree to delete my
                    profile
                  </label>
                  <button type="submit" class="delete-btn">
                    Delete
                  </button>
                  <p class="note">
                    Please note that if you choose to delete your own profile,
                    your learner account would no longer exist.
                  </p>
                </form>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Pagesetting;
