import "../Screen/Users/Users.css";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { removeData } from "../redux/actions/index";
import { Link } from "react-router-dom";

function List() {
  const dados = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      {dados.dados.map((dado, index) => (
        <div key={dado.node.id} className="card-list ">
          <div className="row1">
            <div className="column">
              <img src="https://www.pinclipart.com/picdir/big/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png" />
            </div>
            <div className="column">
              <span className="nome">{dado.node.firstName}</span>
              <span className="sobrenome">{dado.node.lastName}</span>
              <span className="email">{dado.node.email}</span>
              <span className="email">{dado.node.phone}</span>
              <span className="email">{dado.node.cpf}</span>
              <span className="id">{dado.node.id}</span>
            </div>
          </div>
          <div className="row2">
            <Link
              to={{
                pathname: "/create-user",
                state: {
                  __typename: `${dado.node.__typename}`,
                  id: `${dado.node.id}`,
                  firstName: `${dado.node.firstName}`,
                  lastName: `${dado.node.lastName}`,
                  phone: `${dado.node.phone}`,
                  cpf: `${dado.node.cpf}`,
                  email: `${dado.node.email}`,
                  index: `${index}`,
                },
              }}
            >
              {" "}
              <Button className="edit">edit</Button>
            </Link>

            <Button
              className="danger"
              onClick={() => {
                dispatch(removeData(index));
              }}
            >
              del
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
