import { Autocomplete, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from "@mui/material"
import { useState, useMemo, useEffect } from "react"

const tourCategory = [
  { Attraction: 'Attraction' },
  { Restaurant: 'Restaurant' },
  { Hotel: 'Hotel' },
]
export default function FormHeader() {

  const [photo, setPhoto] = useState({});
  const [name, setName] = useState({});
  const [lokal, setLokal] = useState({});
  const [category, setCategory] = useState('');
  const [adsress, setAddress] = useState({});
  // const [tour, setTour] = useState({});
  // const [price, setPrice] = useState('');
  const getValue = async () => {


    const url =
      "https://travel-advisor.p.rapidapi.com/locations/search?query=toronto&limit=30&lang=en_US&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US";

    // const url =
    //   "https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=km&sort=recommended";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "21b1fe863amsh2c0dda7615f4e4dp1f1e1bjsna2b768a014a5",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
        const photoUrls = result.data.map(
          (item) => item.rezult_object?.photo?.images?.large?.url
        );
        const nameUrl = result.data.map(
          (item) => item.rezult_object?.name
        );
        const lokalUrl = result.data.map(
          (item) => item.rezult_object?.lokation_string
        );
        const categoryUrl = result.data.map(
          (item) => item.rezult_object?.category?.name
        );
        const addressUrl = result.data.map(
          (item) => item.rezult_object?.address_obj?.address
        );
        // const priceUrl = result.data.map((item) => {
        //   if (
        //     item &&
        //     item.offer_group &&
        //     item.offer_group.lowest_price
        //   ) {
        //     return item.offer_group.lowest_price;
        //   } else {
        //     return null; 
        //   }
        // });
    
        console.log(photoUrls);
        setPhoto(photoUrls);
        console.log(nameUrl);
        setName(nameUrl);
        console.log(lokalUrl);
        setLokal(lokalUrl);
        console.log(categoryUrl);
        setCategory(categoryUrl);
        console.log(addressUrl);
        setAddress(addressUrl);
        // console.log(priceUrl);
        // setPrice(priceUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      getValue();
    }, []);

  const [searchData, setSearchData] = useState('')
  const selectedValues = useMemo(
    () => tourCategory.filter((v) => v.label === searchData),
    [searchData],
  );
  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (searchData) {
      console.log(searchData);
    }
  }

  return (
    <form className="complex_input" onSubmit={onSubmitHandler}>
     
      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={price}
          label="Price"
          onChange={(event) => setPrice(event.target.value)}
        >
          <MenuItem value={10}>0-40</MenuItem>
          <MenuItem value={20}>41-300</MenuItem>
        </Select>
      </FormControl>

      <Autocomplete
        freeSolo
        id="combo-box-demo-price"
        options={tourType}
        sx={{ width: 300 }}
        onChange={(_, newValue) => setSearchData(newValue)}
        renderInput={(params) => <TextField {...params} label="Type" />}
        
      /> */}


      <button className="search_header_button" type="submit">search</button>
    </form>
  )
}

{/* <div className="select_container">
<i className="fa-solid fa-location-dot"></i>
<input className="select_item" name="name_item" id="name_item" required>
</input>
</div>
<div className="select_container">
<i className="fa-regular fa-user"></i>
<select className="select_item" name="type" id="type" required>
    <option value="" selected disabled>type</option>
</select>
</div>
<button className="search" type="button">search</button> */}