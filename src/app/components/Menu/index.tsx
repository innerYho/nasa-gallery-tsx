import React, { useState } from "react";
import { MenuButton, MenuContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


export const Menu = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const openMenu = () => setMenuIsVisible(true)
    const closeMenu = () => setMenuIsVisible(false)

    return (
        <>

            <MenuButton hidden={menuIsVisible} onClick={openMenu}>
                <FontAwesomeIcon icon={faBars} />
            </MenuButton>
            <MenuContainer hidden={!menuIsVisible}>
                <button onClick={closeMenu} aria-label="cerrar">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <ul>
                    <li>
                        <a href="/" onClick={closeMenu}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/galaxias" onClick={closeMenu}>Galaxias</a>
                    </li>
                    {/* <li>
                        <a href="/apollo" onClick={closeMenu}>Apollo</a>
                    </li> */}
                </ul>
            </MenuContainer>
        </>
    )

}