// import { API } from '../constants'
import { payloadActions } from '../../utils'
import { GALLERY } from './galleryActionTypes'

// FETCH_GALLERY
// export const fetchGallery = () => fetchActions({
//   type: GALLERY.FETCH,
//   API: API.GALLERY
// })

// CREATE_GALLERY
export const createGallery = (payload) => payloadActions({
  type: GALLERY.CREATE,
  payload
})

// UPDATE_GALLERY
export const updateGallery = (payload) => payloadActions({
  type: GALLERY.UPDATE,
  payload
})

// DELETE_GALLERY
export const deleteGallery = (payload) => payloadActions({
  type: GALLERY.DELETE,
  payload
})
