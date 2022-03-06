import PostSummaryList from "../PostSummaryList/index";
import React from "react";

const ExploreComponent = () => {
  return (
    <>
      {/* <!-- search field and cog --> */}
      <div className="row row-sm row-xxl row-xl row-lg row-md">


        <div className="col-11 ">
          <div className="form "> <i className="fa fa-search "/> <input type="text" className="form-control form-input"
            placeholder="Search Twitter"/> <span className="left-pan"></span> </div>
        </div>

        <div className="col-1 my-auto wd-gearicon">
          <i className="fa-solid fa-gear fa-2x wd-imagesm" style={{color: '#0d6efd'}}/>
        </div>

      </div>

     {/*  <!-- navigation  --> */}
      <div className="wd-mx-2-custom">
        <div className="row mt-2  ">
          <ul className="nav nav-tabs  ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#for-you.html">For you</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#trending.html">Trending</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news.html">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sports.html">Sports</a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#entertainment.html">Entertainment</a>
            </li>
          </ul>
        </div>

       {/*  <!-- starship image --> */}
        <div className="row wd-img-size-starship mt-2 wd-pb">
          <img className="img-fluid"
            src={'https://static.tweaktown.com/news/8/4/84438_01_elon-musk-giving-update-on-spacexs-starship-mars-rocket-thursday.jpg'} alt="starship" />
          <div className="text text-sm"><span><strong>SpaceX's Starship</strong></span></div>

        </div>

        {/* <!-- list begin --> */}
        <div className="row list-group wd-mx-1-custom">
          <PostSummaryList />
        </div>


      </div>
    </>
  );
}
export default ExploreComponent;