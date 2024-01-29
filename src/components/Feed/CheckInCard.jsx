import { useState, useContext } from 'react';
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
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ToastButton from '../shared/ToastButton';
import { UserContext } from '../../context/user-context';
import { useToasts, useAddToast, useAddComment } from '../../utils/hooks/apollo.hooks';
import { classes } from '../../styles.classes';

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

  const { authenticatedUser } = useContext(UserContext);

  const { coffee, user } = checkin;

  const { toasts } = useToasts(Number(checkin.id));
  const { addToast } = useAddToast();
  const { addComment } = useAddComment();

  const isUserToasted = toasts.some(toast => toast.user.email === authenticatedUser.email);

  const handleToast = () => {
    if (!isUserToasted) {
      addToast(Number(checkin.id));
    }
  }

  const handleComment = () => {
      addComment(Number(checkin.id), 'this is a comment');
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={classes.checkinCardContainer}>
      <CardHeader
        avatar={
          <Avatar sx={classes.checkinCardAvatar} aria-label="CheckIn">
            {
              user.photoURL ? (
                <img
                  src={user.photoURL}
                  id={user.displayName}
                  alt={user.displayName}
                  style={{width: '100%', height: 'auto'}}
                />
              ) : (user.displayName[0])
            }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.displayName}
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
        <Typography variant="body2" color="text.secondary" sx={classes.userNotes}>
          {checkin.userNotes || 'This is the place for the user checking in to leave notes'}
        </Typography>
      </CardContent>
      <CardContent>
        {
          Boolean(toasts?.length) && (
            <>
              <div>Toasted by: </div>
              {toasts?.map(t => <div>{t.user.displayName}</div>)}
            </>
          )
        }
      </CardContent>
      <CardActions >
        <ToastButton 
          onClick={handleToast} 
          isUserToasted={isUserToasted}
        />
        <Tooltip title="Comment on this Checkin">
            <IconButton aria-label="comment on this checkin" onClick={handleComment}>
              <ModeCommentRoundedIcon />
            </IconButton>
        </Tooltip>
        <Container fixed sx={classes.expandBtnContainer}>
          <Typography sx={classes.expandBtnText}>View Comments</Typography>
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
