import { SpiritDOM } from "../index.js";


export const nav = {
    "tag": "div",
    "class": "nav",
    "id": "nav-bar",
    "children": [
        {
            "tag": "img",
            "src": "../assets/logo.png",
            "width": "50px",
            "height": "50px",
            "alt": "Logo"
        },
        {
            "tag": "div",
            "class": "nav-content",
            "children": [
                {
                    "tag": "a",
                    "class": "nav-item",
                    "onClick": "handleClick"
                },
                {
                    "tag": "a",
                    "class": "nav-item",
                    "onClick": "handleClick"
                },
                {
                    "tag": "a",
                    "class": "nav-item",
                    "onClick": "handleClick",
                    "child": {
                        "tag" : "AiOutlineSearch",
                    },
                }
            ]
        }
    ]
}

SpiritDOM.render(nav, "html");
