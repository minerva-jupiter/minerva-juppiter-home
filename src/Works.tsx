import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import works_json from './assets/works.json';
import LinkCard from './LinkCard';

console.log(works_json);
const Cards = () => {
    return(
        works_json.map(works => {
        return(
            <div>
                <LinkCard title={works.title} img={works.img} url={works.url} description={works.body} />
                <br />
            </div>
        )})
    )
}

const Works = () => {
    return(
        <Container className='text-center'>
            <br />
            <h1 style={{color:"white"}}>Works</h1>
            <br />
            <Cards/>
        </Container>
    )
};

export default Works;