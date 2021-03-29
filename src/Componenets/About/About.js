import React,{useEffect , useState} from 'react'
import "./About.css";
import NavBar from '../CommonComp/NavBar';
import Contact from '../CommonComp/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Media} from 'react-bootstrap';
import sanityClient from '../../Client';
import Typical from 'react-typical'
import LazyLoad from 'react-lazyload';

const About = () => {
  const [authors,setAuthor] = useState(null);

  useEffect(()=>{
    sanityClient.fetch(`*[_type=="author"]{
      name,
      slug,
      image{
          asset->{
              _id,
              url
          },
          alt
      },'bio':bio[]{children[]{text}}
  }`).then((data)=>setAuthor(data))
  .catch(console.error); 
  },[])

  if(authors==null){
    return (
      <div>
          <NavBar/>
          <Container className="loading" id='xxxx'>
            <Typical
            steps={['', 1000, 'Loading......................................', 500]}
            loop={Infinity}
            wrapper="p"
            />
          </Container>
          <Contact/> 
      </div>
      )
  }else{
    return (
      <div>
      <NavBar/>
      <Container>
          {authors.map((author,index)=>(
            <div key={index} className='mainT'>
                <Container className='normalMarg'>
              <ul className="list-unstyled">
              <Media as="li">
                <LazyLoad>
                <img
                width={64}
                height={64}
                className="mr-3"
                src={author.image.asset.url}
                alt={author.image.asset.alt}
              />
                </LazyLoad>
              <Media.Body>
              <h4 style={{color:'#1b1e21',background:'#d6d8d9'}}>{author.name}</h4>
              <p style={{color:'#1b1e21',background:'#d6d8d9'}}>
                {author.bio[0].children[0].text}
              </p>
              </Media.Body>
              </Media>
              </ul>
              </Container>
            </div>
          ))}
      </Container>
      <Contact/> 
    </div>
    )  
  }
  }

export default About;
