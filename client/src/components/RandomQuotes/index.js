import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import athleteQuotes from '../../utils/athleteQuotes/athleteQuotes';
//import RandomQuoteAPI from './Home/'
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});
export default function RandomQuote() {
  const classes = useStyles();
  
  return (
    

    
    <Card className={classes.root}>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center" }}>
           Quote of the Day
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div style={{ textAlign: "center" }}>
          {athleteQuotes[Math.floor(Math.random()*(athleteQuotes.length-1))].quote}
          </div>
          </Typography>
        </CardContent>
      
    </Card>
    
  );
}