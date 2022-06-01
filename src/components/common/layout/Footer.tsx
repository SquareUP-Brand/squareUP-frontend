import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-size: 0.6em;
  padding: 0.5em;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Line = styled.p`
  margin-block: 0;
  padding: 0 1em;
`;

const Footer = () => (
  <FooterContainer>
    <Line>
      For all shipping concerns or inquiries, please contact ArtofPlay at
      {' '}
      <a href="mailto:fullfillment@artofplay.com">fullfillment@artofplay.com</a>
    </Line>
    <Line>
      For all other contact inquiries, please contact
      {' '}
      <a href="mailto:squareupbrand@gmail.com">squareupbrand@gmail.com</a>
    </Line>
  </FooterContainer>
);

export default Footer;
