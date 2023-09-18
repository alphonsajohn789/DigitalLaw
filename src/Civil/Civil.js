
import { useNavigate } from 'react-router-dom';
import '../style/fam.css';

function Civil(){
   
  const navigate = useNavigate();

    

    return(
        <section id="fam" >
        
          <div className="">
            
            <div className="">
              <h2 id='title'>Civil Litigation Dispute Resolution Law</h2><br/>
<p>A civil litigation/commercial dispute resolution solicitor tries to resolve their client’s disputes. Matters dealt with by these solicitors can include landlord and tenant issues, neighbour disputes, unpaid bills, professional negligence, breach of contracts and/or agreements, intellectual property disputes and general business disputes.</p>
 <p>One key aspect of civil litigation is the formalized legal process that both parties must follow. This process typically involves the filing of a complaint by the plaintiff, which outlines the claims and issues in dispute. The defendant is then served with the complaint and has the opportunity to respond. Subsequent stages may include discovery, where both sides gather evidence, and pre-trial motions to address legal issues.</p>
 <p>Ultimately, civil litigation cases may be resolved through various means, including negotiation, mediation, arbitration, or a trial. Negotiation and mediation involve parties working together to reach a settlement, while arbitration involves a neutral third party making a binding decision. If no settlement is reached, the case proceeds to trial, where a judge or jury renders a verdict.</p>
 </div>
          </div>
          
          <div id="center-container-btn">
  <button id="desc_back" onClick={() => navigate(-1)}>Go back</button>
</div>
        
      </section>
    )
}

export default Civil;