const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const characters = [
  {
    id: 1,
    name: 'Walter White',
    age: 50,
    kills: 200,
    description: 'Walter White, también conocido como Heisenberg, es un profesor de química convertido en fabricante de metanfetaminas. Comienza a fabricar y vender drogas tras ser diagnosticado con cáncer de pulmón, con el objetivo de asegurar el futuro financiero de su familia.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/2/2a/BB_T5A-Walter_White.png/revision/latest?cb=20221207180457&path-prefix=es',
    role: 'Protagonista principal, antihéroe'
  },
  {
    id: 2,
    name: 'Jesse Pinkman',
    age: 25,
    kills: 5,
    description: 'Jesse Pinkman es un antiguo estudiante de Walter White y su socio en la producción de metanfetaminas. Aunque comienza como un delincuente de poca monta, su relación con Walter lo lleva a situaciones cada vez más peligrosas y complejas.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/5/52/BB_S5A_Jesse_Pinkman.png/revision/latest/scale-to-width-down/350?cb=20221026171345&path-prefix=es',
    role: 'Co-protagonista, socio en el crimen'
  },
  {
    id: 3,
    name: 'Gustavo Fring',
    age: 50,
    kills: 20,
    description: "Gustavo 'Gus' Fring es un respetado empresario y filántropo que en secreto dirige un imperio de drogas. Es extremadamente meticuloso y despiadado, lo que lo convierte en un formidable antagonista para Walter y Jesse.",
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/c/c7/BCS_S3_Gus_Fring.png/revision/latest?cb=20221026235919&path-prefix=es',
    role: 'Antagonista principal, empresario de drogas'
  },
  {
    id: 4,
    name: 'Saul Goodman',
    age: 41,
    kills: 0,
    description: 'Saul Goodman, cuyo nombre real es Jimmy McGill, es un abogado criminalista conocido por su enfoque poco ortodoxo y sus anuncios llamativos. Se convierte en el abogado de Walter y Jesse, ayudándolos con sus problemas legales.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/8/8f/BCS_T6-Jimmy_McGill.png/revision/latest?cb=20221202195535&path-prefix=es',
    role: 'Abogado criminal, aliado'
  },
  {
    id: 5,
    name: 'Hank Schrader',
    age: 43,
    kills: 15,
    description: 'Hank Schrader es un agente de la DEA y cuñado de Walter White. Es un hombre de principios que está decidido a acabar con el narcotráfico, sin saber que el capo que busca es su propio cuñado.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/6/6d/T5_-_Hank.jpg/revision/latest?cb=20120715073115&path-prefix=es',
    role: 'Agente de la DEA, antagonista involuntario'
  },
  {
    id: 6,
    name: 'Skyler White',
    age: 40,
    kills: 0,
    description: 'Skyler White es la esposa de Walter White. Al principio no está al tanto de las actividades ilegales de su marido, pero eventualmente descubre la verdad y se involucra en el lavado de dinero.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/2/28/T5_-_Skyler.jpg/revision/latest?cb=20120715073105&path-prefix=es',
    role: 'Esposa de protagonista, cómplice involuntaria'
  },
  {
    id: 7,
    name: 'Mike Ehrmantraut',
    age: 60,
    kills: 16,
    description: 'Mike Ehrmantraut es un ex policía convertido en hombre de confianza y sicario de Gustavo Fring. Es extremadamente competente y leal, con un enfoque pragmático hacia la vida criminal.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/7/77/MikeEnBB.webp/revision/latest?cb=20220820224511&path-prefix=es',
    role: 'Hombre de confianza, sicario'
  },
  {
    id: 8,
    name: 'Marie Schrader',
    age: 38,
    kills: 0,
    description: 'Marie Schrader es la hermana de Skyler White y esposa de Hank Schrader. Es conocida por su comportamiento compulsivo y a veces problemático, pero se preocupa profundamente por su familia.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/3/33/T5B_-_Marie.jpg/revision/latest?cb=20130812131405&path-prefix=es',
    role: 'Familiar, soporte emocional'
  },
  {
    id: 9,
    name: 'Todd Alquist',
    age: 24,
    kills: 6,
    description: 'Todd Alquist es un empleado de Vamonos Pest que se involucra en el negocio de la metanfetamina. Aunque parece amigable y educado, es capaz de actos de violencia extrema y falta de remordimiento.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/e/e8/T5B_-_Todd.jpg/revision/latest?cb=20130812131451&path-prefix=es',
    role: 'Asociado en el crimen, empleado'
  },
  {
    id: 10,
    name: 'Lydia Rodarte-Quayle',
    age: 37,
    kills: 0,
    description: 'Lydia Rodarte-Quayle es una ejecutiva de Madrigal Electromotive que se convierte en una socia importante en la operación de metanfetaminas de Walter White. Es nerviosa y paranoica, pero también extremadamente calculadora.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/3/31/T5B_-_Lydia.jpg/revision/latest?cb=20130812131441&path-prefix=es',
    role: 'Socia, ejecutiva'
  },
  {
    id: 11,
    name: 'Tuco Salamanca',
    age: 35,
    kills: 10,
    description: 'Tuco Salamanca es un violento narcotraficante y distribuidor de metanfetaminas. Es impredecible y extremadamente agresivo, lo que lo hace temido por sus enemigos y asociados.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/d/dc/1x06_-_Crazy_Handful_of_Nothin%27_PROMO_5.jpg/revision/latest?cb=20120426164910&path-prefix=es',
    role: 'Antagonista, narcotraficante'
  },
  {
    id: 12,
    name: 'Hector Salamanca',
    age: 80,
    kills: 8,
    description: 'Hector Salamanca es un antiguo capo del cartel de drogas mexicano y el tío de Tuco Salamanca. Aunque está confinado a una silla de ruedas y no puede hablar, sigue siendo un enemigo formidable y astuto.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/3/31/Hector.png/revision/latest?cb=20221219040201&path-prefix=es',
    role: 'Capo del cartel, estratega'
  },
  {
    id: 13,
    name: 'Gale Boetticher',
    age: 34,
    kills: 0,
    description: 'Gale Boetticher es un químico talentoso que trabaja con Gustavo Fring en la producción de metanfetaminas. Es amable y apasionado por la química, pero su asociación con Gus lo pone en peligro.',
    webImg: 'https://static.wikia.nocookie.net/breakingbad/images/7/73/4x01_-_Box_Cutter_PROMO_6.jpg/revision/latest?cb=20120712192652&path-prefix=es',
    role: 'Químico, colaborador'
  }
]
const welcome =
`<h2>Breaking Bad API</h2>
<p>Use /api/characters to retrieve all characters</p>
<p>Use /api/characters/id to retrieve specific one</p>`

app.get('/', (req, res) => {
  res.status(200).send(welcome)
})
app.get('/api/characters', (req, res) => {
  res.status(200).send(characters)
})
app.get('/api/characters/:id', (req, res) => {
  const id = Number(req.params.id)
  const character = characters.find(ch => ch.id === id)
  if (character) {
    return res.status(200).send(character)
  }
  res.status(404).send({ error: 'ID in DB not found' })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Service started on ${PORT} `)
})
