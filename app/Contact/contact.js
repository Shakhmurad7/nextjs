import React from 'react'

function Contact() {
  return (
    <div className='container contact' >
    <div className='Contact'>
        <div className='contact-container'>

        <div className='contact-text-left'>
            <h2>Sign Up Our Newsletter</h2>
            <p>The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent.</p>
        </div>

        <div className='input-container'>

          <div className='input-block' > 
            <div className='input-box'>
              <input type='email' placeholder='email'  />
              <input type='email' placeholder='email'  />
              <input type='number'  placeholder='phone number' />
            </div>

            <div className='input-p' >
              <p>SIGN UP NOW</p>
            </div>
          </div>

        </div>

        </div>
    </div>
    </div>
  )
}

export default Contact