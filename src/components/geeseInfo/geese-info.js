import React, { Component } from 'react';

import Nav from '../common/nav';
import IntroText from './intro-text';
import GooseBox from './goose-box';
import Footer from '../common/footer';
import './geese-types.css';

export default class GeeseInfo extends Component {
  render() {
    return (
      <div>
      	<Nav />	
      	<div className="container">
        	<IntroText /> 
        	<GooseBox 
        		text="Canada Goose" 
        		image="https://thumb1.shutterstock.com/display_pic_with_logo/11724/634786370/stock-photo-canada-goose-family-at-richmond-bc-canada-634786370.jpg"
            alt="Canada Goose" />

      		<GooseBox 
      			text="Egyptian Goose"
      			image="https://thumb9.shutterstock.com/display_pic_with_logo/770932/625318562/stock-photo-egyptian-goose-alopochen-aegyptiacus-625318562.jpg"
            alt="Egyptian Goose" />

      		<GooseBox
      			text="Barnacle Goose"
      			image="https://thumb9.shutterstock.com/display_pic_with_logo/161300779/461700892/stock-photo-barnacle-goose-branta-leucopsis-barents-sea-coast-timan-tundra-russia-461700892.jpg"
            alt="Canada Goose"/>

      		<GooseBox
      			text="Greylag Goose"
      			image="https://thumb9.shutterstock.com/display_pic_with_logo/873577/555906772/stock-photo-greylag-goose-open-the-wings-on-the-water-surface-555906772.jpg"
            alt="Greylag Goose" />

      		<GooseBox
      			text="Chinese Goose"
      			image="https://thumb1.shutterstock.com/display_pic_with_logo/518803/271545113/stock-photo-chinese-goose-closeup-in-a-poultry-farm-271545113.jpg"
            alt="Chinese Goose" />

      		<GooseBox
      			text="Brent Goose"
      			image="https://thumb7.shutterstock.com/display_pic_with_logo/1699051/178187834/stock-photo-portrait-of-a-male-dark-bellied-brent-goose-the-netherlands-178187834.jpg"
            alt="Brent Goose"/>

      		<GooseBox
      			text="Pink Footed Goose"
      			image="https://thumb1.shutterstock.com/display_pic_with_logo/1149083/152223113/stock-photo-pink-footed-goose-anser-brachyrhynchus-scotland-spring-152223113.jpg"
            alt="Pink Footed Goose" />

      		<GooseBox
      			text="Greater White Fronted Goose"
      			image=" https://thumb7.shutterstock.com/display_pic_with_logo/517861/176951771/stock-photo-greater-white-fronted-goose-176951771.jpg"
            alt="Greater White Fronted Goose" />

      		<GooseBox
      			text="Bean Goose"
      			image="https://thumb9.shutterstock.com/display_pic_with_logo/2270711/187360778/stock-photo-bean-goose-187360778.jpg"
            alt="Canada Goose" />

      	</div>
      <Footer />
      </div>

    );
  }
}
