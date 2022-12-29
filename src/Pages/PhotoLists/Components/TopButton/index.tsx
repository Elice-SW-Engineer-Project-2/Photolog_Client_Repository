import { useState, useEffect, ReactElement } from 'react';
import * as S from './styled';

const TopButton = (): any => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <S.ScrollContainer>
        <S.Button onClick={scrollToTop}> TOP</S.Button>
      </S.ScrollContainer>
    )
  );
};

export default TopButton;
