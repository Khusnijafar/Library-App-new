import React, { Component } from 'react'
import axios from 'axios'

export default class LibraryFormReturn extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            returning: false,
            id: '',
            cardNumber: '',
        }
        this.handleButtonAdd = this.handleButtonAdd.bind(this)
        this.handleButtonCancel = this.handleButtonCancel.bind(this)
    }

    handleButtonAdd() {
        this.setState({ returning: true })
    }

    handleButtonCancel() {
        this.setState({ returning: false })
    }

    handleLoanBookChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoanBook = () => {
        let date = new Date();
       
        
        let year = date.getFullYear()
        let month = date.getMonth()+1
        let day = date.getDate()+8
        let expiredDate =  `${year}-${month}-${day}`
        axios.post('http://localhost:3005/api/loanbook', {
            id: this.state.id,
            cardNumber: this.state.cardNumber,
            expiredDate: expiredDate,
            forfeit: 0,
            status: 'loaned'
        })
        .then((response) => {
            console.log(response.data);

            this.setState({     
                id: '',
                cardNumber: '',
            })
        })
        console.log(expiredDate);
    }

    render() {
        return (
            <div>
                {
                    this.state.returning ?
                    <div className="card">
                        <div className="card-header">Loan Book</div>
                        <div className="card-body">
                            <div className="form-inline"> 
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Id Book</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="Id Book" name='id' value={this.state.id} onChange={this.handleLoanBookChange}
                                         required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Card Number</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="Card Number" name='cardNumber' value={this.state.cardNumber} onChange={this.handleLoanBookChange}
                                         required />
                                    </div>
                                </div>
                               <div>
                                <button type="submit" className="ui inverted segment green button" onClick={this.handleLoanBook}>
                                    <i className="fas fa-save"></i> Save
                                </button>
                                &nbsp;
                                <button type="button" className="ui inverted segment yellow button" onClick={this.handleButtonCancel}>
                                    <i className="fas fa-ban"></i> Cancel
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <button type="button" className="btn btn-primary" onClick={this.handleButtonAdd}>
                        <i className="fas fa-plus"></i> Loaning 
                    </button>
                }
            </div>
        )
    }
}