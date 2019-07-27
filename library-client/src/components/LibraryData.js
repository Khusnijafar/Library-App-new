import React, { Component } from 'react'

class LibraryData extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            editing: false,
            title: this.props.data.title,
            image: this.props.data.image,
            writer: this.props.data.writer,
            category: this.props.data.category,
            location: this.props.data.location,
        }
        this.handleSave = this.handleSave.bind(this)
    }
    handleSave() {
        let title = this.state.title.trim()
        let image = this.state.image.trim()
        let writer = this.state.writer.trim()
        let category = this.state.category.trim()
        let location = this.state.location.trim()
        if (!title || !image || !writer || !category ||!location) {
            return 
        }
        this.props.editLibrary(this.props.data.id,title,image,writer,category,location,)
        this.setState({ editing: false })
    }

    
    render() {
        const { data, deleteLibrary } = this.props
        if (this.state.editing) {
            return (
                <tr>
                    <td>{data.id}</td>
                    <td>
                        <input type="text" className="form-control" placeholder="Title" value={this.state.title} onChange={(e) => {
                            this.setState({ title: e.target.value}) }}>
                        </input>
                    </td>
                    <td>
                        <input type="text" className="form-control" placeholder="Image" value={this.state.image} onChange={(e) => {
                            this.setState({ image: e.target.value}) }}>
                        </input>
                        <img src={this.state.image} alt="gambar-buku" height="400px" />
                    </td>
                    <td>
                        <input type="text" className="form-control" placeholder="Writer" value={this.state.writer} onChange={(e) => {
                            this.setState({ writer: e.target.value}) }}>
                        </input>
                    </td>
                    <td>
                        <input type="text" className="form-control" placeholder="Category" value={this.state.category} onChange={(e) => {
                            this.setState({ category: e.target.value}) }}>
                        </input>
                    </td>
                    <td>
                        <input type="text" className="form-control" placeholder="Location" value={this.state.location} onChange={(e) => {
                            this.setState({ location: e.target.value}) }}>
                        </input>
                    </td>                    
                    <td style={{ textAlign: 'center'}}>
                            <button type="submit" className="ui inverted segment primary button" onClick={this.handleSave.bind(this)}><i className="fas fa-save"></i>Save</button>
                            &nbsp;
                            <button type="submit" className="ui inverted segment yellow button" onClick={() => { this.setState({ editing: false}) }}><i className="fas fa-ban"></i>Cancel</button>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td>{data.id}</td>
                    <td><h3>{data.title}</h3></td>
                    <td><img src={data.image} alt="gambar-buku" height="150px" /></td>
                    <td><b>{data.writer}</b></td>
                    <td><b>{data.category}</b></td>
                    <td><b>{data.location}</b></td>
                    <td style={{ textAlign: 'center'}}>
                            <button type="submit" className="ui inverted segment teal button" onClick={() => { this.setState({ editing: true}) }}><i className="fas fa-edit"></i>Edit</button>
                            &nbsp;
                            <button type="submit" className="ui inverted segment red button" onClick={() => deleteLibrary(data.id)}><i className="fas fa-trash-alt"></i>Delete</button>
                    </td>
                </tr>
            )
        }
    } 
}

export default LibraryData