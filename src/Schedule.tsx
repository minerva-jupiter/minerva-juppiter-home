import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import { MobileView } from 'react-device-detect';

const Schedule = () => {
    const innerWidth = window.innerWidth / 1.5;
    console.log(innerWidth);
    return(
        <Container className='text-center'>
            <br />
            <h1 style={{color:"white"}}>Schedule</h1>
            <br />
            <MobileView>
                <Card>
                    <Card.Title>
                        注意
                    </Card.Title>
                    <Card.Body>
                        このページの埋め込みカレンダーはスマートフォンでは非常に見づらいです。
                        下のリンクからgoogleカレンダーのリンクにアクセスして、任意のソフトウェアでの閲覧をおすすめします。
                        <a href="https://calendar.google.com/calendar/u/0?cid=cnlvdXR1cm5AZ21haWwuY29t">カレンダーのリンク</a>
                    </Card.Body>
                </Card>
                <br />
            </MobileView>
            <iframe src="https://calendar.google.com/calendar/embed?wkst=1&ctz=Asia%2FTokyo&src=cnlvdXR1cm5AZ21haWwuY29t&color=%23039BE5" style={{border:"solid 1px #777"}} width={innerWidth} height={innerHeight} />
        </Container>
    )
}

export default Schedule