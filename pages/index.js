import clientPromise from "../lib/mongodb";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("benarkahmasukpersib");

  const players = await db
    .collection("rumor_players_ranked")
    .find({})
    .sort({ rank: 1 }) // pakai ranking dari DB
    .toArray();

  return {
    props: {
      players: JSON.parse(JSON.stringify(players)),
    },
  };
}

export default function Home({ players }) {
  return (
    <main className={styles.container}>
      {/* ===== TITLE ===== */}
      <section className={styles.titleSection}>
        <h1>TOP TRANSFERS JANUARI 2026</h1>
        <img
          src="persib-outline-logo.svg"
          alt="Persib"
          className={styles.logo}
        />
      </section>

      {/* ===== HIGHLIGHT ===== */}
      <section className={styles.highlightBox}>
        <span>PRESENTASE PEMAIN YANG AKAN BERGABUNG DENGAN PERSIB</span>
      </section>

      {/* ===== TABLE ===== */}
      <section className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Kebenaran rumor (%)</th>
              <th>Sentiment Score</th>
            </tr>
          </thead>

            <tbody>
              {players.map((p, i) => {
                let rankClass = styles.rankNormal;
                if (p.rank === 1) rankClass = styles.rankTop;
                else if (p.rank === 2) rankClass = styles.rankSecond;

                return (
                  <tr key={p._id} className={rankClass}>
                    <td>{p.rank}</td>
                    <td className={styles.playerName}>{p.player_name}</td>
                    <td className={styles.metric}>
                      {p.confidence_percentage.toFixed(2)}%
                    </td>
                    <td className={styles.metric}>
                      {p.sentiment_score}
                    </td>
                  </tr>
                );
              })}
            </tbody>        
          </table>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>Gambar: Persib.co.id</footer>
    </main>
  );
}
