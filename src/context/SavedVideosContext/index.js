import {useReducer, createContext} from 'react'

export const SavedVideosContext = createContext()

const initialState = {
  savedVideos: [
    // {
    //   id: '30b642bd-7591-49f4-ac30-5c538f975b15',
    //   title:
    //     'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
    //   thumbnailUrl:
    //     'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
    //   channel: {
    //     name: 'iB Cricket',
    //     profileImageUrl:
    //       'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
    //   },
    //   viewCount: '1.4K',
    //   publishedAt: 'Apr 19, 2019',
    // },
    // {
    //   id: '606f5b7b-9208-4eb2-a68c-1eb5faef4268',
    //   title:
    //     'Yellow Strikers are Ready to Strike Big | Watch it on Viu | iB Cricket Super Over League',
    //   thumbnailUrl:
    //     'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-2-img.png',
    //   channel: {
    //     name: 'iB Cricket',
    //     profileImageUrl:
    //       'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
    //   },
    //   viewCount: '2K',
    //   publishedAt: 'Mar 14, 2019',
    // },
    // {
    //   id: '2fd4fa94-f8a1-4508-87e9-7cdd279c4a1f',
    //   title:
    //     'Blue Blasters are ready | iB Cricket Super Over League | watch it on Viu',
    //   thumbnailUrl:
    //     'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-3-img.png',
    //   channel: {
    //     name: 'iB Cricket',
    //     profileImageUrl:
    //       'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
    //   },
    //   viewCount: '2.1K',
    //   publishedAt: 'Mar 14, 2019',
    // },
  ],
}

const savedVideosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {savedVideos: [...state.savedVideos, action.payload]}
    case 'REMOVE':
      return {
        savedVideos: state.savedVideos.filter(
          item => item.id !== action.payload.id,
        ),
      }
    default:
      return state
  }
}

export function SavedVideosProvider(props) {
  const [state, dispatch] = useReducer(savedVideosReducer, initialState)
  const {children} = props
  return (
    <SavedVideosContext.Provider value={{state, dispatch}}>
      {children}
    </SavedVideosContext.Provider>
  )
}
