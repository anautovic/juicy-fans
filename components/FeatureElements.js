import React from 'react'
//import FeaturePic from 'https://res.cloudinary.com/wil/image/upload/v1631865004/samples/featured3_crcltr.jpg'

const FeatureElements = () => {
    return (
        <>
        <div className='feature-container'>
           <h1 style= {{
               fontSize: 'clamp(3rem, 5vw, 5rem)'
           }}>Formule Petit déjeuner</h1>
      <p  style= {{
               fontSize: '(1rem, 3vw, 2rem)',
               color: 'white'
           }}>Ajoutez de la vitalité dans vos journées</p>
      <button><a href="tel:+237 656136898" 
      style= {{textDecoration:"none", color:'white'}}>Commandez </a>
     </button>  
        </div>

<style jsx>{`
button{
    font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

 
}
.feature-container{
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url('https://res.cloudinary.com/wil/image/upload/v1631865004/samples/featured3_crcltr.jpg');
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;  
}

`}</style>
</>
    )
}

export default FeatureElements
