import { Row, Col } from 'antd'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

function Layout(props) {
  return (
    <Row className="container">
      <Col span="3" className="nav">
        <Nav />
      </Col>
      <Col span="21" className="main">
        <Header />
        <Row className="content">
          {props.children}
        </Row>
        <Footer />
      </Col>
    </Row>
  )
}

export default Layout