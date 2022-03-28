import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function GitCommits() {
  return (
    <Row className="github-container">
      <h1 className="gitcommit-heading" style={{ paddingBottom: "3%" }}>
        GitHub Activity
      </h1>
      <GitHubCalendar
        username="captainpoldark"
        blockSize={15}
        color="#c084f5"
        fontSize={16}
        className="github-calendar"
      />
    </Row>
  );
}

export default GitCommits;
