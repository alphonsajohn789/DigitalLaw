import React, { useRef, useEffect, useState } from 'react';
import './NatCivil.css';

import * as qna from '@tensorflow-models/qna';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const NatCivil = () => {
    
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
            'Civil litigation dispute resolution law is a legal field that deals with the resolution of disputes through court proceedings when individuals, organizations, or entities cannot reach an agreement outside of court. It encompasses a wide range of civil cases, including contract disputes, personal injury claims, property disputes, employment disputes, and more. The primary goal of civil litigation is to provide a fair and impartial forum for parties to present their arguments, gather evidence, and obtain a legal resolution to their conflicts.One key aspect of civil litigation is the formalized legal process that both parties must follow. This process typically involves the filing of a complaint by the plaintiff, which outlines the claims and issues in dispute. The defendant is then served with the complaint and has the opportunity to respond. Subsequent stages may include discovery, where both sides gather evidence, and pre-trial motions to address legal issues.Ultimately, civil litigation cases may be resolved through various means, including negotiation, mediation, arbitration, or a trial. Negotiation and mediation involve parties working together to reach a settlement, while arbitration involves a neutral third party making a binding decision. If no settlement is reached, the case proceeds to trial, where a judge or jury renders a verdict.'
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
              <div>Response: {answer} <br/><a href='http://localhost:3000/' >Go Back </a> </div>
              
            
            )}
          </div>
          
        )}
        </div>
        
      </header>
    </div>
  );
};

export default NatCivil;
