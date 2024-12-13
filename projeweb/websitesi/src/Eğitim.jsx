import React from 'react'

function Eğitim({ eğitim }) {
    const { id, title ,image,decribtion,link, } =eğitim;
    return (
    <div className='eğitimresim'>
      <img src={image} width={250} height={250} />
            <h4 className='eğitimtitle'>{title}</h4>      
       
    </div>
    )
}

export default Eğitim