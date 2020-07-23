import React from "react";
import { useQuery, gql } from "@apollo/client";
import List from "./List";
import "../Screen/Users/Users.css";
import { useSelector, useDispatch } from "react-redux";
import { receiveApiData } from "../redux/actions/index";

const GET_USERS = gql`
  {
    getCompanyById(id: "Jwx7C2RAekf1XZmUf9kX") {
      __typename
      ... on Company {
        name
        usersConnection(first: 10) {
          edges {
            node {
              id
              firstName
              lastName
              phone
              email
              cpf
            }
          }
        }
      }
    }
  }
`;

function ListUsers() {
  var teste;
  const dados = useSelector((state) => state);
  const { loading, error, data } = useQuery(GET_USERS);
  const dispatch = useDispatch();
  if (loading)
    return (
      <div className="loading">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  if (error) return <p>Error :(</p>;

  if (data) {
    teste = [...data.getCompanyById.usersConnection.edges];
    if (dados.dados.length > 0) {
    } else {
      dispatch(receiveApiData(teste));
    }
  }

  return (
    <div className="list-body">
      <List />
    </div>
  );
}
export default ListUsers;

/*import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../redux/actions/index";

const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive",
};

let NewsItem = ({ article }) =>
  article.loading ? (
    <div>CARREGANDO</div>
  ) : (
    <div>
      <article style={articleStyle}>
        <div>
          <h1>{article.data.seed}</h1>
          <h1>{article.data.seed}</h1>
        </div>
      </article>
    </div>
  );

const mapStateToProps = (state) => ({
  article: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions.requestApiData, dispatch);

NewsItem = connect(mapStateToProps, null)(NewsItem);
export default NewsItem;
*/
