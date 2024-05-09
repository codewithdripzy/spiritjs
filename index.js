import { Server } from "./core/server.js";
import { deprecatedTags, htmlTags, attributes, eventAttributes } from "./core/constants/tags.js";
import Converter from "./core/utils/converter.js";

class SpiritDOM {
    constructor() {}

    static render(data, language = "html") {
        const app = new Server();

        this.generateComponent(data, language);
        app.listen(33455);
    }

    static generateComponent(component, language) {
        let code = "";

        try {
            if (component === undefined || component === null) {
                throw new Error("No component provided");
            }

            // check if the component is an object
            if (typeof component !== "object") {
                throw new Error("Invalid component");
            }

            // check if the component has a tag
            if (!component.tag) {
                throw new Error("Invalid component");
            }

            // render the code based on the language
            if (language === "html") {
                code = this.renderHTML(component);
            } else if (language === "jsx") {
                code = this.renderJSX(component);
            }

            console.log(code);
        } catch (error) {
            console.error(error);
            throw Error(error);
        }
    }

    static renderHTML(component) {
        let html = "";

        try {
            // check if the component is an object
            if (typeof component !== "object") {
                throw new Error("Invalid component");
            }

            // check if the component has a tag
            if (!component.tag) {
                throw new Error("Invalid component");
            }
            
            // Check if the tag is valid
            if (!htmlTags.includes(component.tag)) {
                console.error(`Invalid tag: ${component.tag}`);
                return html;
            }

            // Open the tag with attributes
            html += `<${component.tag} `;

            for (const key in component) {
                if (component.hasOwnProperty(key)) {
                    // Check if the key is a valid attribute and is not tag, class, or id
                    if (key !== 'tag' && key !== 'class' && key !== 'id' && attributes.includes(key)) {
                        html += `${key}="${component[key]}" `;
                    }
                }
            }
        
            // Add class and id attributes if present
            if (component.class && attributes.includes('class')) {
                html += `class="${component.class}" `;
            }

            if (component.id && attributes.includes('id')) {
                html += `id="${component.id}" `;
            }

            html += '>';

            // If there are children, recursively render them
            if (component.children && component.children.length > 0) {
                component.children.forEach(child => {
                    html += this.renderHTML(child);
                });
            }

            // Close the tag
            html += `</${component.tag}>`;

            return html;
        } catch (error) {
            console.error(error);
        }
    }

    static renderJSX(component) {
        let code = "";

        try {
            // check if the component is an object
            if (typeof component !== "object") {
                throw new Error("Invalid component");
            }

            // check if the component has a tag
            if (!component.tag) {
                throw new Error("Invalid component");
            }

            code += `<${component.tag} `;
            
            for (const key in component) {
                if (component.hasOwnProperty(key)) {
                    if (key !== 'tag' && key !== 'class' && key !== 'id' && attributes.includes(key)) {
                        code += `${Converter.toCamelCase(key)}="${component[key]}" `;
                    }
                }
            }

            if (component.class) {
                code += `className="${component.class}" `;
            }

            if (component.id) {
                code += `id="${component.id}" `;
            }

            code += '>';

            if (component.children && component.children.length > 0) {
                component.children.forEach(child => {
                    code += this.renderJSX(child);
                });
            }

            code += `</${component.tag}>`;

            return code;
        } catch (error) {
            console.error(error);
        }
    }
}

export { SpiritDOM };
