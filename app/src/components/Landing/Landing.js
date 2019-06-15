import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import logo from "../Landing/stockrlogo.png";
import finance1 from "../Landing/finance1.jpg";
import finance2 from "../Landing/finance2.jpg";
import finance3 from "../Landing/finance3.jpg";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
// import NewsCard from "./Card.js";


const items = [
  {
    src: finance1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: finance2,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: finance3,
    altText: "Slide 3",
    caption: "Slide 3"
  }
];
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      modalIsOpen: false,
      data: []
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1cf2cd707d2d4071a43410b68c7aaa3b"
      )
      .then(res => {
        this.setState(res.data);
      });
    console.log("state", this.state);
  }
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }
  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }
  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const data = this.state.data;
    console.log("data", data);
    const { activeIndex } = this.state;
    const slides = data.map(item => {
      return (
        <div>
        {/* <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div
            className="w-50 mx-5 my-5 px-3 py-3 d-flex flex-column mx-auto rounded-lg"
            style={{ backgroundColor: "#808080", color: "#152911" }}
          >
            <h3>{item.title}</h3>
            <img className="img-fluid" src={item.urlToImage} alt={item.title} />
            <p className="text-truncate">{item.description}</p>
            <a href={item.url} className="text-primary">
              View News
            </a>
            <h4>{item.author}</h4>
            <p>{item.publishedAt}</p>
          </div>
        </CarouselItem> */}
        </div>
      );
    });
    return (
      <div>
        <Header />
        <Footer />
      </div>
      // <div className="container mw-100">
       //  <div>
      //     <img
      //       className="img-fluid mx-auto d-block py-5"
      //       src={logo}
      //       alt="Logo"
      //     />
      //   </div>
      //   <div
      //     className="mx-auto w-75 rounded-lg"
      //     style={{ backgroundColor: "#C0C0C0" }}
      //   >
      //     <Carousel
      //       activeIndex={activeIndex}
      //       next={this.next}
      //       previous={this.previous}
      //     >
      //       <div style={{ backgroundColor: "#152911" }}>
      //         <CarouselIndicators
      //           items={items}
      //           activeIndex={activeIndex}
      //           onClickHandler={this.goToIndex}
      //         />
      //       </div>
      //       {slides}
      //       <CarouselControl
      //         className="border border-dark"
      //         direction="prev"
      //         directionText="Previous"
      //         onClickHandler={this.previous}
      //       />
      //       <CarouselControl
      //         className="border border-primary"
      //         direction="next"
      //         directionText="Next"
      //         onClickHandler={this.next}
      //       />
      //     </Carousel>
      //   </div>
      //   <div
      //     className="w-75 mx-auto mt-5 rounded-lg row"
      //     style={{ backgroundColor: "#C0C0C0" }}
      //   >
      //     <button
      //       type="button"
      //       className="btn btn-lg w-50 my-4 mx-auto"
      //       style={{ backgroundColor: "#152911", color: "#FFFFFF" }}
      //       onClick={this.toggleModal.bind(this)}
      //     >
      //       Sign In
      //     </button>
      //   </div>
      //   <Modal isOpen={this.state.modalIsOpen}>
      //     <ModalHeader toggle={this.toggleModal.bind(this)}>
      //       Sign In
      //     </ModalHeader>
      //     <ModalBody>
      //       <button
      //         type="button"
      //         className="btn mx-2"
      //         style={{ backgroundColor: "#152911", color: "#FFFFFF" }}
      //       >
      //         Sign in with Facebook
      //       </button>
      //       <button
      //         type="button"
      //         className="btn mx-2"
      //         style={{ backgroundColor: "#152911", color: "#FFFFFF" }}
      //       >
      //         Sign in with Google
      //       </button>
      //     </ModalBody>
      //     <ModalFooter>
      //       <button
      //         className="btn btn-secondary"
      //         onClick={this.toggleModal.bind(this)}
      //       >
      //         Cancel
      //       </button>
      //     </ModalFooter>
      //   </Modal>
      //</div>
    );
  }
}
export default LandingPage;