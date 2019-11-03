let TypesFactory = require('./types/typesFactory.js');

let IrirRef = require('./types/concreteTypes/iriRef.js');
let PrefixedIri = require('./types/concreteTypes/prefixedIri.js');
let BlankKind = require('./types/concreteTypes/kinds/blankKind.js');

class Shape {

  constructor(id,type=new IrirRef('shapeName'),triples = [],qualifier=new BlankKind()) {
      this.id = id;
      this.type = type;
      this.triples = triples;
      this.triplesCount = this.triples.length;
      this.factory = new TypesFactory();
      this.qualifier = qualifier;
    }

    addTriple(triple){
        this.triples.push(triple);
        this.triplesCount++;
    }

    removeTriple(tripleId){
      this.triples = this.triples.filter(function( obj ) {
        return obj.id != tripleId
      });
    }

    getTriplesCount(){
      return this.triplesCount;
    }


    getId(){
      return this.id;
    }

    getType(){
      return this.type; 
    }


    getTriples() {
        return this.triples;
     }

    setTriples(triples){
      this.triples = triples;
    }

    getQualifier() {
        return this.qualifier;
     }

    setQualifier(qualifier){
      this.qualifier = this.factory.createType(qualifier,'shapeName');
    }
    

    setType(type){
        this.type = this.factory.createType(type,'shapeName');
     }


     toString(){
    
      let str = this.type+' '+this.qualifier+' {\n'
      this.triples.forEach(triple => {
        str+=triple;
      });

      str+="}\n\n"
      return str

     }


  }

  module.exports = Shape;