import React from "react";
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import "./LastTournament.css";
import IMG1 from "../../assets/imgGalery1.JPG";
import IMG2 from "../../assets/imgGalery2.JPG";
import IMG3 from "../../assets/imgGalery3.JPG";

export default function LastTournament() {
  const itemData = [
    {
      img: IMG1,
      title: "Fotka z posledního turnaje č.1",
    },
    {
      img: IMG2,
      title: "Fotka z posledního turnaje č.2",
    },
    {
      img: IMG3,
      title: "Fotka z posledního turnaje č.3",
    },
  ];

  // Use the useMediaQuery hook to check for mobile screen sizes
  // Adjust the query according to your needs. This example uses 600px as a breakpoint for mobile devices.
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <section id="lastTournament">
      <h5>Our last accomplishments</h5>
      <h2>Last Tournament</h2>
      <div className="container imageList_container">
        <ImageList variant="quilted" cols={matches ? 1 : 3} gap={24}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: 20, maxHeight: 550, width: "100%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
  );
}
