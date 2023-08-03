import Layout from "../components/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const allCharacters = useSelector((state) => state.allCharacters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  console.log(allCharacters);

  return (
    <Layout>
      {allCharacters.map((character) => {
        return <button>1</button>;
      })}

      <button>HOLAAA</button>
      <button>HOLAAA</button>
      <button>HOLAAA</button>
    </Layout>
  );
};

export default Home;
