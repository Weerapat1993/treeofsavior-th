import React from 'react'

class GalleryItem extends React.Component {
  handleClick(id) {
    const check = confirm('Are you sure ?')
    if(check) {
      this.props.deleteGallery(id)
    }
  }

  render() {
    const { data } = this.props
    const headingStyle = {
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }
    return (
      <div className='col-md-3 col-sm-6 col-xs-12'>
        <div className="panel panel-default">
          <div className="panel-heading">
            <div style={headingStyle}>
              <span>
                { data.name }
              </span>
              <span>
                <a className="btn btn-xs btn-success" href={data.url} download ><i className="fa fa-download"></i></a> 
                <a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a> 
                <a className="btn btn-xs btn-danger" onClick={() => this.handleClick(data.id)} ><i className="fa fa-trash"></i></a> 
              </span>
            </div>
            
          </div>
          <div className="text-center">
            <a href="#">
              <img src={data.url} className='img-responsive' alt=''/>
            </a>
          </div>
          <div className="panel-body">
            Test Component
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryItem