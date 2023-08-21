import Layout from "../components/Layout";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <Layout>
      <section>
        <h1>Discover the adventures of Rick and Morty</h1>

        <h2>
          Are you ready to immerse yourself in a world full of craziness, dark
          humor, and intergalactic adventures? Then do not miss out on the
          adventures of Rick and Morty.
        </h2>

        <button>Characters</button>
      </section>
      <Cards />
    </Layout>
  );
};

export default Home;
