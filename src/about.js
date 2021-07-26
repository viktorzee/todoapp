function merge(left, right) {
    var list = []
    var i = 0
    var j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            list.push(left[i])
            i++
        } else {
            list.push(right[j])
            j++
        }
        //action for situation of odd numbers
        while (i < left.length) {
            list.push(left[i])
        }
        while (i < right.length) {
            list.push(right[j])
        }
        return list
    }
}

function sorted(list) {
    var n = list.length
    if (n === 0 || n === 1) {
        return true
    }
    return list[0] < list[1] && sort(list[2, list.length])
}

function mergeSort(list) {
    // base case 
    if (list.length <= 1) return undefined
    //split the array
    var mid = Math.floor(list.length / 2)
    var left, right
    left = mergeSort(list.slice(0, mid))
    right = mergeSort(list.slice(mid))

    return merge(left, right)
}

console.log(mergeSort([2, 7, 13, 5, 26, 12, 37, 15, 2]));