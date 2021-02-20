import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays ∙ 26 august to 30th august ∙ 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility </Button>
        <Button variant="outlined">Type of place </Button>
        <Button variant="outlined">Price </Button>
        <Button variant="outlined">Rooms and beds </Button>
        <Button variant="outlined">More filters </Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest ∙ 1 bedroom ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Kitchen ∙ Free Parking ∙ Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />
      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room in center of London"
        title="Independent luxury studio apartment"
        description="2 guests ∙ 3 bedrooms ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Kitchen"
        star={4.3}
        price="£40 / night"
        total="£157 total"
      />
      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guests ∙ 4 bedrooms ∙ 4 beds ∙ 2 bathrooms ∙ Free parking ∙ Washing Machine"
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/f334f12e-92ac-46cd-868c-31b8b30142c1.jpg?im_w=1200"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest ∙ 1 bedroom ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Kitchen ∙ Free parking ∙ Washing Machine"
        star={4.1}
        price="£55 / night"
        total="£320 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/758ba76d-30c7-42b6-bdd9-0545a58e7fea.jpg?im_w=1200"
        location="Private room in center of London"
        title="The Blue Room in London"
        description="2 guests ∙ 1 bedroom ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Washing Machine"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room in center of London"
        title="5 star Luxury Apartment"
        description="3 guests ∙ 1 bedroom ∙ 1 bed ∙ 1.5 shared bathrooms ∙ Wifi ∙ Kitchen ∙ Free parking ∙ Washing Machine"
        star={3.85}
        price="£90 / night"
        total="£650 total"
      />
    </div>
  );
}

export default SearchPage;
