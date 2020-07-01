import tailwindcss from 'tailwindcss';
import { variants } from 'tailwindcss/stubs/defaultConfig.stub';
export const plugins = [tailwindcss('./tailwind.js'), require('autoprefixer')];


module.exports = {
    theme ={
        extend = {}
    },
    variants = {
        backgroundColor: ['responsive', 'hover', 'focus', 'active']
    },
}