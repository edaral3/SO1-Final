import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  Button,
  FormSelect
} from "shards-react";
import axios from 'axios';

import ruta from "../../ruta"


class TopReferrals extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      friends: [],
    }
  }
  
  
  obtenerUsuarios = async () => {
    let list = []
  
  }

  render() {
    return (
      <Card small>
        <CardHeader className="border-bottom">
          <Row>
            <Col>
              <h6 className="m-0">Mis Amigos</h6>
            </Col>
            <Col>
              <Button onClick={this.obtenerUsuarios}>
                Mostrar
        </Button>
            </Col>
          </Row>

          <div className="block-handle" />
        </CardHeader>

        <CardBody className="p-0">
          <ListGroup small flush className="list-group-small">
            {this.state.friends.map((item) => (
              <ListGroupItem className="d-flex px-3">
                <span className="text-semibold text-fiord-blue">{item.body}</span>
                <span className="ml-auto text-right text-semibold text-reagent-gray">
                  {item.title}
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>

        <CardFooter className="border-top">
          <Row>
            {/* Time Span */}
            

            {/* View Full Report */}
            <Col className="text-right view-report">
              {/* eslint-disable-next-line */}
            </Col>
          </Row>
        </CardFooter>
      </Card>
    )
  };
}
export default TopReferrals;
