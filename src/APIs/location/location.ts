export const location_request = async (URL: string, requestBody: any) => {
  return await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(res => res.json())
    .catch(err => err);
};
