// @ts-ignore
export const location_request = async (requestBody: any) => {
  console.log(requestBody);
  return await fetch(`http://${process.env.PRIVATE_SERVER_ADDRESS}` + '/location', {
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
