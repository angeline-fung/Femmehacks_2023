import "../assets/Scanner.css";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import bg from "../images/background.png";
import "../assets/Landing.css";
import styled from "styled-components";

function Scanner() {
  return (
    <div>
      <div className="welcome">
        <h1>Upload your receipts!</h1>
      </div>
      {`\n`}
      <div>
        <p>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
        </p>
      </div>
      <div>
        <p>1. Upload your file</p>
        <p>2. Wait for it to scan!</p>
      </div>
    </div>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-image: url(${bg});
`;

export default Scanner;
