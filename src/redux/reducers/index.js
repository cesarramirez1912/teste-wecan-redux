import {
  RECEIVE_API_DATA,
  REQUEST_API_DATA,
  TESTE_ADD,
  REMOVE_DATA,
  UPDATE_DATA,
} from "../actions/index";

const INITIAL_STATE = {
  dados: [],
  loading: false,
  error: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return { ...state, loading: true };
    case RECEIVE_API_DATA:
      return { dados: action.dado };
    case TESTE_ADD: {
      const dados = state.dados;
      dados.push(action.dado);
      return { dados };
    }
    case REMOVE_DATA: {
      const dados = state.dados;
      delete dados[action.index];
      return { dados };
    }
    case UPDATE_DATA: {
      const { dado, index } = action;
      const dados = state.dados;
      dados[index] = dado;

      return { dados };
    }
    default:
      return state;
  }
};
export default reducer;
