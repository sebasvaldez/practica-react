import {heroes} from '../data/heroes.js'


export const getHeoresByPublisher = (publisher) => {
    
    const validPublisher = ['DC Comics','Marvel Comics']
    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }

    return heroes.filter((heroe)=>(heroe.publisher===publisher))


}
