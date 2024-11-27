/* eslint-disable no-useless-catch */
import { instance } from './apis';

export const getCartList = async (userId: number) => {
  try {
    const response = await instance.get('/api/v1/users/me/carts', {
      headers: {
        'User-Id': userId,
      },
    });

    return response.data?.data?.carts || [];
  } catch (err: any) {
    throw err;
  }
};
