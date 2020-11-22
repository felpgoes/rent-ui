import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  font-size: 12px;

  @media (max-width: 768px) {
    margin-bottom: 28px;
  }
`

export const SortTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${theme.fontBold};
  font-size: 16px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`

export const OverflowWrapper = styled.div`
  position: relative;
  height: 35px;
  overflow: hidden;
`

export const FadeLeft = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 10px;
  z-index: 1;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.001) 0%, ${theme.bgGray} 70%);

  @media (max-width: 768px) {
    display: block;
  }
`

export const FadeRight = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 10px;
  z-index: 1;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.001) 0%, ${theme.bgGray} 70%);

  @media (max-width: 768px) {
    display: block;
  }
`

export const Helper = styled.div`
  display: none;
  min-height: 32px;
  min-width: 1px;

  @media (max-width: 768px) {
    display: block;
  }
`

export const SortButtonsWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0 3px 20px;

  @media (max-width: 768px) {
    padding: 0 10px 20px;
  }
`
