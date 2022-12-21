import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const authenticatedState = atom({
  key: 'authenticatedState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
