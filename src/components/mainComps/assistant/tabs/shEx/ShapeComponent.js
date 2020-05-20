import React,{useContext,useState} from 'react';
import {AppContext} from '../../../../../App';
import { Collapse } from 'reactstrap';
import ShapeHeader from  './headers/ShapeHeader';
import CustomComp from './customize/CustomComp';
import TripleComponent from './TripleComponent';
import Triple from '../../../../../entities/shexEntities/triple';
import Properties from '../../../../../conf/properties';

import CustomZone from './CustomZone';

import Triples from './Triples';

export const ShapeContext = React.createContext();

function ShapeComponent (props) {

    const context = useContext(AppContext);
    const {shape} = props;
    const styles = Properties.getInstance().getShapeStyle();
    const tripleStyles = Properties.getInstance().getTripleStyle();
    
    const [triples,setTriples] = useState(shape.triples);
    const [isCustomOpen,setCustomOpen] = useState(false);
    const [isTriplesOpen,setTriplesOpen] = useState(true);
    const [colapseBtn,setColapseBtn] = useState('menu_open');

    let initialDisabled = false;
    if(shape.type.value == '')initialDisabled = true;
    const [disabled,setDisabled] = useState(initialDisabled);


    const customizeShape = function(){
        //Completly collapsed shape open just customShape
        if(!isCustomOpen && !isTriplesOpen ){
            setCustomOpen(true);
            setTriplesOpen(false);
        }else{
            //CustomShape opened  opens triples on collapse
            setCustomOpen(!isCustomOpen);
            setTriplesOpen(!isTriplesOpen);
        }

        setColapseBtn('menu');
    }

    const collapseTriples = function(){
        setCustomOpen(false);
        forceTriples(!isTriplesOpen);
    }

    const forceTriples = function(open){
        setTriplesOpen(open);
        
        if(colapseBtn=='menu'){
            setColapseBtn('menu_open');
        }else{
            setColapseBtn('menu');
        }
    }

    return (

        <ShapeContext.Provider value={{disabled:disabled,setDisabled:setDisabled}}>
            <div className="shape" style={styles.header}>
                <ShapeHeader shape={shape} 
                            customizeShape={customizeShape} 
                            collapseTriples={collapseTriples} 
                            colapseBtn={colapseBtn}
                            forceTriples={forceTriples}/>

                <CustomComp  entity={shape} 
                             isCustomOpen={isCustomOpen}
                             bnode={false}
                             customClass="customShape"/>

                <CustomZone entity={shape} 
                            isCustomOpen={isTriplesOpen} 
                            customClass='customShape'/> 
  <CustomZone entity={shape} 
                            isCustomOpen={isTriplesOpen} 
                            customClass='customShape'/> 
            



            </div>
        </ShapeContext.Provider>
    );
                                   
    
}


export default ShapeComponent;
