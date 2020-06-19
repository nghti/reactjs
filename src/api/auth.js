import { client } from '@/utils/axios';

export const loginRequest = (data) => {
  return client().post('/login', data);
};
