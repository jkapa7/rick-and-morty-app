import styles from "../styles/Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.detail);

  console.log(id);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  return (
    <div className={styles.detail}>
      <div className={styles.detailCard}>
        <div className={styles.txt}>
          <h1>{detail.name}</h1>
          <h3>{detail.status}</h3>
          <p>{detail.species}</p>
          <p>{detail.gender}</p>
          <p> {detail.origin?.name}</p>
        </div>
        <img src={detail.image} alt={detail.name} />
      </div>
    </div>
  );
};

export default Detail;
