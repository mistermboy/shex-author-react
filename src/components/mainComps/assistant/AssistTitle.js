import React,{useContext} from 'react';
import {ShapesContext} from '../../../App';

function AssistTitle (props) {

    const context = useContext(ShapesContext);

    return (<div className="assisTitle">
                <div className="title">ShEx Assistant</div>
                <div className="asisTitleClose">
                    <button className="closeAsisBtn" title="Close Assistant" onClick={context.assistantToggle}>x</button>
                </div>
            </div>);
}


export default AssistTitle;

