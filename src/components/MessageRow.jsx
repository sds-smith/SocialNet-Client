
import { classes } from "../styles.classes";

export default function MessageRow({ messageType, message }) {
    return (
      <tr style={classes[`${messageType}MessageRow`]}>
        <td >
          <span style={classes.author} >
            {message.user}
          </span>
        </td>
        <td style={classes[`${messageType}Message`]}>
          {message.text}
        </td>
      </tr>
    );
  }