
import { useNavigate } from 'react-router-dom';
import '../style/fam.css';

function Intellectual(){
   
  const navigate = useNavigate();

    

    return(
        <section id="fam" >
        
          <div className="">
            
            <div className="">
              <h2 id='title'>Intellectual Property Law</h2><br/>
<p>Intellectual Property (IP) law relates to the establishment and protection of intellectual creations such as inventions, designs, brands, artwork and music.

These rights are established, protected, enforced and promoted through means such as patents (usually for such things as technical inventions), trademarks (for goods and services), copyright (music, art and literature) and designs (products and logos).</p>
<p>One crucial aspect of intellectual property law is patents. Patents provide inventors with exclusive rights to their inventions for a specified period, allowing them to control how their inventions are used, sold, or licensed. This protection encourages inventors to disclose their innovations to the public, fostering technological advancement.</p>
              
              <p>Copyrights, on the other hand, protect literary, artistic, and creative works, such as books, music, paintings, and software. Copyright holders have the exclusive right to reproduce, distribute, and adapt their works. This protection incentivizes authors, artists, and creators to produce new and original content.</p>
               </div>
          </div>
          
          <div id="center-container-btn">
  <button id="desc_back" onClick={() => navigate(-1)}>Go back</button>
</div>
        
      </section>
    )
}

export default Intellectual;