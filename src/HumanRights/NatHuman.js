import React, { useRef, useEffect, useState } from 'react';
import './NatHuman.css';
import { useNavigate } from 'react-router-dom';
import * as qna from '@tensorflow-models/qna';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const NatHuman = () => {
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
                'Human rights law is a branch of international law that seeks to protect the inherent rights and dignity of all individuals, regardless of their nationality, ethnicity, gender, religion, or other characteristics. These rights are considered fundamental and inalienable, and they include civil, political, economic, social, and cultural rights. Human rights law is grounded in the belief that every person should be treated with respect, equality, and fairness.One of the foundational documents in human rights law is the Universal Declaration of Human Rights, adopted by the United Nations General Assembly in 1948. This declaration sets out a comprehensive list of rights, including the right to life, liberty, and security of person; the right to freedom of thought, conscience, and religion; and the right to work, education, and an adequate standard of living.Human rights law encompasses various treaties and conventions, such as the International Covenant on Civil and Political Rights and the International Covenant on Economic, Social, and Cultural Rights, which are legally binding agreements that obligate states to protect and promote these rights within their territories.'
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
              <div>Response: {answer} <br/> <button onClick={() => navigate(-1)}>Go back</button></div>
              
            
            )}
          </div>
          
        )}
        </div>
        
      </header>
    </div>
  );
};

export default NatHuman;
