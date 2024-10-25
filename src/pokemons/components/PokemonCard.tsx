import Link from "next/link"
import Image from 'next/image'

import { SimplePokemon } from "../interfaces/simple-pokemon"
import { IoHeartOutline } from "react-icons/io5"

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon } :Props) => {
    const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
        <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
            <div className="flex flex-col items-center justify-centertext-center p-6 bg-gray-800 border-b">
                <Image 
                    key={ id }
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg`}
                    width={100}
                    height={100}
                    alt={ name }
                    priority={ false }
                />
            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ name }</p>
            <div className="mt-5">
                <Link href={`/dashboard/pokemons/${ name }`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                    Mas informacion
                </Link>
            </div>
            </div>
            <div className="border-b">
                <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <div className="text-green-600">
                        <IoHeartOutline />
                        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </div>
                    <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                        No es favorito
                    </p>
                    <p className="text-xs text-gray-500">View your campaigns</p>
                    </div>
                </Link>
                
            </div>
        </div>
    </div>
  )
}
