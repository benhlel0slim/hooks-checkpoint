import React, { useState } from 'react'
import { Button,Form,FormControl} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

function Filter({funfil}) {
    const [r,setR] = useState(0)
    const [t,setT] = useState('')
    return (
        <div>
            <ReactStars
                count={5}  
                size={100}
                isHalf={true}
                onChange={(x)=>setR(x)}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>setT(e.target.value)} 
                />
                <Button onClick={()=>funfil(r,t)} >Search</Button>
            </Form>
        </div>
    )
}

export default Filter
