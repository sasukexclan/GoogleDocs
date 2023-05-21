import { useCallback } from 'react';
import Quill from 'quill'
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';
import React from "react"


const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      
    [{ 'indent': '-1' }, { 'indent': '+1' }],          
    [{ 'direction': 'rtl' }],                        

    [{ 'size': ['small', false, 'large', 'huge'] }], 
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         
];




function TextEditor() {

    const wrapperRef = useCallback((wrapper) => {

        if (wrapper == null) return 

        wrapper.innerHTML = ''
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill(editor, {
            theme: "snow",
            modules: {
                toolbar: toolbarOptions
            },
        })  
        
    }, [])

    return <div className="container" ref={wrapperRef}></div>
}

export default TextEditor
