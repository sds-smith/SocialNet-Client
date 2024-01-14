import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CoffeeCard({ coffee }) {
  return (
    <Card sx={{ minWidth: '80%', margin: '5px 10px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {coffee?.roaster}
        </Typography>
        <Typography variant="h5" component="div">
          {coffee?.label}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`Origin: ${coffee?.origin}`}
        </Typography>
        <Typography variant="body2">
          {`Process: ${coffee?.process}`}
        </Typography>        
        <Typography variant="body2">
          {`Roast: ${coffee?.roast}`}
        </Typography>
        <Typography variant="body2">
          {`Tasting Notes: ${coffee?.tastingNotes}`}
        </Typography>
        <Typography variant="body2">
          {`${coffee?.description}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
