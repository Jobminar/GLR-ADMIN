import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import math from '../../assets/images/math.png'
import vector from '../../assets/images/Vector.png'
import development from '../../assets/images/dev.png'
import marketing from '../../assets/images/marketing.png'
import web from '../../assets/images/web.png'
import business from '../../assets/images/business.png'
import './gallery.css'

const itemData = [
  {
    img: math,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: vector,
    title: "workshop2",
  },
  {
    img: development,
    title: "workshop3",
  },
  {
    img: marketing,
    title: "workshop4",
    cols: 2,
  },
  {
    img: web,
    title: "workshop5",
    cols: 2,
  },
  {
    img: web,
    title: "workshop6",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: business,
    title: "Basketball",
  },
  {
    img: marketing,
    title: "Fern",
  },
 

];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  return (
    <div className="gallery-main">
    <h1 className="gallery-head">Gallery</h1>
     <ImageList
      sx={{ width: "100%", height: "100%" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    
    </div>
     );
}
