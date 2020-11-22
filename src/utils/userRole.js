import { TipoPerfilUsuarioEnum } from '../enums';

export const isContratante = (role) => {
  const Contratante = {
    ContratanteAlteracao:
      TipoPerfilUsuarioEnum.returnNameForName.ContratanteAlteracao,
    ContratanteConsulta:
      TipoPerfilUsuarioEnum.returnNameForName.ContratanteConsulta,
  };

  return Object.values(Contratante).includes(role);
};

export const isAdmin = (role) => {
  const Administrador = {
    Adm: TipoPerfilUsuarioEnum.returnNameForName.Adm,
  };

  return Object.values(Administrador).includes(role);
};
