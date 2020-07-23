export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const TESTE_ADD = "TESTE_ADD";
export const REMOVE_DATA = "REMOVE_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

export const requestApiData = (data) => ({
  type: REQUEST_API_DATA,
  ...data,
});
export const receiveApiData = (dado) => ({
  type: RECEIVE_API_DATA,
  dado,
});

export const testeAdd = (dado) => ({
  type: TESTE_ADD,
  dado,
});

export const removeData = (index) => ({
  type: REMOVE_DATA,
  index,
});

export const updateData = (dado, index) => ({
  type: UPDATE_DATA,
  dado,
  index,
});
