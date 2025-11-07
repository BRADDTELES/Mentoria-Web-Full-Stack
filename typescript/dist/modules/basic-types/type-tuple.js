"use strict";
let filmArray = [1, 'Guerra Civil', true];
let filmTuple = [2, 'Um Lugar Silencioso: Dia Um', false];
let filmTupleOpcionalPosition = [2, 'Um Lugar Silencioso: Dia Um'];
const [idArr, titleArr, availableArr] = filmArray;
const [id, title, available] = filmTuple;
const [idOpcional, titleOpcional, availableOpcional] = filmTupleOpcionalPosition;
console.log(id);
