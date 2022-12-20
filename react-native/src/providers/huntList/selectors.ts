import { selectorFamily } from 'recoil';
import { getHunts } from './api';

export const huntListQuery = selectorFamily({
  key: 'HuntListQuery',
  get: () => async () => {
    const list = await getHunts();
    console.log(list);

    return list;
  },
});
