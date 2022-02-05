var deret = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]
function deretAD(x) {
    console.log('sebelumnya :' + deret)
    var deret1 = x.sort()
    console.log('Ascending:' + deret1)
    console.log('Descending:' + deret1.reverse())
}

deretAD(deret) 