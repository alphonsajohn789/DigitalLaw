
import { useNavigate } from 'react-router-dom';
import '../style/fam.css';

function CivilLaw(){
   
  const navigate = useNavigate();

    

    return(
        <section id="fam" >
        
          <div className="">
            
            <div className="">
              <h2 id='title'>Civil Litigation Dispute Resolution Law</h2><br/>
<p>A civil litigation/commercial dispute resolution solicitor tries to resolve their client’s disputes. Matters dealt with by these solicitors can include landlord and tenant issues, neighbour disputes, unpaid bills, professional negligence, breach of contracts and/or agreements, intellectual property disputes and general business disputes.</p>
              <p>When a client initially comes to the solicitor for advice, it is the solicitor’s job to evaluate the claim and advise the client on the next steps that should be taken. To do this, the solicitor must read through all the relevant documentation received from the client and formulate an opinion on the client’s prospects of success.

The solicitor might advise the client that their claim is not particularly strong and therefore they should try and settle it as soon as possible. Alternatively, the solicitor might advise the client that a claim that has been issued against them is weak and that they have a good defence.

Civil litigation/dispute resolution solicitors issue court proceedings and deal with disclosure and drafting witness statements. They instruct Counsel to attend the trial, prepare trial bundles and all the documentation required by the court both pre- and post-trial.

Civil litigation/ dispute resolution solicitors frequently attend mediation and/or settlement meetings whereby all the parties sit round a table and try to come to an agreement. Depending on the type of dispute, arbitrations as another form of Alternative Dispute Resolution are also popular.

Depending on the type of firm you work for, there may be an opportunity to do some advocacy by representing your client at interim court applications, case management conferences and pre-trial hearings.

The solicitor will attend conferences with Counsel and the client to discuss the case and preparations for trial. At the trial, the solicitor has a dual role; they are there to assist the barrister if they have any queries about the case or need instructions and also to ensure that the client understands what is happening around them, as court can be quite terrifying for lay people.</p>
              
                
              
            </div>
          </div>
          
          <div id="center-container-btn">
  <button id="desc_back" onClick={() => navigate(-1)}>Go back</button>
</div>
        
      </section>
    )
}

export default CivilLaw;