import React from 'react'
import { Redirect, Link } from 'react-router-dom';
import Aside from './componant/Aside';
import Container from './Users/Container';
import Menu from './componant/Menu'

const Users = () => {
    if (!localStorage.getItem('token')) return <Redirect to='/login' />;
    return (
        <div className="overflow-x-hidden w-full h-screen relative pt-20" >
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
            <div className='flex w-full   pb-10'>

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


export default Users;