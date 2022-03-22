import React from 'react'
import { Button,Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'

function MovieCard({title,rate,description,posterUrl}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={posterUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>
                        <Rating allowHover={false} initialValue={rate} />
                </Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default MovieCard
