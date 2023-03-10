import axios from 'axios';
import Calendar from 'react-calendar';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCameraRetro, FaMapMarkerAlt } from 'react-icons/fa';
import { RiCameraLensFill } from 'react-icons/ri';
import { useRecoilState } from 'recoil';
import { TOKEN } from '../../Join/Atoms';
import Spinner from '../../Home/Components/Spinner';
import { HeaderForPost } from '../../../Components/Commons/Header';
import * as S from '../../Post/Page/styled';
import * as SC from './styled';
import Dialog from '../../../Components/Commons/Dialog';
import { getUser } from '../../Edit/Utils';
import defaultProfile from '../../Edit/assets/defaultProfile.svg';
import { accessClient } from '../../../axiosInstance';

const PhotoPost = () => {
  const { postId } = useParams();
  const token = useRecoilState(TOKEN)[0];
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<any>(
    'postData',
    () => axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`),
    {
      refetchOnWindowFocus: false,
    },
  );

  const cameraRef = useRef<HTMLSelectElement>(null);
  const lensRef = useRef<HTMLSelectElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const commentListRef = useRef<any>([]);
  const tagColor: string[] = ['#7978C6', '#7EC885', '#E6549D'];
  const iconStyle = {
    color: '#07b8b8',
    size: 24,
  };
  const iconStyle2 = {
    color: '#FF9E44',
    size: 24,
  };
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [createFlag, setCreateFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [delCommentFlag, setDelCommentFlag] = useState(false);

  // data State
  const [getMyProfile, setGetMyProfile] = useState<any>('');
  const [defaultImg, setDefaultImg] = useState<any>('');
  const [delBtnId, setDelBtnId] = useState<any>(null);

  useEffect(() => {
    setDefaultImg(defaultProfile);
    getUser(token).then((res) => {
      setGetMyProfile(res);
    });
  }, []);

  // ?????? Dialog Fn
  const agreeFnCreate = () => {
    setCreateFlag(false);
    return createFlag;
  };

  const disAgreeFnCreate = () => {
    setCreateFlag(false);
    return createFlag;
  };

  const handleDeletePost = async () => {
    await accessClient(token)
      .delete(`/posts/${postId}`)
      .then(() => navigate('/menu/photolists'));
  };

  // ?????? Dialog Fn
  const agreeFn = () => {
    handleDeletePost();
    setDeleteFlag(false);
    return deleteFlag;
  };

  const disAgreeFn = () => {
    setDeleteFlag(false);
    return deleteFlag;
  };

  // ?????? Dialog Fn
  const agreeFnUpdate = () => {
    setUpdateFlag(false);
    return updateFlag;
  };

  const disAgreeFnUpdate = () => {
    setUpdateFlag(false);
    return updateFlag;
  };

  // ?????? ??????
  const handleDeleteComment = (e: any) => {
    const buttonId = e.target.getAttribute('id');
    setDelBtnId(buttonId);
    setDelCommentFlag(true);
  };

  const deleteComment = async () => {
    await accessClient(token)
      .delete(`${process.env.REACT_APP_API_BASE_URL}/comments/${delBtnId}`)
      .then((res) => {
        if (res.data.success) {
          setDelBtnId('');
          window.location.reload();
        }
      });
  };

  // ?????? ?????? Dialog Fn
  const agreeFnDelete = () => {
    deleteComment();
    setDelCommentFlag(false);
    return delCommentFlag;
  };

  const disAgreeFnDelete = () => {
    setDelCommentFlag(false);
    return delCommentFlag;
  };

  // ?????? ??????
  const createComment = async () => {
    if (commentRef.current) {
      const content = commentRef.current!.value.toString();
      await accessClient(token)
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/posts/${data.data.data.images[0].postId}/comments`,
          { content },
        )
        .then((res) => {
          if (res.data.success) {
            commentRef.current!.value = '';
            window.location.reload();
          }
        });
    }
  };

  // ?????? ??????
  const updateComment = async (content: any, commentId: any) => {
    await accessClient(token)
      .put(`${process.env.REACT_APP_API_BASE_URL}/comments/${commentId}`, {
        content,
      })
      .then((res) => {
        if (res.data.success) {
          window.location.reload();
        }
      });
  };

  const handleUpdateComment = (id: any, commentId: any) => {
    const tx: any = document.getElementById(id);
    if (tx.value.length < 1) setUpdateFlag(true);
    else {
      updateComment(tx.value, commentId);
    }
  };

  const handleCreateComment = () => {
    if (commentRef.current!.value.length < 1) setCreateFlag(true);
    else createComment();
  };

  return (
    <>
      {isLoading && !data ? (
        <Spinner />
      ) : (
        <>
          <S.PostContainer>
            <HeaderForPost />
            <S.Container>
              <S.Wrapper>
                <S.TitleWrapper>
                  <S.TitleArea value={data.data.data.title} readOnly />
                  {/* <S.BoxBorder /> */}
                  <S.TagBox>
                    {data.data.data.hashtags.map((tagAttr: any) => (
                      <S.Tag
                        bgColor={tagColor[2]}
                        key={tagAttr.id.toString() + tagAttr.tag.name}
                      >
                        {tagAttr.tag.name}
                      </S.Tag>
                    ))}
                  </S.TagBox>
                  <S.CameraModelBox>
                    <S.IconBox>
                      <FaCameraRetro {...iconStyle} />
                    </S.IconBox>
                    {/* <S.CameraCompany
                    ref={cameraRef}
                    value={data.data.data.images[0].cameraId}
                    disabled
                  >
                    <option value={data.data.data.images[0].cameraId}>
                      {data.data.data.images[0].camera.model}
                    </option>
                  </S.CameraCompany> */}
                    <S.CameraCompany2>
                      {data.data.data.images[0].camera.model}
                    </S.CameraCompany2>
                  </S.CameraModelBox>
                  <S.LensModelBox>
                    <S.IconBox>
                      <RiCameraLensFill {...iconStyle} />
                    </S.IconBox>
                    {data.data.data.images[0].lensId === null && (
                      <S.LensCompany ref={lensRef} value="" disabled>
                        <option value="">??????</option>
                      </S.LensCompany>
                    )}
                    {data.data.data.images[0].lensId !== null && (
                      // <S.CameraLens
                      //   ref={lensRef}
                      //   value={data.data.data.images[0].lensId}
                      //   disabled
                      // >
                      //   <option value={data.data.data.images[0].lensId} disabled>
                      //     {data.data.data.images[0].lens.model}
                      //   </option>
                      // </S.CameraLens>
                      <S.CameraLens2>
                        {data.data.data.images[0].lens.model}
                      </S.CameraLens2>
                    )}
                  </S.LensModelBox>
                </S.TitleWrapper>
                <S.ContentBox>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.data.data.content.replace(
                        '<img ',
                        '<img style="width: 704px;"',
                      ),
                    }}
                  />
                </S.ContentBox>
                <S.MapWrapper>
                  <S.MapSectionBar>
                    <S.MapTitleLogoBox>
                      <S.IconBox>
                        <FaMapMarkerAlt {...iconStyle2} />
                      </S.IconBox>
                      <S.MapTitleText>??????</S.MapTitleText>
                    </S.MapTitleLogoBox>
                  </S.MapSectionBar>
                  <div
                    style={{ display: 'flex', flexDirection: 'row-reverse' }}
                  >
                    <S.CalendarWrapper>
                      <Calendar
                        value={
                          new Date(
                            data.data.data.images[0].takenAt.split('T')[0],
                          )
                        }
                      />
                    </S.CalendarWrapper>
                    <S.KaKaoMapWrapper>
                      <S.CurLoaction>
                        <Map
                          center={{
                            lat: data.data.data.images[0].latitude,
                            lng: data.data.data.images[0].longitude,
                          }}
                          style={{
                            width: '563px',
                            height: '272px',
                          }}
                          level={3}
                        >
                          <MapMarker
                            position={{
                              lat: data.data.data.images[0].latitude,
                              lng: data.data.data.images[0].longitude,
                            }}
                          />
                        </Map>
                        <S.DescriptionInput
                          value={data.data.data.images[0].locationInfo}
                          disabled
                        />
                      </S.CurLoaction>
                    </S.KaKaoMapWrapper>
                  </div>
                </S.MapWrapper>
              </S.Wrapper>
            </S.Container>
          </S.PostContainer>
          {getMyProfile!.user_id === data.data.data.user.id && (
            <S.PostFooter>
              <S.TextButton
                style={{ marginTop: '100px' }}
                onClick={() => setDeleteFlag(true)}
              >
                ??????
              </S.TextButton>
              <Dialog
                openFlag={deleteFlag}
                title="??????"
                content="?????? ?????????????????????????"
                agreeFn={agreeFn}
                disAgreeFn={disAgreeFn}
                sizeW="300px"
                sizeH="180px"
              />
            </S.PostFooter>
          )}
        </>
      )}
    </>
  );
};

export default PhotoPost;
