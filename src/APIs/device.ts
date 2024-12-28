// @ts-ignore
import {PRIVATE_SERVER_ADDRESS} from '@env';

export const device_request = async (userId: string) => {
  console.log(PRIVATE_SERVER_ADDRESS);
  return await fetch(PRIVATE_SERVER_ADDRESS + '/device?userId=' + userId)
    .then(res => res.json())
    .catch(err => err);
};

export const updateDeviceStatus = async (requestBody: any) => {
  return await fetch(PRIVATE_SERVER_ADDRESS + '/device/status', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(res => res.json())
    .catch(err => err);
};
