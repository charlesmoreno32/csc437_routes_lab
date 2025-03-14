import { ImageEditForm } from "./images/ImageEditForm";

export function Homepage(props) {
  return (
    <div>
      <h2>Welcome, {props.userName}</h2>
      <ImageEditForm authToken={props.authToken} />
    </div>
  );
}
