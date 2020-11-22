import { set, isEmpty, get, uniqueId } from 'lodash';
import { getOccurrence } from './array';
import { TipoCardRoot, TipoConsultaParametrizacaoEnum } from '../enums';

const GRUPO_NIVEL = 0;
const CONTRATANTE_NIVEL = 1;
const BASE_PATH = [0, 'subOptions'];
const CONTRATANTE_TREE = 0;
const MODALIDADE_TREE = 1;
const TERMO_TREE = 2;

export const checkAllNested = (options, check) => {
  options.check = check;
  options.subOptions.map((sub) => {
    sub.check = check;
    // getCountInHeader(sub, false);
    if (sub.subOptions.length > 0) checkAllNested(sub, check);
  });
};

export const countAllNested = (options) => {
  options.count = getOccurrence(options.subOptions, (s) => s.check === true);
  options.subOptions.map((sub) => {
    if (sub.isHeader)
      sub.count = getOccurrence(sub.subOptions, (s) => s.check === false);
    if (sub.subOptions.length > 0) countAllNested(sub);
  });
};

export const countAllParents = (options, path) => {
  const pathToAtual = [];
  path.map((value) => {
    pathToAtual.push(value);
    if (value !== 'subOptions') {
      const option = get(options, pathToAtual);
      if (option.isHeader)
        option.count = getOccurrence(
          option.subOptions,
          (s) => s.check === true
        );
      // getCountInHeader(get(options, pathToAtual), false);
    }
  });
};

export const checkAllParents = (options, check, pathName) => {
  const pathToAtual = [];
  pathName.map((value) => {
    pathToAtual.push(value);
    if (value !== 'subOptions') {
      const option = get(options, pathToAtual);
      option.check = check;
      // getCountInHeader(get(options, pathToAtual), false);
    }
  });
};

export const getCountInHeader = (options, check, pathName) => {
  const pathToAtual = [];
  //   options.map((sub) => {
  //     sub.check = check;
  //     // getCountInHeader(sub, false);
  //     if (sub.isHeader)
  //       sub.count = getOccurrence(sub.subOptions, (o) => o.check === check);
  //     if (sub.subOptions.length > 0) getCountInHeader(sub.subOptions, check);
  //   });

  pathName.map((value) => {
    pathToAtual.push(value);
    if (value !== 'subOptions') {
      if (get(options, pathToAtual).isHeader)
        get(options, pathToAtual).count = getOccurrence(
          get(options, pathToAtual).subOptions,
          (o) => o.check === true
        );

      // getCountInHeader(get(options, pathToAtual), false);
    }
  });
};

export const handleContagem = (card) => {
  if (card.tipoParametrizacao === TipoCardRoot.returnName[0])
    return handleContagemContratante(card);
  if (card.tipoParametrizacao === TipoCardRoot.returnName[1])
    return handleContagemComplemento(card);
};

const handleContagemComplemento = (card) => {
  const contagem = {
    contratantes: 0,
    modalidades: 0,
    termos: 0,
  };
  const contratanteNode = card?.options[0]?.subOptions.map((a) => {
    if (a.check) contagem.contratantes += 1;
    const modalidadeNode = a?.subOptions[0]?.subOptions.map((sub) => {
      if (sub.check) contagem.modalidades += 1;
      const termoNode = sub?.subOptions[0]?.subOptions.map((_sub) => {
        if (_sub.check) contagem.termos += 1;
      });
    });
  });

  return contagem;
};

const handleContagemContratante = (card) => {
  const contagem = {
    modalidades: 0,
    termos: 0,
  };

  const modalidadeNode = card?.options[0]?.subOptions.map((sub) => {
    if (sub.check) contagem.modalidades += 1;
    const termoNode = sub?.subOptions[0]?.subOptions.map((_sub) => {
      if (_sub.check) contagem.termos += 1;
    });
  });

  return contagem;
};

