import TypesFactory from './types/typesFactory';
import ValueSet from './types/concreteTypes/valueSet';

class Node {

  constructor(id,type,constraint,facets,shapeRef,triples=[],extraProperties=new ValueSet(),isClosed) {
      this.id = id;

      this.type = type;
      this.constraint = constraint;
      this.facets = facets;
      this.shapeRef = shapeRef;
      
      this.triples = triples;
      this.triplesCount = this.triples.length;
      this.factory = new TypesFactory();

      this.extraProperties = extraProperties;
      this.isClosed = isClosed;
    }

    setType(type){
        this.type = this.factory.createType(type);
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

    setConstraint(constraint){
        this.constraint = this.factory.createType(constraint);
    }

    addFacet(facet){
        this.facets.push(facet);
    }



  }

export default Node;