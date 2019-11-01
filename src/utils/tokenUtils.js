let Shape = require('../entities/shexEntities/shape.js')
let Triple = require('../entities/shexEntities/triple.js')
let Prefix = require('../entities/shexEntities/shexUtils/prefix.js')

let IriRef = require('../entities/shexEntities/types/concreteTypes/iriRef.js');
let PrefixedIri = require('../entities/shexEntities/types/concreteTypes/prefixedIri.js');
let BNode = require('../entities/shexEntities/types/concreteTypes/bNode.js');
let Primitive = require('../entities/shexEntities/types/concreteTypes/primitive.js');
let ShapeReference = require('../entities/shexEntities/types/concreteTypes/shapeReference.js');

let Literal = require('../entities/shexEntities/types/concreteTypes/kinds/literal.js');
let NonLiteral = require('../entities/shexEntities/types/concreteTypes/kinds/nonLiteral.js');
let IriKind = require('../entities/shexEntities/types/concreteTypes/kinds/iriKind.js');
let BNodeKind = require('../entities/shexEntities/types/concreteTypes/kinds/bNodeKind.js');
let BlankKind = require('../entities/shexEntities/types/concreteTypes/kinds/blankKind.js');

let InlineShape = require('../entities/shexEntities/shexUtils/inlineShape.js');

let shexUtils = require('./shexUtils.js');

let TypesFactory = require('../entities/shexEntities/types/typesFactory.js');


let Editor = require('../entities/editor.js');

//HAY QUE METER TODOS
const PRIMITIVES = ['string','integer','date','boolean'];
const CARDINALITY = ['*','?','+'];


let inlines;

function getTokens(){
    let yashe = Editor.getInstance().getYashe();
    let numPrefixes = Object.keys(yashe.getDefinedPrefixes()).length;
    let tokens =[];
    for (var l = numPrefixes+1; l < yashe.lineCount(); ++l) {
        let lineTokens = getNonWsTokens(yashe.getLineTokens(l));
        lineTokens.forEach(token =>{
            tokens.push(token);
        })

    }
    return tokens;
}

function getDefinedShapes(tokens){
    let brackets=0
    let shape=[];
    let defShapes = [];
    //Separate shapes in arrays
    tokens.forEach(element =>{
        shape.push(element);
        if(element.string == '{'){
            brackets++;
        }

        if(element.string == '}'){
            brackets--;
            //Is the last } ?
            if(brackets==0){
                defShapes.push(shape);
                shape = [];
            }
        }

    })
    return defShapes;
}


function getShapes(defShapes){
    inlines = [];
    let shapes = [];
    let yashe = Editor.getInstance().getYashe();

    defShapes.forEach(shape => {
            
        let id = shapes.length;
        let shapeDef = shape[0].string;
        let shapeType = getType(shapeDef,'shapeName');
        let qualifier = getQualifier(shape)
        let triples = getTriples(id,shape);

        shapes.push(new Shape(id,shapeType,triples,qualifier));
    })

    return shapes;

}

function getQualifier(shape) {
    if(shape[1].type == 'keyword'){
        let type = shape[1].string.toLowerCase()+'Kind';
        console.log(type)
        return new TypesFactory().createType(type);
    }
    return new BlankKind();
}

function getTriples(shapeId,shape) {
        let triples = [];
        let singleTriple = [];
        let yashe = Editor.getInstance().getYashe();
        let start = getStart(shape);
        for(let i=start;i<shape.length;i++){
            singleTriple.push(shape[i])
            if(shape[i].type == 'punc'){
                if(singleTriple.length!=1){ //This line is neccesary when last triple of the shape ends with ';'
           
                              
                    let id = triples.length;
                    let type;
                    let value;
                    let cardinality;
                    let inlineShape = new InlineShape();
                    let index = 0;
                    for(let s in singleTriple){
                        let token = singleTriple[s];
                        if(index == 0){
                            type = getType(token.string,'tripleName');
                            
                        }else{
                            
                            if(token.type == 'string-2' || token.type == 'keyword' || token.type == 'variable-3'){
                                value = getValue(token.string);
                            }
                  
                            if(token.type == 'at' ){
                                
                                let inlineName = getInlineName(token.string);
                                inlines.push(
                                        {
                                            shapeId:shapeId,
                                            tripleId:id,
                                            inlineName:inlineName
                                        }
                                    );
                            }

                            if(token.type == 'card' ){
                               cardinality = token.string;
                            }

                        }
                      index++;
                    }

                    //ShapeRef
                    if(value == undefined){
                        value = new ShapeReference(); 
                    }

                    //console.log(value)
                    triples.push(new Triple(id,type,value,inlineShape,cardinality));
                    singleTriple = [];
                }
            }

        }
    return triples;
}

function getStart(shape){
    for(let i=0;i<shape.length;i++){
        if(shape[i].string=='{'){
            return i+1;
        }
    }
}



function getValue(def) {

    let factory = new TypesFactory();
    let type = factory.createType(def.toLowerCase());

    if(type!=undefined){
        return type;
    }


    if(def.startsWith('<')){
        let value = def.split('<')[1].split('>')[0];
        return new IriRef('valueName',value);
    }

    let token = def.split(':');
    let yashe = Editor.getInstance().getYashe();

    if(token.length==2){
        //At this point it can be Prefixed,Primitive or ShapeRef
        if(isPrimitive(token[1])){
            return new Primitive(token[1]);
        }else{
            let prefixName = token[0];
            let prefixValue = getPrefixValue(yashe.getDefinedPrefixes(),prefixName)
            let prefix = new Prefix(prefixName,prefixValue);
            return  new PrefixedIri('valueName',prefix,token[1]);
        }

    }

    
}

function getType(def,context) {
    let value;
    let yashe = Editor.getInstance().getYashe();
    if(def.startsWith('<')){
        value = def.split('<')[1].split('>')[0];
        return new IriRef(context,value);
    }else if(def.startsWith('_:')){
        value = def.split(':')[1];
        return new BNode(context,value);
    }else{
        value = def.split(':')[1];
        let prefixName = def.split(':')[0];
        let prefixValue = getPrefixValue(yashe.getDefinedPrefixes(),prefixName)
        let prefix = new Prefix(prefixName,prefixValue);
        return new PrefixedIri(context,prefix,value);
    }
}


function updateInlines(shapes) {

    for(let inShape in inlines){
  
        let shapeId = inlines[inShape].shapeId;
        let tripleId = inlines[inShape].tripleId;
        let name = inlines[inShape].inlineName;

        let shape = shexUtils.getShapeById(shapes,shapeId);
        let triple = shexUtils.getTripleById(shape,tripleId);

        let shapeRef = shexUtils.getShapeByName(shapes,name);
        triple.getInlineShape().setShape(shapeRef);

    }
}



function getPrefixValue(defPrefixes,prefixName){
    let prefixValue;
    for(let pre in defPrefixes){
        if(pre==prefixName){
            prefixValue = defPrefixes[pre]
        }
    }
    return prefixValue;
}


function isPrimitive(value) {
    for(let prim in PRIMITIVES){
        if(PRIMITIVES[prim] == value){
            return true;
        }
    }
    return false;
}


function getInlineName(token) {
    if(token.startsWith('@<')){
        return token.split('<')[1].split('>')[0];
    }
    return token.split(':')[1];
}


function getNonWsTokens(tokens){
    return tokens.filter(function(obj){
        return obj.type != 'ws';
    })
}

module.exports = {
    getTokens:getTokens,
    getDefinedShapes:getDefinedShapes,
    getShapes:getShapes,
    updateInlines:updateInlines
}