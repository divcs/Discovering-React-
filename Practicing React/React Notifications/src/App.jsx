import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Slide, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const notify = () => {
    // 1 Types
    toast('Basic Notification')
    toast.info('Info Notification')
    toast.success('Success Notification')
    toast.warning('Warn Notification')
    toast.error('Error Notification')
    // 2 Position
    toast('Basic Notification', { position: toast.POSITION.TOP_LEFT })
    // 3 Theme
    toast('Basic Notification', {
      position: toast.POSITION.TOP_CENTER,
      theme: 'colored',
    })
    // 4 (a) Autoclose: default time 5sec, use false to disable autoclose
    toast('Basic Notification', {
      position: toast.POSITION.TOP_CENTER,
      theme: 'colored',
      autoClose: 10000,
    })
    toast.success('Success Notification', {
      position: toast.POSITION.TOP_CENTER,
      theme: 'colored',
      autoClose: false, //manually close the toast
    })
    // 4 (b) Transition:default value is bounce
    // 4 (c) Progress:
    // 4 (d) Limiter: how many notifications are allowed in a page
  }
  return (
    <>
      <div className='App'>
        <h1>Welcome to App</h1>
        <button onClick={notify}>Notify</button>
        {/* when we provide properties here it's applied globally */}
        <ToastContainer
          transition={Slide}
          limit={2}
          hideProgressBar={true}
        ></ToastContainer>
      </div>
    </>
  )
}

export default App

// Notification Properties

// 1 Type: Info,success,warning,error
// 2 Position: 6 position
// 3 Theme: light,dark,colored
// 4 Options: autoclose (default 5 sec),transition(bounce,slide,zoom,flip), progress, limit
// progress has various properties like hideProgressBar
