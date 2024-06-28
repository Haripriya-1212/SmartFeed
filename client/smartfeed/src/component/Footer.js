import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background: #bfbfbf;
  text-align: center;

  p {
    color: black; /* Ensure p text color is black */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024, Working towards improving your experience!</p>
    </FooterContainer>
  );
};

export default Footer;