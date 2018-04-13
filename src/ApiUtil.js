import $ from 'jquery';

const DOMAIN = 'http://localhost:8808/'

export function fetch(method, contentType, path, request, callback) {
  $.ajax({
    contentType,
    method,
    url: `${DOMAIN}${path}`,
    data: request,
  })
    .done(function (data) {
      console.log("response:", data);
      callback(data);
    });
}

export function search(request, callback) {
  fetch('POST', 'application/json', 'search', JSON.stringify(request), callback);
}

export function filter(callback) {
  fetch('POST', 'application/json', 'filter', {}, callback);
}