export const getContagem = (type, contagem) => {
  const types = {
    Contratante: contagem?.contratantes,
    Modalidade: contagem?.modalidades,
    Termo: contagem?.termos,
  };
  return types[type];
};
export const setContagem = (type, card, contagem) => {
  const types = {
    Contratante: () => (card.contagem.contratantes = contagem),
    Modalidade: () => (card.contagem.modalidades = contagem),
    Termo: () => (card.contagem.termos = contagem),
  };
  return types[type]();
};

export const unCheckIfAllUnchecked = (option, path, count) => {
  if (count === 0) get(option, path.slice(0, path.length - 2)).check = false;
};

const setPath = (
  nivel,
  tipoParametrizacao,
  Section,
  contratantePath,
  modalidadePath,
  termoPath
) => {
  const pathNiveis = {
    Contratante: {
      Header: {
        0: [0],
        1: [...BASE_PATH],
        2: [...BASE_PATH, ...(modalidadePath || [])],
      },
      Content: {
        0: [...BASE_PATH],
        1: [...BASE_PATH],
        2: [...BASE_PATH, ...(modalidadePath || []), ...BASE_PATH],
      },
    },
    [TipoConsultaParametrizacaoEnum.returnName[1]]: {
      Header: {
        0: [0],
        1: [...BASE_PATH, ...(contratantePath || [])],
        2: [
          ...BASE_PATH,
          ...(contratantePath || []),
          ...BASE_PATH,
          ...(modalidadePath || []),
        ],
      },
      Content: {
        0: [...BASE_PATH],
        1: [...BASE_PATH, ...(contratantePath || []), ...BASE_PATH],
        2: [
          ...BASE_PATH,
          ...(contratantePath || []),
          ...BASE_PATH,
          ...(modalidadePath || []),
          ...BASE_PATH,
        ],
      },
    },
  };

  return pathNiveis[tipoParametrizacao][Section][nivel];
};

export const emptyCard = (name) => {
  return {
    name,
    count: 0,
    id: name,
    previousPath: [],
    currentPath: [0],
    nextPath: BASE_PATH,
    subOptions: [],
    isHeader: true,
    check: false,
    removeCheck: true,
    nodeLoading: false,
    cardLoading: false,
    hasSubOptions: false,
  };
};

export const setNivelHeader = (
  nivel,
  path,
  selectedCard,
  count,
  subOptions,
  checkAll
) => {
  const niveis = {
    0: [
      {
        name: `Contratante`,
        count,
        id: 'Contratante',
        previousPath: [],
        currentPath: [0],
        nextPath: BASE_PATH,
        subOptions: subOptions || [],
        isHeader: true,
        check: checkAll,
        loading: true,
        hasSubOptions: true,
        removeCheck: false,
      },
    ],
    1: [
      {
        name: 'Modalidade',
        count,
        id: 'Modalidade',
        previousPath:
          selectedCard.tipoParametrizacao ===
          TipoConsultaParametrizacaoEnum.returnName[1]
            ? [...(path || [])]
            : [],
        currentPath:
          selectedCard.tipoParametrizacao ===
          TipoConsultaParametrizacaoEnum.returnName[1]
            ? [...(path || []), 0]
            : [0],
        nextPath:
          selectedCard.tipoParametrizacao ===
          TipoConsultaParametrizacaoEnum.returnName[1]
            ? [...(path || []), 0, 'subOptions']
            : BASE_PATH,
        subOptions: subOptions || [],
        isHeader: true,
        check: checkAll,
        hasSubOptions: true,
        removeCheck: false,
      },
    ],
    2: [
      {
        name: 'Termo',
        count,
        id: 'Termo',
        subOptions: subOptions || [],
        previousPath: [...(path || [])],
        currentPath: [...(path || []), 0],
        nextPath: [...(path || []), ...BASE_PATH],
        isHeader: true,
        check: checkAll,
        hasSubOptions: true,
        removeCheck: false,
      },
    ],
  };

  return niveis[nivel] || [];
};

