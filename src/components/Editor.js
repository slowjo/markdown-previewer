import { useState } from 'react';

const TopBar = (props) => {
    return (
       <div className="top-bar">
          <p className="editor-title">{props.showEditor ? 'Enter your markdown here:' : 'Markdown Previewer'}</p>
          <div className="topbar-actions">
            <button className="btn-top" onClick={props.toggleEditor}>{props.showEditor ? 'Hide Editor': 'Show Editor'}</button> 
          </div>
       </div>
    );
  };
  
  const Editor = (props) => {
    const [showEditor, setShowEditor] = useState(true);
    
    const handleChange = (e) => {
      props.setEditorInput(e.target.value);
    };
    
    const toggleEditor = () => {
      setShowEditor((prev) => !prev);
    };
  
    return (
      <div className="input-box">
          <TopBar showEditor={showEditor} toggleEditor={toggleEditor} />
          {showEditor && (
            <textarea id="editor" value={props.editorInput} onChange={handleChange} spellcheck="false" />
          )}
      </div>
    );
  };

  export default Editor;