import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
    return(
        <Container className='text-center'>
            <br />
            <h1 style={{color:'white'}}>Blog</h1>
            <br />
            <Card>
                <Card.Title>
                    カバンを自作する記事を書きました
                </Card.Title>
                <Card.Body>
                    島根大学ものづくり部が発行する、2024年度の部誌に「PCカバン設計のすゝめ」という記事を寄稿させていただきました。
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Title>
                    自分のウェブページを作ってみた
                </Card.Title> 
                <Card.Body>
                    このページを作成したときのブログです。<br />
                    Vite + Typescript + react + react-bootstrapでWebページを作ってみました。
                </Card.Body>
            </Card>
        </Container>
    )
};

export default Blog;