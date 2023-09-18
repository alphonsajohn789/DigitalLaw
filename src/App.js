import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
//import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
// import Portfolio from "./Components/Portfolio";
import Search from './Search/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./Components/Register";
import Login from "./Components/Login";
import AdminHome from './Admin/AdminHome';
import Dashboard from "./Dashboard";
import New_Appointment from './Appointment/New_Appointment';
import ViewUsers from './Admin/ViewUsers';
import ViewAppointments from "./Admin/viewAppointments";
import FamilyLaw from "./Descriptions/FamilyLaw";
import CivilLaw from "./Descriptions/CivilLaw";
import CharityLaw from "./Descriptions/CharityLaw";
import Natural from "./NaturalLang/Natural";
import NatCharity from "./Charity/NatCharity";
import NatBusiness from "./Business/NatBusiness";
import Business from "./Business/Business";
import Criminal from "./Criminal/Criminal";
import NatCriminal from "./Criminal/NatCriminal";
import Human from "./HumanRights/Human";
import NatHuman from "./HumanRights/NatHuman";
import Intellectual from "./Intellectual/Intellectual";
import NatIntellectual from "./Intellectual/NatIntellectual";
import Civil from "./Civil/Civil";
import NatCivil from "./Civil/NatCivil";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <>
      {/* <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
        
        
      </div> */}
      <div>
      {/* <BrowserRouter> */}
        <Routes>
         <Route path="/" element={<><Header data={this.state.resumeData.main}/> <About data={this.state.resumeData.main}/> <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} /></> } />
        
          <Route path = "/search" element={<Search/>} />
          <Route path = "/register" element={<Register/>} />
          <Route path = "/login" element={<Login/>} />
          <Route path = "/admin" element={<AdminHome/>} />
          <Route path = "/dashboard" element={<Dashboard />} />
          <Route path = "/appointment" element={<New_Appointment/>} />
          <Route path = "/users" element={<ViewUsers/>} />
          <Route path = "/view_appointments" element={<ViewAppointments/>} />
          <Route path = "/FamilyLaw" element={<FamilyLaw/>} />
          <Route path = "/CivilLaw" element={<CivilLaw/>} />
          <Route path = "/CharityLaw" element={<CharityLaw/>} />
          <Route path = "/Natural" element={<Natural/>} />
          <Route path = "/NatCharity" element={<NatCharity/>} />
          <Route path = "/NatBusiness" element={<NatBusiness/>} />
          <Route path = "/Business" element={<Business/>} />
          <Route path = "/NatCriminal" element={<NatCriminal/>} />
          <Route path = "/Criminal" element={<Criminal/>} />
          <Route path = "/NatHuman" element={<NatHuman/>} />
          <Route path = "/Human" element={<Human/>} />
          <Route path = "/NatIntellectual" element={<NatIntellectual/>} />
          <Route path = "/Intellectual" element={<Intellectual/>} />
          <Route path = "/NatCivil" element={<NatCivil/>} />
          <Route path = "/Civil" element={<Civil/>} />
          <Route path = "/About" element={<About/>} />
          
        </Routes>
      {/* </BrowserRouter> */}
      </div>
      </>
    );
  }
}

export default App;
