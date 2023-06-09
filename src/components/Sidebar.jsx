import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <aside className='main-sidebar sidebar-dark-primary elevation-4'>
        {/* <!-- Brand Logo --> */}
        <a href='../../index3.html' className='brand-link'>
          <img
            src='../../public/images/logo starterkit 3.png'
            alt='AdminLTE Logo'
            className='brand-image'
            // style={{ opacity: '.8' }}
          />
          <span className='brand-text font-weight-light'>Starter Kit App</span>
        </a>

        {/* <!-- Sidebar --> */}
        <div className='sidebar'>
          {/* <!-- Sidebar user (optional) --> */}
          <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
            <div className='image'>
              <img
                src='../../dist/img/user1-128x128.jpg'
                className='img-circle elevation-2'
                alt='User Image'
              />
            </div>
            <div className='info'>
              <a href='#' className='d-block'>
                Ujang Arisandi
              </a>
            </div>
          </div>

          {/* <!-- Sidebar Menu --> */}
          <nav className='mt-2'>
            <ul
              className='nav nav-pills nav-sidebar flex-column'
              data-widget='treeview'
              role='menu'
              data-accordion='false'
            >
              {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  <i className='nav-icon fas fa-tachometer-alt'></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/users' className='nav-link'>
                  <i className='nav-icon fas fa-users'></i>
                  <p>User</p>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/roles' className='nav-link'>
                  <i className='nav-icon fas fa-key'></i>
                  <p>Role</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>
    </>
  )
}

export default Sidebar
