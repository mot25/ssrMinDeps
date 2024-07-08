import ContentComponent from "./template/ContentComponent.js";
import YoutubeComponent from "./template/YoutubeComponent.js";
import CounterComponent from "./template/CounterComponent.js";

const container = document.getElementById('app')
const propsContent = {content: "Hi, i am content"}

const content = new ContentComponent(propsContent)
const youtube = new YoutubeComponent({code: 'Jc7Hp953xg8'})
const counter = new CounterComponent({defaultValue: 0})

content.render(container)
youtube.render(container)
counter.render(container)