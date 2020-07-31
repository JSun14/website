import React from 'react';
import { Typography, Toolbar, AppBar, CardMedia, IconButton, Card, CardContent, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
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
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
const projects = [
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
]


function App() {
  return (
    <React.Fragment>
      <div className={style.scroll}>
        <AppBar className={style.toolbar} position='relative'>
          <Toolbar className={style.toolbar}>
            <IconButton color="inherit" target="_blank" href="https://github.com/JSun14">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" target="_blank" href="https://www.linkedin.com/in/jerry-sun-50b660182/">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" target="_blank" href={resume}>
              <DescriptionRoundedIcon fontSize="large" />
            </IconButton>
            <img src={logo} className={style.logo} alt="Logo" />

          </Toolbar>
        </AppBar>
        <main>
          <Grid container className={style.feature}>
            <Grid item xs={6} >
              <Card elevation={0} square={true} >
                <CardContent className={style.intro}>
                  <Typography variant="h6" className={style.whitetext}>
                    <b>Hi I'm Jerry. I am currently a sophomore attending Cornell University.
                    I am interested in data science/analytics and software engineering career opportunities.
                    On the side, I like to keep up with politics and public policy.
                    Below you'll find some projects that I've done over the years.
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
