import { styled as styledMui } from '@mui/material/styles';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const PostContainer = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 50px;
`;

export const Container = styled.div`
  margin-top: 77px;
  margin-bottom: 100px;
  min-width: 826px;
  padding: 50px 50px 0 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  padding: 20px 60px 0px 60px;
  width: 826px;
  margin-bottom: 45px;
`;

export const TitleBox = styled.div``;
export const TitleArea = styled.textarea.attrs({
  placeholder: '제목을 입력하세요',
})`
  height: 64px;
  min-height: 64px;
  font-size: 48px;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  display: block;
  color: #000;
  width: 100%;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  display: flex;
  align-items: flex-end;
  color: #373737;
  :hover {
    background-color: ;
  }
  ::placeholder {
    font-weight: 500;
    color: #ccc;
  }
`;

export const BoxBorder = styled.div`
  background: rgb(73, 80, 87);
  width: 80px;
  align-self: flex-start;
  height: 6px;
  margin-top: 24px;
  margin-bottom: 18px;
  border-radius: 1px;
`;

export const TagBox = styled.div`
  display: flex;
  height: 54px;
  flex-wrap: wrap;
  font-size: 18px;
`;
export const TagInput = styled.input.attrs({
  placeholder: '태그를 입력하세요',
})`
  background: transparent;
  display: inline-flex;
  outline: none;
  cursor: text;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 20px;
  border: none;
  font-family: 'Noto Sans KR';
  font-style: normal;
  ::placeholder {
    font-weight: 500;
    color: #ccc;
  }
`;
export const Tag = styled.div<{ bgColor: string }>`
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  height: 32px;
  border-radius: 16px;
  padding: 0 16px 2px 16px;
  background: ${({ bgColor }) => bgColor};
  color: white;
  margin-right: 12px;
  margin-bottom: 12px;
  transition: 0.125s ease-in 0s;
  cursor: pointer;
  animation: 0.125s ease-in-out 0s;
  font-family: 'Noto Sans KR', 'Noto Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
`;

export const CameraWrapper = styled.div``;
export const CameraModelBox = styled.div`
  display: flex;
  justify-content: flex-start;
  /* align-items: flex-start; */
  width: 100%;
`;
export const LensModelBox2 = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  /* align-items: flex-start; */
  width: 100%;
`;
export const LensModelBox = styled.div`
  margin-top: 10px;
  margin-bottom: -20px;
  display: flex;
  justify-content: flex-start;
  /* align-items: flex-start; */
  width: 100%;
`;
export const IconBox = styled.div`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CameraCompany = styled.select`
  width: 180px;
  height: 30px;
  padding: 0 30px 0 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  line-height: $height + px;
  height: $height + px;
  background: #fff;
  margin: 0 5px 5px 0;
`;
export const CameraCompany2 = styled.p`
  width: 180px;
  height: 30px;
  padding: 0 30px 0 10px;
  line-height: $height + px;
  height: $height + px;
  background: #fff;
  margin: 0 5px 5px -10px;
  font-family: 'Noto Sans', 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  /* prinary_300 */

  color: #07b8b8;
`;
export const LensCompany = styled.select`
  width: 180px;
  height: 30px;
  padding: 0 30px 0 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  line-height: $height + px;
  height: $height + px;
  background: #fff;
  margin: 0 5px 5px 0;
`;
export const CameraSelectBox = styled.select`
  margin-left: 10px;
  width: auto;
  height: 30px;
  padding: 0 30px 0 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  line-height: $height + px;
  height: $height + px;
  background: #fff;
  margin: 0 5px 5px 0;
`;
export const CameraLens = styled.select`
  margin-left: 10px;
  width: auto;
  height: 30px;
  padding: 0 30px 0 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  line-height: $height + px;
  height: $height + px;
  background: #fff;
  margin: 0 5px 5px 0;
`;
export const CameraLens2 = styled.p`
  width: fit-content;
  height: 30px;
  padding: 0 30px 0 10px;
  line-height: $height + px;
  height: $height + px;
  background: #fff;
  margin: 0 5px 5px -10px;
  font-family: 'Noto Sans', 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  /* prinary_300 */

  color: #07b8b8;
`;
export const ContentBox2 = styled.div``;
export const ContentBox = styled.div`
  border: 2px solid #ccc;
  padding: 50px 100px;
  margin-bottom: 50px;
`;
export const QuillEditor = styled.div`
  height: 604px;
`;

export const LocationWrapper = styled.div`
  maring-bottom: 20px;
`;
export const SetLocationWrapper = styled.div``;
export const SetLocationBox = styled.div`
  display: flex;
  align-items: center;
`;
export const LatitudeBox = styled.div`
  display: flex;
  align-items: center;
`;
export const LongitudeBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SetLatitudeInput = styled.input.attrs({
  placeholde: '위도를 입력하세요',
})`
  margin-right: 20px;
`;
export const SetLongitudeInput = styled.input.attrs({
  placeholde: '경도를 입력하세요',
})``;

export const InputLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const SetLocationPositionBtn = styled.button``;

export const MapWrapper = styled.div``;

export const MapSectionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 563px;
  height: 40px;
  margin-bottom: 16px;
`;

export const MapTitleLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;
export const MapTitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: 'Noto Sans', 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #ff9e44;
`;

export const KaKaoMapWrapper = styled.div`
  width: 563px;
  height: 272px;
  margin-bottom: 30px;
  background-color: peru;
`;

export const CalendarWrapper = styled.div`
  margin-bottom: 10px;
`;
export const CurLoaction = styled.div``;

export const MapDescription = styled.div``;
export const DescriptionInput = styled.input.attrs({
  placeholder: '사진 위치를 기록해주세요',
})`
  margin: 8px 0px;
  width: 563px;
  height: 30px;
  border: none;
  outline: none;
  :focus {
    border: none;
    outlline: none;
  }
  :hover {
    background-color: #f9f9f9;
  }
  ::placeholder {
    padding-left: 4px;
  }
`;

export const PostFooter = styled.div`
  position: relative;
  transform: translateY(-100%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 670px;
  margin: auto;
  bottom: 140px;
  height: 50px;
  /* z-index: 100; */
`;

export const SubmitBtn = styled.button`
  width: 60px;
  height: 40px;
  margin-right: 30px;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 16px;
  color: white;
  background-color: #07b8b8;
`;
export const TextButton = styledMui(Button)`
  padding: 6px 8px;
  font-family: 'Noto Sans','Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size:18px;
  line-height: 27px;
  background-color:#07b8b8;
  color: #fff;
  :hover{
    font-weight: 600;
    color:#07b8b8;
  }
`;
