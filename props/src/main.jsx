import { createRoot } from 'react-dom/client'


const Heading = ({color, text}) => {
  return <h1 style={{color}}> {text} </h1>;
}

const Description = ({textStyle}) => {

  const name = prompt('Enter your name');  
  return <h2 style={{fontStyle: textStyle}}> {name}'s first React application. </h2>;

}

createRoot(document.getElementById('root')).render(
  <>
    <Heading color="crimson" text="Hello, world!"/>
    <Description textStyle="italic"/>
  </>
);

