import React,{useContext,useState} from 'react';
import {AppContext} from '../../App';
import { Collapse } from 'reactstrap';
import AssistNav from './assistant/AssistNav';
import AssistContent from './assistant/AssistContent';
import AssistLoader from './assistant/AssistLoader';
import AssistError from './assistant/AssistError';
import '../../css/Assistant.css';
import '../../css/resizable/react-resizable.css';

import { Resizable, ResizableBox } from 'react-resizable';

export const AssistContext = React.createContext();

function AssistantComp (props) {

        const context = useContext(AppContext);
        const [isShapesOpen, setShapesOpen] = useState(true);
        const [isPrefixesOpen, setPrefixesOpen] = useState(false);
        const [isConfigOpen, setConfigOpen] = useState(false);

        return (
                <AssistContext.Provider
                value={
                        {
                        isShapesOpen:isShapesOpen,
                        isPrefixesOpen:isPrefixesOpen,                  
                        isConfigOpen:isConfigOpen,
                        setShapesOpen:setShapesOpen,
                        setPrefixesOpen:setPrefixesOpen,
                        setConfigOpen:setConfigOpen,
                        }
                }>
                        <Collapse isOpen={context.isAssistantOpen} className='assistCollapse'>
                        <ResizableBox   width={context.width} 
                                        height={100} //Just to avoid console errors, but ignore it
                                        onResize={(e,data)=>context.handleResize(e,data)}
                                        resizeHandles={['e']}  
                                        minConstraints={[470, 100]} maxConstraints={[1000, 1000]}>
                                
                                <div className='containerAssist'>                                    
                                        <AssistNav/>
                                        <AssistContent/>
                                        <AssistLoader/>
                                        <AssistError/>                               
                                </div>
                        </ResizableBox>
                        </Collapse>
                </AssistContext.Provider>);
}


export default AssistantComp;