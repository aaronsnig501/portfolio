import React from 'react'
import Typed from 'react-typed'
import Head from 'next/head'
import styles from './index.module.scss'
import NavigationBar from '../components/Navigation'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Head>
          <title>Aaron Sinnott - Developer</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css" />
          <link rel="canonical" href="https://aaronsinnott.com/" />
          <meta
            name="description"
            content="The portfolio site for Aaron Sinnott, Python, Django and React developer"
          />
          <meta name="robots" content="index, follow" />

          <meta
            property="og:image"
            content={`blob:https://vercel.com/f3168933-9069-4c65-8e57-0fc645e97943`}
          />
          <meta name="og:title" content="Aaron Sinnott - Developer" />
          <meta name="twitter:card" content="blob:https://vercel.com/f3168933-9069-4c65-8e57-0fc645e97943" />
        </Head>

        <NavigationBar />
        
        <section id="home" className={`${styles.header} ${styles.section}`}>
          <div className={styles.hero}>
            <h1>>>> aaron_sinnott = Developer()</h1>
            <p className={styles.heroParagraph}>
              >>> <Typed strings={[
                "aaron_sinnott.description = 'I build web stuff with Python, React and AWS!!!'"]} typeSpeed={70} /></p>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <h2>>>> # aaron_sinnott.about</h2>
          
          <h3>>>> aaron_sinnott.about["overview"]</h3>
          <p>I am a Python developer from the south-east of Ireland and currently living in São Paulo.\n</p>
          <p>I have spent 7 years working almost exclusively in Python and Django, with some experience in .NET, and more recently, ReactJS.\n</p>
          <p>I have a passion for working across the full stack and love to learn all I can about the best practices in whatever the technology may be.\n</p>
          <p>I love learning about new development processes and the automation of those processes to enable me to be as productive as possible, whether it's automated deployments, or the automated generation of documentation.\n</p>
          <p>And aside from computing, I love music and have been playing guitar since I was young. I enjoy sitting down to create and record new music with friends!\n</p>

          <h3>>>> aaron_sinnott.about["technical"]</h3>
          <p>The primary stack that I've worked with throughout my career has the Python/Django with MySQL databases running on Ubuntu.\n</p>
          <p>Almost all of the projects that I've worked on have been hosted on AWS EC2s, with a C# project that ran on Azure.\n</p>
          <p>In addition to development work, I have also work in education and creating course material for Code Institute. And I've worked as mentor, mentoring students to ensure that their projects and code (include their testing, documentation and git usage) met a professional standard.\n</p>
          <p>I spend my time working on personal projects that help me to automate time-consuming processes, learn how to use new technologies and work on projects that I feel could benefit myself and others.\n</p>
          <p>I love using Linux and I've worked primarily with Ubuntu with GNOME as my primary desktop OS for many years, and is my go to OS when setting up a new machine and have worked with Kubuntu and Manjaro.\</p>
        </section>
      </div>
    );
  }
}

export default App;