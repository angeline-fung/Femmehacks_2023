
import '../assets/Landing.css';
import fridge from '../images/mdi_fridge.png';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import bg from '../images/background.png'

function Landing() {
    return (
        <Background>
            <div className="backGround">
                <div className="row">
                    <div className='welcome'>
                        <h>
                            Welcome to Fridge Foraging!
                        </h>
                    </div>
                    <div>
                        <img src="../images/veggies.png"></img>
                    </div>
                </div>
                <div className='row' id="backgroundBox">
                    <div className='col'>
                        <Fridges src={fridge} />
                    </div>
                    <div className='col'> 
                        <div className='row' id="about">
                            <p>
                            A website that helps you keep track of your groceries by scanning your receipt! 
                            Recipe suggestions are also provided based on  what’s available in your fridge!
                            </p>
                        </div>
                        <div className='row' id="startButton">
                            <div className='row'>
                                <Link to="/scanner">
                                    <button type="button" class="btn-primary greenBigBtn" style={{border: "none"}}>
                                        Scan Your Receipt
                                    </button>
                                </Link>
                            </div>
                            <div className='row'>
                                <Link to="/items">
                                    <button type="button" class="btn-primary greenBigBtn" style={{border: "none"}}>
                                        Go To Your Fridge
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Background>
    );
}

const Fridges = styled.img`
    position: absolute;
    width: 524px;
    height: 579px;
    left: 34px;
    top: 341px;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-image: url(${bg});
`;


export default Landing;