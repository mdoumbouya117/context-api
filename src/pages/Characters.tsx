import React from 'react'
import { useLocation } from 'react-router-dom'
import Character from '../components/Character'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
import { getCharacter, ICharacter } from '../services/characterService'

export default function Characters() {
  const location = useLocation()
  const { state }: any = location
  const [charactersUrl, ] = React.useState<Array<string>>(state.characters)
  const [characters, setCharacters] = React.useState<Array<ICharacter>>([])
  const [charactersLoading, setCharactersLoading] = React.useState(false)
  const paginationCount = Math.ceil(charactersUrl.length / 10)
  const [page, setPage] = React.useState(1)
  const CHARACTERE_PER_PAGE = 10

  React.useEffect(() => {
    const getCharacters = async () => {
      setCharactersLoading(true)
      try {
  
        const responses = await Promise.all( 
          charactersUrl.slice(CHARACTERE_PER_PAGE*(page-1), CHARACTERE_PER_PAGE*page).map((characterUrl: string) => {
            return getCharacter(characterUrl).then(res => res).catch(err => err)
          })
        ).then(response => response)
        .catch(error => error)
        setCharacters(responses)
      } catch (error) {
        return error
      }
      setCharactersLoading(false)
    }

    getCharacters()
  }, [page, charactersUrl])

  return (
    <div>
      <h1>{state.name}</h1>
      {!charactersLoading && characters?.length > 0 ? 
      <>
        <ul className="character-list">
          {characters.map((character: ICharacter, index: number) => (<Character key={index} character={character} />))}
        </ul>
        <div>
          {/* <ul className="pagination-list">
            {[...Array(paginationCount)].map((element, index: number) =>
            <li key={index} onClick={() => setPage(index+1)}>{index+1}</li>)}
          </ul> */}
        </div>
      </> : <Loader />}
      {characters?.length > 0 &&
          <Pagination count={paginationCount} setPage={setPage} />

      }
    </div>
  )
}
