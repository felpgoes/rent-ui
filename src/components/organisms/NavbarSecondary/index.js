import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import {
  NavbarContentContainer,
  NavbarItemsContainer,
  NavbarItemContainer,
  NavbarLegacyLink,
  DropdownContainer,
  DropdownItens,
  NavbarItemDropdownContainer,
} from './styles';

import { TipoPerfilUsuarioEnum } from '../../../enums';

import { ReactComponent as ListasIcone } from '../../../assets/icons/listasIcon.svg';
import { ReactComponent as SegundaViaIcone } from '../../../assets/icons/segundaViaCartaoIcon.svg';
import { ReactComponent as BeneficiarioIcone } from '../../../assets/icons/beneficiarioIcon.svg';
import { ReactComponent as AjudaIcone } from '../../../assets/icons/ajudaIcon.svg';
import { ReactComponent as ConfiguracaoIcone } from '../../../assets/icons/configuracaoIcon.svg';
import { ReactComponent as VisaoGeralIcone } from '../../../assets/icons/visaoGeralIcon.svg';
import { ReactComponent as GestaoIcone } from '../../../assets/icons/gestaoIcon.svg';

import { legacyRoutes } from '../../../routes/legacyRoutes';
import Can from '../../molecules/CheckPermissions';

import useOutsideClick from '../../../utils/useOutsideClick';

function NavbarSecondary() {
  const { usuario } = useSelector((state) => state.auth);
  const refDropdown = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdownItens = (e) => {
    if (e.target) setShowDropdown(!showDropdown);
  };
  useOutsideClick(refDropdown, () => {
    if (showDropdown) setShowDropdown(false);
  });

  return (
    <NavbarContentContainer>
      <NavbarItemsContainer justifySpaceBetween alignCenter>
        <NavbarLegacyLink href={legacyRoutes.Home.url}>
          <VisaoGeralIcone />
          visão geral
        </NavbarLegacyLink>
        {usuario.role === TipoPerfilUsuarioEnum.returnNameForName.Adm ? (
          <NavbarItemDropdownContainer onClick={handleShowDropdownItens}>
            <ListasIcone />
            listas
            <DropdownContainer ref={refDropdown} showDropdown={showDropdown}>
              <DropdownItens to="/novo/lista">
                listas de movimentação
              </DropdownItens>
              <DropdownItens to="/novo/listas-rpa">listas de RPA</DropdownItens>
            </DropdownContainer>
          </NavbarItemDropdownContainer>
        ) : (
          <NavbarItemContainer to="/novo/lista">
            <ListasIcone />
            listas
          </NavbarItemContainer>
        )}
        <NavbarLegacyLink href={legacyRoutes.Segundavia.url}>
          <SegundaViaIcone />
          2° via de cartão
        </NavbarLegacyLink>
        <NavbarLegacyLink href={legacyRoutes.ConsultaBeneficiarios.url}>
          <BeneficiarioIcone />
          beneficiários
        </NavbarLegacyLink>
        <Can
          checkRole={{
            Administrador: TipoPerfilUsuarioEnum.returnNameForName.Adm,
          }}
        >
          <NavbarItemContainer to="/novo/gestao">
            <GestaoIcone />
            gestão
          </NavbarItemContainer>
        </Can>
        {/* <Can
          checkRole={{
            ContratanteAlteracao:
              TipoPerfilUsuarioEnum.returnNameForName.ContratanteAlteracao,
            ContranteConsulta:
              TipoPerfilUsuarioEnum.returnNameForName.ContranteConsulta,
          }}
        > */}
        <NavbarItemContainer to="/novo/configuracoes">
          <ConfiguracaoIcone />
          configurações
        </NavbarItemContainer>
        {/* </Can> */}
      </NavbarItemsContainer>
    </NavbarContentContainer>
  );
}

export default NavbarSecondary;
