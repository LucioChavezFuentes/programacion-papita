import React from 'react';
import {InputGroup} from 'react-bootstrap'

const Home = () => {

    return (
        <div className='page'>
            <div className='greeting'>
                <div>
                    <p>!Cualquiera puede programar! </p>
                    <p>Es más que una carrera... Es una ventura.</p>
                </div>

                <div>
                    <p>Y aprender aquí está papita.</p>
                </div>

            </div>

            <div className='registration'>
                <div>
                    <p>!Resgístrate Gartis!</p>
                </div>

                <div>
                    <p>Email</p>
                    <input />
                </div>

                <div>
                    <p>Password</p>
                    <input placeholder="T" />

                </div>
                

            </div>
        </div>

        
    )
}

export default Home;