import { useState, useEffect, useContext, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserChip from '../shared/UserChip';
import ToastButton from '../shared/ToastButton';
import { UserContext } from '../../context/user-context';
import { useToasts, useAddToast, useComments, useAddComment } from '../../utils/hooks/apollo.hooks';
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

  const commentTextfieldRef = useRef(null);
  const commentInputRef = useRef(null);

  const { authenticatedUser } = useContext(UserContext);

  const { coffee, user } = checkin;

  const { toasts } = useToasts(Number(checkin.id));
  const { addToast } = useAddToast();
  const { comments } = useComments(Number(checkin.id));
  const { addComment } = useAddComment();

  const isUserToasted = toasts.some(toast => toast.user.email === authenticatedUser.email);

  const handleToast = () => {
    if (!isUserToasted) {
      addToast(Number(checkin.id));
    }
  }

  const handleOpenCommentTextfield = () => {
    commentTextfieldRef.current.style.display = 'flex';
  }

  const handleComment = () => {
    addComment(Number(checkin.id), commentInputRef.current.value);
    commentInputRef.current.value = '';
    commentTextfieldRef.current.style.display = 'none';
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    commentTextfieldRef.current.style.display = 'none'
  },[]);

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
              {toasts?.map(t => <UserChip user={t.user} />)}
            </>
          )
        }
        <TextField 
          fullWidth
          ref={commentTextfieldRef}
          inputRef={commentInputRef}
          id="add-comment" 
          label='Say something about this checkin'
          variant="filled" 
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="add-comment"
                  onClick={handleComment}
                  edge="end"
                >
                  <SendIcon/>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
      <CardActions >
        <ToastButton 
          onClick={handleToast} 
          isUserToasted={isUserToasted}
        />
        <Tooltip title="Comment on this Checkin">
            <IconButton aria-label="comment on this checkin" onClick={handleOpenCommentTextfield}>
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
          <Typography >
            Comments
          </Typography>
          {
            Boolean(comments?.length) &&
            comments.map(comment => (
              <Typography paragraph>
                <UserChip user={comment.user} />
                {` ${comment.comment}`}
              </Typography>
            ))
          }
        </CardContent>
      </Collapse>
    </Card>
  );
}
