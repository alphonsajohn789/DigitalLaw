
import { useNavigate } from 'react-router-dom';
import '../style/fam.css';

function Human(){
   
  const navigate = useNavigate();

    

    return(
        <section id="fam" >
        
          <div className="">
            
            <div className="">
              <h2 id='title'>Human Rights Law</h2><br/>
              <p>Human rights are an individual’s rights and freedoms, which form the basis for the relationship between the government and the individual.

Human rights, EU and public law were brought into English law under the Human Rights Act 1998. Any breaches of the European Convention on Human Rights can be dealt with in UK courts, although cases may still be taken to Strasbourg in France as a last resort.</p>
          
          <p>There are three overarching types of human rights legal areas: civil-political, socio-economic, and collective-developmental. The first two are individual persons against their government and are accepted norms identified in international law.</p>
          <p>Human rights law encompasses various treaties and conventions, such as the International Covenant on Civil and Political Rights and the International Covenant on Economic, Social, and Cultural Rights, which are legally binding agreements that obligate states to protect and promote these rights within their territories.</p>
          </div>
          </div>
          
          <div id="center-container-btn">
  <button id="desc_back" onClick={() => navigate(-1)}>Go back</button>
</div>
        
      </section>
    )
}

export default Human;