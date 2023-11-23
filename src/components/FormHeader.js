import { TextField, FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import TourList from "./TourList";

export default function FormHeader() {
  const [formData, setFormData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [inputData, setInputData] = useState('');

  // const handleInputChange = async (event) => {
  //   setSearchData(event.target.value)
  //   const url = `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${event.target.value}&lang=en_US&units=km`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '93db34e6admsh559889a966b871ep1e9b7ajsnffaa82ddb7ba',
  //       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  //     }
  //   }
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   };


  const getValue = async () => {
    const url = `https://travel-advisor.p.rapidapi.com/locations/search?query=${searchData}&limit=30&lang=en_US&offset=0&location_id=1&sort=relevance&lang=en_US`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "93db34e6admsh559889a966b871ep1e9b7ajsnffaa82ddb7ba",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
      }
    };


    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const tours = result.data.map((item) => ({
        photo: item.result_object?.photo?.images?.large?.url || '',
        name: item.result_object?.name || '',
        lokal: item.result_object?.location_string || '',
        category: item.result_object?.category?.name || '',
        address: item.result_object?.address_obj?.address || '',
      }));
      setFormData(tours);
    } catch (error) {
      console.error(error);
    }
  };


  const onSubmitHandler = (event) => {
    event.preventDefault();
    getValue();
  };
  

  return (
    <div>
      <form className="complex_input" onSubmit={onSubmitHandler}>
        <FormControl fullWidth >
          <TextField id="standard-search"
            type="search"
            variant="standard"
            required
            placeholder="Write down the city"
            value={searchData}
            onChange={e => setSearchData(e.target.value)}
          />
        </FormControl>

        <button  className="search_header_button" type="submit">search</button>


      </form>
      <div className="tour-list-container">
        <TourList data={formData} />
      </div>
    </div>
  );
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