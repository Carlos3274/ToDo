import { ToastOptions, toast } from 'react-toastify';

export const notifyErrorConfigs: ToastOptions = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const notifySuccessConfigs: ToastOptions = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const notifyError = (msg: string) =>
  toast.error(msg, notifyErrorConfigs);

export const notifySuccess = (msg: string) =>
  toast.success(msg, notifySuccessConfigs);
