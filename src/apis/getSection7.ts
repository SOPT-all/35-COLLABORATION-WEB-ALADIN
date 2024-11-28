/* eslint-disable no-useless-catch */
import { instance } from './apis';

export const getSection7 = async () => {
  try {
    const response = await instance.get('/api/v1/books?sort=MEMBERSHIP', {
      headers: { 'Content-Type': 'application/json' },
    });

    return response.data?.data?.books || [];
  } catch (err: any) {
    throw err;
  }
};
