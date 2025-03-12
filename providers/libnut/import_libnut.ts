import ln from "./libnut";

const libnut: typeof ln = (process.platform === 'win32') ?
    require("@kirillvakalov/nut-tree__libnut-win32") :
    (process.platform === 'linux') ?
        require("@kirillvakalov/nut-tree__libnut-linux") :
        require("@kirillvakalov/nut-tree__libnut-darwin")

export {
    libnut,
}
