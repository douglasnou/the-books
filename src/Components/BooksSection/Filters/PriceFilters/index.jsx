import { PriceInput } from "./PriceInput"

export const PriceFilters = ({min, setMin, max, setMax})=>{
    return(
        <div>
            <h2 className="paragraph2">Filtrar por preço</h2>
            <PriceInput id="min" label="Mínimo (R$)" value={min} setValue={setMin}/>
            <PriceInput id="max" label="Máximo (R$)" value={max} setValue={setMax}/>
        </div>
    )
}