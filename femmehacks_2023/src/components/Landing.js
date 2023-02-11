
import '../assets/Landing.css';
import fridge from '../images/mdi_fridge.png';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import veggie from '../images/veggies.png'
import topLine from '../images/green block.png'
import block from '../images/ivory block.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Landing() {
    return (
   
                <div className="backGround">
                    <div className="row top-line">
                        <div className='two'>
                            <Tops src={topLine} />
                        </div>
                        <div className='one' style={{marginLeft:'15%', marginTop: '7%'}}>
                            <h>
                                Welcome to Fridge Foraging!
                            </h>
                        </div>
                        <div className='three'>
                            <Veggies src={veggie} />
                        </div>
                    </div>
                    <div className="backgroundBox">
                        <div className='backBox'>
                            <Blocks src={block} />
                        </div>
                        <div className='friedgeWrapper'>
                            <Fridges src={fridge} />
                        </div>
                            <div className="about">
                                <p>
                                A website that helps you keep track of your groceries by scanning your receipt! 
                                Recipe suggestions are also provided based on  what’s available in your fridge! :)
                                </p>
                            </div>
                            <div className="startButton">
                                <div>
                                    <Link to="/scanner" className="btn">
                                        <button type="button" class="btn-primary greenBigBtn" style={{border: "none"}}>
                                            <b>Scan Your Receipt</b>
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/items">
                                        <button type="button" class="btn-primary greenBigBtn" style={{border: "none", marginLeft: "1%"}}>
                                            <b>Go To Your Fridge</b>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
    );
}

const Fridges = styled.img`
    width: 370px;
    height: 380px;
    left: 34px;
    top: 341px;
`;

const Blocks = styled.img`
    width: 1100px;
    height: 400px;
    justify-content: center;
    align-items: center;
    background: #FBFAEE;
    border-radius: 10px;
    background-image: url(${block});
`;


const Tops = styled.img`
    width: 500px;
    height: 100px;
    // margin-left: 1%;
    margin-top: 5%;
`;



const Veggies = styled.img`
    width: 160px;
    height: 115px;
    margin-left: 10%;
    margin-top: 10%;
`;



export default Landing;