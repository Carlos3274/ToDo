import { ToastOptions, toast } from 'react-toastify';

export const notifyErrorConfigs: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const notifySuccessConfigs: ToastOptions = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const notifyError = (msg: string) =>
  toast.error(msg, notifyErrorConfigs);

export const notifySuccess = (msg: string) =>
  toast.success(msg, notifySuccessConfigs);
