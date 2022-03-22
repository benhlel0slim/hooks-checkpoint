import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'

function Addnewmovie({fun}) {
    const [newMovie, setNewMovie] = useState({})
    console.log('dsfgsdfg',fun)
    return (
        <div>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Movie title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setNewMovie({...newMovie,title:e.target.value})} />
                <Form.Label>Movie Rate</Form.Label>
                <Form.Control type="number" placeholder="Enter Rate" onChange={(e)=>setNewMovie({...newMovie,rate:e.target.value})} />
                <Form.Label>Movie Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" onChange={(e)=>setNewMovie({...newMovie,description:e.target.value})} />
                <Form.Label>Movie url</Form.Label>
                <Form.Control type="text" placeholder="Enter url" onChange={(e)=>setNewMovie({...newMovie,posterUrl:e.target.value})} />
                
            </Form.Group>
            <Button variant="primary" onClick={()=>fun(newMovie)} >
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Addnewmovie
