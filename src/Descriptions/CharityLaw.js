
import { useNavigate } from 'react-router-dom';
import '../style/fam.css';

function CharityLaw(){
   
  const navigate = useNavigate();

    

    return(
        <section id="fam" >
        
          <div className="">
            
            <div className="">
              <h2 id='title'>Charity Law</h2><br/>
<p>Charity law covers the rules relating to the setting up and operation of charities and non-profit organisations. It is an ideal way to combine a career in law with a passion for anything charitable, such as the arts and culture, the environment, human rights, working with young people and sport.</p>         

<p>Charity lawyers either work for a firm specialising in this area or in-house at larger charities.

This type of work includes working on wills and trusts, advising on governance and managing charitable statuses and relationships with the Charity Commission. Charity lawyers often deal with enquiries regarding tax and VAT, inheritance law, data protection, contracts, mergers and takeovers, partnerships, fundraising, political activities and campaigning, trading, gaming and lotteries.

These lawyers may also deal with other areas that affect not-for-profit organisations such as employment law, dealing with land, intellectual property, financial services and media enquiries.They need help to navigate the charity sector's unique legal and regulatory requirements and balance these with commercial objectives.</p>
              
                
              
            </div>
          </div>
          
          <div id="center-container-btn">
  <button id="desc_back" onClick={() => navigate(-1)}>Go back</button>
</div>
        
      </section>
    )
}

export default CharityLaw;