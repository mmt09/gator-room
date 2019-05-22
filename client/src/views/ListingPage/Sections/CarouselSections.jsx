import React from 'react';
import PropTypes, { object } from 'prop-types';

// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import carouselStyle from 'assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx';

function importAll(r) {
  const images = {};
  // eslint-disable-next-line
  r.keys().map(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
const images = importAll(require.context('../../../../../fileUpload', false, /\.(gif|jpe?g|svg)$/));

class CarouselSection extends React.Component {
  render() {
    const { classes, imageData } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {imageData.map(data => (
                    <div key={data.img}>
                      <img src={images[data.img]} alt="First slide" className="slick-image" />
                    </div>
                  ))}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

CarouselSection.propTypes = {
  classes: PropTypes.object.isRequired,
  imageData: PropTypes.arrayOf(object).isRequired,
};

export default withStyles(carouselStyle)(CarouselSection);
