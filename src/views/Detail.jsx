import styles from "../styles/Detail.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.detail);

  console.log(detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className={styles.detail}>
      <div className={styles.detailCard}>
        <div className={styles.txt}>
          <h1>Name: {detail?.name}</h1>
          <h3>Status: {detail?.status}</h3>
          <p>Specie: {detail?.species}</p>
          <p>Gender: {detail?.gender}</p>
          <p>Origin: {detail?.origin}</p>
        </div>
        <img src={detail?.image} alt={detail?.name} />
        <Link to="/">
          <p>s</p>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
