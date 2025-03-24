
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LinkCard = (target: {title:string,url:string,description:string,img:string}) => {
  return (
    <Link to={target.url}>
      <Card>
          <Card.Img src={target.img}/>
          <Card.Title>
            <h2>
              {target.title}
            </h2>
          </Card.Title>
          <Card.Body>
            <p>
              {target.description}
            </p>
          </Card.Body>
      </Card>
    </Link>
  )
}

export default LinkCard
