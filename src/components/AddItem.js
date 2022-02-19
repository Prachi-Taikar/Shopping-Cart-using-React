import React from "react";

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName: "",
            productPrice: 0,
        }
    }
    render() {
        return (
              
                <form className = "mb-5" onSubmit={(e) => { 
                    e.preventDefault();
                    this.props.addItem( this.state.productName, Number(this.state.productPrice))}}>

                    <h1>Add Product</h1>
                    <div className="mb-3 col-6">
                        <label htmlFor="inputName" className="form-label">Product Name :</label>
                        <input type="text" className="form-control" id="inputName" aria-describedby="name" name="productName"
                        onChange = {(e) => {
                            this.setState({productName: e.currentTarget.value});
                        }} 
                        value = {this.state.productName} />
                    </div>

                    <div className="mb-3 col-6">
                        <label htmlFor="inputPrice" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" name="productPrice"
                        onChange = {(e) => {
                            this.setState({productPrice: Number(e.currentTarget.value)});
                        }}
                        value = {this.state.productPrice} />
                    </div>
                    
                        <button  type="submit" className="btn btn-primary " >Add</button>

                        <hr/>
                </form>
                
                );
            }  
    }

export default AddItem;
