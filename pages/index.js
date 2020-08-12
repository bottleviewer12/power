import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PowerVolt - Save Energy Bill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         <a>PowerVolt - Ingenious Energy Saver</a>
        </h1>
        <p style={{textAlign:'center'}}>Saving money on energy bills is hard but not impossible.<br/>
          Try PowerVolt this once and you won't REGRET IT.
        </p>

        <img src = '1.png' height="500"/>

        <p style={{textAlign:'justify', width:500}}>
          Gone are the days when power bills were a mess and budget breakers.
          Just install PowerVolt and forget about all your worries.
          Now you can save energy, save money and save hassle.
        </p>


        <img src = '2.png' height="100"/>
        <img src = '3.png' height="500"/>
        
        
      </main>

      <footer className={styles.footer}>
       <p style={{flex:1}}>Copyright 2020 @ Power</p><br />
       <a href="#" style={{paddingLeft:10}}>About</a>
       <a href="#" style={{paddingLeft:10}}>Contact</a>
       <a href="#" style={{paddingLeft:10}}>Privacy</a>
       <a href="#" style={{paddingLeft:10}}>Terms</a>
      </footer>
    </div>
  )
}
