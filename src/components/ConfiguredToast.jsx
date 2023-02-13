import { ToastContainer } from 'react-toastify';

export function ConfiguredToast(){
  return (
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
  )
}