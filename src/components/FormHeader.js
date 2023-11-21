import { Autocomplete, TextField } from "@mui/material"
import { useState, useMemo, useEffect } from "react"

const tourPrice =[
    { label: '0-40$'},
      {  label: '41-300$'},
       { label: '301-700$'},
      {  label: '701-1500$'},
]
export default function FormHeader() {

    const [photo, setPhoto] = useState({});
    const [name, setName] = useState({});
    const [price, setPrice] = useState({});
    const getValue  = async () => {
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

  
      } catch (error) {
        console.error(error);
      }
    };

    // useEffect(() => {
    //     getValue();
    //   }, []);

    const [searchData, setSearchData] = useState('')
    const selectedValues = useMemo(
        () => tourPrice.filter((v) => v.label === searchData),
        [searchData],
        );
    const onSubmitHandler =(e) =>{
        e.preventDefault()

        if (searchData){
            console.log(searchData);
        }
    }

    return (
        <form className="complex_input" onSubmit={onSubmitHandler}>
            {/* <Autocomplete
                disablePortal
                id="combo-box-demo-tours"
                options={tourTypes}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="type" />}
            /> */}

            <Autocomplete
                disablePortal
                id="combo-box-demo-price"
                options={tourPrice}
                sx={{ width: 300 }}
                onChange={(_, newValue) => setSearchData(newValue)}
                renderInput={(params) => <TextField {...params} label="Price" />}
            />
        <button className="search" type="submit">search</button>
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