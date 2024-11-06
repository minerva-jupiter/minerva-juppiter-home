import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import UnderConstruction from './UnderConstruction';

const Blog = () => {
    return(
        <Container className='text-center'>
            <h1>Blog</h1>

            <UnderConstruction></UnderConstruction>
        </Container>
    )
};

export default Blog;