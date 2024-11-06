import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Schedule = () => {
    return(
        <Container className='text-center'>
            <h1 style={{color:"white"}}>Schedule</h1>
            <iframe src="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=Asia%2FTokyo&src=cnlvdXR1cm5AZ21haWwuY29t&color=%23039BE5" style={{border:"solid 1px #777"}} width="1000" height="800" />
        </Container>
    )
}

export default Schedule