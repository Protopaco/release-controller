

export const createTag = ({tagName, attribute, child, text})=> {

    let openTag = "<" + tagName;
    if(attribute.length >0)
    {
        openTag += attribute.map(({key, value}) => {
            return "'" + key + "'" + "=" + "'" + value + "'" + " ";
        }).join();
    }
    openTag += ">";
    
    if(child.length>0)
    {
        openTag += child.forEach(childTag => createTag(childTag))
    }

    let closeTag = "</" + tagName + ">"

    return openTag + text + closeTag;

}
