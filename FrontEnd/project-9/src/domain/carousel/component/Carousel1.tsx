import { Carousel, Container,Row, Col } from "react-bootstrap"
import "../style/styles.css"

interface Icarousel1{
    img:string
    img2:string
    img3:string
    title:string
    title2:string
    title3:string
}

const Carousel1:React.FC<Icarousel1>=(props)=>{
    return<>
        <Carousel variant="dark">
            <Carousel.Item className="pb-5">
                <div className="container col-xxl-8">
                    <div className="row flex-lg-row align-items-center g-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={props.img} className="d-block img-fluid pt-3" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="lh-1 fw-bold mb-3">{props.title}</h4>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio nemo commodi 
                            eos quod voluptates labore sunt dolor, maiores voluptatum atque sequi officiis consequatur praesentium 
                            beatae molestias ullam, culpa rem.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="pb-5">
                <div className="container col-xxl-8">
                    <div className="row flex-lg-row align-items-center g-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={props.img2} className="d-block img-fluid pt-3" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="lh-1 fw-bold mb-3">{props.title2}</h4>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio nemo commodi 
                            eos quod voluptates labore sunt dolor, maiores voluptatum atque sequi officiis consequatur praesentium 
                            beatae molestias ullam, culpa rem.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="pb-5">
                <div className="container col-xxl-8">
                    <div className="row flex-lg-row align-items-center g-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={props.img3} className="d-block img-fluid pt-3 " loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="lh-1 fw-bold mb-3">{props.title3}</h4>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio nemo commodi 
                            eos quod voluptates labore sunt dolor, maiores voluptatum atque sequi officiis consequatur praesentium
                             beatae molestias ullam, culpa rem.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </>
}

export default Carousel1