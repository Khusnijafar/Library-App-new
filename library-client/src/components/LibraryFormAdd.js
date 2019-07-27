import React, { Component } from 'react'

export default class LibraryFormAdd extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            adding: false,
            title: this.props.title,
            image: this.props.image,
            writer: this.props.writer,
            category: this.props.category,
            location: this.props.location,
        }
        this.handleButtonAdd = this.handleButtonAdd.bind(this)
        this.handleButtonCancel = this.handleButtonCancel.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleWriterChange = this.handleWriterChange.bind(this)
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleButtonAdd() {
        this.setState({ adding: true })
    }

    handleButtonCancel() {
        this.setState({ adding: false })
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleImageChange(e) {
        this.setState({ image: e.target.value })
    }

    handleWriterChange(e) {
        this.setState({ writer: e.target.value })
    }

    handleCategoryChange(e) {
        this.setState({ category: e.target.value })
    }

    handleLocationChange(e) {
        this.setState({ location: e.target.value })
    }


    handleSubmit(e) {
        e.preventDefault()
        var title = this.state.title.trim()
        var image = this.state.image.trim()
        var writer = this.state.writer.trim()
        var category = this.state.category.trim()
        var location = this.state.location.trim()
        if(!title || !image || !writer || !category || !location ) {
            return
        }
        this.props.onSave(title, image, writer, category, location, )
        this.setState({ title: '', image: '', writer: '', category: '', location: '',})
    } 

    render() {
        return (
            <div>
                {
                    this.state.adding ?
                    <div className="card">
                        <div className="card-header">Add Book</div>
                        <div className="card-body">
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="Title"
                                        onChange={this.handleTitleChange} value={this.state.title} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Image</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="Image"
                                        onChange={this.handleImageChange} value={this.state.image} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Writer</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="Writer"
                                        onChange={this.handleWriterChange} value={this.state.writer} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Category</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="Category"
                                        onChange={this.handleCategoryChange} value={this.state.category} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Location</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="Location"
                                        onChange={this.handleLocationChange} value={this.state.location} required />
                                    </div>
                                </div>

                               <div>
                                <button type="submit" className="ui inverted segment green button">
                                    <i className="fas fa-save"></i> Save
                                </button>
                                &nbsp;
                                <button type="button" className="ui inverted segment yellow button" onClick={this.handleButtonCancel}>
                                    <i className="fas fa-ban"></i> Cancel
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <button type="button" className="btn btn-primary" onClick={this.handleButtonAdd}>
                        <i className="fas fa-plus"></i> Add
                    </button>
                }
            </div>
        )
    }
}