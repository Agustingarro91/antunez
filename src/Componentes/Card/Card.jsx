import style from './Card.module.css'

const Card = ({information}) =>{

    return(
        <div className={style.container}>
            <img src={information.img} alt={`imagen de ${information.title}`} />
            <h3>{information.title}</h3>
            <p>{information.description}</p>
        </div>
    )

}

export default Card;