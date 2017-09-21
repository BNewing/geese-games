import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div `
  background-color: #FF9A35;
`

const Image = styled.div `
  text-transform: uppercase;
  background: url('https://thumb7.shutterstock.com/display_pic_with_logo/4028569/633482957/stock-photo-a-feral-goose-at-a-park-in-redding-california-he-and-his-mate-try-to-intimidate-humans-into-633482957.jpg');
  background-position: center bottom;
  height: 300px;
  width: 100%;
`

const HeaderTextWrapper = styled.div `
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
`

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Image></Image>
      	<HeaderTextWrapper>
      		<h1>Geese Games</h1>
      	</HeaderTextWrapper>
      </Wrapper>
    );
  }
}
