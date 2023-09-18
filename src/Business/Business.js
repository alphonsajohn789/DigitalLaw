
import { useNavigate } from 'react-router-dom';
import '../style/fam.css';

function Business(){
   
  const navigate = useNavigate();

    

    return(
        <section id="fam" >
        
          <div className="">
            
            <div className="">
              <h2 id='title'>Business Law</h2><br/>
<p>Business law, also known as commercial law, encompasses a wide range of legal principles and regulations that govern the conduct of businesses and commercial transactions. It plays a crucial role in ensuring fair and ethical business practices while providing a legal framework for resolving disputes. Business law covers various areas, including contract law, intellectual property law, employment law, and corporate law.</p>         
<p>One of the fundamental aspects of business law is contract law. Contracts are the cornerstone of business relationships, and business law ensures that contracts are legally binding and enforceable. This area of law defines the rights and obligations of parties entering into agreements and provides mechanisms for addressing breaches of contract.</p>          
     <p>Another essential component of business law is intellectual property protection. This includes trademarks, copyrights, and patents, which safeguard a company's innovations, branding, and creative works from unauthorized use. Business law provides the means to register, enforce, and protect these intellectual property rights.</p>         
          <p>Employment law within business law governs the employer-employee relationship, covering issues such as hiring, termination, workplace discrimination, and wage and hour regulations. Compliance with employment laws is vital to ensure fair and equitable treatment of employees.

Corporate law addresses the formation, operation, and dissolution of business entities such as corporations and limited liability companies (LLCs). It defines the responsibilities of directors, officers, and shareholders and sets rules for corporate governance.</p>
            </div>
          </div>
          
          <div id="center-container-btn">
  <button id="desc_back" onClick={() => navigate(-1)}>Go back</button>
</div>
        
      </section>
    )
}

export default Business;