import ShowMoreText from "react-show-more-text";
export default function Book(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      <img src={props.img}></img>
      <h3>Book description</h3>
      <ShowMoreText>{props.snippet}</ShowMoreText>
      <p>My rate in stars</p>
      <p>Date of reading</p>
    </div>
  )
}