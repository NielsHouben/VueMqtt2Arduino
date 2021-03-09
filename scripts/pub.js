const mqtt = require('mqtt')
const client = mqtt.connect("mqtt:/192.168.1.148", {
    clientId: "Lamplennert",
    clean: false,
    will: { topic: "offline", payload: "Lamplennert", qos: 2 }
})

client.on("connect", () => {
    // const lampa = setInterval(() => {
    //     client.publish("lamp/lampa", "change", { qos: 0, retain: false })
    //     // console.log("publish lampa")
    // }, 3000)
    const messtimer = setInterval(() => {
        client.publish("mess", "hejhopp!", { qos: 0, retain: false })

    }, 30000)
    let count = 0
    const jsontimer = setInterval(() => {
        let dataObject = { name: "WallE" + count, direction: "left" }
        client.publish("json", JSON.stringify(dataObject), { qos: 0, retain: false })
        count++
        // if (count == 3) {
        //     end([jsontimer, messtimer])
        // }
    }, 5000)
})

client.on("error", (error) => {
    console.log("Cant connect " + error)
    process.exit(1)
})

function end (timers) {
    timers.forEach(timer => {
        clearInterval(timer)
    })
    client.end()
}