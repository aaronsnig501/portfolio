import Head from 'next/head'
import Router from 'next/router'
import Terminal from 'terminal-in-react'

export default function TerminalView() {
  const showMsg = () => 'Hello World'
  const ls = () => '.\t..\tabout/\tskills/\tportfolio/'

  return (
    <>
      <Head>
        <title>Aaron Sinnott's Terminal</title>
      </Head>

      <Terminal
        color='#4AF626'
        outputColor='#4AF626'
        prompt='#4AF626'
        backgroundColor='black'
        hideTopBar={true}
        allowTabs={false}
        style={{ fontSize: "1em" }}
        startState={'maximised'}
        promptSymbol={'aaron@portfolio:~/$'}
        msg='Welcome to my terminal! Type `help` in order to get a list of available commands'

        commands={{
          'exit': () => Router.push('/'),
          'dir': () => 'Sorry, unix commands only',
          'ls': ls,
          showmsg: showMsg,
          popup: () => alert('Terminal in React')
        }}
        
        descriptions={{
          'exit': 'Exit the shell.',
          'ls': 'List information about the FILEs (the current directory by default).',
        }}
        
      />
    </>
  )
}