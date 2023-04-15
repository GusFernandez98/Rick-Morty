import style from '../About/About.module.css';


const About = () => {
    return(
        <div className={style.info}>
            <h1 className={style.titulo}>·App de Rick and Morty realizada por Gustavo </h1>
            <h2 className={style.subTitulo}>·Alumno de Cohorte FT35-a</h2>
            <h3 className={style.opinion}>·Un breve opinion:</h3>
            <h4 className={style.opinion2}>
            Estoy muy contento con la elaboración de app, siento que me estoy afianzando mucho con los conceptos de programación y esto es muy loco ya que hace unos meses atras no sabia ni lo que era VSC,
            menos que menos una funcion. Espero seguir asi y mejorar cada dia un poco más para si poder llegar a la meta de terminar esta linda carrera y poder trabajar de esto, que realmente me gusta y 
            cada dia me atrapa más!.
            </h4>
        </div>
    )
}
export default About