export const endpoints = {
  ADD_NOTE: '/api/v1/note',
  EDIT_NOTE: (id) => `/api/v1/note/${id}`,
  GET_NOTES: '/api/v1/note',
};

export const getUrl = (path) => {
  return process.env.REACT_APP_API_URL + path;
};
