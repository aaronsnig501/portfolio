import React from 'react'
import fetch from 'node-fetch'
import Typed from 'react-typed'
import Head from 'next/head'
import Router from 'next/router'
import useSWR from 'swr'
import styles from './index.module.scss'
import NavigationBar from '../../components/Navigation'
import withLocale from '../../hocs/withLocale'
import useTranslation from '../../hooks/useTranslation'

class Repo {
  name: string
  description: string
  html_url: string
}

function formatRepo(repo: any): Repo {
  return {
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url
  }
}

const App: React.FC = () => {
  const [repos, setRepos] = React.useState<Array<Repo>>([])
  const [email, setEmail] = React.useState<string>('')
  const [name, setName] = React.useState<string>('')
  const [message, setMessage] = React.useState<string>('')
  const [response, setResponse] = React.useState<string>('')

  const fetcher = url => fetch(url)
    .then(r => r.json())
    .then(data => setRepos(data.map((repo: any) => formatRepo(repo))))

  const { data } = useSWR('https://api.github.com/users/aaronsnig501/repos', fetcher)
  const { t } = useTranslation()

  React.useEffect(() => {}, [response])

  React.useEffect(() => {
    window.addEventListener('keyup', upHandler)
  }, [])

  const upHandler = e => {
    if (e.altKey && e.key === 't') {
      Router.push('/terminal')
    }
  }

  const handleSubmission = async e => {
    e.preventDefault()

    let data = {
      'email': email,
      'name': name,
      'message': message
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }

    fetch(process.env.API, requestOptions)
      .then(response => response.json())
      .then(data => setResponse(data['message']))
  }

  return (
    <div className="App">
      <Head>
        <title>Aaron Sinnott - Developer</title>
        <link rel="icon" href="/favicon.ico" />
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
          <h1>&gt;&gt;&gt; {t("heroHeading")}</h1>
          <p className={styles.heroParagraph}>
          &gt;&gt;&gt; <Typed strings={[t("heroParagraph")]} typeSpeed={70} /></p>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <h2># {t("aboutHeader")}</h2>
        
        <h3>&gt;&gt;&gt; {t("aboutOverviewHeader")}</h3>
        <p>{t("aboutOverviewParagraphOne")}</p>
        <p>{t("aboutOverviewParagraphTwo")}</p>
        <p>{t("aboutOverviewParagraphThree")}</p>
        <p>{t("aboutOverviewParagraphFour")}</p>
        <p>{t("aboutOverviewParagraphFive")}</p>

        <h3>&gt;&gt;&gt; {t("aboutTechnicalHeader")}</h3>
        <p>{t("aboutTechnicalParagraphOne")}</p>
        <p>{t("aboutTechnicalParagraphTwo")}</p>
        <p>{t("aboutTechnicalParagraphThree")}</p>
        <p>{t("aboutTechnicalParagraphFour")}</p>
        <p>{t("aboutTechnicalParagraphFive")}</p>
      </section>

      <section id="skills" className={styles.section}>
        <h2># {t("skillsHeader")}</h2>

        <h3>&gt;&gt;&gt; {t("skillsPythonHeader")}</h3>
        <p>{t("skillsPythonParagraphOne")}</p>
        <p>{t("skillsPythonParagraphTwo")}</p>
        <p>{t("skillsPythonParagraphThree")}</p>

        <h3>&gt;&gt;&gt; {t("skillsFullstackHeader")}</h3>
        <p>{t("skillsFullstackParagraphOne")}</p>
        <p>{t("skillsFullstackParagraphTwo")}</p>

        <h3>&gt;&gt;&gt; {t("skillsAWSHeader")}</h3>
        <p>{t("skillsAWSParagraphOne")}</p>
        <p>{t("skillsAWSParagraphTwo")}</p>
        <p>{t("skillsAWSParagraphThree")}</p>
      </section>

      <section id="portfolio" className={styles.section}>
        <h2>&gt;&gt;&gt; # aaron_sinnott.work</h2>

        <h3>&gt;&gt;&gt; aaron_sinnott.work["history"]</h3>
        <p>The first project that I was assigned to work on was a Django project that was running on EC2s, with an Angular 1 frontend and PostgreSQL database with my second project also being a Django project which was hosted on Linode, which a pure HTML, CSS and JS/jQuery frontend and and MySQL database.\n</p>
        <p>After this I spent some time working on a couple of C# projects, both on desktop, and an dashboard using ASP.NET MVC and ChartJS.\n</p>
        <p>After working in .NET, I went back to working in Python and Django for Code Institute where I work on building learning material aimed at career changes that were new to coding. During this period, in addition to building course material, I also worked on the learning platform which is built in Django and hosted on EC2, with both a MySQL and MongoDB.\n</p>
        <p>I left my role as a developer in Code Institute to move to Brazil to be with my girlfriend, but I continue to work with them as a mentor, helping students to build their projects to a professional standard, as well as offering career related advice, and mock interviewing them in preparation for real-world interviews.</p>
        <p>In addition to mentoring, I've also been working on <a href="http://decyphr.net/">decyphr</a>, an app that I started to help myself to learn Portuguese, which I hope to be able to offer on a larger scale in the future.\n</p>

        <h3>&gt;&gt;&gt; aaron_sinnott.work["github"]</h3>
      
        {repos.map((repo, item) => {
          return (
            <div key={item} className={styles.github}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
              <p>{repo.description}</p>
            </div>
          )
        })}
      </section>

      <section id="contact" className={styles.section}>
        <h2>&gt;&gt;&gt; # aaron_sinnott.contact</h2>
        
        <h3>&gt;&gt;&gt; aaron_sinnott.send_email(email, name, message)</h3>
        <form>
          <p className={styles.formFeedback}>{response}</p>
          <input
            type="email"
            value={email}
            id="email"
            placeholder="Email"
            required
            onChange={e => setEmail(e.target.value)}
            aria-label="Your Email"
          />
          <input
            type="text"
            value={name}
            id="name"
            placeholder="Your name"
            required
            onChange={e => setName(e.target.value)}
            aria-label="Your name"
          />
          <textarea
            value={message}
            placeholder="Your message"
            onChange={e => setMessage(e.target.value)}
            aria-label="Your message"
          ></textarea>

          <input type="submit" value="Submit" onClick={e => handleSubmission(e)}></input>
        </form>
        
      </section>

      <footer className={styles.footer}>
        <p>
          {'Copyright © Aaron Sinnott '}{new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}


export default withLocale(App);