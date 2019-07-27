import React, { Component } from 'react'
import LibraryFormAdd from './LibraryFormAdd'
import LibraryDataList from './LibraryDataList'
import LibraryFormLoan from './LibraryFormLoan'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LibraryActions from '../actions'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import LibraryFormReturn from './LibraryFormReturn';



const Gallery = () => {
    const handleOnDragStart = e => e.preventDefault()
    return (
      <AliceCarousel mouseDragEnabled >
        <img src="https://s3.envato.com/files/151516168/Preview%20Image%20Set/07_preview7.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" height="480px" width="1500px" alt=""/>
        <img src="https://gm.imgix.net/https%3A%2F%2Foriginalmockups.com%2Fmedia%2Fpages%2Fstock%2Foriginalmockups%2Fsupernova-bundle%2Fhardcover-large-landscape-book-psd-mockup-02%2F1857797569-1562975502%2Fhardcover-large-landscape-book-psd-mockup-02.jpg?auto=format&fit=max&ixlib=php-2.3.0&q=90&w=1608&s=9b252c39fb84cbd84b29f4988d975cd4" onDragStart={handleOnDragStart} className="yours-custom-class" height="480px" width="1500px" alt=""/>
        <img src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1554741904/shape/mentalfloss/559404-istock-512966920_0.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" height="480px" width="1500px" alt=""/>
      </AliceCarousel>
    )
  }
  
class Library extends Component {
   
    componentDidMount() {
        this.props.actions.loadLibrary()
    }

    render() {
        const { data, actions } = this.props
        return (
            <div>
                <div className="ui clearing segment">
                    <h3 className="ui right floated header">
                       <a href="/register"> Register</a>
                    </h3>
                    <h3 className="ui left floated header">
                    <a href="/login"> Login</a>
                    </h3>
                </div>
                <Gallery />
                <div style={{ height: '5px'}}><br /></div>
                <LibraryFormAdd title="" image="" writer="" category="" location="" onSave={actions.addLibrary} />
                <div style={{ height: '5px'}}><br /></div>
                <LibraryFormLoan />
                <div style={{ height: '5px'}}><br /></div>
                <LibraryFormReturn />
                <div style={{ height: '10px'}}><br /></div>
                <LibraryDataList data={data} actions={actions} />
            </div>
        )
    }
}

function mapsStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LibraryActions, dispatch)
    }
}

export default connect (
    mapsStateToProps,
    mapDispatchToProps
)(Library)