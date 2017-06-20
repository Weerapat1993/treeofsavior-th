import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { galleryActions } from '../../../core/gallery';
import GalleryItem from './GalleryItem'
import GalleryModal from './GalleryModal'

class Gallery extends Component {
  constructor() {
    super()

    this.state = {
      createGallery: {},
      showModal: false
    }
  }

  // componentDidMount() {
  //   console.clear();
    
  //   this.props.galleryActions.fetchGallery()
  // }

  createGallery(value, dispatch, props) {
    let data = {
      id: new Date().getTime(),
      name: value.name,
      url: value.url
    }
    this.props.galleryActions.createGallery(data)
    this.setState({ showModal: false });
  }

  updateGallery(data) {
    this.props.galleryActions.updateGallery(data)
  }

  deleteGallery(key) {
    this.props.galleryActions.deleteGallery(key)
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const { galleries } = this.props;
    const data = galleries.map((item,i) => (
      <GalleryItem 
        key={i} 
        data={item}
        deleteGallery={this.deleteGallery.bind(this)} 
      />
    ))
    return (
      <div>
        <div className="text-right">
          <GalleryModal 
            data={this.state.createGallery}
            handleSubmit={this.createGallery.bind(this)} 
            open={this.open.bind(this)} 
            close={this.close.bind(this)}
            showModal={this.state.showModal}
          />
        </div>
        <hr/>
        <div className='row'>
          {data}
        </div>
      </div>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  galleries: state.gallery.data,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  galleryActions: bindActionCreators(galleryActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
