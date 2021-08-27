import { Col, Container, Row } from '../farmwork';

const Header = () => (
    <header>
        <Container>
            <Row>
                <Col grid="col-12">
                    <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '15px' }}>
                        Application Form
                    </h1>
                    <h2 style={{ textAlign: 'center', fontSize: '26px', marginBottom: '20px' }}>
                        Candidate Details
                    </h2>
                </Col>
            </Row>
        </Container>
    </header>
);

export default Header;
