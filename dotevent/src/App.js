import logo from "./logo.svg";
import searchIcon from "./search.svg";
import calenderIcon from "./calender-icon.svg";
import twitterLogo from "./twitter-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import HeroImage from "./Frame.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./App.css";
import Footer from "./Footer";
import { useState,useEffect  } from 'react' 
import axios from 'axios';
function App() {
  const [locations, setlocations] = useState([]);
  const [names, setnames] = useState([]);
  const [cards, setcards] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3200/locations')
  .then(function (response) {
   setlocations(response.data.data)
  })
  axios.get('http://localhost:3200/names')
  .then(function (response) {
    setnames(response.data.data)
  })
  axios.get('http://localhost:3200/cards')
  .then(function (response) {
    setcards(response.data.data)
  })
  },[]); 
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              <img src={logo} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="customNav">
                <Nav.Link href="/features">General</Nav.Link>
                <Nav.Link href="/pricing">Meetup</Nav.Link>
                <Nav.Link href="/pricing">AMA</Nav.Link>
                <Nav.Link href="/pricing">Event</Nav.Link>
                <Nav.Link href="/pricing">Learning</Nav.Link>
                <Nav.Link className="navCta" href="/pricing">
                  Add Conference
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <section className="heroSection">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Find your next tech conference in the Polkadot ecosystem</h1>
              <p>
                Open-source and crowd-sourced list of<br></br> meetup around pulkadot
                ecosystem
              </p>
              <button>Get Started</button>
            </Col>
            <Col md={6}>
              <img src={HeroImage} width="100%" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="searchBar">
        <Container>
          <Row>
            <Col md={12}>
              <div className="searchbarContainer">
                <input
                  type="search"
                  placeholder="Find conferences by name or location"
                />
                <span>
                  <img src={searchIcon} alt=""/>
                </span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <div className="filterCard">
                <div className="filterLocation">
                  <div className="filterTitle">Location</div>
                  <div className="searchbarCont">
                    <input type="search" placeholder="Enter location" />
                    <span>
                      <img src={searchIcon} alt="" />
                    </span>
                  </div>
                  {locations.map((item,index)=>{
                      return <div className="cityName">     
                      {item.name} <span className="cityCount">1</span>
                    </div>
                    })}
                  
                </div>

                <div className="filterName">
                  <div className="filterTitle">Name</div>
                  <div className="searchbarCont">
                    <input type="search" placeholder="Enter Name" />
                    
                    <span>
                      <img src={searchIcon} alt="" />
                    </span>
                    {names.map((item,index)=>{
                      return <div className="cityName">
                      {item.name} <span className="cityCount">1</span>
                    </div>
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <Row>
                <Col xs={6}>
                  <p>
                    <em>Showing 15 conferences</em>
                  </p>
                </Col>
                <Col xs={6} className="d-flex justify-content-end">
                  <Form.Check
                    inline
                    type="radio"
                    name="group1"
                    aria-label="radio 1"
                    label="In person"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    name="group1"
                    aria-label="radio 2"
                    label="Online"
                  />
                </Col>
              </Row>

              <Row>
              {/* 1st col PARITY TECHNOLOGY*/}
              {cards.map((item,index)=>{
                      return  <Col md={12}>
                      <div className="eventCard">
                        <span className="tag">Online</span>
                        <div className="displayFlex">
                          <div className="eventTitle">{item.eventTitle}</div>
                          <div className="eventDate">
                            {" "}
                            <img src={calenderIcon} alt="" /> {item.eventDate}
                          </div>
                        </div>
                        <div className="eventDescription">
                        {item.eventDescription}
                        </div>
                        <div className="twitterUsserName">
                          <img src={twitterLogo} alt="" />&nbsp;@ParityTech
                        <span className="codeConduct"><Nav.Link href="/features">{item.codeConduct}</Nav.Link></span></div>
                        
                        <button className="hashTag">{item.hashTag}</button>
                      </div>
                    </Col>
                    })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
     <Footer/>
    </div>
    
  );
}

export default App;