const setNivelContent = (
  obj,
  objNivel,
  index,
  codigoContratante,
  path,
  isSuccess,
  subOptions
) => {
  const objNiveis = {
    0: {
      name: `${obj.codigoContratante} - ${obj.nomeContratante}`,
      id: obj.codigoContratante,
      previousPath: BASE_PATH,
      currentPath: BASE_PATH.concat([index]),
      nextPath: BASE_PATH.concat([index, 'subOptions']),
      isHeader: false,
      check: obj.check,
      codigoContratante: obj.codigoContratante,
      numeroInscricao: obj.numeroInscricao,
      nomeContratante: obj.nomeContratante,
      inativado: obj.inativado,
      novo: obj.novo,
      subOptions: subOptions || [],
      nextRequest: 'Modalidade',
      success: isSuccess,
      hasSubOptions: true,
      removeCheck: false,
    },
    1: {
      name: `${obj.codigoModalidade}`,
      id: obj.codigoModalidade,
      previousPath: path,
      currentPath: path.concat([index]),
      nextPath: path.concat([index, 'subOptions']),
      isHeader: false,
      check: obj.check,
      codigoContratante,
      codigoModalidade: obj.codigoModalidade,
      inativado: obj.inativado,
      novo: obj.novo,
      subOptions: subOptions || [],
      nextRequest: 'Termo',
      success: isSuccess,
      hasSubOptions: true,
      removeCheck: false,
    },
    2: {
      name: `${obj.codigoTermo}`,
      id: obj.codigoTermo,
      previousPath: path,
      currentPath: path.concat([index]),
      nextPath: path.concat([index, 'subOptions']),
      isHeader: false,
      check: obj.check,
      codigoTermo: obj.codigoTermo,
      inativado: obj.inativado,
      novo: obj.novo,
      subOptions: subOptions || [],
      success: isSuccess,
      hasSubOptions: true,
      isLast: true,
      removeCheck: false,
    },
  };

  return objNiveis[objNivel];
};

export const setComplemento = (selectedCard) => {
  let contratanteCheckAll = true;
  const contagem = {
    contratantes: 0,
    modalidades: 0,
    termos: 0,
  };
  const contratanteNodeArray = [];
  const contratanteNode = selectedCard?.options[0]?.subOptions.map((a) => {
    if (!a.check) contratanteCheckAll = false;
    let modalidadeCheckAll = true;
    const modalidadeNodeArray = [];
    const modalidadeNode = a?.subOptions[0]?.subOptions.map((sub) => {
      if (!sub.check) modalidadeCheckAll = false;
      let termoCheckAll = true;
      const termoNodeArray = [];
      const termoNode = sub?.subOptions[0]?.subOptions.map((_sub) => {
        if (!_sub.check) termoCheckAll = false;
        if (_sub.check === true)
          termoNodeArray.push({
            codigoTermo: _sub.codigoTermo,
          });
      });

      if (!termoCheckAll) modalidadeCheckAll = false;
      contagem.termos += termoNodeArray.length;
      if (sub.check === true)
        modalidadeNodeArray.push({
          codigoModalidade: sub.codigoModalidade,
          checkAll: termoCheckAll,
          termoNode: termoNodeArray,
        });
    });

    if (!modalidadeCheckAll) contratanteCheckAll = false;
    contagem.modalidades += modalidadeNodeArray.length;
    if (a.check === true)
      contratanteNodeArray.push({
        codigoContratante: a.codigoContratante,
        numeroInscricao: a.numeroInscricao,
        nomeContratante: a.nomeContratante,
        checkAll: modalidadeCheckAll,
        modalidadeNode: modalidadeNodeArray,
      });
  });

  contagem.contratantes = contratanteNodeArray.length;
  const parametrizacaoRoot = {
    codigoGrupo: selectedCard.complemento?.codigoGrupo,
    nomeGrupo: selectedCard.complemento?.nomeGrupo,
    codigoComplemento: selectedCard.complemento?.codigoComplemento,
    checkAll: contratanteCheckAll,
    contratanteNode: contratanteNodeArray,
  };
  return { contagem, parametrizacaoRoot };
};

