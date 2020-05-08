import React,{PureComponent} from 'react';
import './style.css';

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sliderLeft:0,
      largeScreenIndex: 1
    };
    this.displayAtaTime = 3;
  }

  handleLeftArrowClick = ()=>{
    const {screenWidth} = this;
    this.setState((state)=>({
      ...state,
      sliderLeft: state.sliderLeft + screenWidth,
      largeScreenIndex: state.largeScreenIndex-1
    }))
  }

  handleRightArrowClick = ()=>{
    const {screenWidth} = this;
    this.setState((state)=>({
      ...state,
      sliderLeft: state.sliderLeft - screenWidth,
      largeScreenIndex: state.largeScreenIndex+1
    }))
  }

  componentDidMount() {
    this.screens = document.getElementsByClassName('screens');
    this.screenWidth = this.screens[0].offsetWidth;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data !== this.props.data){
      this.setState({sliderLeft:0, largeScreenIndex:1})
    }
  }

  render() {
    const {data}=this.props;
    const {sliderLeft, largeScreenIndex} = this.state;
    return (
      <div className="carousal overflow-x-hidden position-relative">
        <div className="slider h-100 w-100 position-absolute" style={{left:sliderLeft}}>
          <div className="d-flex w-100 h-100 align-items-center">
              {
                data.map((elm, index)=>(
                    <div key={index} id={`screen_${index+1}`} className={`screens w-33 ${index===largeScreenIndex?'h-100':''} flex-none`}>
                          <div className='w-100 h-100 position-relative'>
                              <img className='w-100 h-100' src={elm.url} alt=''/>
                                <div className="position-absolute p-5 white top-0">
                                  <h2 className="position-relative">
                                      {elm.name}
                                  </h2>
                                  <h2 className="position-relative">
                                      {elm.price}
                                  </h2>
                                </div>
                          </div>
                    </div>))}
          </div>
        </div>
        <div className={`arrow left position-absolute cursor-pointer ${largeScreenIndex === 1?'disabled':''}`}>
            <i className="fas fa-chevron-left white" onClick={this.handleLeftArrowClick}></i>
        </div>
        <div className={`arrow right position-absolute cursor-pointer ${largeScreenIndex=== (data.length-2)? 'disabled':''}`}>
            <i className="fas fa-chevron-right white" onClick={this.handleRightArrowClick}></i>
        </div>
      </div>
    );
  }

}

export default Carousel;
