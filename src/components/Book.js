export default function Book(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      <img src={props.img}></img>
      <p>{props.snippet}</p>
      <p>My rate in stars</p>
      <p>Date of reading</p>
    </div>
  )
}