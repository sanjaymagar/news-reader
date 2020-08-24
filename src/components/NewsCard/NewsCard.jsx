import React, { useEffect, useState, createRef } from 'react';
import classNames from 'classnames';
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Button,
} from '@material-ui/core';

import useStyles from './style.js';

const NewsCard = ({ article, index, activeArticle }) => {
  const { description, publishedAt, source, title, url, urlToImage } = article;
  const styles = useStyles();

  const [elRef, setElRef] = useState([]);

  const scrollToRef = ref => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRef(refs =>
      Array(20)
        .fill()
        .map((_, index) => refs[index] || createRef())
    );
  }, []);

  useEffect(() => {
    if (index === activeArticle && elRef[activeArticle]) {
      scrollToRef(elRef[activeArticle]);
    }
  }, [index, activeArticle, elRef]);

  return (
    <Card
      ref={elRef[index]}
      className={classNames(
        styles.card,
        activeArticle === index ? styles.activeCard : null
      )}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia
          className={styles.media}
          image={
            urlToImage ||
            'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'
          }
        />
        <div className={styles.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='h2'>
            {source.name}
          </Typography>
        </div>
        <Typography className={styles.title} gutterBottom varient='h5'>
          {title}
        </Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.cardActions}>
        <Button size='small' color='primary'>
          Learn more
        </Button>
        <Typography variant='h5' color='textSecondary'>
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
