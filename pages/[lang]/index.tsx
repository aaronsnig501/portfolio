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
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://aaronsinnott.com/" />
        <meta
          name="description"
          content={t("description")}
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
        <h2># {t("workHeader")}</h2>

        <h3>&gt;&gt;&gt; {t("workHistoryHeader")}</h3>
        <p>{t("workHistoryParagraphOne")}</p>
        <p>{t("workHistoryParagraphTwo")}</p>
        <p>{t("workHistoryParagraphThree")}</p>
        <p>{t("workHistoryParagraphFour")}</p>
        <p>
          {t("workHistoryParagraphFivePartOne")}
          <a href="http://decyphr.net/" target="_blank" rel="noreferrer">decyphr</a>
          {t("workHistoryParagraphFivePartTwo")}</p>

        <h3>&gt;&gt;&gt; {t("workGithubHeader")}</h3>
      
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
        <h2># {t("contactTitle")}</h2>
        
        <h3>&gt;&gt;&gt; {t("contactSendEmailHeader")}</h3>
        <form>
          <p className={styles.formFeedback}>{response}</p>
          <input
            type="email"
            value={email}
            id="email"
            placeholder={t("contactEmailField")}
            required
            onChange={e => setEmail(e.target.value)}
            aria-label={t("contactEmailField")}
          />
          <input
            type="text"
            value={name}
            id="name"
            placeholder={t("contactNameField")}
            required
            onChange={e => setName(e.target.value)}
            aria-label={t("contactNameField")}
          />
          <textarea
            value={message}
            placeholder={t("contactMessageField")}
            onChange={e => setMessage(e.target.value)}
            aria-label={t("contactMessageField")}
          ></textarea>

          <input type="submit" value={t("contactSubmitButton")} onClick={e => handleSubmission(e)}></input>
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


export default withLocale(App)