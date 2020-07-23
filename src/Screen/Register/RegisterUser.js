import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./RegisterUser.css";
import { Button } from "reactstrap";
import { testeAdd, updateData } from "../../redux/actions/index";

import { Link } from "react-router-dom";

export default function RegisterScreen(props) {
  const dados = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isEdit, setisEdit] = useState(
    props.location.state !== undefined ? true : false
  );

  const [formulario, setFormulario] = useState({
    node: {
      __typename: "User",
      id: "QAoQ4CRymHTeVaEhMHrJ2122",
      firstName: "",
      lastName: "",
      phone: "",
      cpf: "",
      email: "",
    },
  });

  return (
    <div className="body-register">
      <div className="center-form">
        <div className="esquerdo-img"></div>
        <div className="direita-form">
          <span className="title-bold">
            Register <span className="title">User</span>{" "}
          </span>
          <div className="divider"></div>
          <div className="form">
            <div className="fundo-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2em"
                viewBox="0 0 26 26"
                width="1.2em"
              >
                <path
                  d="M16.8035889,14.4605103c2.0820923-1.2811279,3.4776611-3.5723267,3.4776611-6.1885376  C20.28125,4.262207,17.0146484,1,13,1S5.71875,4.262207,5.71875,8.2719727c0,2.6162109,1.3955688,4.9074097,3.4776611,6.1885376  c-4.4957886,1.0071411-7.6505127,3.7583618-7.6505127,7.0878296C1.5458984,24.2729492,8.7460938,25,13,25  s11.4541016-0.7270508,11.4541016-3.4516602C24.4541016,18.2188721,21.2993774,15.4676514,16.8035889,14.4605103z   M7.21875,8.2719727C7.21875,5.0893555,9.8125,2.5,13,2.5s5.78125,2.5893555,5.78125,5.7719727S16.1875,14.043457,13,14.043457  S7.21875,11.4545898,7.21875,8.2719727z M13,23.5c-6.1149902,0-9.7753906-1.289978-9.9536743-1.9567261  C3.0509644,18.2345581,7.5145874,15.543457,13,15.543457c5.4848633,0,9.9481201,2.6906128,9.9536133,5.9988403  C22.7797852,22.2085571,19.1190186,23.5,13,23.5z"
                  fill="#1D1D1B"
                />
              </svg>
              <input
                type="text"
                id="nome"
                placeholder="Name"
                defaultValue={
                  props.location.state === undefined
                    ? ""
                    : props.location.state.firstName
                }
              ></input>
            </div>
            <div className="fundo-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2em"
                viewBox="0 0 26 26"
                width="1.2em"
              >
                <path
                  d="M16.8035889,14.4605103c2.0820923-1.2811279,3.4776611-3.5723267,3.4776611-6.1885376  C20.28125,4.262207,17.0146484,1,13,1S5.71875,4.262207,5.71875,8.2719727c0,2.6162109,1.3955688,4.9074097,3.4776611,6.1885376  c-4.4957886,1.0071411-7.6505127,3.7583618-7.6505127,7.0878296C1.5458984,24.2729492,8.7460938,25,13,25  s11.4541016-0.7270508,11.4541016-3.4516602C24.4541016,18.2188721,21.2993774,15.4676514,16.8035889,14.4605103z   M7.21875,8.2719727C7.21875,5.0893555,9.8125,2.5,13,2.5s5.78125,2.5893555,5.78125,5.7719727S16.1875,14.043457,13,14.043457  S7.21875,11.4545898,7.21875,8.2719727z M13,23.5c-6.1149902,0-9.7753906-1.289978-9.9536743-1.9567261  C3.0509644,18.2345581,7.5145874,15.543457,13,15.543457c5.4848633,0,9.9481201,2.6906128,9.9536133,5.9988403  C22.7797852,22.2085571,19.1190186,23.5,13,23.5z"
                  fill="#1D1D1B"
                />
              </svg>
              <input
                type="text"
                placeholder="Last Name"
                id="sobrenome"
                defaultValue={
                  props.location.state === undefined
                    ? ""
                    : props.location.state.lastName
                }
              ></input>
            </div>
            <div className="fundo-input">
              <svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                className="bi bi-envelope"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                />
              </svg>
              <input
                type="text"
                id="email"
                placeholder="Email"
                defaultValue={
                  props.location.state === undefined
                    ? ""
                    : props.location.state.email
                }
              ></input>
            </div>
            <div className="fundo-input">
              <svg height="1.2em" viewBox="0 0 141.732 141.732" width="1.2em">
                <g id="Livello_12">
                  <path d="M108.225,118.226h-66.22V10.889h66.22V118.226z M69.962,129.125c0-2.951,2.37-5.345,5.294-5.345   c2.925,0,5.294,2.394,5.294,5.345c0,2.95-2.369,5.348-5.294,5.348C72.332,134.469,69.962,132.075,69.962,129.125 M112.668,133.976   h0.009V5.341V5.34V5.314h-0.002C112.661,2.377,110.278,0,107.336,0c-0.021,0-0.038,0.002-0.057,0.002V0H95.282h-35H42.894   c-2.938,0.002-5.319,2.379-5.335,5.314h-0.001v128.661h0.008c-0.002,0.056-0.008,0.111-0.008,0.169   c0,2.878,2.419,5.212,5.404,5.212c0.044,0,0.087-0.006,0.131-0.007v0.007h64.316l0,0c2.904,0,5.267-2.333,5.267-5.212   C112.677,134.087,112.67,134.031,112.668,133.976" />
                </g>
                <g id="Livello_1_1_" />
              </svg>
              <input
                type="text"
                id="numero"
                placeholder="Phone"
                defaultValue={
                  props.location.state === undefined
                    ? ""
                    : props.location.state.phone
                }
              ></input>
            </div>
            <div className="fundo-input">
              <svg viewBox="0 0 96 96" width="1.2em" height="1.2em">
                <rect height="6" width="24" x="57" y="69" />
                <rect height="6" width="24" x="57" y="57" />
                <rect height="6" width="24" x="57" y="45" />
                <path d="M90,21H54v6h33v54H9V27h33v-6H6c-1.657,0-3,1.344-3,3v60c0,1.656,1.343,3,3,3h84c1.657,0,3-1.344,3-3V24  C93,22.344,91.657,21,90,21z" />
                <path d="M39,29V9h18v20c0,1.657-1.343,3-3,3H42C40.343,32,39,30.657,39,29z M45,26h6V15h-6V26L45,26z" />
                <path d="M51,61c0-4.881-2.934-9.083-7.127-10.956C44.589,48.508,45,46.803,45,45c0-6.617-5.383-12-12-12s-12,5.383-12,12  c0,1.803,0.411,3.508,1.127,5.044C17.934,51.917,15,56.119,15,61v14h36V61z M33,39c3.309,0,6,2.691,6,6s-2.691,6-6,6  c-3.309,0-6-2.691-6-6S29.691,39,33,39z M45,69H21v-8c0-3.115,2.387-5.684,5.429-5.971C28.318,56.271,30.574,57,33,57  s4.682-0.729,6.57-1.971C42.613,55.316,45,57.885,45,61V69z" />
              </svg>
              <input
                type="text"
                id="cpf"
                placeholder="CPF"
                defaultValue={
                  props.location.state === undefined
                    ? ""
                    : props.location.state.cpf
                }
              ></input>
            </div>
          </div>
          <div className="divider"></div>
          <Link to="/users">
            <Button
              className={
                props.location.state === undefined
                  ? "btn-registrar"
                  : "btn-update"
              }
              onClick={(e) => {
                if (props.location.state === undefined) {
                  formulario.node.firstName = document.getElementById(
                    "nome"
                  ).value;
                  formulario.node.lastName = document.getElementById(
                    "sobrenome"
                  ).value;
                  formulario.node.email = document.getElementById(
                    "email"
                  ).value;
                  formulario.node.phone = document.getElementById(
                    "numero"
                  ).value;
                  formulario.node.cpf = document.getElementById("cpf").value;
                  formulario.node.id =
                    formulario.node.id + Math.floor(Math.random() * 10000);
                  dispatch(testeAdd(formulario));
                } else {
                  formulario.node.firstName = document.getElementById(
                    "nome"
                  ).value;
                  formulario.node.lastName = document.getElementById(
                    "sobrenome"
                  ).value;
                  formulario.node.email = document.getElementById(
                    "email"
                  ).value;
                  formulario.node.phone = document.getElementById(
                    "numero"
                  ).value;
                  formulario.node.cpf = document.getElementById("cpf").value;
                  formulario.node.id = props.location.state.id;
                  dispatch(updateData(formulario, props.location.state.index));
                }
                document.getElementById("nome").value = "";
                document.getElementById("sobrenome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("cpf").value = "";
                document.getElementById("numero").value = "";
              }}
            >
              {props.location.state === undefined ? "Register" : "Update"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
