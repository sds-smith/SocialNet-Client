import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  // marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CheckInCard({ checkin }) {
  const [expanded, setExpanded] = useState(false);

  const { coffee } = checkin;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '50%', margin: '30px auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="CheckIn">
            {checkin.user[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={checkin.user}
        subheader={''}
      />
      <CardMedia
        component="img"
        height="194"
        image={checkin.imageUrl}
        alt={`${coffee.roaster} ${coffee.label}`}
      />
      <CardContent>
        <Typography>{coffee.label}</Typography>
        <Typography>{coffee.roaster}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{border: '1px solid black', borderRadius: '15px', padding: '10px'}}>
          {checkin.userNotes || 'This is the place for the user checking in to leave notes'}
        </Typography>
      </CardContent>
      <CardActions >
        <Tooltip title="Toast this Checkin">
            <IconButton aria-label="toast this checkin">
              <LocalCafeOutlinedIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Comment on this Checkin">
            <IconButton aria-label="comment on this checkin">
              <ModeCommentRoundedIcon />
            </IconButton>
        </Tooltip>
        <Container fixed sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Typography sx={{marginLeft: 'auto'}}>View Comments</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Container>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {checkin.comments || 'Comments'}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
