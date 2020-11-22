import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import format from 'date-fns/format';
import produce from 'immer';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { ImPencil } from 'react-icons/im';
import { FcCancel } from 'react-icons/fc';
import { BiCheckCircle } from 'react-icons/bi';
import { MdLockOpen } from 'react-icons/md';

import theme from '../../../styles/theme';

import history from '../../../services/history';

import { TipoStatusEnum, TipoPerfilUsuarioEnum } from '../../../enums';

import {
  ContainerEmptyContent,
  HoverActions,
  CancelIConContainer,
} from './styles';

import { Creators as UsuarioActions } from '../../../store/ducks/usuario';

import ButtonBorder from '../../atoms/ButtonBorder';
import Checkbox from '../../atoms/Checkbox';
import FadeIn from '../../atoms/FadeIn';

import Alerts from '../../molecules/Alerts';
import {
  TabContainer,
  TabActionWrapper,
  TabButton,
  TabContentWrapper,
} from '../../molecules/Tab';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '../../molecules/Table';
import CustomScrollbars from '../../molecules/CustomScrollBars';
import WrapperFlex from '../../molecules/WrapperFlex';
import Pagination from '../../molecules/Pagination';
import LoadingSpinning from '../../molecules/LoadingSpinning';

function TabTableUsuarios({
  setPaginationParams,
  paginationParams,
  handleActiveTab,
  handleSelectedPageSize,
  handlePageChange,
  handlePageChangeKeyDown,
  handleNextPage,
  handlePreviousPage,
  handleAcaoUsuarioById,
  handleAcaoUsuarios,
  handleConfirmAction,
}) {
  const dispatch = useDispatch();

  const { getConsultaUsuarios } = useSelector((state) => state.usuario);

  function handleRenderTable(usuarios, tabName = null) {
    if (getConsultaUsuarios.loading) {
      return <LoadingSpinning />;
    }
    if (!!usuarios.data && usuarios.data.length > 0) {
      return (
        <TableLista
          pageData={usuarios}
          usuarios={usuarios.data}
          usuariosSize={usuarios.size}
          setPaginationParams={setPaginationParams}
          paginationParams={paginationParams}
          handleSelectedPageSize={handleSelectedPageSize}
          handlePageChange={handlePageChange}
          handlePageChangeKeyDown={handlePageChangeKeyDown}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleAcaoUsuarioById={handleAcaoUsuarioById}
          handleAcaoUsuarios={handleAcaoUsuarios}
          handleConfirmAction={handleConfirmAction}
          {...(tabName && { tabName })}
        />
      );
    }
    return <EmptyContent />;
  }

  useEffect(() => {
    const params = {
      ...paginationParams,
    };

    dispatch(
      UsuarioActions.getConsultaUsuariosRequest(
        params,
        TipoStatusEnum.returnNameForTab
      )
    );
  }, []);

  return (
    <>
      <TabContainer>
        <TabActionWrapper>
          <TabButton
            onClick={() =>
              handleActiveTab(TipoStatusEnum.returnNameForTab.Todas)
            }
            key="todas"
            active
            color="#00995D"
            name="todas"
          >
            <span>{getConsultaUsuarios.response.Todas.size}</span>
            todas
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(TipoStatusEnum.returnNameForTab.Ativo)
            }
            key="ativos"
            color="#B1D34B"
            name="ativos"
          >
            <span>{getConsultaUsuarios.response.Ativo.size}</span>
            ativos
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(TipoStatusEnum.returnNameForTab.PendenteLiberacao)
            }
            key="pendentes"
            color="#F1C104"
            name="pendentes"
          >
            <span>{getConsultaUsuarios.response.PendenteLiberacao.size}</span>
            pendentes
          </TabButton>
          <TabButton
            onClick={() =>
              handleActiveTab(TipoStatusEnum.returnNameForTab.Inativo)
            }
            key="inativos"
            color="#ED1651"
            name="inativos"
          >
            <span>{getConsultaUsuarios.response.Inativo.size}</span>
            inativos
          </TabButton>
        </TabActionWrapper>
        <TabContentWrapper
          maxHeight="none"
          height="auto"
          active
          contentFor="todas"
        >
          {handleRenderTable(getConsultaUsuarios.response.Todas, 'Todas')}
        </TabContentWrapper>
        <TabContentWrapper maxHeight="none" height="auto" contentFor="ativos">
          {handleRenderTable(
            getConsultaUsuarios.response.Ativo,
            TipoStatusEnum.returnNameForTab.Ativo
          )}
        </TabContentWrapper>
        <TabContentWrapper
          maxHeight="none"
          height="auto"
          contentFor="pendentes"
        >
          {handleRenderTable(
            getConsultaUsuarios.response.PendenteLiberacao,
            TipoStatusEnum.returnNameForTab.PendenteLiberacao
          )}
        </TabContentWrapper>
        <TabContentWrapper maxHeight="none" height="auto" contentFor="inativos">
          {handleRenderTable(
            getConsultaUsuarios.response.Inativo,
            TipoStatusEnum.returnNameForTab.Inativo
          )}
        </TabContentWrapper>
      </TabContainer>
    </>
  );
}

