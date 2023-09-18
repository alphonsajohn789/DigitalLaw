import React, { useRef, useEffect, useState } from 'react';
import './NatCharity.css';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const NatCharity = () => {
    
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
                'Charity law is a complex and ever-evolving area of legal regulation that governs the activities of nonprofit organizations and charitable institutions. Its primary purpose is to ensure that these entities operate in a manner consistent with their charitable objectives and that they use their resources for the public benefit. Charity law varies from country to country, but there are common principles that typically apply.One of the fundamental aspects of charity law is the requirement for organizations to have a clear charitable purpose. This purpose must be for the public benefit, such as relieving poverty, advancing education, promoting health, or any other purpose recognized as charitable in the jurisdiction. Furthermore, charities must demonstrate that they provide a tangible public benefit and are not driven primarily by private gain.Another critical element of charity law is transparency and accountability. Charities are often required to provide financial reports and disclose how they use their funds to ensure they are fulfilling their charitable objectives. These regulations are designed to maintain the publics trust in the charitable sector.'
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

export default NatCharity;
