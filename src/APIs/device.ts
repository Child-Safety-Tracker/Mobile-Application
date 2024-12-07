// @ts-ignore
import {SERVER_ADDRESS} from '@env';

export const device_request = async (userId: string) => {
  return await fetch(SERVER_ADDRESS + '/device?userId=' + userId)
    .then(res => res.json())
    .catch(err => err);
};