const TableLista = ({
  usuarios,
  pageData,
  setPaginationParams,
  paginationParams,
  handleSelectedPageSize,
  handlePageChange,
  handlePageChangeKeyDown,
  handleNextPage,
  handlePreviousPage,
  handleAcaoUsuarioById,
  handleAcaoUsuarios,
  tabName,
  handleConfirmAction,
  usuariosSize,
}) => {
  const [checkAll, setCheckAll] = useState(false);
  const [userRowsChecked, setUserRowsChecked] = useState([]);

  function handleCheckAll(e) {
    setCheckAll(!checkAll);
  }

  useEffect(() => {
    const newPaginationParams = produce(paginationParams, (draft) => {
      draft.pageNumber = pageData.pageNumber;
      draft.pageSize = pageData.pageSize;
      draft.totalPages = pageData.totalPages;

      return draft;
    });

    setPaginationParams(newPaginationParams);
    // setNewPageAtual(pageData.pageNumber);
    // setPageSize(pageData.pageSize);
  }, []);

  return (
    <>
      <FadeIn height="auto">
        {userRowsChecked.length > 0 ? (
          <FadeIn height="auto">
            <SetAllUsuario
              tabName={tabName}
              userRowsChecked={userRowsChecked}
              handleAcaoUsuarios={handleAcaoUsuarios}
              handleConfirmAction={handleConfirmAction}
              paginationParams={paginationParams}
              totalSize={usuariosSize}
              marginLeft="20px"
            />
          </FadeIn>
        ) : null}
        <Table>
          <TableHead>
            <TableRow>
              {tabName !== 'Todas' ? (
                <TableHeader widthAuto>
                  <Checkbox
                    checked={checkAll}
                    onClick={(e) => handleCheckAll(e)}
                    height="18px"
                    width="18px"
                  />
                </TableHeader>
              ) : null}
              <TableHeader>Usuário</TableHeader>
              <TableHeader>E-mail</TableHeader>
              <TableHeader>Perfil</TableHeader>
              <TableHeader>Criação</TableHeader>
              <TableHeader>Liberação</TableHeader>
              <TableHeader>Finalização</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((user, index) => (
              <TableContent
                key={user.idUsuario}
                index={index}
                checkAll={checkAll}
                user={user}
                setUserRowsChecked={setUserRowsChecked}
                userRowsChecked={userRowsChecked}
                tabName={tabName}
                handleAcaoUsuarioById={handleAcaoUsuarioById}
                handleConfirmAction={handleConfirmAction}
              />
            ))}
          </TableBody>
        </Table>
        {pageData.size > 10 ? (
          <Pagination
            setPaginationParams={setPaginationParams}
            paginationParams={paginationParams}
            handleSelectedPageSize={handleSelectedPageSize}
            handlePageChange={handlePageChange}
            total={pageData.size}
            handlePageChangeKeyDown={handlePageChangeKeyDown}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        ) : null}
      </FadeIn>
    </>
  );
};

