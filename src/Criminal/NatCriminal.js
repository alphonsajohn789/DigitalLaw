import React, { useRef, useEffect, useState } from 'react';
import './NatCriminal.css';
 
import * as qna from '@tensorflow-models/qna';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const NatCriminal = () => {
    
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
                'Criminal law is a branch of legal jurisprudence that deals with offenses committed against the state or society as a whole. It sets out the rules and procedures for investigating, prosecuting, and punishing individuals who engage in criminal activities. Criminal law aims to maintain order and protect the safety and well-being of the public by defining what constitutes a crime and prescribing penalties for those found guilty.One of the core principles of criminal law is the presumption of innocence. In most legal systems, a person accused of a crime is considered innocent until proven guilty beyond a reasonable doubt. This principle places the burden of proof on the prosecution to establish the defendants guilt.Criminal law encompasses a wide range of offenses, from property crimes like theft and burglary to violent crimes such as assault and murder. Different crimes carry different penalties, and criminal law specifies the punishment for each offense based on its severity. The criminal justice system includes various actors, including law enforcement agencies, prosecutors, defense attorneys, judges, and juries. Each plays a specific role in the process, from investigating crimes to adjudicating cases. Fair and impartial procedures are essential to protect the rights of both the accused and the victims' }
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

export default NatCriminal;
