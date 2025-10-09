import { Song } from "../models/song.js";

export const getSongs = async (req, res) => {
  try {
    const { title, artist, album, year, genre } = req.query;
    const filter = { deleted: false };
    if (title || artist || album || year || genre) {
      if (title) filter.title = new RegExp(title, 'i');
      if (artist) filter.artist = new RegExp(artist, 'i');
      if (album) filter.album = new RegExp(album, 'i');
      if (year) filter.year = year;
      if (genre) filter.genre = new RegExp(genre, 'i');
    }
    const songs = await Song.find(filter)
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findOne({ _id: id, deleted: false });
    if (!song) return res.status(404).json({ message: 'Canción no encontrada' });
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSong = async (req, res) => {
  try {
    const { title, artist, album, year, genre, cover_url, audio } = req.body;
    const newSong = new Song({ title, artist, album, year, genre, cover_url, audio_url });
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, artist, album, year, genre } = req.body;
    const updatedSong = await Song.findOneAndUpdate(
      { _id: id, deleted: false },
      { title, artist, album, year, genre },
      { new: true, runValidators: true }
    );
    if (!updatedSong) return res.status(404).json({ message: 'Canción no encontrada' });
    res.json(updatedSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await Song.findOneAndUpdate(
      { _id: id, deleted: false },
      { deleted: true },
      { new: true }
    );
    if (!deletedSong) return res.status(404).json({ message: 'Canción no encontrada' });
    res.json({ message: 'Canción eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

