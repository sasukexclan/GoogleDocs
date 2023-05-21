import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faFileExport, faCloudArrowDown, faClockRotateLeft, faMessage, faVideo, faLock } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="header-block">

            <div className = "logo-block" >
                <img className ="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png" />   
            </div>
            
            <div className = "function-block">
               
                    <div className="tool-icons">
                        <p id = "heading">Untitled Document</p>
                        <div id = "tools-icons" >
                            <FontAwesomeIcon icon={faStar} id="initial-icon"/>
                            <FontAwesomeIcon icon={faFileExport} id="initial-icon" />
                            <FontAwesomeIcon icon={faCloudArrowDown} id="initial-icon" />
                        </div>
                    </div>

                    <div className= "tool-options">
                        <p id="file-icn">File</p>
                        <p id="file-icn">Edit</p>
                        <p id="file-icn">View</p>
                        <p id="file-icn">Insert</p>
                        <p id="file-icn">Format</p>
                        <p id="file-icn">Tools</p>
                        <p id="file-icn">Extension</p>
                        <p id="file-icn">Help</p>
                    </div>
            </div>

            <div className="profile-block">
                <div id="profile-icons">
                    <FontAwesomeIcon icon={faClockRotateLeft} id="prf-icon" />
                    <FontAwesomeIcon icon={faMessage} id="prf-icon" />
                    <FontAwesomeIcon icon={faVideo} id="prf-icon" />
                </div>
                <button id= "share-btn">
                    <FontAwesomeIcon icon={faLock} />
                    Share
                </button>

                <button id="prf-btn">
                    P
                </button>
            </div>

       </div>
    )
}

export default Header
