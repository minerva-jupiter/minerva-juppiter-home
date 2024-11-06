import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import UnderConstruction from './UnderConstruction';

const Works = () => {
    return(
        <Container className='text-center'>
            <h1 style={{color:"white"}}>Works</h1>
            <UnderConstruction></UnderConstruction>
        </Container>
    )
};

export default Works;