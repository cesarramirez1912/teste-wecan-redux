import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Users.css";
import { requestApiData } from "../../redux/actions";
import { Button } from "reactstrap";
import UsersList from "../../Components/UsersList";
import { Link } from "react-router-dom";

export default function UsersScreen(props) {
  return (
    <div className="body-users">
      <div className="header-users">
        <span>Users from graphql</span>
        <Link to="/create-user">
          <Button color="primary">Create User +</Button>
        </Link>
      </div>
      <UsersList />
    </div>
  );
}
