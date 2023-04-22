import express, { Express, Request, Response } from 'express'
import { config } from './config'
import { render } from './render'
import axios from 'axios'
import { webpackMiddleware } from 'middlewares/webpackMiddleware'

const app: Express = express()
const isDev = process.env.NODE_ENV !== 'production'

if (isDev) {
    app.use(webpackMiddleware())
} else {
    //exponer la carpeta
    app.use(express.static('dist'))
}

app.get('/galaxias', async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get("https://images-api.nasa.gov/search?q=galaxies")
        console.log(data)
        const initialProps = {
            galaxies: data?.collection?.items
        }
        res.send(render(req.url, initialProps))
    } catch (error) {
        throw new Error("an error ocurred in /galaxias", error)

    }
}
)

app.get('*', (req: Request, res: Response) => {
    // res.send(`<h1>Hola mundo con ruta: ${req.url} </h1>`)
    // res.send(template(`<h1>ruta: ${req.url}</h1>`))
    res.send(render(req.url))
})

app.listen(config.PORT, () => {
    // tamplate literals ``
    console.log(`Listening in http://localhost:${config.PORT}`)
})