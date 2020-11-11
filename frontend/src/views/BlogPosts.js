import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import axios from 'axios';
import Agregar from './Agregar'
import ruta from "../ruta"

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
      ],
    };
  }

  obtenerUsuarios = async () => {
  }

  render() {
    var {
      PostsListOne,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="2" title="Blog Posts" subtitle="Components" className="text-sm-left" />

          <Button onClick={this.obtenerUsuarios} size="sm" theme="white">
            <i className="far fa-address-book mr-1" /> Mostrar Usuarios
          </Button>
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post) => (
            <Agregar post={post}/>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
