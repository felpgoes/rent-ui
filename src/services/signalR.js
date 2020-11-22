import * as signalR from '@microsoft/signalr';

const { REACT_APP_BASEURL } = process.env;

export const OpenConnection = async (socketConnection) => {
    await socketConnection
        .start()
        .then(() => {})
        .catch((error) => console.log(error));
};

export const BuildConnection = (hubName) => {
    const socketConnection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Debug)
        .withUrl(`${REACT_APP_BASEURL}/${hubName}`)
        // .withUrl(`http://localhost:44301/${hubName}`)
        // .withUrl(`${REACT_APP_API_DESENV}/${hubName}`)`
        .build();

    return socketConnection;
};

export const CloseConnection = async (socketConnection) => {
    await socketConnection
        .stop()
        .then(() => {})
        .catch((error) => {
            console.log(error);
        });
};