export const setContratante = (selectedCard) => {
  let modalidadeCheckAll = true;
  const contagem = {};
  const modalidadeNodeArray = [];
  const modalidadeNode = selectedCard?.options[0]?.subOptions.map((sub) => {
    if (!sub.check) modalidadeCheckAll = false;
    let termoCheckAll = true;
    const termoNodeArray = [];
    const termoNode = sub?.subOptions[0]?.subOptions.map((_sub) => {
      if (!_sub.check) termoCheckAll = false;
      if (_sub.check === true)
        termoNodeArray.push({
          codigoTermo: _sub.codigoTermo,
        });
    });

    if (!termoCheckAll) modalidadeCheckAll = false;
    contagem.termos = termoNodeArray.length;
    if (sub.check === true)
      modalidadeNodeArray.push({
        codigoModalidade: sub.codigoModalidade,
        checkAll: termoCheckAll,
        termoNode: termoNodeArray,
      });
  });

  contagem.modalidades = modalidadeNodeArray.length;

  const parametrizacaoRoot = {
    codigoGrupo: 0,
    nomeGrupo: '',
    codigoComplemento: '',
    checkAll: modalidadeCheckAll,
    contratanteNode: [
      {
        codigoContratante: selectedCard.contratante?.codigoContratante,
        numeroInscricao: selectedCard.contratante?.numeroInscricao,
        nomeContratante: selectedCard.contratante?.nomeContratante,
        checkAll: modalidadeCheckAll,
        modalidadeNode: modalidadeNodeArray,
      },
    ],
  };

  return { contagem, parametrizacaoRoot };
};

export const getParametrizacaoRoot = (selectedCard) => {
  if (
    selectedCard.tipoParametrizacao ===
    TipoConsultaParametrizacaoEnum.returnName[1]
  )
    return setComplemento(selectedCard);
  if (
    selectedCard.tipoParametrizacao ===
    TipoConsultaParametrizacaoEnum.returnName[2]
  )
    return setContratante(selectedCard);
};

export const setParametrizacaoNivel = (parametrizacaoNivel, parametrizacao) => {
  const parametrizacaoNiveis = {
    [TipoConsultaParametrizacaoEnum.returnName[1]]: {
      nome: `${parametrizacao?.complemento?.codigoGrupo} - ${parametrizacao?.complemento?.codigoComplemento}`,
      id: parametrizacao?.complemento?.codigoComplemento,
      tipoParametrizacao: parametrizacaoNivel,
      cardHeader: 'Grupo de Contratante',
      contagem: {},
      contagemId: parametrizacao?.complemento?.codigoComplemento,
      parametrizacaoNivel: GRUPO_NIVEL,
    },
    Contratante: {
      nome: `${parametrizacao?.contratante?.codigoContratante} - ${parametrizacao?.contratante?.nomeContratante}`,
      id: parametrizacao?.contratante?.codigoContratante,
      tipoParametrizacao: parametrizacaoNivel,
      cardHeader: 'Contratante',
      contagem: {},
      contagemId: parametrizacao?.contratante?.numeroInscricao,
      parametrizacaoNivel: CONTRATANTE_NIVEL,
    },
  };

  return parametrizacaoNiveis[parametrizacaoNivel];
};

export const setCard = (card) => {
  debugger;
  const cardTipos = {
    GrupoRoot: {
      complemento: {
        codigoGrupo: card.codigoGrupo,
        nomeGrupo: card.nomeGrupo,
        codigoComplemento: card.codigoComplemento,
      },
      idCard: uniqueId('card_'),
      isEditar: false,
      path: [],
      options: [],
      contagem: {
        contratantes: card.contratantes,
        modalidades: card.modalidades,
        termos: card.termos,
      },
      idParametrizacao: card.idParametrizacao,
      tipoParametrizacao:
        TipoCardRoot.returnNameUIForNameAPI[card.tipoParametrizacao],
      nodeLoading: false,
      cardLoading: false,
      id: card.codigoComplemento,
    },
    ContratanteRoot: {
      contratante: {
        check: false,
        codigoContratante: card.codigoContratante,
        inativado: card.inativado,
        nomeContratante: card.nomeContratante,
        novo: card.novo,
        numeroInscricao: card.numeroInscricao,
        idParametrizacao: card.idParametrizacao,
      },
      idCard: uniqueId('card_'),
      isEditar: false,
      path: [],
      options: [],
      contagem: { modalidades: card.modalidades, termos: card.termos },
      idParametrizacao: card.idParametrizacao,
      tipoParametrizacao:
        TipoCardRoot.returnNameUIForNameAPI[card.tipoParametrizacao],
      nodeLoading: false,
      cardLoading: false,
      id: card.codigoContratante,
      listaContratantes: [card.codigoContratante],
    },
  };

  return cardTipos[card.tipoParametrizacao];
};

