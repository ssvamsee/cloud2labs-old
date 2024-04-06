import React from 'react';
import { GiArtificialIntelligence } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { AiFillAndroid } from "react-icons/ai";
import { FaApple,FaFigma,FaStripeS ,FaApplePay,FaShopify,FaAws} from "react-icons/fa";
import { DiSwift } from "react-icons/di";
import { SiKotlin,SiMicrosoftazure ,SiGooglecloud} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

function Expertise() {
  return (
    <div id="expertise" className="section">
      <div className='expert-con'>
        <h1 className='expert-heading'>Our Expertise</h1>
        <div className='expert-con-1'>
          <div className='expert-con-1-1'>
            <div className='expert-grid'><GiArtificialIntelligence className='expert-icon' color='white' />
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>
            <div className='expert-grid'><CgWebsite className='expert-icon' color='white' />
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>
            <div className='expert-grid'><AiFillAndroid className='expert-icon' color='white' />
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>
            <div className='expert-grid'><FaApple className='expert-icon' color='white' />
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>
            <div className='expert-grid'><DiSwift className='expert-icon' color='white' />
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>

          </div>
          <div className='expert-con-1-1'>
          <div className='expert-grid'><SiKotlin className='expert-icon' color='white' />
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>           
             <div className='expert-grid'><FaFigma className='expert-icon'  color='white'/>
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>            
            <div className='expert-grid'><RiOpenaiFill className='expert-icon' color='white' />
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>            
            <div className='expert-grid'><FaStripeS className='expert-icon'  color='white'/>
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>            
            <div className='expert-grid'><FaApplePay className='expert-icon'  color='white'/>
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>

          </div>
          <div className='expert-con-1-1'>
          <div className='expert-grid'><FaShopify className='expert-icon'  color='white'/>
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>
            <div className='expert-grid'><SiMicrosoftazure className='expert-icon'  color='white'/>
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>
            <div className='expert-grid'><SiGooglecloud className='expert-icon' color='white' />
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>
            <div className='expert-grid'><FaAws className='expert-icon' color='white' />
              <div className="vertical-line"></div>
              <div className='expert-paragh'>
              <p >Generative Atrificial Intelligence</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
