import React,{Component} from 'react'
import Itemgridcard from './itemgridcard'

class Itemgrid extends Component{
    constructor(props) {
        super(props);
        this.state={
            shoppingItems:[
                {id:1,imgurl:"./item1.jpg",title:"Item 1", text:"Item description 1",},
                {id:2,imgurl:"./item2.jpg",title:"Item 2", text:"Item description 2",},
                {id:3,imgurl:"./item3.jpg",title:"Item 3", text:"Item description 3",},
                {id:4,imgurl:"./item1.jpg",title:"Item 4", text:"Item description 4",},
            ]
        }
    }

    grid={
        border: '1px solid black',
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'AliceBlue',
    }

    rowWhite={
        margin: 20,
        borderRadius: 25,
        backgroundColor: 'White',
    }

    render(){
        let rowContents = [];
		const contents = this.state.shoppingItems.reduce((acc, item, i) => {
			rowContents.push(
                <div key={i} className="col-md-4">
                    <Itemgridcard
                        id={item.id}
                        item={item}
                    />
                </div>
            );
			if ((i % 3 === 2)||(!(i % 3 === 2)&&i===this.state.shoppingItems.length-1)) {
				acc.push(
                <span>
                    <div style={this.grid}>
                        <div className="row -md" style={this.rowWhite}>{rowContents}</div>
                    </div>
                </span>);
				rowContents = [];
            }
            
			return acc;
		},[])

        return (
			<div>
			{contents}
			</div>
		)
    }
}

export default Itemgrid;