export const setTree = (
  obj,
  nivel,
  draft,
  checkAll,
  codigoContratante,
  path,
  isSuccess
) => {
  const checkados = obj.some((o) => o.check === true);
  const newSubOptions = obj.map((resp, index) => {
    return setNivelContent(
      resp,
      nivel,
      index,
      codigoContratante,
      setNivelHeader(nivel, path, draft, obj.length, [], checkados)[0].nextPath,
      isSuccess
    );
  });
  const count = obj.filter((c) => c.check === true).length;
  const newHeader = setNivelHeader(
    nivel,
    path,
    draft,
    count,
    newSubOptions,
    checkados
  );

  return newHeader;
};

const treeBuilderComplemento = (object) => {
  let contratanteCheckAll = true;
  contratanteCheckAll = object?.contratanteNode.some((o) => o.check === true);
  const contratanteNodes = object?.contratanteNode.map(
    (contratanteNode, contratanteIndex) => {
      //   if (!contratanteNode.check) contratanteCheckAll = false;
      let modalidadeCheckAll = true;
      modalidadeCheckAll = contratanteNode?.modalidadeNode.some(
        (o) => o.check === true
      );
      const modalidadeNodes = contratanteNode?.modalidadeNode.map(
        (modalidadeNode, modalidadeIndex) => {
          //   if (!modalidadeNode.check) modalidadeCheckAll = false;
          let termoCheckAll = true;
          termoCheckAll = modalidadeNode?.termoNode.some(
            (o) => o.check === true
          );
          const termoNodes = modalidadeNode?.termoNode.map(
            (termoNode, termoIndex) => {
              //   if (!termoNode.check) termoCheckAll = false;
              return setNivelContent(
                termoNode,
                TERMO_TREE,
                termoIndex,
                0,
                setPath(
                  TERMO_TREE,
                  TipoConsultaParametrizacaoEnum.returnName[1],
                  'Content',
                  [contratanteIndex, 'subOptions'],
                  [modalidadeIndex, 'subOptions'],
                  [termoIndex, 'subOptions']
                ),
                true
              );
            }
          );

          const termoCount = termoNodes.filter((c) => c.check === true).length;
          // RetornoHeader Topo Arvore Nivel Termo
          const termoHeader = setNivelHeader(
            TERMO_TREE,
            setPath(
              TERMO_TREE,
              TipoConsultaParametrizacaoEnum.returnName[1],
              'Header',
              [contratanteIndex, 'subOptions'],
              [modalidadeIndex, 'subOptions']
            ),
            {
              tipoParametrizacao: TipoConsultaParametrizacaoEnum.returnName[1],
            },
            termoCount,
            termoNodes,
            termoCheckAll
          );

          // Insere dentro do Content de Modalidade
          return setNivelContent(
            modalidadeNode,
            MODALIDADE_TREE,
            modalidadeIndex,
            0,
            setPath(
              MODALIDADE_TREE,
              TipoConsultaParametrizacaoEnum.returnName[1],
              'Content',
              [contratanteIndex, 'subOptions']
            ),
            true,
            termoHeader
          );
        }
      );
      const modalidadeCount = modalidadeNodes.filter((c) => c.check === true)
        .length;
      // RetornoHeader Topo Arvore Nivel Modalidade
      const modalidadeHeader = setNivelHeader(
        MODALIDADE_TREE,
        setPath(
          MODALIDADE_TREE,
          TipoConsultaParametrizacaoEnum.returnName[1],
          'Header',
          [contratanteIndex, 'subOptions']
        ),
        { tipoParametrizacao: TipoConsultaParametrizacaoEnum.returnName[1] },
        modalidadeCount,
        modalidadeNodes,
        modalidadeCheckAll
      );

      // Insere dentro do Content de Contratante
      return setNivelContent(
        contratanteNode,
        CONTRATANTE_TREE,
        contratanteIndex,
        0,
        BASE_PATH,
        true,
        modalidadeHeader
      );
    }
  );

  if (!(contratanteNodes.length > 0))
    return [emptyCard('Não foram encontradas contratantes.')];

  const contratanteCount = contratanteNodes.filter((c) => c.check === true)
    .length;
  // RetornoHeader Topo Arvore Nivel Contratante
  const options = setNivelHeader(
    CONTRATANTE_TREE,
    [0],
    {
      selectedCard: {
        tipoParametrizacao: TipoConsultaParametrizacaoEnum.returnName[1],
      },
    },
    contratanteCount,
    contratanteNodes,
    contratanteCheckAll
  );

  return options;
};

