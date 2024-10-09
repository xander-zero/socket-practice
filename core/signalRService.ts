import * as signalR from '@microsoft/signalr';

export let connection: signalR.HubConnection | null = null;

export const startSignalRConnection = async (
  setProgress: (value: number) => void
) => {
  if (connection) return;

  connection = new signalR.HubConnectionBuilder()
    .withUrl('https://websocket-api.classbon.com/hub')
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Error)
    .build();

  try {
    connection.start();
    console.log('SinglaR connected!');
  } catch (error) {
    console.log('SignalR connection error' + error);
  }

  connection.on('ReceiveProgress', (message: string) => {
    try {
      const progressValue = parseInt(message, 10);
      setProgress(progressValue);
    } catch (error) {
      console.error('Error parsing data', error);
    }
  });
};

export const startProgress = async () => {
  console.log('connection', connection?.state);

  if (connection?.state === signalR.HubConnectionState.Connected) {
    console.log('Progress started');

    try {
      await connection.invoke('StartLongRunningTask');
    } catch (error) {
      console.log('SignalR send message error: ' + error);
    }
  }
};
