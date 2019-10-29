import React from 'react';

let Editor = require('../../../entities/editor.js');

function PrefixSelector (props){

    const {namespaces} = props;


    const handleChange = (e) =>{
        let yashe = Editor.getInstance().getYashe();
        let current = yashe.getValue();
        let defined = yashe.getDefinedPrefixes();
        let prefix= e.target.value;
        let uri;
        //getUri
        for(let def in namespaces){
          for(let p in namespaces[def]){
            if(p==prefix)
              uri = namespaces[def][p];
          }
        }
        yashe.setValue( 'PREFIX ' + prefix + ': <' + uri + '>\n' + current );
    }

    return (<div>
                {
                    
                    Object.keys(namespaces).map( (key) =>{
                            return <div key={key}>
                                        <select  className='form-control'
                                                 onChange={handleChange}>
                                            <option>{key}</option>
                                            { 
                                                Object.keys(namespaces[key]).map( (prefix) =>{
                                                    return <option key={prefix} value={prefix}>{prefix}</option>
                                                })  
                                            }
                                        </select>
                                    </div>
                                    
                    }) 
                }
            </div>);
                     
}


export default PrefixSelector;
