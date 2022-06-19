import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../services/firebase';

// export const getWords = createAsyncThunk('wordSlice/getWords', async () => {
//   return fetch('http://localhost:3000/words').then((res) => res.json());
// });

// export const getWordsFirestore = () => {
//   db.collection('words')
//     .get()
//     .then((snapshot) => {
//       const words = [];
//       snapshot.forEach((doc) => {
//         const data = doc.data();
//         words.push(data);
//       });
//       console.log(words);
//     });
// };

const initialState = {
  status: null,
  words: [],
};

const wordSlice = createSlice({
  name: 'wordSlice',
  initialState,
  reducers: {
    // getWords: (state) => {
    //   db.collection('words')
    //     .get()
    //     .then((snapshot) => {
    //       const words = [];
    //       snapshot.forEach((doc) => words.push(doc.data()));
    //       state.words = words;
    //     });
    // },
    updateStateWords: (state, { payload }) => {
      state.words = payload;
    },
    addNewWord: (state, { payload }) => {
      const ids = state.words.map((x) => x.id);
      const lastId = ids.sort((x, y) => x - y)[ids.length - 1];
      db.collection('words').add({
        en: payload.en,
        id: lastId + 1,
        tr: payload.tr,
        exp: payload.exp,
      });
    },
  },
  // extraReducers: {
  //   [getWords.pending]: (state, action) => {
  //     state.status = 'loading';
  //   },
  //   [getWords.fulfilled]: (state, { payload }) => {
  //     state.words = payload;
  //     state.status = 'success';
  //   },
  //   [getWords.rejected]: (state, action) => {
  //     state.status = 'failed';
  //   },
  // },
});

export const { updateStateWords, addNewWord } = wordSlice.actions;

export default wordSlice.reducer;
