import React from 'react';
import { ImageList, ImageListItem } from '@material-ui/core'
import './ShowGrid.css';

const ShowGrid = (props) => {
  return (
    <div>
    {
      <ImageList cols={5} rowHeight={300} >
        {props.productData && props.productData.map((item) => (
          <ImageListItem className="listItem" spacing={10} key={item.image_link}>
              <img
                src={`${item.image_link}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.image_link}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                className="itemImage"
              />
              <div className="itemTitleWrap">
                <p className="itemTitle">{item.name}</p>
                <p>{item.brand}</p>
              </div>
          </ImageListItem>
        ))}
      </ImageList>
    }
    </div>
  )
}

export default ShowGrid;