import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
// import Outlet from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData: userData }))
        } else {
          dispatch(logout())
        }
      }).catch((err => {
        console.log(err)
      }
      )).finally(() => {
        setLoading(false)
      })
  }, [])

  console.log("Loading State:", loading);
  return (
    !loading ? (

      <div className='min-h-screen flex flex-wrap content-between text-4xl justify-center items-center white'>
        {/* <div className="bg-red-500 p-4">Test</div> */}

        <div className="w-full block">
          <Header />
          <main>

          </main>
          {/* <Footer /> */}
        </div>


      </div>

    ) : (<>
      LOADING...
      {/* <div className="skeleton h-32 w-32"></div>

        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>

        <div className="flex w-52 flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div> */}
      {/* </div> */}


    </>)
  )
}

export default App
