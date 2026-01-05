import './CardDestino.css';

interface Destino {
  nome: string;
  descricao: string;
  imagem: string;
}

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <div className="card">
      <img src={destino.imagem} alt={destino.nome} />
      <h2>{destino.nome}</h2>
      <p>{destino.descricao}</p>
    </div>
  );
}
