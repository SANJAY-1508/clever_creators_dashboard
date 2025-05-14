import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { BiBook } from "react-icons/bi"; // For the book icon

const DashBoard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState("Active"); // State to track the active tab

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = localStorage.getItem("session");
        if (!session) {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking session:", error.message);
        setIsLoggedIn(false);
      }
    };

    checkSession();
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Handle tab switch
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container fluid className="dashboard-container">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <h2 className="welcome-text">Welcome</h2>
        </Col>
      </Row>

      {/* Tabs */}
      <Row className="mb-4">
        <Col>
          <div className="tabs">
            <span
              className={`tab ${activeTab === "Active" ? "active" : ""}`}
              onClick={() => handleTabSwitch("Active")}
            >
              Active
            </span>
            <span
              className={`tab ${activeTab === "Archived" ? "active" : ""}`}
              onClick={() => handleTabSwitch("Archived")}
            >
              Archived
            </span>
          </div>
        </Col>
      </Row>

      {/* Content based on active tab */}
      {activeTab === "Active" ? (
        <Row className="justify-content-center align-items-center no-courses">
          <Col xs={12} className="text-center">
            <BiBook size={50} className="book-icon" />
            <p className="no-courses-text">You don't have any courses</p>
            <Button variant="primary" className="go-to-store-btn">
              Go to Store
            </Button>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center align-items-center no-courses">
          <Col xs={12} className="text-center">
            <BiBook size={50} className="book-icon" />
            <p className="no-courses-text">
              You don't have any archived courses
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DashBoard;
