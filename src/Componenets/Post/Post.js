import React,{Fragment, useEffect,useState} from 'react'
import NavBar from '../CommonComp/NavBar';
import Contact from '../CommonComp/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Form,Spinner} from 'react-bootstrap';
import sanityClient from '../../Client';
import './Post.css';
import LazyLoad from 'react-lazyload';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import search from '@scenid/deep-search';

const Post = () => {

  const [ postData , setPost ] = useState(null);
  const [input , setInput] = useState('');
 
  function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

useEffect(()=>{
  sanityClient.fetch(`*[_type=="post"]{
      title,
      author->{name},
      tags,
      slug,
      mainImage{
          asset->{
              _id,
              url
          },
          alt
      }
  }`).then((data)=>setPost(shuffle(data)))
  .catch(console.error);
}, [] )

    const singlePost = (post) =>{
      if(search(post,input.toLowerCase())){
        return (
          <Gallery>
                    <Item className="allOverPost"
                          original= {post.mainImage.asset.url}
                          thumbnail={post.mainImage.asset.url}
                          width="1080"
                          height="1920"
                          title={post.title}
                          >
                          {({ ref, open }) => (
                          <img className="cont" ref={ref} effect={"blur"} loading='lazy' onClick={open} src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                          )}
                         
                        </Item>
                    </Gallery>
        )
      }
  }
  
        if(postData==null){
          return (
            <div>
                <NavBar/>
                <Container className="loading" id='xxxx'>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="primary" />
                </Container>
                <hr/>
                <Contact/> 
            </div>
            )
        }else{
          return (
            <div>
                <NavBar/>
                <Container>
                <Form.Control type="text" onChange={(e)=>setInput(e.target.value)} placeholder="Search here..." style={{marginTop:"20px"}}/> 
                </Container>
               <div className={{height:'40px',marginTop:'30px'}}></div>
                <Container>
                <LazyLoad>
                  {postData.map((post,index)=>(
                  <Fragment key={index} >
                      {singlePost(post)}
                  </Fragment>
                  ))}
                  </LazyLoad>
                </Container>
                <Contact/> 
            </div>
          )  
        }
  }

export default Post;
