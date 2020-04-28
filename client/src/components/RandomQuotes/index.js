import React from 'react';
import Typography from '@material-ui/core/Typography';
import athleteQuotes from '../../utils/athleteQuotes/athleteQuotes';

export default function RandomQuote() {

  return (



    <div>
      <Typography component="p" style={{ fontSize: "18px", color: "white", margin: "20px", marginTop: "0px", opacity: ".8", fontWeight: "lighter" }}>
        <div style={{ textAlign: "center" }}>
          {athleteQuotes[Math.floor(Math.random() * (athleteQuotes.length - 1))].quote}
        </div>
      </Typography>
    </div>

  );
}