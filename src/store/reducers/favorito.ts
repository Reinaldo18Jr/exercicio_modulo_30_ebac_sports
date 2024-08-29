import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const itemFav = action.payload

      if (state.itens.find((produto) => produto.id === itemFav.id)) {
        state.itens = state.itens.filter((item) => item.id !== itemFav.id)
      } else {
        state.itens = [...state.itens, itemFav]
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
