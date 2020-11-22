export const setTabContentPorStatus = (objResponse, StatusEnum, draft) => {
  objResponse.map((obj) => {
    const StatusLista = StatusEnum[obj.status];

    if (draft[StatusLista]) {
      draft[StatusLista].size = obj.total;
      draft[StatusLista].data = obj.data;
      draft[StatusLista].pageNumber = obj.pageNumber;
      draft[StatusLista].pageSize = obj.pageSize;
      draft[StatusLista].nextPage = obj.nextPage;
      draft[StatusLista].previousPage = obj.previousPage;
      draft[StatusLista].totalPages = Math.ceil(obj.total / obj.pageSize);
    }
  });
};

export const setTabContentPorStatusSingleObj = (
  objResponse,
  StatusEnum,
  draft
) => {
  const StatusLista = StatusEnum[objResponse.status];

  if (draft[StatusLista]) {
    draft[StatusLista].size = objResponse.total;
    draft[StatusLista].data = objResponse.data;
    draft[StatusLista].pageNumber = objResponse.pageNumber;
    draft[StatusLista].pageSize = objResponse.pageSize;
    draft[StatusLista].nextPage = objResponse.nextPage;
    draft[StatusLista].previousPage = objResponse.previousPage;
    draft[StatusLista].totalPages = Math.ceil(
      objResponse.total / objResponse.pageSize
    );
  }
};