const TableContent = ({
  user,
  checkAll,
  setUserRowsChecked,
  userRowsChecked = [],
  tabName,
  handleAcaoUsuarioById,
  index,
  handleConfirmAction,
}) => {
  const [hoverAction, setHoverAction] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [usuario, setUsuario] = useState({ user, checked: !isChecked });

  function handleMouseEnterHover(e) {
    setHoverAction(!hoverAction);
  }
  function handleMouseLeaveHover(e) {
    if (hoverAction) setHoverAction(!hoverAction);
  }

  function handleEditarUsuario(IdUsuario) {
    history.push(`/novo/gestao/detalhe-usuario/${IdUsuario}`);
  }

  function handleCheckedUsuario(e, check, idUsuario) {
    const newUsuario = produce(usuario, (draft) => {
      if (draft.user.idUsuario === idUsuario) draft.checked = !check;

      return draft;
    });

    const newUserRowChecked = produce(userRowsChecked, (draft) => {
      const newDraft = draft.filter((u) => {
        return (
          u.user.idUsuario !== newUsuario.user.idUsuario && u.checked === true
        );
      });

      if (newUsuario.checked) newDraft.push(newUsuario);

      draft = newDraft;

      return draft;
    });

    setUsuario(newUsuario);
    setUserRowsChecked(newUserRowChecked);
  }

  useEffect(() => {
    const newUsuario = produce(usuario, (draft) => {
      draft.checked = checkAll;

      return draft;
    });
    setUsuario(newUsuario);
    if (checkAll) {
      if (
        !userRowsChecked
          .map((userRowChecked) => userRowChecked.user.idUsuario)
          .includes(newUsuario.user.idUsuario)
      )
        setUserRowsChecked((oldArray) => [...oldArray, newUsuario]);
    } else setUserRowsChecked([]);
  }, [checkAll]);

  return (
    <TableRow
      key={user.idUsuario}
      onMouseEnter={handleMouseEnterHover}
      onMouseLeave={handleMouseLeaveHover}
    >
      {tabName !== 'Todas' ? (
        <TableCell widthAuto key={user.idUsuario}>
          <Checkbox
            checked={usuario.checked}
            onClick={(e) =>
              handleCheckedUsuario(e, usuario.checked, user.idUsuario)
            }
            height="18px"
            width="18px"
          />
        </TableCell>
      ) : null}
      <TableCell>{user.nome ? user.nome : '-'}</TableCell>
      <TableCell>{user.email ? user.email : '-'}</TableCell>
      <TableCell>
        {user.tipoPerfil
          ? TipoPerfilUsuarioEnum.returnNameFormattedForName[user.tipoPerfil]
          : '-'}
      </TableCell>
      <TableCell>
        {user.dtCriacao
          ? format(new Date(user.dtCriacao), 'dd/MM/yyyy HH:mm', {
              timeZone: 'America/Sao_Paulo',
            })
          : '-'}
      </TableCell>
      <TableCell>
        {user.dtLiberacao
          ? format(new Date(user.dtLiberacao), 'dd/MM/yyyy HH:mm', {
              timeZone: 'America/Sao_Paulo',
            })
          : '-'}
      </TableCell>
      <TableCell>
        {user.dtFinalizacao
          ? format(new Date(user.dtFinalizacao), 'dd/MM/yyyy HH:mm', {
              timeZone: 'America/Sao_Paulo',
            })
          : '-'}
      </TableCell>
      <TableCell>
        {hoverAction ? (
          <TableUsuarioActions
            handleAcaoUsuarioById={handleAcaoUsuarioById}
            handleConfirmAction={handleConfirmAction}
            handleUsuario={handleEditarUsuario}
            isHover={hoverAction}
            tabName={tabName}
            usuarioStatus={user.tipoStatus}
            IdUsuario={user.idUsuario}
          />
        ) : user.tipoStatus ? (
          TipoStatusEnum.returnNameFormattedForName[user.tipoStatus]
        ) : (
          '-'
        )}
      </TableCell>
    </TableRow>
  );
};

const EmptyContent = () => (
  <WrapperFlex height="540px" justifyCenter alignCenter>
    <ContainerEmptyContent>Nenhum registro localizado</ContainerEmptyContent>
  </WrapperFlex>
);

