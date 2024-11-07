import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import UnderConstruction from './UnderConstruction';

const Blog = () => {
    return(
        <Container className='text-center'>
            <h1 style={{color:'white'}}>Blog</h1>
            <Card>
                <Card.Title>
                    自分のウェブページを作ってみた
                </Card.Title> 
                <Card.Body>
                    このページを作成したときのブログです。
                    Vite + Typescript + react + react-bootstrapでWebページを作ってみました。
                </Card.Body>
            </Card>
        </Container>
    )
};

export default Blog;