import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
import { Link, withRouter  } from 'react-router-dom';
import axios from 'axios';
//import {defineState} from 'redux-localstore'


const login = () => {
  let body ={
    user: user,
    pass: pass
  }
  console.log(body)
  axios.post('http://35.188.121.170:5000/login', body)
      .then(result => {
        console.log("-----------------")
        if(result.data.message=="Se encontro el usuario."){
          route = "/inicio"
        }
        else{
          route = "/Login";
        }   
      })
      .catch(err => {
        console.log(err)
      })      
    }
let route = "/Login";

var user = "";
var pass = "";

const actualizarUsuario = (e)=>{
  route = "/Login";
  user = e.target.value
}
const actualizarContra = (e)=>{
  route = "/Login";
  pass = e.target.value
}

const CompleteFormExample = () => {
  let iniciarSesion = () => {
    login();
  }  
  
    return (
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmailAddress">Usuario</label>
                    <FormInput                    
                      onChange={actualizarUsuario.bind(this)}
                      id="user"
                      type="user"
                      placeholder="User"
                    />
                  </Col>
                </Row>
                <br></br>
                <Row form>
                <Col md="6">
                    <label htmlFor="fePassword">Contraseña</label>
                    <FormInput
                      onChange={actualizarContra.bind(this)}
                      id="fePassword"
                      type="password"
                      placeholder="Password"
                    />
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                  <Link to={route} onClick={iniciarSesion} className="link">Iniciar Sesion</Link>  
                  </Col>                    
                </Row>
                <br></br>
                <Row>                  
                <Col md="6">
                  <Link to="/SignUp" type="submit" className="link">Crear Cuenta</Link>
                </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    );
}
export default CompleteFormExample;
