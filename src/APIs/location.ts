// @ts-ignore
export const location_request = async (requestBody: any) => {
  console.log(requestBody);
  return await fetch('http://40.81.18.151:1234' + '/location', {
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
