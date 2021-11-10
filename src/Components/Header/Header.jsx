import { useState, useRef, useEffect } from 'react';
import './Header.scss';
import content from '../Localization/Content';
import DarkMode from '../DarkMode/DarkMode';

function Header(){
    const [lang, setLang] = useState('uz');

    // const moon = useRef();
    // const [moon, setMoon] = useState(()=>{
    //     const saved = localStorage.getItem("moon");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || "";
    // });

    // useEffect(() => {
    //     localStorage.setItem("moon", JSON.stringify(moon))
    // }, [moon]);
    return(
        <>
        <div className="container">
        <div className="header__div">
        <select className="header__select" onChange={(e) =>{
            setLang(e.target.value)
        }}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="eng">ENG</option>
            </select>
            {/* <button className="header__btn"> */}
            <DarkMode/>
            {/* </button> */}
        </div>
        <br />
        <div id="image"></div>
        <nav className="header__nav">
            <p>{content[lang].description}</p>
        </nav>
        </div>
        </>
    )
}

export default Header;