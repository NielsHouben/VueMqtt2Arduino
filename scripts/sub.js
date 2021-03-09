const mqtt = require('mqtt')
const client = mqtt.connect("mqtt:/192.168.1.148", { clientId: "Lyssnarlasse", clean: false, will: { topic: "offline", payload: "Lyssnarlasse", qos: 2 } })

client.on("connect", () => {
    client.subscribe({ "mess": 0, "json": 0, "offline": 2 })
    // client.subscribe();

})

client.on("message", (topic, message) => {
    const context = message.toString()
    console.log(context)
    console.log("object")
    if (topic == "json") {
        const json = JSON.parse(context)
        console.log(json.name + " åker " + json.direction)
    }
    if (topic == "offline") {
        console.log(context + " begick suicide")
    }
    else {
        console.log(context)
    }

})