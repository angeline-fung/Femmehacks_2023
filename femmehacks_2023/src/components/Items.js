
import '../assets/Items.css';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import topLine from '../images/green block.png'
import block from '../images/ivory block.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Items() {
    return (
        <div className="backGround">
            <div className="row top-line">
                <div className='two'>
                    <Tops src={topLine} />
                </div>
                <div className='one' style={{marginLeft:'62%', marginTop: '15%'}}>
                    <Link to="/fridge">
                        <button type="button" className="greeenbtn" style={{border: "none"}}>
                            <b>Your Fridge!</b>
                        </button>
                    </Link>

                </div>
            </div>

            <div className='boxWrapper'>
                <div className='friedgeWrapper'>
                    <Blocks src={block} />
                </div>

                <div className='btnWrapper'>
                    <div style={{marginButtom:"2%"}}>
                        <button type="button" class="greensmallBtn"  style={{border: "none"}}>
                            <b>Past Recipes</b>
                        </button>

                    </div>
                    <div style={{marginTop:"2%"}}>
                        <button type="button" class="greensmallBtn"  style={{border: "none"}}>
                            <b>Generate Recipes!</b>
                        </button>
                    </div>
                </div>

                <div className='recipeWrapper'>
                    <BlockTwo src={block} />
                </div>

            </div>


            <div className="startButton">
                <div >
                    <Link to="/scanner" className="btn">
                        <button type="button" class="btn-primary greenBigBtn" style={{border: "none"}}>
                            <b>back</b>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/home">
                        <button type="button" class="btn-primary greenBigBtn" style={{border: "none", marginLeft: "1%"}}>
                            <b>home</b>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}


const Blocks = styled.img`
    width: 400px;
    height: 500px;
    background: #FBFAEE;
    border-radius: 10px;
    background-image: url(${block});
    
`;

const BlockTwo = styled.img`
    width: 400px;
    height: 300px;
    background: #FBFAEE;
    border-radius: 10px;
    background-image: url(${block});
    
`;


const Tops = styled.img`
    width: 300px;
    height: 60px;
    margin-left: 10%;
    margin-top: 5%;
    border-radius: 40px;
`;



export default Items;