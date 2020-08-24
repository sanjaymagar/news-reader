import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grow, Grid, Typography } from '@material-ui/core';
import useStyles from './style';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  {
    color: '#1565c0',
    title: 'News by Categories',
    info:
      'Business, Entertainment, General, Health, Science, Sports, Technology',
    text: 'Give me the latest Technology news',
  },
  {
    color: '#4527a0',
    title: 'News by Terms',
    info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...',
    text: "What's up with PlayStation 5",
  },
  {
    color: '#283593',
    title: 'News by Sources',
    info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
    text: 'Give me the news from CNN',
  },
];

const NewsCards = ({ newsArticles, activeArticle }) => {
  const styles = useStyles();

  if (!newsArticles.length) {
    return (
      <Grow in>
        <Grid
          className={styles.container}
          container
          alignItems='stretch'
          spacing={4}>
          {infoCards.map((info, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={styles.infoCard}>
              <div
                className={styles.card}
                style={{ backgroundColor: info.color }}>
                <Typography variant='h5'>{info.title}</Typography>
                {info.info ? (
                  <Typography variant='h6'>
                    <strong>{info.title.split(' ')[2]}:</strong>
                    <br />
                    {info.info}
                  </Typography>
                ) : null}
                <Typography variant='h6'>
                  Try saying: <br />
                  <i>{info.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={styles.container}
        container
        alignItems='stretch'
        spacing={4}>
        {newsArticles.map((article, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: 'flex' }}>
            <NewsCard {...{ article, index, activeArticle }} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
