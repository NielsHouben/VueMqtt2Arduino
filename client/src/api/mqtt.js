let mqtt = require('mqtt')
let client = {}
export default {
    launch (id, callback) {
        client = mqtt('mqtt:/192.168.1.148', {
            port: 3003,
            clientId: id,
            clean: false
        })

        client.on('message', (topic, message) => {
            callback(topic, message)
        })
        // client = mqtt.connect("mqtt:/192.168.1.148", { clientId: "Lyssnarlasse", clean: false })
        // client.on("connect", () => {
        //     client.subscribe({ "mess": 0, "json": 0, "offline": 2 })
        //     // client.subscribe();

        // })

        // client.on('message', (topic, message) => {
        //     callback(topic, message)
        // })

    },
    end () {
        client.end()
    },
    subscribe (topic) {
        client.subscribe(topic, { qos: 1 })
        console.log('subscribe:', topic)
    },
    publish (topic, message) {
        // client.publish(topic, JSON.stringify(message), { qos: 1 })
        let dataObject = { name: "WallE", direction: "left" }
        client.publish(topic, JSON.stringify(dataObject), message)
        // console.log(topic, message)
    }
}