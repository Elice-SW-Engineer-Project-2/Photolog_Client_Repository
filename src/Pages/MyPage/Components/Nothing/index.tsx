import * as S from './styled';
import { ReactComponent as NothingSVG } from './nothing.svg';

const Nothing = () => (
  <div
    style={{
      height: 'calc(100vh - 77px)',
      width: '75vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
    }}
  >
    <NothingSVG />
    <S.Notice1 style={{ marginTop: '16px' }}>사진이 없습니다</S.Notice1>
    <S.Notice2
      style={{
        whiteSpace: 'nowrap',
      }}
    >
      사진을 올려 다른 사람들과 공유해보세요
    </S.Notice2>
  </div>
);

export default Nothing;
