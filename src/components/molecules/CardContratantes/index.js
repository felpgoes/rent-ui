import React from 'react';
import ReactTooltip from 'react-tooltip';
import { FiCheck } from 'react-icons/fi';
import Icon from '../../atoms/Icon';
import {
  Container,
  CardContratantesContentContainer,
  CardContratantesHeaderContainer,
  HeaderIconsContainer,
  WrapperFlex,
  IconWrapper,
  IconContainer,
} from './styles';
import LoadingSpinning from '../LoadingSpinning';

import { isContratante } from '../../../utils/userRole';

import { Text } from '../../atoms/Text';
import theme from '../../../styles/theme';

function CardContratantes({
  children,
  contratanteHeader,
  cardType,
  marginLeft,
  marginTop,
  display,
  width,
  onClickEditar,
  onClickSalvar,
  onClickExcluir,
  isEditar,
  usuarioDadosGerais,
  idUsuario,
  idParametrizacao,
  loading,
}) {
  return (
    <Container
      marginTop={marginTop}
      marginLeft={marginLeft}
      display={display}
      width={width}
    >
      <CardContratantesHeaderContainer>
        <WrapperFlex>
          {contratanteHeader}
          <HeaderIconsContainer>
            {!isEditar ? (
              <IconWrapper
                onClick={onClickEditar}
                data-tip="editar"
                data-for="card"
              >
                <Icon color={theme.grey} size="25" icon="pencil" margin="20%" />
              </IconWrapper>
            ) : loading ? (
              <LoadingSpinning color={theme.greenDefault} size="25" />
            ) : (
              <IconWrapper
                onClick={onClickSalvar}
                data-tip="salvar"
                data-for="card"
              >
                <IconContainer margin="20%">
                  <FiCheck color={theme.grey} size="25" icon="pencil" />
                </IconContainer>
              </IconWrapper>
            )}

            <IconWrapper
              data-tip="excluir"
              data-for="card"
              marginLeft="5px"
              marginRight="5px"
              onClick={onClickExcluir}
            >
              <Icon margin="20%" color={theme.grey} size="25" icon="delete" />
            </IconWrapper>
          </HeaderIconsContainer>
        </WrapperFlex>
        <Text font="15px calibri" text={cardType} />
      </CardContratantesHeaderContainer>
      <CardContratantesContentContainer>
        {children}
      </CardContratantesContentContainer>
      <ReactTooltip
        id="card"
        className="extraClass"
        delayHide={300}
        effect="solid"
        backgroundColor={theme.greenDefault}
        textColor={theme.bgWhite}
        place="bottom"
      />
    </Container>
  );
}

export default CardContratantes;
