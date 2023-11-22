import { Autocomplete, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from "@mui/material"
import { useState, useMemo, useEffect } from "react"

const tourType = [
  { label: '0-40$' },
  { label: '41-300$' },
  { label: '301-700$' },
  { label: '701-1500$' },
]
export default function FormHeader() {

  const [photo, setPhoto] = useState({});
  const [name, setName] = useState({});
  const [tour, setTour] = useState({});
  const [price, setPrice] = useState('');
  const getValue = async (retryCount = 0) => {

    console.log('куку');

    const url =
      "https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=km&sort=recommended";

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

     
      if (response.status === 429) {
        if (retryCount < 3) {
          const waitTime = 5000;
          console.log(`Rate limited. Retrying in ${waitTime / 1000} seconds...`);
          setTimeout(() => getValue(retryCount + 1), waitTime);
          return;
        } else {
          console.error("Exceeded maximum retry attempts. Aborting.");
        }
      }
    
      if (result.data) {
        const photoUrls = result.data.map(
          (item) => item.photo?.images?.large?.url
        );
        const nameUrl = result.data.map(
          (item) => item.name
        );
        const priceUrl = result.data.map(
          (item) => item.offer_group?.offer_list?.item[0]?.rounded_up_price
        );
    
        console.log(photoUrls);
        setPhoto(photoUrls);
        console.log(nameUrl);
        setName(nameUrl);
        console.log(priceUrl);
        setPrice(priceUrl);
      } else {
        console.error('No data in the API response');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      getValue();
    }, []);

  const [searchData, setSearchData] = useState('')
  const selectedValues = useMemo(
    () => tourType.filter((v) => v.label === searchData),
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
     
      <FormControl fullWidth>
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
          <MenuItem value={30}>301-700</MenuItem>
          <MenuItem value={30}>701-1500</MenuItem>
        </Select>
      </FormControl>

      <Autocomplete
        freeSolo
        id="combo-box-demo-price"
        options={tourType}
        sx={{ width: 300 }}
        onChange={(_, newValue) => setSearchData(newValue)}
        renderInput={(params) => <TextField {...params} label="Type" />}
        
      />


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