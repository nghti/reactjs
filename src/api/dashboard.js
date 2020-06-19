import { client } from '@/utils/axios';

export const userRequest = (id) => {
  return client().get(`/users?page=${id}`);
};
