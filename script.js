let doska = ''
for(i = 0 ; i < 8; i++) {

  for (j = 0; j < 8; j++) {
    if((j) % 2 !== (i) % 2) {
        doska += '[+]'
    } else {
        doska += '[ ]'
    }
  }

  console.log(doska);
  doska = ''
}