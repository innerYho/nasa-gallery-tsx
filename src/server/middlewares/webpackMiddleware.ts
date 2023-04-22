import webpack from 'webpack'
// import whm from 'webpack-hot-middleware'
import wdm from 'webpack-dev-middleware'
import errOverlay from 'react-dev-utils/errorOverlayMiddleware'
import openBrowser from 'react-dev-utils/openBrowser'
import { config } from '../config'
import webpackClientConfig from '../../../webpack.config.client.js'

//El middleware intercepta la petición antes de que llegue al servidor
export const webpackMiddleware = () => {
    // abre el navegador
    openBrowser(`Listening in http://localhost:${config.PORT}`)

    //copilador de webpack
    const compiler = webpack(webpackClientConfig)

    return (
        // whm(compiler, {log: console.log, path: '/__webpack_hmr', heartbeat: 200}),
        wdm(compiler, { serverSideRender: true, writeToDisk: true }),
        errOverlay
    )
}