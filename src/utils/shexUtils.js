import Codemirror from 'codemirror';
import Editor from '../entities/editor';
import Shape from '../entities/shexEntities/shape';
import Facet from '../entities/shexEntities/shexUtils/facet';
import {addPrefix} from './prefixUtils';

let shapesCount = 0;
let facetsCount = 0;

function addShape(shapes){

    const id = shapes.length + shapesCount++;
    const newShape = new Shape(id);
    
    let newShapes = [];
    newShapes = Object.assign(newShapes, shapes);
    newShapes.push(newShape);
    checkPrefixes();
    emit(newShapes);
    return newShape;    
}

function deleteShape(shapes,shapeId,confirm) {
    if(!confirm){
        confirm = window.confirm('Are you sure?');
    }
    if (confirm == true) {
        const newShapes = shapes.filter(shape => shape.id != shapeId);
        emit(newShapes);
        return newShapes;
    }
    return shapes;
}


function getShapeById(shapes,shapeId) {
    return shapes.filter(function( obj ) {
        return obj.id == shapeId
    })[0];
}

function getShapeByName(shapes,name) {
    for(let s in shapes){
        if(shapes[s].getType().toString() == name){
            return shapes[s];
        }
    }
}


function getTripleById(shape,tripleId) {
    return shape.getTriples().filter(function( obj ) {
        return obj.id == tripleId
    })[0];
}


function emit(newShapes) {
    const yashe = Editor.getInstance().getYashe();
    if(yashe!=undefined){
        Codemirror.signal(yashe,'humanEvent',newShapes);
        checkPrefixes();
    }
}

function checkPrefixes(){
    const yashe = Editor.getInstance().getYashe();
    let isExampleDef = false;
    let isSchemaDef = false;
    let isXsdDef = false;
    Object.keys(yashe.getDefinedPrefixes()).map(p=>{
        if(p==''){
            isExampleDef=true;
        }
        if(p=='schema'){
            isSchemaDef = true;
        } 
        if(p=='xsd'){
            isXsdDef = true;
        }
    })

    if(!isExampleDef){
        addPrefix('');
    } 
    if(!isSchemaDef){
        addPrefix('schema');
    } 
    if(!isXsdDef){
        addPrefix('xsd');
    }
}



function addFacet(facets){
    const id = facets.length + facetsCount++;
    return new Facet(id);    
}

function deleteFacet(facets,id) {
    return facets.filter(f => f.id != id);
}


const shexUtils = {
    addShape:addShape,
    deleteShape:deleteShape,
    getShapeById:getShapeById,
    getShapeByName:getShapeByName,
    getTripleById:getTripleById,
    emit:emit,
    addFacet:addFacet,
    deleteFacet:deleteFacet
}

export default shexUtils;