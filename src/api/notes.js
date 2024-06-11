import { endpoints, getUrl } from './endpoints';

function getCookie(cName) {
  const name = cName + '=';
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

export function addNote(note, successCb, errorCb) {
  return fetch(getUrl(endpoints.ADD_NOTE), {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFTOKEN': getCookie('csrftoken'),
    },
    body: JSON.stringify(note),
  })
    .then(successCb)
    .catch(errorCb);
}

export function editNote(id, note, successCb, errorCb) {
  return fetch(getUrl(endpoints.EDIT_NOTE(id)), {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFTOKEN': getCookie('csrftoken'),
    },
    body: JSON.stringify({
      note,
    }),
  })
    .then(successCb)
    .catch(errorCb);
}

export function deleteNote(id, successCb, errorCb) {
  return fetch(getUrl(endpoints.EDIT_NOTE(id)), {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFTOKEN': getCookie('csrftoken'),
    },
  })
    .then(successCb)
    .catch(errorCb);
}

export function getNotes(successCb, errorCb) {
  fetch(getUrl(endpoints.GET_NOTES), {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(successCb)
    .catch(errorCb);
}
