export const IsNullOrEmpty = str => {

    return str === "" || str == null;
}

export const ReplaceString = (str, oldchar, newchar) => {
    if (str == undefined) {

    } else {
        let strArray = str.split(oldchar);
        let replacedString = '';
        for (let i = 0; i < strArray.length - 1; i++) {
            replacedString += (strArray[i] + newchar);

        }
        replacedString += strArray[strArray.length - 1];
        return replacedString;
    }
}

export const IsInt = (str) => {

    if (parseInt(str) != NaN) {
        return false;
    }
    else {
        return true;
    }






}
export const MakeBreadCrumbScript = (firstItem, secondItem, thirdItem, forthItem, fifthItem) => {

    let itemListElements = []
    if (firstItem != null && firstItem != '') {
        itemListElements.push({
            "@type": "ListItem",
            "position": 1,
            "name": firstItem.title,
            "item": firstItem.link
        })
    }
    if (secondItem != null && secondItem != '') {
        itemListElements.push({
            "@type": "ListItem",
            "position": 2,
            "name": secondItem.title,
            "item": secondItem.link
        })
    }
    if (thirdItem != null && thirdItem != '') {
        itemListElements.push({
            "@type": "ListItem",
            "position": 3,
            "name": thirdItem.title,
            "item": thirdItem.link
        })
    }
    if (forthItem != null && forthItem != '') {
        itemListElements.push({
            "@type": "ListItem",
            "position": 4,
            "name": forthItem.title,
            "item": forthItem.link
        })
    }
    if (fifthItem != null && fifthItem != '') {
        itemListElements.push({
            "@type": "ListItem",
            "position": 5,
            "name": fifthItem.title,
            "item": fifthItem.link
        })
    }

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElements
    }



}

// export const GetImageGuidFromImageUrl = (imageUrl) => {
//     let strArray = imageUrl.split('\\');
//     let replacedString='';
//     for (let i = 0; i < strArray.length-1; i++) {
//         replacedString += (strArray[i]+newchar);

//     }
//     replacedString+=strArray[strArray.length-1];
//     return replacedString;
// }