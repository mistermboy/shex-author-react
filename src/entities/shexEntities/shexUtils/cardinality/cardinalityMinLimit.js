class CardinalityMinLimit{

    constructor(min=1){
        this.min = min;
    }

    toString(){
        return '{'+this.min+',*}';
    }

}

export default CardinalityMinLimit;