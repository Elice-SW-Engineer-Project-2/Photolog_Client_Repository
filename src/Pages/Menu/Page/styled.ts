import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestHeader = styled.div`
  height: 40px;
  background-color: blue;
`;

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  width: 95%;
  margin: auto;
  min-height: 900px;
  flex-direction: column;
  padding: 100px;
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: red;
  height: 60px;
  margin-bottom: 50px;
`;

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled(motion.li)`
  margin-right: 20px;
`;

export const MenuUnderLine = styled(motion.div)`
  width: 100%;
  height: 1px;
  background-color: #74b9ff;
`;

export const MenuName = styled.span``;

export const ContentsFrame = styled.div``;

export const MapsContent = styled.div``;

export const PhotoLists = styled.div``;
