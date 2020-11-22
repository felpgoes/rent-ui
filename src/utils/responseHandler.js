export const responseHandler = (
    objResponse,
    objRequest,
    objReference,
    methodName,
    status
) => {
    const statusResponse = [];
    objResponse.map((o) => {
        if (o.status !== status) statusResponse.push(o);

        return statusResponse;
    });

    let isSuccess = false;
    if (!(statusResponse.length > 0)) isSuccess = true;

    const unsuccessResponse = [];
    unsuccessResponse.push(
        statusResponse.map((resp, index) => {
            return {
                reference: objRequest[index][objReference],
                status: resp.status,
                errorOn: methodName,
            };
        })
    );

    return { unsuccessResponse, isSuccess };
};

export const responseHandlerGet = (
    objResponse,
    objRequest,
    methodName,
    statusCode
) => {
    let isSuccess = true;
    if (objResponse.status !== statusCode) {
        isSuccess = false;
        const unsuccessResponse = {
            reference: objRequest,
            status: objResponse.status,
            errorOn: methodName,
        };

        return { unsuccessResponse, isSuccess };
    }

    return { isSuccess };
};
