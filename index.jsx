import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from './src/components/Badge/index'
import Banner from './src/components/Banner/index'
import Card from './src/components/Card/index'
import Testimonial from './src/components/Testimonial/index'
import Tooltip from './src/components/Tooltip/index'
import image2 from "./src/assets/images/craig.png";


function App() {
  /**
   * TEXT OPTIONS FOR ALL COMPONENTS:
   * You can edit the below text declarations for the specified component
   * if values are left undefined, default text will be generated
   */

  /**
   * TOOLTIP
   */
  const titleToolTip = "";
  const bodyTextToolTip = "";

  /**
   * BADGE
   * Colors: gray, red, yellow, green, blue, indigo, purple, pink -- if left undefined, the default color will be 'green'
   * Type: square, pill  -- if left undefined, the default type will be 'Square'
   */
  const colorBadge = "";
  const textBadge = "";
  const typeBadge = "";

  /**
   * BANNER
   */
  const textBanner = "";

  /**
   * CARD
   */
  const titleTextCard = "";
  const bodyTextCard = "";

  /**
   * TESTIMONIAL
   * img: can test an alt image by using image2 (without quotes around it)
   */
  const imgTestimonial = null;
  const textTestimonial = "";
  const textNameTestimonial = "";
  const textWorkTitleTestimonial = "";

  return (
    <>
      <h3>Tooltip</h3>
      <Tooltip titleText={titleToolTip} bodyText={bodyTextToolTip}>
        <Tooltip.Element />
      </Tooltip>

      <h3>Badge</h3>
      <Badge color={colorBadge} text={textBadge} type={typeBadge}>
        <Badge.Element />
      </Badge>

      <h3>Banner</h3>
      <Banner text={textBanner}>
        <Banner.Text />
        <Banner.Element varient="success" />
        <Banner.Element varient="warning" />
        <Banner.Element varient="error" />
        <Banner.Element varient="neutral" />
      </Banner>

      <h3>Card</h3>
      <Card titleText={titleTextCard} bodyText={bodyTextCard}>
        <Card.Element />
      </Card>

      <h3>Testimonial</h3>
      <Testimonial
        image={imgTestimonial}
        text={textTestimonial}
        name={textNameTestimonial}
        workTitle={textWorkTitleTestimonial}
      >
        <Testimonial.Element />
      </Testimonial>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
