
import { useState, useEffect } from 'react';

// const url = 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng';

export default function Grida() {
  const [photo, setPhoto] = useState({});
  const [name, setName] = useState({});
  // const [attractions, setAttractions] = useState({});
  const getData  = async (retryCount = 0) => {
    const url =
      "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=109.19553&latitude=12.235588&lunit=km&currency=USD&lang=en_US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "91da9aa27dmsh0e84e116373f303p16c0aajsnab04bc4070bf",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (response.status === 429) {
        if (retryCount < 3) {
          const waitTime = 5000;
          console.log(`Rate limited. Retrying in ${waitTime / 1000} seconds...`);
          setTimeout(() => getData(retryCount + 1), waitTime);
          return;
        } else {
          console.error("Exceeded maximum retry attempts. Aborting.");
        }
      }


      if (result.data) {
        const photoUrls = result.data.map((item) => item.photo?.images?.large?.url);
        const nameUrl = result.data.map((item) => item.name);
        console.log(photoUrls);
        setPhoto(photoUrls);
        console.log(nameUrl);
        setName(nameUrl);
      } else {
        console.error("Data is false or not in the expected format:", result);
      }

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
  )
}

