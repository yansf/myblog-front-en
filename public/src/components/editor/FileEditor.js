import React from "react"
import Editor from './Editor.js'
import FileUpload from '../upload/FileUpload.js'

export default class FileEditor extends React.Component{

    render(){
        return (
            <div className='edit-content'>
                <Editor id="editor" ref='editor' content={this.props.content} />
                <FileUpload ref='upload'/>
            </div>
        )
    }

    getFiles = () =>{
        return this.refs.upload.getFiles();
    }

    getEditContent = ()=>{
        return this.refs.editor.getEditContent();
    }
}
