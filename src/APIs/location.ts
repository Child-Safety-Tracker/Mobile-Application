// @ts-ignore
import {PRIVATE_SERVER_ADDRESS} from '@env';

export const location_request = async (requestBody: any) => {
  return await fetch(PRIVATE_SERVER_ADDRESS + '/location', {
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

export const location_request_7_days = async (requestBody: any) => {
  return await fetch(PRIVATE_SERVER_ADDRESS + '/location', {
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
