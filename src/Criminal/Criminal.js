
import { useNavigate } from 'react-router-dom';
import '../style/fam.css';

function Criminal(){
   
  const navigate = useNavigate();

    

    return(
        <section id="fam" >
        
          <div className="">
            
            <div className="">
              <h2 id='title'>Criminal Law</h2><br/>
              <p>Criminal law is the most widely known area of legal practice, with work ranging from motoring offences and murder, to white collar crimes like fraud and corruption.

The majority of criminal defence solicitors will work in areas of general crime, usually in a high street law firm or larger firms focusing on a range of publicly funded work. Some general criminal law firms have the capacity and expertise to undertake white collar crime, although this is traditionally undertaken by specialist firms.</p>
           <p>Criminal law encompasses a wide range of offenses, from property crimes like theft and burglary to violent crimes such as assault and murder. Different crimes carry different penalties, and criminal law specifies the punishment for each offense based on its severity.

The criminal justice system includes various actors, including law enforcement agencies, prosecutors, defense attorneys, judges, and juries. Each plays a specific role in the process, from investigating crimes to adjudicating cases. Fair and impartial procedures are essential to protect the rights of both the accused and the victims.</p>
           </div>
          </div>
          
          <div id="center-container-btn">
  <button id="desc_back" onClick={() => navigate(-1)}>Go back</button>
</div>
        
      </section>
    )
}

export default Criminal;