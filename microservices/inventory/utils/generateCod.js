
function generateUmCod(currentCod) {
    const splitCod = currentCod.split('-');
    const numericPart = splitCod[1];

    const numericCod = parseInt(numericPart) + 1;

    const formatedNextCod = `UM-${numericCod.toString().padStart(3, '0')}`;
    return formatedNextCod
}

function generateMarcasCod(currentCod) {
    const splitCod = currentCod.split('-');
    const numericPart = splitCod[1];

    const numericCod = parseInt(numericPart) + 1;

    const formatedNextCod = `M-${numericCod.toString().padStart(4, '0')}`;
    return formatedNextCod
}

function generateCategoriasCod(currentCod) {
    const splitCod = currentCod.split('-');
    const numericPart = splitCod[1];

    const numericCod = parseInt(numericPart) + 1;

    const formatedNextCod = `CAT-${numericCod.toString().padStart(3, '0')}`;
    return formatedNextCod
}

function generateProovedorCod(currentCod) {
    const splitCod = currentCod.split('-');
    const numericPart = splitCod[1];

    const numericCod = parseInt(numericPart) + 1;

    const formatedNextCod = `PR-${numericCod.toString().padStart(4, '0')}`;
    return formatedNextCod

}

module.exports = {
    generateUmCod,
    generateMarcasCod,
    generateCategoriasCod,
    generateProovedorCod
}