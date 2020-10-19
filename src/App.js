import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {
        "main": {
          "name": "Elaouani Saad",
          "occupation": "Front-End Engineer, currently employed by PIMAN 2.0 where I work as a Digital Engineer (ReactJs, Angular 9)",
          "description": "Javscript, Java and new tech enthusiast.",
          "image": "profilepic.jpg",
          "bio": "I am an athlete at heart, with an entrepreneurial spirit, and a passion for coding. Graduated in engineering of the web and mobile computing at ENSIAS, I pursued my first development job to kick off my career. I was hired as a Digitale developer by PIMAN 2.0, where I still work today. Diving into web developement and learning each day",
          "contactmessage": "Here is where you should write your message to readers to have them get in contact with you.",
          "email": "sa.elaouani@gmail.com",
          "phone": "00-212-66-49-01-294",
          "address": {
            "street": "Residence Az-zouhour, Ain Sebaa",
            "city": "Casablanca",
            "state": "",
            "zip": "20250"
          },
          "website": "http://www.timbakerdev.com",
          "resumedownload": "/MyResume.pdf",
          "social": [
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/in/saad-elaouani-199b5a171/",
              "className": "fa fa-linkedin"
            },
            {
              "name": "github",
              "url": "https://github.com/SaadEla",
              "className": "fa fa-github"
            }
          ]
        },
        "resume": {
          "skillmessage": "Here you can create a short write-up of your skills to show off to employers",
          "education": [
            {
              "school": "National Higher School of Computer Science and Systems Analysis - ENSIAS",
              "degree": "Engineer diploma in Web Engineering and Mobile Computing",
              "graduated": "July 2020",
              "description": "This was a very hands-on experience focused more on building projects than general theory. Here I created web, desktop and mobile applications, small video games, designed and implemented IP networks. I was also introduced to dataMining, dataWarehouse and some quality aspects like CMMI and ISO 9126."
            },
            {
              "school": "Résidence - GSR",
              "degree": "Preparatory Classes - MPSI (Mathematics, Physics Engineering Sciences)",
              "graduated": "June 2016",
              "description": "2 years of mathematics and statistics studies where I got much more training in the theory, concepts and science behind more complex programming."
            }
          ],
          "work": [
            {
              "company": "PIMAN 2.0",
              "title": "Digital engineer",
              "years": "September 2010 - Present",
              "description": "For most of my time at Piman 2.0, I am working as a Front-End Engineer. Here I have the chance to dig in and get my hands dirty with new projects. Until now i manage the front-End work of the new project MYPitch. Tech used: Angular 9, Rest API, Git"
            },
            {
              "company": "",
              "title": "Front-End Developer Intern",
              "years": "February 2020 - July 2020",
              "description": "For 6 month of work, i led the front-end development of V2 of our Piman Discuss web application as well building tests and implementing CI process. I have worked extensively with ReactJs/MobX, Jest, Enzyme, GitlabCI, SonarQube, Rest API"
            }
          ],
          "skills": [
            {
              "name": "Git",
              "level": "60%"
            },
            {
              "name": "ReactJS",
              "level": "60%"
            },
            {
              "name": "Angular",
              "level": "50%"
            },
            {
              "name": "Spring Boot",
              "level": "50%"
            },
            {
              "name": "Javascript",
              "level": "70%"
            },
            {
              "name": "Java",
              "level": "50%"
            },
            {
              "name": "SCRUM",
              "level": "80%"
            },
            {
              "name": "Web Services and protocols",
              "level": "60%"
            },
            {
              "name": "Testing & QA",
              "level": "60%"
            }
          ]
        },
        "portfolio": {
          "projects": [
            {
              "title": "Location Maison AirBnb",
              "category": "plateforme de location de maison inspiré par AirBNB",
              "image": "locatmaison.png",
              "url": "https://github.com/SaadEla/LocationMaisonFront"
            },
            {
              "title": "Application de gestion de projet",
              "category": "Application web qui permet la communication entre les membres d'une équipe",
              "image": "s3.PNG",
              "url": "https://github.com/SaadEla/Application-Web-gestion-projet"
            },
            {
              "title": "Refonte de JPTRACK",
              "category": "Refonte du logiciel JPTACK",
              "image": "jpco.png",
              "url": "https://github.com/SaadEla/Reporting2"
            },
            {
              "title": "Piman Discuss",
              "category": "Application web de travail collaborative",
              "image": "discuss.png",
              "url": "#"
            }
          ]
        },
        "testimonials": {
          "testimonials": [
            {
              "text": "I'm working with Saad right now, he's very ambitious and a quality person, glad to collaborate with him",
              "user": "Ayoub Laaziz. Mobile developer (React native, Android & Ios) at Piman 2.0"
            },
            {
              "text": "J’ai apprécié de travailler avec Saad car il a pu apprendre durant une courte période un nouveau langage de programmation, tenir ces engagements en temps et en qualité, faire une conception d’application selon les normes et tout cela avec une très bonne communication et dans la bonne humeur. Continue comme ça. Tu iras loin",
              "user": "Jalal Youssef BOUIMADAGHANE. Co Founder & Managing Director - JP & Co"
            }
          ]
        }
      }

    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
