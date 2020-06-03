import React from 'react'
import Typed from 'react-typed'
import Head from 'next/head'
import styles from './index.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Head>
          <title>My styled page</title>
          <link href="/static/styles.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css" />
        </Head>
        
        <section id="home" className={`${styles.header} ${styles.section}`}>
          <div className={styles.hero}>
            <h1>>>> aaron_sinnott = Developer()</h1>
            <p className={styles.heroParagraph}>
              >>> <Typed strings={[
                "aaron_sinnott.description = 'I build web stuff with Python, React and AWS!!!'"]} typeSpeed={70} /></p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;