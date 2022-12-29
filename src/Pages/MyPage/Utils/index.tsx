import { accessClient } from '../../../axiosInstance';

export const likeclickHandler = (e: any, token: string) => {
  console.log(e.target.className);
  if (e.target.className === 'like') {
    //  좋아요 눌린거=> 좋아요 해제
    e.target.classList.remove('like');
    console.log(`좋아요버튼 누른 post의 id`, e.target.id);
    accessClient(token).post(`posts/${e.target.id}/unlike`);
  } else {
    e.target.classList.add('like'); // 좋아요 x => 좋아요
    console.log(`좋아요 x => 좋아요 post의 id`, e.target.id);
    accessClient(token).post(`posts/${e.target.id}/like`);
  }
  console.log(`classname`, e.target.className);
};
