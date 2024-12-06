export const location_request = async (URL: string, requestBody: any) => {
  return location_fetching(URL, requestBody)
    .then(response => response.json())
    .catch(error => error);
};
const location_fetching = (URL: string, requestBody: any) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
};

