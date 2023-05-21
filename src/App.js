import React from "react"
import TextEditor from './component/TextEditor';
import Header from "./component/Header"
import Sidebar from "./component/Sidebar";

function App() {
    return (
            <div>
                <Header />
                <TextEditor />
                <Sidebar />
            </div>    
    )
}

export default App;
