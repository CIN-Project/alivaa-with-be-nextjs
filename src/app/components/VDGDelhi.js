<div className="container">
        <h3 className="h7 inline-block">tags:</h3>

        <div className="comments mt4 border border-grey">
          <p className="p2 border border-grey">
            <amp-img src="/images/comment-icon.png" width="20" height="20" alt="comment icon" className="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout p-1" i-amphtml-layout="fixed" style={{width: "20px", height: "20px"}} >
            <img decoding="async" alt="comment icon" src="/images/comment-icon.png" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>
            <span className="inline-block pl2 p-4">
              Comments
            </span>
          </p>
		    <div className="comments-form border-left border-right border-bottom border-grey p-4">
            <h4 className="h3">Leave a Reply</h4>
            <p className="mb2">Your email address will not be published.</p>
            <form method="POST" action-xhr="https://www.alivaahotels.com/blog/test.php" custom-validation-reporting="show-all-on-submit" className="i-amphtml-form">
			  <input type="hidden" name="post_id" value="6"/>
              <input className="mb-2 ml-auto col-12" type="text" name="name" id="show-all-on-submit-name" placeholder="Name" required="" pattern="\p{L}+\s\p{L}+" />

                <span visible-when-invalid="valueMissing" validation-for="show-all-on-submit-name"></span>
                {/* <span visible-when-invalid="patternMismatch" validation-for="show-all-on-submit-name">
                  Enter First and last name seperated by space
                </span> */}

              <input className="mb-2 ml-auto col-12" type="email" name="email" placeholder="Email" required="" id="show-all-on-submit-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                <span visible-when-invalid="valueMissing" validation-for="show-all-on-submit-email"></span>
                <span visible-when-invalid="typeMismatch" validation-for="show-all-on-submit-email">
                </span>
                {/* <span visible-when-invalid="patternMismatch" validation-for="show-all-on-submit-email">Invalid Email</span> */}

              <textarea className="p-2 mt-1" name="comment" id="show-all-on-submit-comment" cols="58" rows="10" style={{resize:"none",width:"100%"}} placeholder="Comment"></textarea>
              <span visible-when-invalid="valueMissing" validation-for="show-all-on-submit-comment"></span>
              <span className="center-btn">
              <button style={{marginLeft: "250px", width: "100px"}}name="submit" className="contactSubmit ml-3 mr-3" type="submit" id="contact-submit">Submit</button>
              </span>
              
              {/* <div submit-success="">
                <template type="amp-mustache">
                  <h4 className="text-success">Comment Saved!</h4>
                </template>
              </div>
              <div submit-error="">
                <template type="amp-mustache">
                  Error!
                </template>
              </div> */}
            </form>
          </div>
          
        </div>

        <div className="mt3 py3  items-start">
          <div className="row">
          <div className="col-12 pb3">
            <h3 className="h3">Related Posts</h3>
          </div>
            <div className="col-4">
            <a href="https://www.alivaahotels.com/blog/places-to-visit-in-gurgaon.html">
              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="/images/blog/blog-expensive-hotel.jpg" srcSet="/images/blog/blog-expensive-hotel.jpg" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn"  i-amphtml-layout="responsive">
              <i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>
                <div placeholder="" className="commerce-loader amp-hidden"></div>      
              <img decoding="async" sizes="(max-width: 1163px) 232px, 100vw" alt="No sleep 'til Brooklyn" src="/images/blog/blog-expensive-hotel.jpg" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>

              <h4 className="h7 mb2">must-see places in gurgaon: a guide to the city's highlights</h4>
            </a>
          </div>
		    <div className="col-4 ">
            <a href="https://www.alivaahotels.com/blog/best-hotel-deals-in-gurugram.html">
              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="/images/blog/blog-hotels.jpg" srcSet="/images/blog/blog-hotels.jpg" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive">
              <i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>
                <div placeholder="" className="commerce-loader amp-hidden"></div>      
              <img decoding="async" sizes="(max-width: 1163px) 232px, 100vw" alt="No sleep 'til Brooklyn" srcSet="/images/blog/blog-hotels.jpg" src="/images/blog/blog-hotels.jpg" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>

              <h4 className="h7 mb2">finding the best hotel deals in gurugram</h4>
            </a>
          </div>
		                <div className="col-12 md-col-4 pr2">
            <a href="https://www.alivaahotels.com/blog/best-hotels-near-sector-45.html">
              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="./admin/assets/img/post/image_2024-09-27-06-22-37_66f64f2d849a9.jpg" srcSet="./admin/assets/img/post/image_2024-09-27-06-22-37_66f64f2d849a9.jpg 750w,./admin/assets/img/post/image_2024-09-27-06-22-37_66f64f2d849a9.jpg 1280w" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive"><i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>
                <div placeholder="" className="commerce-loader amp-hidden"></div>      
              <img decoding="async" sizes="(max-width: 1163px) 232px, 100vw" alt="No sleep 'til Brooklyn" srcSet="./admin/assets/img/post/image_2024-09-27-06-22-37_66f64f2d849a9.jpg 750w,./admin/assets/img/post/image_2024-09-27-06-22-37_66f64f2d849a9.jpg 1280w" src="./admin/assets/img/post/image_2024-09-27-06-22-37_66f64f2d849a9.jpg" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>

              <h4 className="h7 mb2">finding the best hotels near sector 45, gurgaon: a complete guide</h4>
            </a>
          </div>
		                <div className="col-12 md-col-4 pr2">
            <a href="https://www.alivaahotels.com/blog/restaurants-near-huda-city-centre.html">
              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="./admin/assets/img/post/image_2024-09-27-10-23-06_66f6878aedc4f.avif" srcSet="./admin/assets/img/post/image_2024-09-27-10-23-06_66f6878aedc4f.avif 750w,./admin/assets/img/post/image_2024-09-27-10-23-06_66f6878aedc4f.avif 1280w" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive"><i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>
                <div placeholder="" className="commerce-loader amp-hidden"></div>      
              <img decoding="async" sizes="(max-width: 1163px) 232px, 100vw" alt="No sleep 'til Brooklyn" srcSet="./admin/assets/img/post/image_2024-09-27-10-23-06_66f6878aedc4f.avif 750w,./admin/assets/img/post/image_2024-09-27-10-23-06_66f6878aedc4f.avif 1280w" src="./admin/assets/img/post/image_2024-09-27-10-23-06_66f6878aedc4f.avif" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>

              <h4 className="h7 mb2">discover restaurants near huda city centre</h4>
            </a>
          </div>
		                <div className="col-12 md-col-4 pr2">
            <a href="https://www.alivaahotels.com/blog/hotel-near-medanta-hospital-gurgaon.html">
              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="./admin/assets/img/post/image_2024-11-27-09-52-02_6746ebc2541f9.jpg" srcSet="./admin/assets/img/post/image_2024-11-27-09-52-02_6746ebc2541f9.jpg 750w,./admin/assets/img/post/image_2024-11-27-09-52-02_6746ebc2541f9.jpg 1280w" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive"><i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>
                <div placeholder="" className="commerce-loader amp-hidden"></div>      
              <img decoding="async" sizes="(max-width: 1163px) 232px, 100vw" alt="No sleep 'til Brooklyn" srcSet="./admin/assets/img/post/image_2024-11-27-09-52-02_6746ebc2541f9.jpg 750w,./admin/assets/img/post/image_2024-11-27-09-52-02_6746ebc2541f9.jpg 1280w" src="./admin/assets/img/post/image_2024-11-27-09-52-02_6746ebc2541f9.jpg" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>

              <h4 className="h7 mb2">hotel near medanta hospital, gurgaon</h4>
            </a>
          </div>
		                <div className="col-12 md-col-4 pr2">
            <a href="https://www.alivaahotels.com/blog/new-year-celebration-gurgaon.html">
              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="./admin/assets/img/post/image_2024-11-28-08-08-23_674824f77d707.jpg" srcSet="./admin/assets/img/post/image_2024-11-28-08-08-23_674824f77d707.jpg 750w,./admin/assets/img/post/image_2024-11-28-08-08-23_674824f77d707.jpg 1280w" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive"><i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>
                <div placeholder="" className="commerce-loader amp-hidden"></div>      
              <img decoding="async" sizes="(max-width: 1163px) 232px, 100vw" alt="No sleep 'til Brooklyn" srcSet="./admin/assets/img/post/image_2024-11-28-08-08-23_674824f77d707.jpg 750w,./admin/assets/img/post/image_2024-11-28-08-08-23_674824f77d707.jpg 1280w" src="./admin/assets/img/post/image_2024-11-28-08-08-23_674824f77d707.jpg" className="i-amphtml-fill-content i-amphtml-replaced-content"/></amp-img>

              <h4 className="h7 mb2">celebrate the new year in luxury at alivaa hotels, gurgaon</h4>
            </a>
          </div>
		                <div className="col-12 md-col-4 pr2">
            <a href="https://www.alivaahotels.com/blog/gurgaon-hotel-booking.html">
              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="./admin/assets/img/post/image_2025-01-02-11-33-53_677679a15fd60.jpg" srcSet="./admin/assets/img/post/image_2025-01-02-11-33-53_677679a15fd60.jpg 750w,./admin/assets/img/post/image_2025-01-02-11-33-53_677679a15fd60.jpg 1280w" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive"><i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>
                <div placeholder="" className="commerce-loader amp-hidden"></div>      
              <img decoding="async" sizes="(max-width: 1163px) 232px, 100vw" alt="No sleep 'til Brooklyn" srcSet="./admin/assets/img/post/image_2025-01-02-11-33-53_677679a15fd60.jpg 750w,./admin/assets/img/post/image_2025-01-02-11-33-53_677679a15fd60.jpg 1280w" src="./admin/assets/img/post/image_2025-01-02-11-33-53_677679a15fd60.jpg" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>

              <h4 className="h7 mb2">gurgaon hotel booking: tips for finding the best stay</h4>
            </a>
          </div>
		                <div className="col-12 md-col-4 pr2">
            <a href="https://www.alivaahotels.com/blog/gurgaon-hotel-booking.html">
              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="./admin/assets/img/post/image_2025-01-27-07-31-32_679736543b8e3.jpg" srcSet="./admin/assets/img/post/image_2025-01-27-07-31-32_679736543b8e3.jpg 750w,./admin/assets/img/post/image_2025-01-27-07-31-32_679736543b8e3.jpg 1280w" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive"><i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>
                <div placeholder="" className="commerce-loader amp-hidden"></div>      
              <img decoding="async" sizes="(max-width: 1163px) 232px, 100vw" alt="No sleep 'til Brooklyn" srcSet="./admin/assets/img/post/image_2025-01-27-07-31-32_679736543b8e3.jpg 750w,./admin/assets/img/post/image_2025-01-27-07-31-32_679736543b8e3.jpg 1280w" src="./admin/assets/img/post/image_2025-01-27-07-31-32_679736543b8e3.jpg" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>

              <h4 className="h7 mb2">gurgaon hotel booking: your guide to finding the best stay</h4>
            </a>
          </div>
		 </div>
         </div>
      </div>