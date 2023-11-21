
import { useState, useEffect } from 'react';

// const url = 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng';

export default function Grida() {
  const [photo, setPhoto] = useState({});
  const [name, setName] = useState({});
  // const [attractions, setAttractions] = useState({});
  const getData  = async () => {
    const url =
      "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=109.19553&latitude=12.235588&lunit=km&currency=USD&lang=en_US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "405ccbe9d4mshe8fab5fa4dec266p1e9552jsn6e02b329382c",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const photoUrls = result.data.map(
        (item) => item.photo?.images?.large?.url
      );
      const nameUrl = result.data.map(
        (item) => item.name
      );
      console.log(photoUrls);
      setPhoto(photoUrls);
      console.log(nameUrl);
      setName(nameUrl);

    } catch (error) {
      console.error(error);
    }
  };
  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   const attractionsData = result.data.map((item) => ({
  //     imageUrl: item.photo?.images?.large?.url,
  //     name: item.name
  //   }));
  //   console.log(attractionsData);
  //   setAttractions(attractionsData);
  // } catch (error) {
  //   console.error(error);
  // }
  // };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="grid_section">
      <div className="section_main_text_wrapper">
        <h3 className="section_name">Explore Destinations</h3>
        <span className="section_little_text">
          Find inspiration for your next adventure. See our diverse selection
          of destinations, from idyllic beaches to vibrant cityscapes.
        </span>
      </div>
      <div className="grid">
        <div className="g1 box">
          <img className="grid_img" src={photo[4]} />
            <span className="attraction_name">{name[4]}</span>
        </div>
        <div className="g2 box">
          <img className="grid_img" src={photo[24]} />
            <span className="attraction_name">{name[24]}</span>
  
        </div>
        <div className="g3 box">
          <img className="grid_img" src={photo[1]} />

            <span className="attraction_name">{name[1]}</span>
     
        </div>
        <div className="g4 box">
          <img className="grid_img" src={photo[22]} />

            <span className="attraction_name">{name[22]}</span>

        </div>
        <div className="g5 box">
          <img className="grid_img" src={photo[18]} />

            <span className="attraction_name">{name[18]}</span>
   
        </div>
      </div>
    </section>
    //     <Container>
    //     <Grid container spacing={2}>
    //   <Grid item xs={8}> />
    //   </Grid>
    //   <Grid item xs={4}>
    //   <img src={photo[23]} />
    //   </Grid>
    //   <Grid item xs={3}>
    //   <img src={photo[23]} />
    //   </Grid>
    //   <Grid item xs={6}>
    //   <img src={photo[23]} />
    //   </Grid>
    //   <Grid item xs={3}>
    //   <img src={photo[23]} />
    //   </Grid>
    // </Grid>
    // </Container>
  )
}

