 export const defaultExample = 
`PREFIX :       <http://example.org/>
PREFIX schema: <http://schema.org/>
PREFIX xsd:    <http://www.w3.org/2001/XMLSchema#>

:User IRI {
  schema:name          xsd:string   ;
  schema:birthDate     xsd:date   ? ;
  schema:birthPlace    xsd:string + ;
  schema:knows         @:User     *  
}`






/*  export const defaultExample = 
`PREFIX :       <http://example.org/>
PREFIX schema: <http://schema.org/>
PREFIX xsd:    <http://www.w3.org/2001/XMLSchema#>

:User IRI {
  schema:before          xsd:string   ;

} AND{

    schema:after          xsd:string   ;
}

OR{

    schema:dd          xsd:string   ;
  schema:dd          xsd:string   ;
  schema:dd          xsd:string   ;
  schema:dd          xsd:string   ;
  schema:dd          xsd:string   ;
}` */