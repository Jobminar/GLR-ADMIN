import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import math from '../../assets/images/math.png'
import vector from '../../assets/images/Vector.png'
import development from '../../assets/images/dev.png'
import marketing from '../../assets/images/marketing.png'
import web from '../../assets/images/web.png'
import business from '../../assets/images/business.png'

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
  {
    img: development,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: web,
    title: "Tomato basil",
  },
  {
    img: vector,
    title: "Sea star",
  },
  {
    img: business,
    title: "Bike",
    cols: 2,
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
  );
}
