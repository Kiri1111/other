import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";

const Nativka = () => {
    return (
        <div>
            <NavLink to={'/'}>--Main--</NavLink>
            <NavLink to={'/Login'}>--LLogin--</NavLink>
            <NavLink to={'/profile'}>--profile--</NavLink>
            <NavLink to={'/profile/settings'}>--settings--</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login/*'} element={<div>LLLLLLogin</div>}/>
                <Route path={'/profile/*'} element={(
                    <div>
                        profile

                        <Routes>
                            <Route path={'/settings'} element={<div>settings</div>}/>
                        </Routes>
                    </div>
                )}/>

            </Routes>
        </div>
    );
};

export default Nativka;