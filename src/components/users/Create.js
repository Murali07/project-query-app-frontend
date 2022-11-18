import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Create.css";

function Create() {
  return (
    <div className="create">
      <Card className="text-center">
        <Card.Header>
          <Card.Title>Instant Solution</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Is your query anything related to javascript? make use use of this
            area for instant solution
          </Card.Text>
          <div class="form-group">
            <label for="query">Enter your query</label>
            <textarea
              class="form-control rounded-0"
              id="query"
              rows="3"
              placeholder="Enter your query in detail"
            ></textarea>
          </div>
          <Button variant="primary">Get Answer</Button>
          <Card.Subtitle>
            Solution
          </Card.Subtitle>
          <Card.Text>
          If not Satisfied with the solution, press "cancel" to create a New query for mentor assistance
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
        <Button variant="outline-primary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Create;
