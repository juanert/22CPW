import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-záéíóúÁÉÍÓÚñÑ0-9'.,!?¡¿ ]+$/.test(v);
      },
      message: props => `${props.value} no es un título válido!`
    }
  },
  artist: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-záéíóúÁÉÍÓÚñÑ'.,!?¡¿ ]+$/.test(v); // Solo letras y signos de puntuación básicos
      },
      message: props => `${props.value} no es un nombre de artista válido!`
    }
  },
  album: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 100,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-záéíóúÁÉÍÓÚñÑ0-9'.,!?¡¿ ]+$/.test(v); // Letras, números y signos de puntuación básicos
      },
      message: props => `${props.value} no es un nombre de álbum válido!`
    }
  },
  year: {
    type: Number,
    required: false,
    min: 1900,
    max: new Date().getFullYear(),
    validate: {
      validator: function (v) {
        return Number.isInteger(v); // Debe ser un número entero
      },
      message: props => `${props.value} no es un año válido!`
    }
  },
  genre: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 50,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-záéíóúÁÉÍÓÚñÑ'.,!?¡¿ ]+$/.test(v); // Solo letras y signos de puntuación básicos
      },
      message: props => `${props.value} no es un género válido!`
    }
  },
  cover_url: {
    type: String, required: false, trim: true, validate: {
      validator: function (v) {
        return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i.test(v); // URL de imagen válida
      },
      message: props => `${props.value} no es una URL de imagen válida!`
    }
  },
  audio_url: {
    type: String, required: false, trim: true, validate: {
      validator: function (v) {
        return /^(https?:\/\/.*\.(?:mp3|wav|flac|aac|ogg))$/i.test(v); // URL de audio válida
      },
      message: props => `${props.value} no es una URL de audio válida!`
    }
  },
  deleted: { type: Boolean, default: false }
}, { timestamps: true });

export const Song = mongoose.model('Song', songSchema);