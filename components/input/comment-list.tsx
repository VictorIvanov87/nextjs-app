import classes from "./comment-list.module.css";

function CommentList(props: any) {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment: any) => (
        <li key={comment._id}>
          <p>{comment.comment.text}</p>
          <div>
            By <address>{comment.comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
