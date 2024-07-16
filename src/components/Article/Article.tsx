import React from 'react'
import { useForm } from "react-hook-form"
import './Article.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'


type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
}

const Article: React.FC = () => {
  
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => console.log(data))
  
  return (
    <div className='Article'>
      <h1>
        ¿Cómo Natalia Díaz Quintana ganó ₡8 100 000 
        en seis días con Oil Profit ¿Por qué tuvo que 
        detener la transmisión? ¡Detalles impactantes 
        del éxito!
      </h1>
      <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/fuentes.jpg" alt="others" />
      <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/thumb.jpg" alt="article-1" />
      <p>
        Hoy quiero compartir contigo la emocionante experiencia 
        de mi inversión en <a href="#">Oil Profit</a>, un startup que revolucionó 
        mis percepciones sobre lo posible en el mundo de la 
        tecnología e <a href="#">inteligencia artificial</a>.
      </p>
      <p>
        Cuando el equipo de <a href="#">Oil Profit</a> me contacto el otoño pasado, 
        capturaron mi atención de inmediato. Su proyecto ambicioso, 
        centrado en avanzar en la computación cuántica, me inspiró. 
        Siempre he valorado las <a href="#">innovaciones</a> y las tecnologías 
        futuras, y <a href="#">Oil Profit</a> presentó algo extraordinario: el 
        potencial uso de la computación cuántica en aplicaciones 
        del <a href="#">mundo real</a>, desde la optimización de procesos 
        empresariales hasta <a href="#">la investigación médica</a>.
      </p>
      <p>
        Reconociendo el potencial de este proyecto, tomé la decisión 
        de invertir en <a href="#">Oil Profit</a>. Nuestra colaboración comenzó 
        justo después de nuestro encuentro, y nos sumergimos 
        en la realización de <a href="#">sus ideas ambiciosas</a>. Invertí no solo 
        mi dinero, sino también mi experiencia empresarial. 
        Juntos, formulamos una estrategia de marketing sólida y un 
        plan de promoción del producto, y asistí al equipo de <a href="#">Oil 
        Profit</a> en la creación de un modelo de negocio eficiente que 
        tuviera éxito a largo plazo.
      </p>
      <p>
        Los primeros meses estuvieron llenos de trabajo arduo y 
        emoción. <a href="#">Oil Profit</a> desarrolló activamente <a href="#">
        sus tecnologías</a>, perfeccionándolas para aplicaciones industriales. 
        Nuestro equipo pasó incontables horas explorando <a href="#">nuevas 
        posibilidades</a> e ideando soluciones innovadoras. Cada día nos 
        acercaba al momento en que nuestro <a href="#">producto</a> estuviera listo 
        para el lanzamiento al mercado.
      </p>
      <p>
        Sin embargo, debido al rápido crecimiento y la emoción 
        asociada con este éxito, tuvimos que cancelar el anuncio 
        de esta plataforma y eliminar toda la <a href="#">información</a> al 
        respecto de Internet para manejar la abrumadora atención e <a href="#">investigaciones</a>. 
        El increíble interés público y la atención mediática subrayaron la importancia de nuestro 
        trabajo y demostraron cómo <a href="#">las tecnologías de Oil Profit</a> podrían cambiar el mundo.
      </p>
      <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/entre.jpg" alt="article-2" />
      <p>
        Por supuesto, estos desafíos no nos detuvieron. Finalmente, 
        se abrió el acceso a inversiones, lo que permitió que <a href="#">Oil 
        Profit</a> desplegara todo su potencial. Después de seis meses 
        de esfuerzos diligentes, lanzamos con éxito <a href="#">Oil Profit</a>. 
        Sus cálculos cuánticos se volvieron indispensables en 
        diversas industrias. Se utilizaron <a href="#">en investigaciones</a> médicas 
        para analizar vastas cantidades de datos, en el 
        sector financiero para optimizar estrategias de inversión 
        e incluso en el campo de <a href="#">la inteligencia artificial</a> para 
        entrenar aprendizaje automático basado en algoritmos cuánticos.
      </p>
      <p>
        En tan solo seis meses desde mi inversión, <a href="#">Oil Profit</a> alcanzó 
        alturas asombrosas. El valor de mi inversión se multiplicó 
        varias veces, y obtuve impresionantes <a href="#">₡8 100 000.</a> 
        pero sinceramente, para mí, se trataba de algo más que dinero. 
        Encontré una mayor satisfacción al presenciar cómo nuestro 
        proyecto estaba cambiando el mundo que nos rodea.
      </p>
      <p>
        <a href="#">Oil Profit</a> hizo que la computación cuántica fuera 
        accesible y útil para un amplio público. Creamos <a href="#">tecnologías</a> 
        que ayudan a resolver problemas complejos de manera más rápida 
        y eficiente. Contribuimos a la ciencia, la medicina y el <a href="#">progreso tecnológico</a>. 
        Sin embargo, esto fue solo el comienzo. Continuamos explorando, creciendo y evolucionando, 
        desbloqueando nuevas posibilidades para el futuro.
      </p>
      <p>
        <a href="#">Esta historia no es solo el relato exitoso de un 
        inversionista y una startup</a>. Es una historia sobre cómo la 
        creencia en <a href="#">la innovación</a>, el esfuerzo persistente y los 
        esfuerzos colaborativos pueden cambiar el mundo.
      </p>
      <p>
        Anuncio oficialmente que estoy abriendo el acceso a <a href="#">la 
        plataforma</a>, pero los lugares serán limitados. Las primeras 
        100 personas afortunadas que hayan enviado su solicitud 
        después de ver el anuncio en Facebook podrán invertir. Es 
        muy sencillo; si tienes la suerte de convertirte en 
        participante, espera una llamada de uno de nuestros 
        gerentes y te ayudarán a comenzar lo antes posible. Ten 
        en cuenta que la inversión mínima es de <a href="#">₡135 000</a>.
      </p>
      <div className='img-container'>
        <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/juanr2.jpg" alt="article-3" />
        <div className="img-info">
          Natalia Díaz Quintana anuncia en vivo a Oil Profit
        </div>
      </div>
      <h2>
        Ganancias de los usuarios del día anterior en <a href="#">Oil Profit</a>
      </h2>
      <p>
        Los datos se actualizan en tiempo real, cada 5 segundos desde la plataforma 
        oficial de Oil Profit.
      </p>
      <div className="table-header">
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
            Nombre
          </p>
        </div>
        <div className="cell">
          <p>
            Ganancia
          </p>
        </div>
        <div className="cell">
          <p>
            Ciudad
          </p>
        </div>
      </div>

      <div className="table-row">
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
            Andrea
          </p>
        </div>
        <div className="cell">
          <p>
            ₡1 308 472
          </p>
        </div>
        <div className="cell">
          <p>
            Limon
          </p>
        </div>
      </div>

      <div className="table-row"> 
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
          Rafael
          </p>
        </div>
        <div className="cell">
          <p>
            ₡1 067 698
          </p>
        </div>
        <div className="cell">
          <p>
            San Carlos
          </p>
        </div>
      </div>

      <div className="table-row"> 
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
            Daniel
          </p>
        </div>
        <div className="cell">
          <p>
            ₡192 277
          </p>
        </div>
        <div className="cell">
          <p>
            Puntarenas
          </p>
        </div>
      </div>

      <div className="table-row"> 
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
            Flor
          </p>
        </div>
        <div className="cell">
          <p>
            ₡683 371
          </p>
        </div>
        <div className="cell">
          <p>
            Limón
          </p>
        </div>
      </div>
      
      <div className="table-row"> 
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
            Francisco
          </p>
        </div>
        <div className="cell">
          <p>
            ₡382 424
          </p>
        </div>
        <div className="cell">
          <p>
            Alajuela
          </p>
        </div>
      </div>

      <div className="table-row"> 
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
            David
          </p>
        </div>
        <div className="cell">
          <p>
            ₡612 176
          </p>
        </div>
        <div className="cell">
          <p>
            Guanacaste
          </p>
        </div>
      </div>
      
      <div className="table-row"> 
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
            Luz
          </p>
        </div>
        <div className="cell">
          <p>
            ₡1 083 150
          </p>
        </div>
        <div className="cell">
          <p>
            Alajuela
          </p>
        </div>
      </div>

      <div className="table-row"> 
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
            Silvia
          </p>
        </div>
        <div className="cell">
          <p>
            ₡386 031
          </p>
        </div>
        <div className="cell">
          <p>
            Heredia
          </p>
        </div>
      </div>

      <div className="table-row"> 
        <div className="cell">
          <div className="bullet-p">
          </div>
          <p>
            Karla
          </p>
        </div>
        <div className="cell">
          <p>
            ₡440 720
          </p>
        </div>
        <div className="cell">
          <p>
            Alajuela
          </p>
        </div>
      </div>

      <h2>
        ACTUALIZACIÓN
      </h2>
      <p>
        Acabamos de recibir noticias que, a partir de hoy <strong>11 de julio del 2024</strong>, 
        Casi todas las posiciones están ocupadas <a href="#">Oil Profit</a> solo puede aceptar 
        un número limitado de usuarios totales para mantener altas las 
        ganancias por usuario. En este momento, aún quedan (37) lugares 
        disponibles, así que apúrate y regístrate ahora para asegurar tu lugar.
      </p>
      <form onSubmit={onSubmit} className='form'>
        <div className="header">
          <h2>Inscripción gratuita</h2>
        </div>
        <div className="body">
          <input placeholder='Nombre' className='input' type='text' {...register("firstName")} />
          <input placeholder='Apellido' className='input' type='text' {...register("lastName")} />
          <input placeholder='Correo' className='input' type='text' {...register("lastName")} />
          <input placeholder='Número de teléfono' className='input' maxLength={15} type='text' {...register("phone")} />
          <button className='register'
            type="button"
            onClick={() => {
              setValue("lastName", "luo") // ✅
            }}
          >
            Regístrese Ahora
          </button>
          <p className='amount'>* Monto mínimo de inversión ₡135 000</p>
        </div>
      </form>
      <div className="comments">
        <h3>Comentarios</h3>
        <div className="divisor">
          <hr />
        </div>
        
        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/1.jpg" alt="photo1" />
            </div>
          </div>
          <div className="description">
            <p className='name'>
              José López
            </p>
            <p className='text'>
              ¿Realmente funciona? He oído algo parecido, pero nunca he visto ninguna reseña.
            </p>
            <p className='hour'>
              12h
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                10 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/2.jpg" alt="photo2" />
            </div>
          </div>
          <div className="description">
            <p className='name'>
            Luis Martínez
            </p>
            <p className='text'>
              Natalia Díaz Quintana definitivamente sabe como hacer dinero. Saludos 👏🔥
            </p>
            <p className='hour'>
              16m
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                23 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/3.jpg" alt="photo3" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              Carlos Rodríguez
            </p>
            <p className='text'>
              Acabo de retirar mis ganancias ... Activa tu cerebro y apúntate. Estás perdiendo una 
              oportunidad de la que te arrepentirás el resto de tu vida.
            </p>
            <p className='hour'>
              1h
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                24 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/4.jpg" alt="photo4" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              Juan García
            </p>
            <p className='text'>
              Hace tiempo escuche hablar de esta plataforma pero cada vez olvidaba averiguar 
              sobre ella 🤦‍♂️ gracias Natalia Díaz Quintana por esta información :)
            </p>
            <p className='hour'>
              12m
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                23 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/5.jpg" alt="photo5" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              David Mejía
            </p>
            <p className='text'>
              HFinalmente pude comprar un auto nuevo. No es vida, sino un sueño... Los sueños se 
              hacen realidad)))
            </p>
            <p className='hour'>
              12m
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                5 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/6.jpg" alt="photo6" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              María Paz
            </p>
            <p className='text'>
              Ahora tengo la oportunidad de ir de vacaciones este año :) Y lo mejor es que mientras 
              este de vacaciones, el sistema ganará dinero día y noche. Es un sueño hecho realidad.            </p>
            <p className='hour'>
              14m
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                22 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/7.jpg" alt="photo7" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              Daniel Cruz
            </p>
            <p className='text'>
              Me registré la semana pasada y ya he ganado ₡1 421 053 Lo 
              recomiendo a todo el mundo 😏           
            </p>
            <p className='hour'>
              3h
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                22 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/8.jpg" alt="photo8" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              Mario Flores
            </p>
            <p className='text'>
              Gracias por la info Trece Noticias          
            </p>
            <p className='hour'>
              3h
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                1 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/9.jpg" alt="photo9" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              Francisco Rivera
            </p>
            <p className='text'>
              Acabo de inscribirme, amigos, ¡deséenme suerte!      
            </p>
            <p className='hour'>
              3h
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                5 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/10.jpg" alt="photo10" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              Jorge Reyes
            </p>
            <p className='text'>
              Natalia Díaz Quintana causa polémica pero es inteligente ¡he visto muchas de 
              sus entrevistas! Creo que la plataforma realmente vale la pena.     
            </p>
            <p className='hour'>
              3h
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                11 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/11.jpg" alt="photo11" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              Manuel Pineda
            </p>
            <p className='text'>
              Me registré hace dos días, mi saldo ya es de ₡738 947, estoy pensando 
              en solicitar un retiro o es demasiado pronto? De hecho, no hice nada, 
              de alguna manera me lo gané automáticamente. 😅😅😅    
            </p>
            <p className='hour'>
              5h
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                21 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/12.jpg" alt="photo12" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              Josefa Zelaya
            </p>
            <p className='text'>
              Estoy sorprendida y mis amigos también... Al principio pensé que era 
              algún tipo de estafa, no estaba claro como funciona. Pero entonces el 
              gerente se puso en contacto conmigo y me explicó todo con detalle, 
              ¡resultó ser muy sencillo! Siempre he trabajado mucho y no creía que 
              fuera posible ganar dinero de esa manera. Para abreviar la historia, 
              compré un auto. Suerte a todos, recomiendo mucho esta plataforma 👍 
            </p>
            <p className='hour'>
              5h
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                13 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <div>
              <img src="https://alphatrader.best/landers/natdiaz_1718885579/img/13.jpg" alt="photo13" />
            </div>
          </div>
          <div className="description">
            <p className='name'>       
              Miguel Ramos
            </p>
            <p className='text'>
              Gracias por la información, empecé con esto hace 4 semanas en un 
              programa piloto como Natalia Díaz Quintana. Recibí 12 cheques por 
              un total de ₡9 236 842 es muy bueno.
            </p>
            <p className='hour'>
              5h
            </p>
            <div className="links">
              <a href="#">Me gusta</a>
              <a href="#">Respuesta</a>
              <a href="#">
                16 <FontAwesomeIcon icon={faThumbsUp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article