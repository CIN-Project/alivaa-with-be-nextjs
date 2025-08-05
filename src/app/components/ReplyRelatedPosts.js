"use client";

import { useState } from "react";



const ReplyRelatedPosts = () => {


    const [formData, setFormData] = useState({

        UserId: "",

        name: "",

        email: "",

        subject: "",

        phone: "",

        message: ""

       })



       const [formErrors, setFormErrors] = useState({}); 

       const validateForm = () => {
        let validationErrors = {};
        if (!/^[a-zA-Z ]*$/.test(formData.name)) validationErrors.name = "Only alphabets are allowed.";
        if (!/^[0-9]*$/.test(formData.phone)) validationErrors.phone = "Only numbers are allowed.";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) validationErrors.email = "Only alpha numerics are allowed.";
        
        // if (!formData.email.includes("@")) validationErrors.name = "email must contain '@'.";
        // if (!formData.name) validationErrors.name = "Name is required.";
        if (!formData.name.trim()) validationErrors.name = "Name is required.";
        if (!formData.email) validationErrors.email = "Email is required.";
        if (!formData.subject.trim()) validationErrors.subject = "Subject is required.";
        if (!formData.phone.trim()) validationErrors.phone = "Phone is required.";
        if (!formData.message.trim()) validationErrors.message = "Message is required.";
        return validationErrors;
    };
       const handleInputChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        setFormErrors((prev) => ({ ...prev, [name]: "" })); // Clear error for the current field

      };

      const handleSubmit = (e) => {

        e.preventDefault();
        setFormErrors(null);

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setFormErrors((prev) => (validationErrors));
            return;
        }
      }


    return(

        <>

        <div className="container">

        <h3 className="h7 inline-block">tags:</h3>

        {/* <p id="keywords" className="inline-block">

					<a className="mr13" href="https://www.alivaahotels.com/blog/tags-tags.html">Tags</a>,  

		        </p> */}



        <div className="comments mt4 border border-grey">

          <p className="p2 border border-grey">

            <amp-img src="/images/comment-icon.png" width="20" height="20" alt="comment icon" className="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout p-1" i-amphtml-layout="fixed" style={{width: "20px", height: "20px"}} >

            <img decoding="async" alt="comment icon" src="/images/comment-icon.png" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>

            <span className="inline-block pl2 p-4">

              Comments

            </span>

          </p>

		    <div className="comments-form border-left border-right border-bottom border-grey p-4">

            <h4 style={{fontSize: "16px", textTransform: "uppercase"}}><strong><b>Leave a Reply</b></strong></h4>

            <p className="content-boxx">Your email address will not be published.</p>

            <form style={{fontSize: "14px",

    fontFamily: 'VERDANA',

    color: "#3b3b3b",

    fontWeight: "400",

    lineHeight: "24px"}} onSubmit={handleSubmit}  className="i-amphtml-form">

			  <input type="hidden" name="post_id" value="6"/>

              <input className="mb-2 ml-auto col-12" type="text" name="name"
              
              value={formData.name || ""} maxLength={100}

              onChange={handleInputChange} placeholder="Name"/>

{formErrors.name && <div className="text-danger">{formErrors.name}</div>}

                {/* <span visible-when-invalid="valueMissing" validation-for="show-all-on-submit-name"></span> */}

                {/* <span visible-when-invalid="patternMismatch" validation-for="show-all-on-submit-name">

                  Enter First and last name seperated by space

                </span> */}



              <input className="mb-2 ml-auto col-12" type="email" name="email" placeholder="Email" 
              maxLength={100} value={formData.email || ""}

              onChange={handleInputChange} />

                {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                {/* <span visible-when-invalid="valueMissing" validation-for="show-all-on-submit-email"></span>

                <span visible-when-invalid="typeMismatch" validation-for="show-all-on-submit-email">

                </span> */}

                {/* <span visible-when-invalid="patternMismatch" validation-for="show-all-on-submit-email">Invalid Email</span> */}


              <textarea style={{resize:"none",width:"100%"}} maxLength={1000} placeholder="Type your message here...." name="message" cols="58" rows="10"  id="show-all-on-submit-comment"

              value={formData.message || ""}

              onChange={handleInputChange}>
              </textarea>
              {formErrors.message && <div className="text-danger">{formErrors.message}</div>}

              {/* <textarea className="p-2 mt-1" name="comment" id="show-all-on-submit-comment" 
              
              value={formData.subject || ""}

              onChange={handleInputChange} cols="58" rows="10" style={{resize:"none",width:"100%"}} placeholder="Comment">
                
              </textarea>

              {formErrors.message && <div className="text-danger">{formErrors.message}</div>} */}
              {/* <span visible-when-invalid="valueMissing" validation-for="show-all-on-submit-comment"></span> */}

              <span className="center-btn">

              <button name="submit" className="blog-reply-submit-button" type="submit" id="contact-submit">Submit</button>

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



        <div className="mt-3 py-3  items-start">

          <div className="row" >

          <div className="col-12 pb-3">

            <h3 className="h4" style={{fontSize: "16px", textTransform: "uppercase"}}><b>Related Posts</b></h3>

          </div>

            <div className="col-lg-4">

            <a href="/places-to-visit-in-gurgaon">

              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="/images/blog/blog-expensive-hotel.jpg" srcSet="/images/blog/blog-expensive-hotel.jpg" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn"  i-amphtml-layout="responsive">

              <i-amphtml-sizer slot="i-amphtml-svc" ></i-amphtml-sizer>

                <div placeholder="" className="commerce-loader amp-hidden"></div>      

              <img src="/images/blog/hotel-deal.jpg"

        alt="Description of the image"

        width={270} 

        height={270}

        sizes="232px, 100vw"  className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>



              <h4 className="related-post-heading" >must-see places in gurgaon: a guide to the city's highlights</h4>

            </a>

          </div>

		    <div className="col-lg-4 ">

            <a href="/best-hotel-deals-in-gurugram">

              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="/images/blog/blog-hotels.jpg" srcSet="/images/blog/blog-hotels.jpg" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive">

              <i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>

                <div placeholder="" className="commerce-loader amp-hidden"></div>      

              <img src="/images/blog/night-life-gurgaon.jpg"

        alt="Description of the image"

        width={270} // Image width

        height={270} // Image height

        sizes="232px, 100vw" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>



              <h4 className="related-post-heading">finding the best hotel deals in gurugram</h4>

            </a>

          </div>

		                <div className="col-lg-4">

            <a href="/best-hotels-near-sector-45">

              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="./admin/assets/img/post/image_2024-09-27-06-22-37_66f64f2d849a9.jpg" srcSet="./admin/assets/img/post/image_2024-09-27-06-22-37_66f64f2d849a9.jpg 750w,./admin/assets/img/post/image_2024-09-27-06-22-37_66f64f2d849a9.jpg 1280w" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive"><i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>

                <div placeholder="" className="commerce-loader amp-hidden"></div>      

              <img src="/images/blog/ultimate-guide.jpg"

        alt="Description of the image"

        width={270} // Image width

        height={270} // Image height

        sizes="232px, 100vw" style={{marginLeft: "5px"}} className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>



              <h6 className="related-post-heading">things to do in gurgaon: your ultimate guide</h6>

            </a>

          </div>

		                <div className="col-lg-4">

            <a href="/restaurants-near-huda-city-centre">

              <amp-img className="mb1 i-amphtml-element i-amphtml-layout-responsive i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" src="./admin/assets/img/post/image_2024-09-27-10-23-06_66f6878aedc4f.avif" srcSet="./admin/assets/img/post/image_2024-09-27-10-23-06_66f6878aedc4f.avif 750w,./admin/assets/img/post/image_2024-09-27-10-23-06_66f6878aedc4f.avif 1280w" width="750" height="427" layout="responsive" alt="No sleep 'til Brooklyn" noloading="" i-amphtml-layout="responsive"><i-amphtml-sizer slot="i-amphtml-svc" style={{paddingTop: "56.9333%"}}></i-amphtml-sizer>

                <div placeholder="" className="commerce-loader amp-hidden"></div>      

              <img decoding="async" src="/images/blog/celibrate-valentine.jpg"

        alt="Description of the image"

        width={270} // Image width

        height={270} // Image height

        sizes="(max-width: 1163px) 232px, 100vw" className="i-amphtml-fill-content i-amphtml-replaced-content" /></amp-img>



              <h4 className="related-post-heading">discover restaurants near huda city centre</h4>

            </a>

          </div>

		                

		                

		                

		              

		    </div>

       </div>

      </div>

        </>

    )

}

export default ReplyRelatedPosts;