// @ts-ignore
import {PRIVATE_SERVER_ADDRESS} from '@env';

export const device_request = async (userId: string) => {
  return await fetch(PRIVATE_SERVER_ADDRESS + '/device?userId=' + userId)
    .then(res => res.json())
    .catch(err => err);
};
