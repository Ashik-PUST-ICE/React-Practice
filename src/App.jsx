// Path: src\App.jsx



import CondiRender from "./component/CondiRender";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Invoked from "./component/Invoked";
import Loop from "./component/Loop";



const App = () => {


  let marks=90;
  return (
    <div>
      <Header/>

      <Hero/>

      <ContactForm/>

      <Footer/>

      
    
      <h1>{2+6}</h1>

      <h1>{new Date().getTime()}</h1>
      <br></br>

      <button onClick={()=>alert("Hello")}>submit the camel Case</button>

      <img></img>

     

      <h1 className=""> Css Add System</h1>

      <button style={{ color:'blue' }}>Submit Add Css</button>

      <h1 style={{ color:'red' }}>Submit</h1>


      {
      marks> 80?
      <h1>Brilliant result</h1>
      :
      <h1>Average Result</h1>
      }

      <Invoked/>

      <Loop/>

      <CondiRender/>

      <CondiRender/>
      
    </div>

  );
};

export default App;