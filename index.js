import { deprecatedTags, htmlTags } from "./core/constants/tags.js";
import { Server } from "./core/server.js";

class SpiritDOM{
    constructor(){
        
    }

    static render(data){
        const app = new Server();
        app.listen(33455);
        
        const parent = Object.keys(data);
        
        // loop throught the object
        parent.forEach(item => {
            this.generateComponent(item);
        });
    }

    static generateComponent(component){
        const vdom = component.toLowerCase();

        // check if the component exists 
        if(htmlTags.includes(vdom)){
            // const tag = document.createElement(vdom);

        }else if(deprecatedTags.includes(vdom)){
            throw new Error("Deprecated component");
        }
    }
}

export { SpiritDOM };