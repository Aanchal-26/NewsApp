import React from 'react'

const NewsItem = (props) => {
 
    let {title,description,imageUrl,newsUrl,author,date,source} = props
    return (
      <>
      <div className = 'my-3'>
        <div className="card">
          <div style={ {display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:0,
          }
          }>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:1}}>
              {source}
              </span>
              </div>
         <img src={!imageUrl? "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0927%2Fr1392401_1296x729_16%2D9.jpg":imageUrl}/>
          <div className="card-body">
              <h5 className="card-title">{title}..</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-danger">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>

            <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
      </div>
      </>
    )
  }


export default NewsItem
