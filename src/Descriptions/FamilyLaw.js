
import { useNavigate } from 'react-router-dom';
import '../style/fam.css';

function FamilyLaw(){
   
  const navigate = useNavigate();

    

    return(
        <section id="fam" >
        
          <div className="">
            
            <div className="">
              <h2 id='title'>Family Law</h2><br/>
<p>Family law is made up of three main areas of work: matrimonial, finance and child law. Many lawyers choose to specialise in either matrimonial law or child law, whilst others maintain a mixed client base. It can also cover domestic violence, guardianship, child abuse and neglect. Other matters might include inheritance law, retirements, pension and other benefits. </p>
              <p>Family lawyers act on matters such as divorce and separation, child contact and adoption, Local Authority care orders and financial settlements.

When acting for a client seeking a divorce, lawyers are engaged in taking initial details, gathering evidence including financial evidence, preparing the necessary documentation, negotiating settlements and contact or residency for children, referring to mediation and advocating for the client in hearings. The work may also include instructing Counsel and attending Counsel at court. Child law lawyers may also represent parties in care proceedings, for example, acting on behalf of parents or children or Local Authorities.

They can also advise with pre-nuptial agreements before marriage to protect someone's financial interest, advise on the grounds of divorce or civil partnership dissolution. Some family lawyers can specialise in adoption, paternity, reproductive rights, emancipation and other matters not associated with divorce. They are also responsible for overseeing family properties, monitoring mediation meetings and offering legal advice.

Most lawyers have expertise in some practice areas, including housing law, meditation and collaboration law and immigration and asylum law.</p>
            
              
                
              
            </div>
          </div>
          
          <div id="center-container-btn">
  <button id="desc_back" onClick={() => navigate(-1)}>Go back</button>
</div>
        
      </section>
    )
}

export default FamilyLaw;