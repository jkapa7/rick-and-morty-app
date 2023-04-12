const axios = require("axios");
const { favorite, character } = require("../DB_connection");

let fav = [];

const getFav = (req, res) => {
  res.status(200).end(JSON.stringify(fav));
};

const postFav = async (req, res) => {
  const { character } = req.body;

  try {
    const newCharacter = await res.status(200).json(character);
  } catch (error) {}
  res.status(400).send(error.message);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const character = fav.find((character) => character.id === Number(id));
  if (character) {
    fav = fav.filter((elememt) => elememt.id !== Number(id));
    res.status(200).end(JSON.stringify(character));
  } else {
    res.status(400).end("este character ya no se encuentra en fav");
  }
};

const getCharacterId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const characterApi = result.data;
    const character = {
      id: characterApi.id,
      image: characterApi.image,
      name: characterApi.name,
      gender: characterApi.gender,
      species: characterApi.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json("Character not found", error);
  }
};

const getDetailId = async (req, res) => {
  const { detailId } = req.params;
  try {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );
    const characterDetail = result.data;
    const character = {
      id: characterDetail.id,
      image: characterDetail.image,
      name: characterDetail.name,
      gender: characterDetail.gender,
      species: characterDetail.species,
      status: characterDetail.status,
      origin: characterDetail.origin,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json("Not found", error);
  }
};

const getApiData = async (req, res) => {
  try {
    const result = await axios(`https://rickandmortyapi.com/api/character/`);

    const character = {
      id: result.id,
      name: result.name,
      species: result.species,
      status: result.status,
      origin: result.origin,
      gender: result.gender,
      image: result.image,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json("Not found", error);
  }
};

const getAllChars = async (req, res) => {
  try {
    const result = await axios(`https://rickandmortyapi.com/api/character/`);

    const character = {
      id: result.id,
      name: result.name,
      species: result.species,
      status: result.status,
      origin: result.origin,
      gender: result.gender,
      image: result.image,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json("Not found", error);
  }
};

module.exports = {
  getAllChars,
  getApiData,
  getCharacterId,
  getDetailId,
  postFav,
  getFav,
  deleteFav,
};
