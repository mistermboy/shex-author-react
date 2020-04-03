import React,{useContext} from 'react';
import {AppContext} from '../../../../App';
import ShapeComponent from './shEx/ShapeComponent';
import Properties from '../../../../conf/properties';

function Shapes (props) {

    const context = useContext(AppContext);
    const styles = Properties.getInstance().getShapeStyle();

    return ( 
        <div>
            {context.shapes.map(shape =>{return  <ShapeComponent shape={shape} key={shape.id}/> })}
                <div className="addCont">
                    <button className="addShapeButton"
                            style={styles.addShape} 
                            onClick={context.addShape}
                            title="Add Shape">
                            + Shape
                    </button>
                </div>
        </div>);
}


export default Shapes;

