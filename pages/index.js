import React from 'react';
import Page from '../components/page';
import ArticleList from '../components/article-list';
import { LinkText } from '../components/typography';
import WhatIsThis from '../components/what-is-this';
import ContentContainer from '../components/content-container';

const Home = () => (
  <Page title="security.christmas">
    <ArticleList year="2018" />
    <ContentContainer>
      <WhatIsThis />
    </ContentContainer>
    <footer>
      <ContentContainer>
        Looking for last year's edition?{' '}
        <LinkText href="/year?year=2017" as="/2017">
          Go here
        </LinkText>
      </ContentContainer>
    </footer>
  </Page>
);

export default Home;
