import React from 'react'

function CartBox() {
  return (
    <div className='container' >

        <div className='cartBox-top-text' >
                <h2>Inspirations</h2>
                <p>The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring.</p>
        </div>

        <div className='cartBox-container'>

            <div className='cartBox-block-one' >
                <div className='block-one-div-1'>
                <div className='text-position-cart'>
                            <p>DESTINATIONS</p>
                            <h2>A Guide To Rocky Mountain Vacations</h2>
                        </div>
                </div>
                <div className='block-one-div-2'>
                <div className='text-position-cart'>
                            <p>DESTINATIONS</p>
                            <h2>Traveling To Barcelona</h2>
                        </div>
                </div>
            </div>

            <div className='cartBox-block-two' >
                <div className='block-two-row-div' >
                    <div className='block-two-div-img-1'>
                        <div className='text-position-cart'>
                            <p>DESTINATIONS</p>
                            <h2>Party Jokes Startling But Unnecessary</h2>
                        </div>
                    </div>
                    <div className='block-two-div-img-2'>
                    <div className='text-position-cart'>
                            <p>DESTINATIONS</p>
                            <h2>Maui By Air The Best Way Around The Island</h2>
                        </div>
                    </div>
                </div>
                < div className='block-two-div-2'>
                </div>
            </div>

            <div className='cartBox-block-three' >
                <div className='block-three-div-1'>
                <div className='text-position-cart'>
                            <p>DESTINATIONS</p>
                            <h2>Traveling To Barcelona</h2>
                        </div>
                </div>
                <div className='block-three-div-2'>
                <div className='text-position-cart'>
                            <p>DESTINATIONS</p>
                            <h2>A Guide To Rocky Mountain Vacations</h2>
                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CartBox