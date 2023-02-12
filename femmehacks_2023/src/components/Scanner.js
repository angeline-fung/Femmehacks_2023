import "../assets/Scanner.css";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
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


export default Scanner;
