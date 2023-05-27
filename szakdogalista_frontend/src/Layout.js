import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {


  return (
    <>
            <nav className="navbar bg-light navbar-expand-lg mb-3" >
                <div className="container-fluid">
                <img className="navbar-brand" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAclBMVEX////jBRriAADhAAD96+385efjABLzqq/iAA7pVVz0srXoTlTjABfiAAn+9fb63+Hra3D2wsT/+vvlLTPuio7mP0TpXWL40NHlMjr3y8vrdnjmOD/41tbnSU/3yMv62t3wmJvsf4HqY2nkHyj1ub3xoKTNj290AAAC2ElEQVRoge2Ya5eiMAyGbYK0SkFuOiijI8r8/7+4xSuFFFxP5uzuWd6PE/qc2DbJ25nNJv238j4T+bn6CXK03IeIgJDl7HwZotKikQ8Ye6zsGK/kq0Af+NBRAcKSDwkbfNdhC6Hxi4ktscsWQq152JHQfbhAno2hEjfbXrLA1z4FF7hlYHu907zdxyMD/IPcFSHCmAG+dMDVggFOnycTfOuCBwzwL9eBVgzwGVlD5irWHPA4pNgaIg44vS/hhoM9m52o1PGTBz7H/q7jkYfd1FGXDhyX/KYE7eaFJz62aTBneOB1iDkn2ygvEJSRcQEbrhH3VLrNA6Ndzesr/glFybEK4rxulXayX5AK2o3r8F1tNpWcD6BXsTZuUIXGET4PTaIiBY+WG+VZs0wBQOn0BEd8FIu5brvoDieb4nNYHNTzmvq4J7P3ArtBgfZegld2+SrS0JTd5qcK7wV43g1r6LvUqt9Yw3IcXveXaehWwoFC4HIMHgExpqBrOkpFrPeLdASek4ME7bfHip7CTepD8LQgrR7aqdMZCHUahjtshxbWfHWYTe0Pwx05CftpkNH2QcB8EL4jjYFZtmwXkHoPvqeuQQ+u34MvXoFzbwta8A2dgs6GD/Tb5SOti+74CnfDcIdJ9TO7iGgCHkaKqCSvMHTcQUzlMF7+9LOjU/7GslEfNa15uCueidS7iTdjqP/RpUUMwz/6PlIVfXNddSE3PzgyLJIuXfXa+ZXe/kzfW9vYmFuidY2hoC1Acn74TR/UvQ5GB/Q8wPCWlgaoUpJt5opcAzaC7Pj4bRIder7mktNtma4G/0Xl1VLKuv3LVtKhdolH2+YPK5Zn0u9p7pKpQlfIbJznirU33gOHsOmKjpDZ87UrJttw/72WG7w0LCb4BJ/gE3yCT/AJ/hfClaZ1gdOh8AKnY2jDlU/KvJwkOELGtwSumPWa81xKZ6kzZiyiK/QHTOOkn9cvWsE3b482xgIAAAAASUVORK5CYII=" alt="szamalk"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link className='nav-link active' to='/'>Szakdolgozatok</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/'>Admin</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav ml-auto'>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            </a>
                                <ul className="dropdown-menu">
                                    <Link className='dropdown-item' to='/'>Profil</Link>
                                    <Link className='dropdown-item' to='/'>Beállítások</Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container'>
                <Outlet />
            </div>
        </>
  )
}
export default Layout