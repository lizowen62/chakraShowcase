import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react/cjs/react.production.min";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import Profile from "../components/layout/Profile";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";

export default function Home() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const res = await fetch("http://localhost:3000/games");
    try {
      var data = await res.json();
      console.log(data.data);
      setGames(data.data);
      setIsLoading(false);
    } catch (error) {}
  }, []);

  return (
    <Fragment>
      <Layout>
        <div className={styles.center}>
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="white"
              color="teal"
              size="xl"
            />
          ) : (
            <Fragment>
              <div>
                <Profile></Profile>
                <MeetupList meetups={games} />
              </div>
            </Fragment>
          )}
        </div>
      </Layout>
    </Fragment>
  );
}
