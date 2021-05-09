import React from 'react'
import { Redirect, Link } from 'react-router-dom';
import Aside from './componant/Aside';
import Container from './Home/Container';
import Menu from './componant/Menu'

const Uls = () => {

    if (localStorage.getItem('token')) {
        return (
            <ul className='flex justify-between space-x-2 '>
                <Link to='/' className='font-semibold' >Home</Link>
                <Link to='/logout' className='font-semibold'>Logout</Link>
            </ul>
        )
    }
    return (
        <ul>
            <Link to='/login' >Login</Link>
            <Link to='/regster' >register</Link>
        </ul>

    )

}



const Home = () => {
    if (!localStorage.getItem('token')) return <Redirect to='/login' />;
    return (
        <div className="overflow-x-hidden w-full relative pt-20" >
            {/* header */}
            <header className='w-full fixed top-0 left-0 z-100'>
                <div className='flex items-center bg-white justify-between px-4 py-4'>
                    <div classNam='w-full'>
                    <h3 >DashBourd</h3>
                    </div>
                    <div className=''>

                        <Menu vertical={false} />
                    </div>
                </div>
            </header>
            {/*contaner / aside  */}
            <div className='flex w-full bg-gray-100 pb-10'>

                <Aside />

                <div className='w-full'>
                    {/* container */}
                    <Container />
                    {/* container */}

                </div>
                {/* full div */}

            </div>
            {/* . contaner / aside  */}

        </div>
    )
}


export default Home;