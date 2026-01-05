import styles from "../styles/Home.module.css";
import clientPromise from "../lib/mongodb";

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("benarkahmasukpersib");

  const players = await db
    .collection("rumor_players_ranked")
    .find({})
    .sort({ rank: 1 })
    .toArray();

  return {
    props: {
      players: JSON.parse(JSON.stringify(players)),
    },
  };
}

export default function Home({ players }) {
  const getRankClass = (rank) => {
    if (rank === 1) return styles.rankTop;
    if (rank === 2) return styles.rankSecond;
    return styles.rankNormal;
  };

  return (
    <div className={styles.container}>
      {/* ================= CONTENT ================= */}
      <div className={styles.content}>
        {/* TITLE */}
        <section className={styles.titleSection}>
          <h1>TOP TRANSFERS JANUARI 2026</h1>
          <img
            src="/persib-outline-logo.svg"
            alt="Persib"
            className={styles.logo}
          />
        </section>

        {/* HIGHLIGHT */}
        <div className={styles.highlightBox}>
          PRESENTASE PEMAIN YANG AKAN BERGABUNG DENGAN PERSIB
        </div>

        {/* TABLE */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>NAMA</th>
                <th>KEBENARAN RUMOR (%)</th>
                <th>SENTIMENT SCORE</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr
                  key={player._id}
                  className={getRankClass(player.rank)}
                >
                  <td>{player.rank}</td>
                  <td className={styles.playerName}>
                    {player.player_name.toUpperCase()}
                  </td>
                  <td className={styles.metric}>
                    {player.confidence_percentage.toFixed(2)}%
                  </td>
                  <td className={styles.metric}>
                    {player.sentiment_score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        © MUHAMU 2026 · PEMILIK GAMBAR: PERSIB.CO.ID
      </footer>
    </div>
  );
}
