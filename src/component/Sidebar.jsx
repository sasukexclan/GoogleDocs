import React from "react"
import { SidebarData } from "./SidebarData";

function Sidebar() {
    return (

        <div className="Sidebar">
            <ul className = "sidebar-list">
                {SidebarData.map((val, key) => {

                    return (
                        <li key={key} className = "row" onClick={() => { window.location.pathname = val.link }} >
                                    
                            <div id = "icon-side">{val.icon}</div>

                            <div id = "title-side">{val.title}</div>
                        </li>
                    )
                                               }
                )}
            </ul>
        </div>

    )
}

export default Sidebar;
