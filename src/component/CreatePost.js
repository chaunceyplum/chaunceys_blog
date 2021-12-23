import React, { useState } from 'react'
import { Button, Container, Form, FormGroup } from 'react-bootstrap'
import { Input, Label } from 'reactstrap'
import axios from 'axios'
const CreatePost = () => {
    const url = 'http://localhost:5000/blog'
    const [data, setData] = useState({
        author:"",
        title:"",
        post:""
    })
    
    
    const post = (e) => {
        e.preventDefault()
        axios.post(url,
            {
                author:data.author,
                title:data.title,
                post:data.post
            })
            .then(res => console.log(res.data))
    }
    
    
    const handleChange = (e) =>{
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    
    
    
    return (
        <div className='spacer' >
            <Container >
                <Form onSubmit={post} >
                    <FormGroup className='text-center'>
                        <Label for="author"  >Your Name</Label>
                        <Input onChange={e => handleChange(e)} value={data.author} type="text" name="author" id="author" placeholder='Name' />
                    </FormGroup>
                    <br />
                    <FormGroup className='text-center'>
                        <Label for="title" >Post Subject</Label>
                        <Input onChange={e => handleChange(e)} value={data.title} type="text" name="title" id="title" placeholder='Subject' />
                    </FormGroup>
                    <br />
                    <FormGroup className='text-center'>
                        <Label for="post" >Your Post</Label>
                        <Input onChange={e => handleChange(e)} value={data.post} type="textarea" name="post" id="post" placeholder='Post' />
                    </FormGroup>
                    <br />
                    <FormGroup className='text-center'>
                        <Button type='submit' variant='secondary'>
                            Submit
                        </Button>
                    </FormGroup>
                    <br />

                </Form>
            </Container>
            <br />
        </div>
    )
}

export default CreatePost
