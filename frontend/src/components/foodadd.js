import React, { Component } from 'react'
import axios from 'axios';

export class Foodadd extends Component {
    constructor(props) {
        super(props);

        this.octd = this.octd.bind(this);
        this.octr = this.octr.bind(this);
        this.octr1 = this.octr1.bind(this);
        this.octp = this.octp.bind(this);
        this.octp1 = this.octp1.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            price: '',
            rating: '',
            VegorNonveg: ''
        }
    }
    octd(e) {
        this.setState({
            name: e.target.value
        });
    }

    octr(e) {
        this.setState({
            price: e.target.value
        });
    }
    octr1(e) {
        this.setState({
           VegorNonveg: e.target.value
        });
    }

    octp(e) {
        this.setState({
            rating: e.target.value
        });
    }
    octp1(e) {
        this.setState({
            vendor: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        
        
        const newData = {
            name: this.state.name,
            price: this.state.price,
            rating: this.state.rating,
            VegorNonveg: this.state.VegorNonveg,
            vendor:this.state.vendor,
            count:0
        };
        
        axios.post('http://localhost:8080/food/add', newData)
            .then(res => console.log(res.data));

            this.setState({
                name: '',
                price: '',
                rating: '',
                VegorNonveg: '',
                vendor: '',
                count:''
            })
    }

    render() {
        return (
            <div style={{marginTop: -9}}>
            <h3>ADD FOOD ITEM</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Name of the item: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.octd}
                            />
                </div>
                <div className="form-group">
                    <label>Price of the item: </label>
                    <input 
                            type="number" 
                            className="form-control"
                            value={this.state.price}
                            onChange={this.octr}
                            />
                </div>
                <div className="form-group">
                    <label>Rating: </label>
                    <input 
                            type="number" 
                            className="form-control"
                            value={this.state.rating}
                            onChange={this.octp}
                            />
                </div>
                <div className="form-group">
                    <label>VegorNonveg: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.VegorNonveg}
                            onChange={this.octr1}
                            />
                </div>
                <div className="form-group">
                    <label>Vendor: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.vendor}
                            onChange={this.octp1}
                            />
                </div>
                
                <div className="form-group">
                    <input type="submit" value="Add food item" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}

export default Foodadd