const SetAllUsuario = ({
  tabName,
  userRowsChecked,
  handleAcaoUsuarios,
  handleConfirmAction,
  paginationParams,
  marginLeft,
  totalSize,
}) => {
  const IconPorStatus = {
    Ativo: {
      Button: (
        <ButtonBorder
          justifySpaceBetween
          alignCenter
          width="113"
          padding={10}
          onClick={() => handleConfirmAction(userRowsChecked, tabName)}
          marginLeft={marginLeft}
        >
          <CancelIConContainer
            marginRight="8px"
            color={theme.greenDefault}
            size="20"
          />
          inativar
        </ButtonBorder>
      ),
    },
    Inativo: {
      Button: (
        <ButtonBorder
          alignCenter
          width="113"
          padding={10}
          onClick={() => handleConfirmAction(userRowsChecked, tabName)}
          marginLeft={marginLeft}
          justifySpaceAround
        >
          <BiCheckCircle
            margin-right="8"
            size="20"
            color={theme.greenDefault}
          />
          ativar
        </ButtonBorder>
      ),
    },
    PendenteLiberacao: {
      Button: (
        <ButtonBorder
          justifySpaceBetween
          alignCenter
          width="180"
          padding={10}
          onClick={() => handleConfirmAction(userRowsChecked, tabName)}
          marginLeft={marginLeft}
        >
          <MdLockOpen size="20" color={theme.greenDefault} />
          liberar acesso
        </ButtonBorder>
      ),
    },
  };

    function handleButtonPorStatus() {
        return IconPorStatus[tabName]?.Button;
    }

  return (
    <WrapperFlex marginBottom="true" justifySpaceBetween alignCenter>
      <Alerts width="100%" type="success">
        <RiErrorWarningLine />{' '}
        <span>
          Você selecionou {userRowsChecked.length} de{' '}
          {totalSize >= 10 ? paginationParams.pageSize : totalSize} itens.
        </span>
      </Alerts>
      {handleButtonPorStatus()}
    </WrapperFlex>
  );
};

const TableUsuarioActions = ({
  handleAcaoUsuarioById,
  handleUsuario,
  tabName,
  usuarioStatus,
  IdUsuario,
  handleConfirmAction,
}) => {
  return (
    <WrapperFlex width padding={0} alignCenter justifySpaceEvenly>
      <HoverActions data-tip="editar" onClick={() => handleUsuario(IdUsuario)}>
        <ImPencil size="17" color={theme.colorGray} />
      </HoverActions>

      <ActionPorStatus
        handleAcaoUsuarioById={handleAcaoUsuarioById}
        tabName={tabName}
        usuarioStatus={usuarioStatus}
        IdUsuario={IdUsuario}
        handleConfirmAction={handleConfirmAction}
      />

      <ReactTooltip
        className="extraClass"
        delayHide={false}
        effect="solid"
        backgroundColor={theme.greenDefault}
        textColor="#FFF"
        place="bottom"
      />
    </WrapperFlex>
  );
};

const ActionPorStatus = ({
  tabName,
  usuarioStatus,
  IdUsuario,
  handleAcaoUsuarioById,
  handleConfirmAction,
}) => {
  const IconPorStatus = {
    Ativo: {
      Text: 'inativar',
      Icon: <CancelIConContainer color={theme.colorGray} size="20" />,
    },
    Inativo: {
      Text: 'ativar',
      Icon: <BiCheckCircle size="20" color={theme.colorGray} />,
    },
    PendenteLiberacao: {
      Text: 'liberar acesso',
      Icon: <MdLockOpen size="20" color={theme.colorGray} />,
    },
  };

    function handleIconsPorStatus() {
        return IconPorStatus[usuarioStatus]?.Icon;
    }
    function handleToolTipTextPorStatus() {
        return IconPorStatus[usuarioStatus]?.Text;
    }

  return (
    <HoverActions
      data-tip={handleToolTipTextPorStatus()}
      onClick={() => handleConfirmAction(IdUsuario, usuarioStatus)}
    >
      {handleIconsPorStatus()}
    </HoverActions>
  );
};

export default TabTableUsuarios;
