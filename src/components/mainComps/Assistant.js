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

import {SHAPE_COLORS} from '../../conf/properties';

export const AssistContext = React.createContext();

function AssistantComp (props) {

        const context = useContext(AppContext);
        const [isShapesOpen, setShapesOpen] = useState(false);
        const [isPrefixesOpen, setPrefixesOpen] = useState(false);
        const [isConfigOpen, setConfigOpen] = useState(true);

        const styles = {
                label:{color:SHAPE_COLORS.label},
                header:{background:SHAPE_COLORS.header},
                custom:{
                        color:SHAPE_COLORS.customFill,
                        background:SHAPE_COLORS.custom
                },
                delete:{
                        color:SHAPE_COLORS.deleteFill,
                        background:SHAPE_COLORS.delete
                },
                collapse:{color:SHAPE_COLORS.collapse},
                body:{background:SHAPE_COLORS.body},
        
        }
        const [color,setColor] = useState('#fffff');
        const handleChange = function(color,element){
            setColor(color);//NECESSARY TO  FORCE RENDER
            SHAPE_COLORS[element] = color;
        }

     

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
                        styles:styles,
                        handleChange:handleChange
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