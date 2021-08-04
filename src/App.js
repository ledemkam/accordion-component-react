import React, { useState } from 'react';
import './App.css';

function App() {
   return (
      <div className="App">
         <Accordion title="Why is React great?">Fast Learning Curve</Accordion>
      </div>
   );
}
const Accordion = ({ children, title, isExpand = false }) => {
   const [expand, setExpand] = useState(isExpand);
   return (
      <div className="box">
         <div
            className="title-box"
            onClick={() => setExpand((expand) => !expand)}
         >
            <span className="title">{title}</span>
            <span className="icon">
               <i className={`fa fa-plus-square${!expand ? ' down' : ''}`}></i>
            </span>
            <div className="clearfix"></div>
         </div>
         {expand && <div className="content">{children}</div>}
      </div>
   );
};

export default App;
