import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilState } from 'recoil';
import { ImageList, ImageListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import * as P from '../../../PhotoLists/Page/styled';
import * as S from './styled';
import { TOKEN } from '../../../Join/Atoms';
import { URL, accessClient } from '../../../../axiosInstance';
import likeIcon from '../../assets/likeIcon.svg';
import { likeclickHandler } from '../../Utils';
import Nothing from '../Nothing';

interface IPost {
  url: string | null;
  title: string | null;
  postId: number | null;
}
const Post: IPost = {
  url: null,
  title: null,
  postId: null,
};
const MylikeTap = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [items, setItems] = useState([Post]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useRecoilState(TOKEN);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [endPostId, setEndPostId] = useState<number | null>(null);

  const getItems = useCallback(async () => {
    setLoading(true);
    let response = null;
    if (!isLast) {
      try {
        const quantity = 30;
        if (endPostId === null) {
          // 첫 로딩 시 데이터 가져오기
          response = await accessClient(token)
            .get(`/users/mypage/likePosts`)
            .then((res) => {
              setItems(res.data.data);
              return res.data.data;
            });
        }
      } catch (err) {
        console.error('api요청에러: ', err);
      }
    }
    setLoading(false);
  }, [page]);

  // 새로고침 시 화면 맨 위로. (화면 아래에서 새로고침 했을 때 한꺼번에 API요청 여러번 하는 것 방지)
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  console.log('items', items);
  return (
    <S.Container>
      <P.Container>
        <ImageList variant="masonry" cols={5} gap={16}>
          {items &&
            items[0] &&
            items[0].postId !== null &&
            items.map((item: any): any => (
              <ImageListItem key={item.postId}>
                <img
                  id={item.postId}
                  src={`${item.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: 8,
                    position: `relative`,
                    cursor: `pointer`,
                  }}
                  role="presentation"
                  onClick={(e: any) => {
                    navigate(`post/${e.target.id}`);
                  }}
                />
                {/* <S.LikeButton>
                  <img
                    src={likeIcon}
                    id={item.postId}
                    alt="likeicon"
                    className="like"
                    role="presentation"
                    onClick={(e: any) => likeclickHandler(e, token)}
                  />
                </S.LikeButton> */}
              </ImageListItem>
            ))}
        </ImageList>
        {items && items[0] && items[0].postId === null && <Nothing />}
      </P.Container>
    </S.Container>
  );
};

export default MylikeTap;
