import { Fragment } from "react/cjs/react.production.min";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <Fragment>
          <MeetupItem
            key={meetup.id}
            name={meetup.name}
            engine={meetup.engine}
            id={meetup.id}
            date={meetup.date}
            description={meetup.description}
            image={meetup.image[0]["image"]}
            title={meetup.title}
            address="juyjy"
          />
        </Fragment>
      ))}
    </ul>
  );
}

export default MeetupList;
