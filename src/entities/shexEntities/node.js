import TypesFactory from './types/typesFactory';

class Node {

  constructor(id,type,constraint,facets,shapeRef,triples=[],extraConstraints,isClosed) {
      this.id = id;

      this.type = type;
      this.constraint = constraint;
      this.facets = facets;
      this.shapeRef = shapeRef;
      
      this.triples = triples;
      this.triplesCount = this.triples.length;
      this.factory = new TypesFactory();

      this.extraConstraints = extraConstraints;
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