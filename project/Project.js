import "./styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Project() {
  return (
    <div className="main_box">
      {/* first half */}
        <div className="subbox1">
          <h1>our happy customer</h1>
          <div className="customer">
            here are what our thousands our customer customer
          </div>
          <strong>Excellent</strong>
          <p>based on 768 reviews</p>
        </div>

{/* //second half */}

   

        <div className="subbox2">
 <Carousel autoPlay={true}  axis={"vertical"}>
<div className="submain">
<h3>mart gardner was knowledgetree</h3>
mart gardner was knowlagable about medicare maketplace and In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as

</div>
<div className="submain">
<h3>mart gardner was knowledgetree</h3>
mart gardner was knowlagable about medicare maketplace and In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as

</div>
</Carousel>
        </div>
    </div>
  );
}
