import React from 'react';
import { Typography, Toolbar, AppBar, CardMedia, IconButton, Card, CardContent, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Project from './projects.js';
import style from './styling.module.css';
import logo from './static/logo.png';
import doge from './static/doge.jpg';
import energy from './static/energy.png';
import oh from './static/oh-online.png';
import tanks from './static/tanks.png';
import mcm from './static/MCM.png';
import mcmpaper from './static/MCM.pdf';
import cmcm from './static/CMCM.png';
import cmcmpaper from './static/CMCM.pdf';
import canada from './static/canada.png';
import cds from './static/CDS.png';
import resume from './static/Resume23.pdf';
import hackathon from './static/hosphacks.jpg';
import covidinsights from './static/covidinsights.png';
import kaggle from './static/electionprediction.png';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
const projects = [
  {
    title: 'Kaggle Competition: Predicting the 2016 Election',
    summary: 'Final project for CS 4780 Intro to Machine Learning. 4th Place with 86% accuracy when predicting by counties.',
    image: kaggle,
    description: 'We utilized SVM, KNN, and Deep Neural Network combined with Linear Classifier models for this project. Our SVM and KNN models with basic and generic features from the given dataset performed moderately well with accuracies up to 72% and 69% respectively. The DNN and Linear Classifier combined model performed with up to 86% accuracy. We also created a separate standard feed forward Neura Network that achieved similar accuracies but with much higer variance, so we stuck with the other model as our primary submission.',
    link: "https://github.com/JSun14/election-county-prediction",
  },
  {
    title: 'Covid-19 Analysis',
    summary: 'Final paper written for ENGRD 2700 Basic Probability and Statistics. Used Python (specifically pandas and matplotlib) to conduct analysis on publicly available data',
    image: covidinsights,
    description: 'Found results that validate various circulated hypotheses and assumptions about the virality, lethality, and public behavior with respect to the virus. Performed a case study analysis between Ohio, Virginia, Washington, and Wyoming due to their different major industries that contribute to their GDP, population sizes, urban to rural ratio, public policy, as well as their population demographics.',
    link: "https://github.com/JSun14/CovidInsights",
  },
  {
    title: 'Repository for Data Science Tutorials',
    summary: 'Part of our outreach program for Cornell Data Science where we make tutorials for Data Science Beginners',
    image: cds,
    description: 'This was one of the projects the education subteam for CDS tackled for Spring 2020. The plan is to upload more tutorials as we go on, but so far the only tutorial up is the one on Network Analysis. This was done by Tanmay Bansal (our team lead), Raye Liu, and I (I took the role of leading this subproject and completing it over the summer). ',
    link: "https://cornelldatascience.github.io/Education-Immersive-Tutorials/networkAnalysis.html",
  },
  {
    title: 'OCaml My Tanks',
    summary: 'OCaml tanks game inspired from Wii-Play Tanks for CS 3110 Final Project',
    image: tanks,
    description: 'Shoutout to my teammates Shihao Cao and Kaitlyn Chen for building this with me (using only OCaml). This game, modeled off Wii-Play Tanks, is a single player game where the player attempts to shoot other tanks before one\'s own tank is shot by enemy tanks. I was in charge of primarily making all of the physics interactions from scratch such as tank and projectile motion, interactions with walls/ditches/enemy and player tanks, as well as helping out in miscellaneous facets with the setup of the game/world states.',
    link: "https://github.com/JSun14/final3110",
  },
  {
    title: 'Automated Queueing for Online Office Hours',
    summary: 'Online office hours web app project for Cornell Students (responsible for the front-end)',
    image: oh,
    description: 'While on spring break during quarantine awaiting for school to start, a lead on CDS asked if anyone wanted to help build an online-office hours web app with him for when school resumes. I joined and was in charge of the front-end for the project, using React to create it. The app was never deployed officially once school started as we all became too busy to finish it. ',
    link: "https://github.com/bayoumi17m/oh-online",
  },
  {
    title: 'MCM',
    summary: 'Paper submitted for the Mathematical Competition in Modeling',
    image: mcm,
    description: 'Shoutout to my teammates Kevin Zhou and Peter Wu. This paper\'s problem statement was to model plastic waste and what actions could be taken to reduce its impact on the globe. The first part of our analysis consisted of determining the maximum amount of plastic waste that countries across the globe could properly handle and dispose of safely. The second section begins a thorough policy investigation into viable policies to reduce plastic waste generation. The final section dives into the implications of such policies and their disparities in impact for different countries across the globe.',
    link: mcmpaper,
  },
  {
    title: 'Energy Usage Over The Years',
    summary: 'Submission for a competition/project for my ENGRD 2720 Data Science For Engineers class',
    image: energy,
    description: 'This was a submission for a class competition where I won for having the best visualization as selected by Professor Wagner of the ECE Department (thanks). I chose a radially stacked bar chart in order to show the change of each sector\'s energy usage over time relative to others as well.',
    link: "https://github.com/JSun14/Energy-Visualization",

  },
  {
    title: 'CMCM',
    summary: 'Our paper, one of the Runner-up papers, in Cornell\'s Mathematical Competition in Modeling',
    image: cmcm,
    description: 'Shoutout to my teammates Kevin Zhou and Peter Wu. This paper\'s problem statement was to investigate the sidewalks of Ithaca. This involved first determining a model to prioritize which sidewalks to repair and then determining the cheapest procedure from which to repair the sidewalks. Lastly we projected the budget increases and expenditures over the next several decades and provide solutions for how to manage these increases.',
    link: cmcmpaper,
  },
  {
    title: 'Canadian Politics Visualization',
    summary: 'Final Project submitted for Info 1998: Intro to Machine Learning',
    image: canada,
    description: 'Shoutout to my partner Kevin Zhou. For this project we decided to investigate Canadian elections and which factors play a subconscious role in influencing candidates\'s elections. I was in charge of one visualization (Canada Heatmap) and one machine learning model (perceptron).',
    link: "https://github.com/JSun14/Canadian-Politics-",
  },

  {
    title: 'INFO 1998',
    summary: 'TA for Introduction to Machine Learning taught by Cornell Data Science (offered in the spring and fall, check it out!)',
    image: cds,
    description: 'This is one of our founding purposes as the Education subteam for CDS. We host this class every semester in the hopes of just introducing machine learning topics and data science to anyone who wants to take a low commitment class just to get their feet wet. We review and edit slides/curriculum and hold office hours with worrkshops interspersed throughout the semester. ',
    link: "https://cornelldatascience.github.io/info1998/",
  },

  {
    title: 'Hospitality Hackathon',
    summary: 'This was a hackathon centered around helping Hilton to improve their hospitality. My team (L\'Hospitality) won 1st place for our category as well as the grand prize award.',
    image: hackathon,
    description: 'Shoutout to my teammates Rachel Zhou and Max Li. My teammates and I gained valuable insight from a former Cornell Hotelie and alumni who was at Hilton. Our solution focused on alleviating the issue of staff injuries resulting from cleaning too many rooms in a short time span through optimized clustering of guests as well as location tracking permissions via the Hilton Honors App which would also provide travelers a better night\'s sleep.',
    link: 'https://news.cornell.edu/stories/2019/10/hackathon-merges-data-savvy-passion-hospitality',
  }
]


function App() {
  return (
    <React.Fragment>
      <div className={style.scroll}>
        <AppBar style={{ background: '#424242' }} className={style.toolbar} position='relative'>
          <Toolbar >
            <IconButton edge="start" color="inherit" target="_blank" href="https://github.com/JSun14">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" target="_blank" href="https://www.linkedin.com/in/jerry-sun-50b660182/">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <img src={logo} className={style.logo} alt="Logo" />
            <IconButton color="inherit" target="_blank" href={resume}>
              <DescriptionRoundedIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" href="mailto:sun.jerry.2000@gmail.com">
              <MailIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main>
          <Grid container className={style.feature}>
            <Grid item xs={6} >
              <Card elevation={0} square={true} >
                <CardContent className={style.intro}>
                  <Typography variant="h6" className={style.whitetext}>
                    <b>Hi I'm Jerry, a sophomore attending Cornell with interests in data science and software engineering career opportunities.
                    I am currently doing research in Professor Fengqi You's group. I am also involved in Cornell Data Science where I help manage the student run
                    class and create data science tutorials.
                      </b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <img src={doge} className={style.cover} />
            </Grid>
          </Grid>
          <Grid className={style.root} justify="space-between" container spacing={8}>
            {projects.map((post) => (
              <Project post={post} />
            ))}
          </Grid>
        </main>
      </div>
    </React.Fragment >
  );
}

export default App;
