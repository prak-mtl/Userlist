import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Card from "../components/Card";

function DisplaySection(props) {
  return (
    <section className="data-section">
      <Row>
        {props.filtered &&
          props.filtered.map((item, index) => (
            <Col key={index} lg={4} md={4}>
              <Card item={item} />
            </Col>
          ))}
      </Row>
    </section>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filtered: state.filtered,
});

export default connect(mapStateToProps, "")(DisplaySection);
