import { accessClient } from '../../../axiosInstance';

export const likeclickHandler = (e: any, token: string) => {
  if (e.target.className === 'like') {
    //  좋아요 눌린거=> 좋아요 해제
    e.target.classList.remove('like');

    accessClient(token).post(`posts/${e.target.id}/unlike`);
  } else {
    e.target.classList.add('like'); // 좋아요 x => 좋아요

    accessClient(token).post(`posts/${e.target.id}/like`);
  }
};
