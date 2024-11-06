import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container data-bs-theme="dark">
        <br />
        <Container className="text-center">
            <h1 style={{color:"white"}}>Minerva_Juppiter</h1>
            <h4 style={{color:"white"}}>哲</h4>
        </Container>
        <br />
        <br />
        <Card className='text-center'>
            <br />
            <Card.Title>
                <h3 className="text-center">自己の紹介です</h3>
                <h6 className="text-center">About me</h6>
            </Card.Title>
            <Card.Body style={{lineHeight:3}}>
                おはようございます、Minerva_Juppiterです。<br />
                しがない侏儒の者です。<br />
                このページは自己紹介がてら作ったものです。<br />
                良ければ見ていってください。<br />
            </Card.Body>
            <br />
        </Card>
    </Container>
  )
};

export default Home;