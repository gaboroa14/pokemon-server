import {
  addLostPokemon,
  addVictoryPokemon,
  findPokemonById
} from '@components/pokemon/dao'
import { message } from '@config/message'
import { handleError, handleResponse } from '@middleware/errorHandlers'
import { addBatalla, findLast5Batalla } from './dao'
import { batallaResource, batallasResource } from './dto'

// /v1/batallas/
export const listBatallas = async (req, res) => {
  try {
    const data = await findLast5Batalla()

    handleResponse(res, 200, message.accepted, batallasResource(data))
  } catch (error) {
    handleError(error, res)
  }
}

// /v1/batallas/
export const registerBatalla = async (req, res) => {
  try {
    const { ganador, perdedor, participante } = req.body

    let batalla
    let data

    batalla = {
      participante,
      ganador: await findPokemonById(ganador),
      perdedor: await findPokemonById(perdedor)
    }
    data = await addBatalla(batalla)

    await addVictoryPokemon(ganador)
    await addLostPokemon(perdedor)

    handleResponse(res, 200, message.create_success, batallaResource(data))
  } catch (error) {
    handleError(error, res)
  }
}
