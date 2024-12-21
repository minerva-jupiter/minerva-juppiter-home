import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import UnderConstruction from './UnderConstruction';

const Works = () => {
    return(
        <Container className='text-center'>
            <br />
            <h1 style={{color:"white"}}>Works</h1>
            <br />
            <UnderConstruction></UnderConstruction>
        </Container>
    )
};

export default Works;