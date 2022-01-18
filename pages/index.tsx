import Head from 'next/head';
import Header from '../Components/Header';
import Feed from '../Components/Feed';
import Modal from "../Components/Modal";


export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Modal />
      <Header/>
      <Feed />



    </div>
  )
}
