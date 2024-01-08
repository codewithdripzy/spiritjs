import { SpiritDOM } from "../index.js";


export const nav = {
    div : {
        class : 'nav navbar-nav navbar',
        child: {
            type : 'btn',
            onclick : ()=>{
                console.log("Hello world!");
            }
        }
    },
    div : {
        class : 'nav navbar-nav navbar',
        child: {
            type : 'btn',
            onclick : ()=>{
                console.log("Hello world!");
            }
        }
    }
}

SpiritDOM.render(nav);
