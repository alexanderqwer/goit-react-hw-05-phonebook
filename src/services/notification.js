import { confirmAlert } from 'react-confirm-alert';

const notificationAlert = message => {
  confirmAlert({
    message,
    buttons: [
      {
        label: 'Yes',
      },
    ],
  });
};

export default notificationAlert;