const treeBuilderContratante = (object) => {
  let modalidadeCheckAll = true;
  modalidadeCheckAll = object?.contratanteNode[0]?.modalidadeNode.some(
    (o) => o.check === true
  );
  const modalidadeNodes = object?.contratanteNode[0]?.modalidadeNode.map(
    (modalidadeNode, modalidadeIndex) => {
      let termoCheckAll = true;
      termoCheckAll = modalidadeNode?.termoNode.some((o) => o.check === true);
      const termoNodes = modalidadeNode?.termoNode.map(
        (termoNode, termoIndex) => {
          return setNivelContent(
            termoNode,
            TERMO_TREE,
            termoIndex,
            0,
            setPath(
              TERMO_TREE,
              'Contratante',
              'Content',
              [0, 'subOptions'],
              [modalidadeIndex, 'subOptions'],
              [termoIndex, 'subOptions']
            ),
            true
          );
        }
      );
      const termoCount = termoNodes.filter((c) => c.check === true).length;
      // RetornoHeader Topo Arvore Nivel Termo
      const termoHeader = setNivelHeader(
        TERMO_TREE,
        setPath(
          TERMO_TREE,
          'Contratante',
          'Header',
          [0, 'subOptions'],
          [modalidadeIndex, 'subOptions']
        ),
        { tipoParametrizacao: 'Contratante' },
        termoCount,
        termoNodes,
        termoCheckAll
      );

      // Insere dentro do Content de Modalidade
      return setNivelContent(
        modalidadeNode,
        MODALIDADE_TREE,
        modalidadeIndex,
        0,
        setPath(
          MODALIDADE_TREE,
          'Contratante',
          'Content',
          [],
          [modalidadeIndex, 'subOptions']
        ),
        true,
        termoHeader
      );
    }
  );

  if (!(modalidadeNodes.length > 0))
    return [emptyCard('Não foram encontradas modalidades.')];

  const modalidadeCount = modalidadeNodes.filter((c) => c.check === true)
    .length;
  // RetornoHeader Topo Arvore Nivel Modalidade
  const options = setNivelHeader(
    MODALIDADE_TREE,
    setPath(MODALIDADE_TREE, 'Contratante', 'Header'),
    { tipoParametrizacao: 'Contratante' },
    modalidadeCount,
    modalidadeNodes,
    modalidadeCheckAll
  );

  return options;
};

export const treeBuilder = (object) => {
  if (object.codigoGrupo !== 0) return treeBuilderComplemento(object);
  if (object.codigoGrupo === 0) return treeBuilderContratante(object);
};

export const setCardContagem = (type, contagem) => {
  const types = {
    [TipoCardRoot.returnNameForName.Contratante]: {
      modalidades: contagem?.modalidades,
      termos: contagem?.termos,
    },
    [TipoCardRoot.returnNameForName['Grupo ou Complemento']]: {
      contratantes: contagem?.contratantes,
      modalidades: contagem?.modalidades,
      termos: contagem?.termos,
    },
  };

  return types[type];
};
