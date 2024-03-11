import * as amqp from 'amqplib'
import 'dotenv/config'



const Url = String(process.env.RabbitMQ_Link)
const queue = 'activation-code'

const actionCode = async () => {
    try {
        const connection = await amqp.connect(Url)
        const channel = await connection.createChannel()
        await channel.assertQueue(queue)

        channel.consume(queue, (data: any) => {
            console.log(JSON.parse(data.content));
            channel.ack(data)
        })

    } catch (error) {
        console.log(error)
    }
}

const execute = async (data: any) => {
    data = JSON.parse(data)
    const fdm = data.data
    for (let i = 0; i < fdm.length; i++) {
        const prefix = fdm[i].slice(0, 2)
        const awb = Number(fdm[i].slice(2, fdm[i].length))
    }

}



export default actionCode