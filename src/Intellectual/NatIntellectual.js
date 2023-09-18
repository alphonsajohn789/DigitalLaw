import React, { useRef, useEffect, useState } from 'react';
import './NatIntellectual.css';
import { useNavigate } from 'react-router-dom';
import * as qna from '@tensorflow-models/qna';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const NatIntellectual = () => {
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
              'Intellectual property law is a legal framework that safeguards the creations of the human mind. It grants individuals and organizations exclusive rights to their intellectual and creative works, providing incentives for innovation and creativity while protecting these assets from unauthorized use or reproduction. Intellectual property encompasses various forms of creative expressions, including patents for inventions, copyrights for literary and artistic works, trademarks for brands and logos, and trade secrets for confidential business information. One crucial aspect of intellectual property law is patents. Patents provide inventors with exclusive rights to their inventions for a specified period, allowing them to control how their inventions are used, sold, or licensed. This protection encourages inventors to disclose their innovations to the public, fostering technological advancement. Copyrights, on the other hand, protect literary, artistic, and creative works, such as books, music, paintings, and software. Copyright holders have the exclusive right to reproduce, distribute, and adapt their works. This protection incentivizes authors, artists, and creators to produce new and original content.Trademarks play a vital role in branding and marketing. They protect distinctive signs, symbols, or names used to identify goods or services and prevent others from using similar marks that could cause confusion among consumers.Trade secrets are valuable business assets, including confidential information like formulas, processes, or customer lists. Intellectual property law protects trade secrets by allowing businesses to take legal action against those who unlawfully obtain or disclose such information.'
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

export default NatIntellectual;
