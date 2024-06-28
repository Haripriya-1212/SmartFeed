import React from 'react';
import styled from 'styled-components';
const Section = styled.section`
  padding: 3rem 1rem;
`;

const ContentHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;


const Card = styled.div`
  background: rgba(191, 191, 191);
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  width: calc(31% - 1rem);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

   h3 {
    color: black; /* Ensure h3 text color is black */
  }

  p {
    color: black; /* Ensure p text color is black */
  }
`;

const ContentSection = () => {
  return (

    <Section>
      <ContentHeader>Experience The Extraordinary</ContentHeader>
      <CardsContainer>
        <Card>
          <h3>Advanced Personalization</h3>
          <p className='text'>Utilizes sophisticated algorithms to deliver news content tailored to your unique interests and reading habits.</p>
        </Card>
        <Card>
          <h3>Bookmarks</h3>
          <p>Allows you to save and organize articles for future reference, making it easy to keep track of important or interesting content.</p>
        </Card>
        <Card>
          <h3>Real-Time Updates</h3>
          <p>Ensures you receive the latest news and breaking updates as soon as they are published.</p>
        </Card>
      </CardsContainer>
    </Section>
  );
};

export default ContentSection;