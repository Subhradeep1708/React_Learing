import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (

        <>
            <Header />
            <Outlet />
            {/* <Outlet /> all the routes will be added into this as a child */}
            <Footer />
        </>

    )
}

export default Layout
