/*jshint esversion: 6 */

import React from 'react';
import Header from '../components/header';
import Intro from '../components/intro';
import Title from '../components/title';
import Project from '../components/project';
import Footer from '../components/footer';
import styles from '../pages/global.css';

export default App => (
    <div className="container">
      <div className="content-container">
        <Header />
        <Intro
          headerText="Hi, I'm Joel Brewster."
          introTop="I am a passionate, curious and enthusiastic developer with a penchant for front-end development and interfaces."
          introMiddle="I enjoy creating engaging experiences and coding pixel perfect websites."
          introBottom="I love front-end development, doing good in the world, studying, music and chocolate"
          introLove=""
        />
      </div>
      <div className="content-container">
        <section>
          <div className="container-top">
            <Title text="Projects" />
            <Project
              name="MID"
              link="https://mid.org.au"
              summary="Melbourne Innovation Districts (MID) is a partnership between the City of Melbourne, RMIT University, and the University of Melbourne, to develop urban innovations in Melbourne, for the benefit of the whole city."
            />
            <Project
              name="Queens Place Melbourne"
              link="https://queensplacemelbourne.com.au/"
              summary="Queens Place is situated at the verge of Flagstaff Hill— Melbourne’s highest point. From this elevated position on historic Queens Street, the soaring, distinctive forms of its twin towers will become a prominent feature on the CBD skyline."
            />
            <Project
              name="Paramount House Hotel"
              link="https://paramounthousehotel.com"
              summary="Paramount House Hotel is located in the former headquarters of Paramount Picture Studios; alongside co-tenants Golden Age Cinema, Paramount Coffee Project, The Office Space and Paramount Recreation Club."
            />
            <Project
              name="CMC Rocks"
              link="https://www.cmcrocks.com"
              summary="The biggest event on the Australian country music calendar, CMC Rocks this year played host to a record-breaking 20,000 music lovers, who descended on Willowbank to catch their favourite local and international music idols live in action."
            />
            <Project
              name="Now Sound"
              link="https://www.nowsound.online"
              summary="Now Sound is a feature length documentary exploring Melbourne’s love for music. Guided by a plethora of culturally relevant artists, the film focuses on the vibrant music scene of Melbourne’s inner northern suburbs. Showcasing unique artists and exalting subcultures, Now Sound documents the trials and tribulations that constantly threaten to demolish Melbourne’s iconic music culture and the unending passion that revives and sustains it. Music is the voice of culture; Now Sound is a documentary about listening."
            />
            <Project
              name="JBL Weekend Warrior Challenge"
              link="https://www.jblwwc.com.au"
              summary=" To celebrate the launch of JBL’s new Reflect and Endurance sports headphones, JBL are bringing a one-of-a-kind Weekend Warrior Challenge."
            />
            <Project
              name="DJ John Howard"
              link="http://www.djjohnhoward.com"
              summary="Former Australian Prime Minister now turned DJ."
            />
            <Project
              name="Melbourne Writers Festival 2018"
              link="http://mwf.com.au"
              summary="Melbourne Writers Festival is Victoria's winter celebration for readers, writers and thinkers. MWF brings together writers from
              around the world to celebrate literature, explore ideas, and inspire readers."
            />
            <Project
              name="Invictus Games"
              link="http://invictusgames2018.org/"
              summary="The Invictus Games is an international adaptive multi-sport event, created by Prince Harry, in which wounded, injured or sick armed services personnel and their associated veterans take part in sports including wheelchair basketball, sitting volleyball, and indoor rowing."
            />
            <Title text="Past Projects" />
            <Project
              name="Rothelowman"
              link="http://rothelowman.com.au/"
              summary="Rothelowman is a design-led and people-driven architecture, interior design and urban planning practice that is invested in future-oriented places and spaces."
            />
            <Project
              name="iConnect Financial"
              link="http://iconnectfinancial.com.au/"
              summary="iConnect financial is a platform that showcases local brokers that have been specifically chosen for their expertise, reliability and friendly service."
            />
            <Project
              name="Bingefest"
              link="http://bingefest.sydneyoperahouse.com/"
              summary="BingeFest was a festival at the Sydney Opera House. The festival featured Shia LaBeouf, Dan Harmon (Harmontown), Julie Snyder, Jad Abunrad and others."
            />
            <Project
              name="The 5th"
              link="http://www.the5th.co/"
              summary="The 5th.co is a fashion lifestyle brand. Limited edition products and collaborations exclusively available on the 5th of each month."
            />
            <Project
              name="Zero Player - Online"
              link="https://joelbrewster.github.io/zero-player/index.html"
              summary="This app is personal project. It is an audio interface that creates random melodies and chords from cellular automation patterns. A user can interact with the app via a monome (OSC device), computer keyboard or with just the mouse. Please use a modern browser like Google Chrome of Firefox to get the full experience."
            />
            <Project
              name="Zero Player - App"
              link="https://github.com/joelbrewster/zero-player-app/releases/download/0.1/zero-player.zip"
              summary="If you're on Mac OS, try downloading this as a standalone app."
            />
          </div>
        </section>
        <Footer text="✉️️ hi @ this domain name" />
      </div>
    </div>
)
