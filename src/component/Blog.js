import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { CardBody, CardTitle, Input, Label } from 'reactstrap'

const Blog = () => {
    
    const [blogData, setBlogData] = useState([])
    const [showing, setShowing] = useState(false)
    const [data, setData] = useState({
        author:"",
        title:"",
        post:""
    })
    
    useEffect(() => {
        axios.get('http://localhost:5000/blog',{
            method:'GET',
            mode:'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*'
            } 
            
        })
        .then((res) => {
            setBlogData(res.data)
            console.log(blogData)
        })
    }, [])
    const post = (e) => {
        // e.preventDefault()
        axios.put('http://localhost:5000/blog',
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
    

    // const deletePost = (blog,index) => {
    //     axios.delete(`http://localhost:5000/blog/${blogData[index]._id}` , {
    //         method:'DELETE',
    //         mode:'cors',
    //         headers: {
    //             'Content-Type' : 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         } 
    //     })
    //     .then(console.log(blog._id))
    // }
    const updateToggler = () => {
        setShowing(!showing)
        console.log(showing)
    }
    
    return (
        <div className='spacer'>
            {
               
                blogData.length > 0 &&
                blogData.map((blog, index) => {
                    return(
                        <div key={index}>
                            <Container>
                            <Card>
                                <CardHeader className="bg1">
                                    <CardTitle className='text-center !important'>
                                        <h1 >
                                            {blog.title}
                                        </h1>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Container>
                                    
                                    <Col xs={12} >
                                        <p className='text-center !important'>
                                            by {blog.author}
                                        </p>

                                        <h6 className='text-center !important'>
                                            {blog.post}
                                        </h6>
                                    </Col>
                                    

                                    <br />

                                    <Row>
                                        <Col xs={6} className='text-center'>
                                            <Button variant='secondary' onClick={updateToggler}     >
                                                Update
                                            </Button>
                                        </Col>

                                        <Col xs={6} className='text-center'>
                                            <Button variant='secondary' onClick={() => {
                                                
                                                axios.delete(`http://localhost:5000/blog/${blog._id}` , {
                                                    method:'DELETE',
                                                    mode:'cors',
                                                    headers: {
                                                        'Content-Type' : 'application/json',
                                                        'Access-Control-Allow-Origin': '*'
                                                    } 
                                                })
                                                .then(console.log(blog._id))
                                                }}>
                                                Delete
                                            </Button>
                                        </Col>
                                    </Row>

                                    {
                                        showing == false ? 
                                        <div></div>
                                        :
                                        <div>
                                            <Container >
                                                <Form onSubmit={(e) => {
                                                        e.preventDefault()
                                                        axios.put('http://localhost:5000/blog/'+blog._id,
                                                            {
                                                                author:data.author,
                                                                title:data.title,
                                                                post:data.post
                                                            })
                                                            .then(res => console.log(res.data))
                                                    }} >
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

                                        </div>
                                    }
                                    </Container>
                                    
                                </CardBody>
                            </Card>  
                            <br />
                            </Container>
                        </div>
                    )
                })
            }
            



            


            
            
        </div>
    )
}

export default Blog
