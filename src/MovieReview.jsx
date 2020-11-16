import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';

class MovieReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=94Ib5kpQ6xKNnxurFbxhXJaXKf3hhLrK")
            .then(res => res.json())
            .then(movies => {
                console.log("reviews:", movies)
                this.setState({ reviews: movies.results })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <Container>
                <h1 style={{textAlign: "center", marginTop: "15px", marginBottom: "30px", fontFamily: "Consolas"}}>New York Times Movie Reviews</h1>
                {this.state.reviews.map((new_movie) =>

                <div style={{margin: "40px 0"}}>
                    <Card className="text-center" border="primary">
                        <Card.Header><h3 style={{fontFamily: "Goudy Old Style", fontWeight: "bold"}}>{new_movie.display_title}</h3></Card.Header>
                            <Card.Body>
                                <Row>
                                    <div className="col-md-4" style={{borderRight: "1px solid Blue"}}>
                                        <div className="text-center">
                                            <img src={new_movie.multimedia.src} class="rounded" alt="..." />
                                        </div>
                                        <Card.Title style={{marginTop: "10px"}}>By {new_movie.byline}</Card.Title>
                                    </div>

                                    <div className="col-md-8">
                                    <Card.Title style={{marginBottom: "30px"}}>Publication: {new_movie.publication_date}</Card.Title>
                                        <Card.Title><h4 sytle={{fontWeight: "bold"}}>{new_movie.headline}</h4></Card.Title>
                                        <Card.Text>{new_movie.summary_short}</Card.Text>
                                        <Button variant="primary">
                                             <a style={{textDecoration: "none", color: "inherit" }} target="blank" href={new_movie.link.url}>Watch Movie</a>
                                        </Button>
                                    </div>
                                </Row>
                            </Card.Body>
                        <Card.Footer className="text-muted text-left">Date Updated: {new_movie.date_updated}</Card.Footer>
                    </Card>
                 </div>
                )}
            </Container>
        );
    }
}

export default MovieReview;
