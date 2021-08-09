export const pokemonResource = (resource) => ({
  numero: resource.numero,
  nombre: resource.nombre,
  tipos: resource.tipos,
  estadisticas: resource.estadisticas,
  urlSprite: resource.urlSprite.replace('/back',''),
  cantidadVictorias: resource.cantidadVictorias,
  cantidadDerrotas: resource.cantidadDerrotas
})

export const pokemonsResource = (resources) =>
  Array.from(resources, (resource) => pokemonResource(resource))
