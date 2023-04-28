import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import apiDB from "../api/apiDB";

const initialState = {
  isRegistered: false,

  phoneNumber: '+380',
  code: ['', '', '', '', '', ''],
  verificationId: null,

  uid: null,
  name: '',
  surname: '',
  birthDate: '',
  isAgreeWithRules: false,

  isUserDataLoaded: '',

  currentUser: null
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setIsRegistered: (state, action) => {
      state.isRegistered = action.payload
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload
    },
    setCode: (state, action) => {
      state.code = action.payload
    },
    setVerificationId: (state, action) => {
      state.verificationId = action.payload
    },
    setUserId: (state, action) => {
      state.uid = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },

    setName: (state, action) => {
      state.name = action.payload
    },
    setSurname: (state, action) => {
      state.surname = action.payload
    },
    setBirthDate: (state, action) => {
      state.birthDate = action.payload
    },
    setIsAgreeWithRules: (state, action) => {
      state.isAgreeWithRules = action.payload
    },
    setIsUserDataLoaded: (state, action) => {
      state.isUserDataLoaded = action.payload
    },
  },
})


export const getUserData = createAsyncThunk(
  'register/getUserData',
  ({userId, register}, {dispatch, getState}) => {
    apiDB.get(`users.json?orderBy="uid"&equalTo=${JSON.stringify(userId)}`)
      .then(function (response) {
        const data = Object.keys(response.data).map(item => response.data[item])
        // console.log('Users DATA2', data);
        console.log('Data for detCurrentUser1', data[0])
        if (data[0]) {
          register && dispatch(setIsUserDataLoaded('exist'))
          dispatch(setCurrentUser(data[0]))
        } else {
          dispatch(setCurrentUser(null))

          register && dispatch(setIsUserDataLoaded('notExist'))
        }
      })
      .catch(function (error) {
        console.log('Дані юзера у БД  НЕ Змінені',error);
      });
  }
)




export const postUser = createAsyncThunk(
  'register/postUser',
  (userData, {dispatch, getState}) => {
    apiDB.post('users.json', JSON.stringify(userData)
    ).then(function (response) {

        console.log('успішно завантажено', response.data)

      apiDB.get(`users/${response.data.name}.json`)
        .then(function (response) {
          dispatch(setCurrentUser(response.data))
        })
        .catch(function (error) {
          console.log('Не вдалося отримати користувача',error);
        });

      })
      .catch(function (error) {
        console.log('Помилка завантаження',error);
      });
  }
)


export const {
  setIsRegistered,
  setPhoneNumber,
  setCode,
  setVerificationId,
  setUserId,
  setCurrentUser,
  setName,
  setSurname,
  setBirthDate,
  setIsAgreeWithRules,
  setIsUserDataLoaded
} = registerSlice.actions

export default registerSlice.reducer


