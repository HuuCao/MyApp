import React, { Component } from 'react';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai:0
        }
    }
    
    thongbao1 = () => {
        alert('Cach xu ly thong bao trong ReactJS')
    }

    thongbao2 = () => {
        alert('Cach xu ly thong bao trong NodeJS')
    }

    renderButton = () => (
        <div className="row">
            <div className="btn btn-group">
                <div className="btn btn-info" onClick={this.editClick}> Edit </div>
                <div className="btn btn-warning"> Remove </div> 
            </div>
        </div>
    )

    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input ref={(dulieunhap) => {this.trunggian = dulieunhap}} defaultValue={this.props.tieude} type="text" name="ten" className="form-control" />
            </div>
            <div>
                <div className="btn btn-success"  onClick={this.saveClick}>Save</div>
            </div>

        </div>
    )

    displayCheck = () => {
        if(this.state.trangThai === 0){
            return this.renderButton();
        } else{
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({trangThai:1});
    }

    saveClick = () => {
        this.setState({trangThai:0});
        console.log(this.trunggian.value);
    } 
    
    render() {
        return (
            <div className="col-lg-4">
                <div className="row">
                    <div className={"col-lg-5 " + this.props.vitri}>
                        <div className="p-1">
                            <img className="img-fluid rounded-circle" src={this.props.anh}/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-1">
                            <h2 className="display-6">{this.props.tieude}</h2>
                            <p>
                                {this.props.trichdan}
                            </p>

                            {this.displayCheck()}

                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;