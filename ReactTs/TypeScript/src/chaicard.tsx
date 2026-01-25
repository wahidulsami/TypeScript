interface chaiCardProps {
    name: string;
    price: number;
    isCold?: boolean;
}


export function ChaiCard({ name, price, isCold = false }: chaiCardProps) {
    return (
        <article>
            <h2>heheh new chi💀  <span>{name}</span></h2>
            <p>Price: {`$${price}`}</p>
            {isCold && <p>Served cold</p>}
        </article>
    )
}