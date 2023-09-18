import React, { useRef, useEffect, useState } from 'react';
import './NatBusiness.css';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const NatBusiness = () => {
  const navigate = useNavigate();
  const passageRef = useRef(null);
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState(null);
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const loadModel = async () => {
    setLoading(true);
    const loadedModel = await qna.load();
    setModel(loadedModel);
    setLoading(false);
    console.log('Model loaded.');
  };

  const answerQuestion = async (e) => {
    console.log('Button clicked');
    if ( model !== null) {
      console.log('Question submitted.');
      const passage = passageRef.current.value;
      const question = questionRef.current.value;

      setLoading(true);
      const answers = await model.findAnswers(question, passage);
      setLoading(false);

      // Select the top answer
      if (answers && answers.length > 0) {
        setAnswer(answers[0].text);
      } else {
        setAnswer('No answer found.');
      }
    }
  };

  

  useEffect(() => {
    loadModel();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <div className="center-content">
        {model == null ? (
          <div><Loader type="ThreeDots" color="#00BFFF" height={40} width={40} /> <span>Loading... Please Wait...</span></div>
        ) : (
          <div>
            
              <div>
                <h3>Ask your query here</h3>
            <textarea
              ref={passageRef}
              rows="10"
              cols="50"
              hidden
              value={
                'Business law, also known as commercial law, encompasses a wide range of legal principles and regulations that govern the conduct of businesses and commercial transactions. It plays a crucial role in ensuring fair and ethical business practices while providing a legal framework for resolving disputes. Business law covers various areas, including contract law, intellectual property law, employment law, and corporate law. One of the fundamental aspects of business law is contract law. Contracts are the cornerstone of business relationships, and business law ensures that contracts are legally binding and enforceable. This area of law defines the rights and obligations of parties entering into agreements and provides mechanisms for addressing breaches of contract. Another essential component of business law is intellectual property protection. This includes trademarks, copyrights, and patents, which safeguard a companys innovations, branding, and creative works from unauthorized use. Business law provides the means to register, enforce, and protect these intellectual property rights. Employment law within business law governs the employer-employee relationship, covering issues such as hiring, termination, workplace discrimination, and wage and hour regulations. Compliance with employment laws is vital to ensure fair and equitable treatment of employees. Corporate law addresses the formation, operation, and dissolution of business entities such as corporations and limited liability companies (LLCs). It defines the responsibilities of directors, officers, and shareholders and sets rules for corporate governance.'
              }
            ></textarea>
            
            <textarea
              ref={questionRef}
              
              
              size="50"
              disabled={loading}
            ></textarea>
            <br />
            <button onClick={answerQuestion}>Submit Query</button>
              </div>
              
            
            
            
           
            {loading ? (
              <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />
            ) : (
              <div>Response: {answer} <br/><button onClick={() => navigate(-1)}>Go back</button> </div>
              
            
            )}
          </div>
          
        )}
        </div>
        
      </header>
    </div>
  );
};

export default NatBusiness;
