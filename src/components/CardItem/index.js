// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}
export default Card
