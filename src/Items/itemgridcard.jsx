import React,{Component} from 'react'

class Itemgridcard extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            qty: 0,
        };    
        this.handleTypingInput = this.handleTypingInput.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(){
        console.log(this.props.id)
        this.setState({qty: 0});
    }

    handleClickMinus(){
        var num = this.state.qty-1
        if(num<0){
            num=0
        }
        this.setState({qty: num});
    }

    handleClickPlus(){
        var num = this.state.qty+1
        if(num>99){
            num=99
        }
        this.setState({qty: num});
    }

    handleTypingInput(event) {
        if(event.target.value<=0){
            event.target.value=1
        }
        else if(event.target.value>99){
            event.target.value=99
        }
        this.setState({qty: event.target.value});
    }

    qtyline={
        verticalAlign: 'middle',
    }

    qtyInputBox={
        background: '#ebece9',
        textAlign: "center",
        verticalAlign: 'middle',
        border: '1px solid black',
        width:50,
        height:40
    }
    
    buttonstyle={
        width:50,
        height:40,
        verticalAlign: 'middle',
    }

    cardstyle={
        margin: 50,
        border: '1px solid black',
    }

    cartbtn={
        marginTop: 5,
        display: 'block',
        border: '1px solid black',
        backgroundColor: '#fff',
    }

    render(){
        return(
            <div className="card align-items-center" style={this.cardstyle}>
                <img className="card-img-top" src={this.props.item.imgurl}></img>
                <div className="card-body align-items-center">

                    <h5 className="card-title text-center">{this.props.item.title}</h5>
                    <p className="card-text text-center">{this.props.item.text}</p>

                    <div className="row" style={this.qtyline}>
                        <div className="col-4">
                        <button className="btn btn-secondary" style={this.buttonstyle} onClick={this.handleClickMinus}>-</button>
                        </div>
                        <div className="col-4">
                        <input type="number" className="noarrows" style={this.qtyInputBox} value={this.state.qty} onChange={this.handleTypingInput} min="0" max="99"/>
                        </div>
                        <div className="col-4">
                        <button className="btn btn-secondary" style={this.buttonstyle} onClick={this.handleClickPlus}>+</button>
                        </div>
                    </div>
                    
                    <div className="row" style={this.qtyline}>
                        <button className="btn cartbtn shadow-none col-12" style={this.cartbtn} onClick={this.addToCart}>Add to cart</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Itemgridcard;