import React, { Component } from 'react'
import LibraryData from './LibraryData'

export default class LibraryFormSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            writer: '',
            category: '',
            location: '',
           
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleWriterChange = this.handleWriterChange.bind(this)
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value})
    }

    handleWriterChange(e) {
        this.setState({ writer: e.target.value})
    }

    handleCategoryChange(e) {
        this.setState({ category: e.target.value})
    }

    handleLocationChange(e) {
        this.setState({ location: e.target.value})
    }

   
    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        const {data, actions} = this.props

        var title = this.state.title.trim().toLowerCase()
        var writer = this.state.writer.trim().toLowerCase()
        var category = this.state.category.trim().toLowerCase()
        var location = this.state.location.trim().toLowerCase()
       
        var filterData = data

        if (title !== '' && writer !== '' && category !== '' && location !== '') {
            filterData = data.filter(item => item.title.toLowerCase().startsWith(title) && item.writer.toLowerCase().startsWith(writer)
            && item.category.toLowerCase().startsWith(category) && item.location.toLowerCase().startsWith(location))
        } else if (title !== '') {
            filterData = data.filter(item => item.title.toLowerCase().startsWith(title))
        } else if (writer !== '') {
            filterData = data.filter(item => item.writer.toLowerCase().startsWith(writer))
        } else if (category !== '') {
            filterData = data.filter(item => item.category.toLowerCase().startsWith(category))
        } else if (location !== '') {
            filterData = data.filter(item => item.location.toLowerCase().startsWith(location))
        }

        let dataList = filterData.map((data) => {
            return (
                <LibraryData 
                    key={data.id}
                    data={data}
                    {...actions}
                />
            )
        })

        return (
            <div>
                <div className="card">
                    <div className="card-header"><i className="search icon"></i>Search Book</div>
                    <div className="card-body">
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Title </label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Writer </label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" placeholder="Writer" value={this.state.writer} onChange={this.handleWriterChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Category </label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" placeholder="Category" value={this.state.category} onChange={this.handleCategoryChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Location </label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" placeholder="Location" value={this.state.location} onChange={this.handleLocationChange} />
                                </div>
                            </div>
                       
                        </form>
                    </div>
                </div>
                <div style={{ height: '10px'}}><br /></div>
                <div className="card">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Writer</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th style={{ textAlign: 'center'}}>Action</th>
                        </tr>                            
                    </thead>
                    <tbody>
                        {dataList}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }

}