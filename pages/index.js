import React from 'react'
import fetch from 'node-fetch'
import Typed from 'react-typed'
import Head from 'next/head'
import styles from './index.module.scss'
import NavigationBar from '../components/Navigation'

class App extends React.Component {
  state = {
    "repos": []
  }

  componentDidMount = async () => {
    let data = await fetch("https://api.github.com/users/aaronsnig501/repos");

    data.json().then((data) => {
      this.setState({"repos": data});
    });
  }

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

        <section id="skills" className={styles.section}>
          <h2>>>> # aaron_sinnott.skills</h2>

          <h3>>>> aaron_sinnott.skills["python"]</h3>
          <p>Over the years I have work primarily in Python and Django. In addition to this, I have also spent some time working with Flask and also some a little experience with some other frameworks like CherryPy and Bottle.\n</p>
          <p>I've worked primarily with the Django ORM with MySQL databases, but I have also worked in PostreSQL and a little in MongoDB, with some experience with SQLAlchemy.\n</p>
          <p>I have experience deploying these applications to both Heroku and AWS EC2, as well as automating build processes through Travis.\n</p>

          <h3>>>> aaron_sinnott.skills["fullstack"]</h3>
          <p>Most of the projects that I have worked on have all been across the fullstack, so I experience with HTML, CSS and Javascript. I have experience working on responsive sites with frameworks like Bootstrap and Materialize, as well a mobile-first principles when working with media queries.\n</p>
          <p>I have recently been working in React and am currently working on building up some projects using React, Next.js and ES6+.\n</p>

          <h3>>>> aaron_sinnott.skills["aws"]</h3>
          <p>I have experience in working with multiple everyday AWS services like EC2, Route 53 and S3, as well as some extra services like Translate, Polly and Comprehend.\n</p>
          <p>I have deployed Django and bottle applications to EC2 using Apache, React projects to Amplify and registered and assigned domains using Route 53.\n</p>
          <p>I am also very interested in delving further into this in the future to look at extra automation services like CodeBuild, CodeDeploy, etc., so that I can manage all of my deployments using automation.\n</p>
        </section>

        <section id="portfolio" className={styles.section}>
        <h2>>>> # aaron_sinnott.work</h2>

        <h3>>>> aaron_sinnott.work["history"]</h3>
        <p>The first project that I was assigned to work on was a Django project that was running on EC2s, with an Angular 1 frontend and PostgreSQL database with my second project also being a Django project which was hosted on Linode, which a pure HTML, CSS and JS/jQuery frontend and and MySQL database.\n</p>
        <p>After this I spent some time working on a couple of C# projects, both on desktop, and an dashboard using ASP.NET MVC and ChartJS.\n</p>
        <p>After working in .NET, I went back to working in Python and Django for Code Institute where I work on building learning material aimed at career changes that were new to coding. During this period, in addition to building course material, I also worked on the learning platform which is built in Django and hosted on EC2, with both a MySQL and MongoDB.\n</p>
        <p>I left my role as a developer in Code Institute to move to Brazil to be with my girlfriend, but I continue to work with them as a mentor, helping students to build their projects to a professional standard, as well as offering career related advice, and mock interviewing them in preparation for real-world interviews.</p>
        <p>In addition to mentoring, I've also been working on <a href="http://decyphr.net/">decyphr</a>, an app that I started to help myself to learn Portuguese, which I hope to be able to offer on a larger scale in the future.\n</p>

        <h3>>>> aaron_sinnott.work["github"]</h3>
      
        {this.state.repos.map((repo, item) => {
          return (
            <div className={styles.github}>
              <a href={repo.html_url} target="_blank" key={item}>{repo.name}</a>
              <p>{repo.description}</p>
            </div>
          )
        })}
     </section>
      </div>
    );
  }
}

export default App;