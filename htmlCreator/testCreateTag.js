import { createTag } from "./createTag.js"

const testJson = {
    tagName: "table",
    attributes : [
        {
id: "table-id"
        }
    ],
    child: [
        {
            tagName: "tr",
            attributes: [
                {
                    id: "row-1"
                }
            ],
text: "row1"
        }
    ]
}
export const run= () => {


const result = createTag(testJson)
console.log(result)
}