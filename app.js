const app = Vue.createApp({
  // template: `
  // <h1>Hola Mundo</h1>
  // <p>Desde app.js</p>
  // <pre>{{ {a: 1, b: 2} }}</pre>
  // `
  mounted() {},
  data: () => ({
    texto: '',
    textoEncriptado: '',
    mostrarEncriptado: false,
    alfabetoImpar: {
      A: 'A',
      a: 'a',
      B: 'E',
      b: 'e',
      C: 'I',
      c: 'i',
      D: 'M',
      d: 'm',
      E: 'P',
      e: 'p',
      F: 'T',
      f: 't',
      G: 'X',
      g: 'x',
      H: 'B',
      h: 'b',
      I: 'F',
      i: 'f',
      J: 'J',
      j: 'j',
      K: 'N',
      k: 'n',
      L: 'Q',
      l: 'q',
      M: 'U',
      m: 'u',
      N: 'Y',
      n: 'y',
      Ñ: 'C',
      ñ: 'c',
      O: 'G',
      o: 'g',
      P: 'K',
      p: 'k',
      Q: 'Ñ',
      q: 'ñ',
      R: 'R',
      r: 'r',
      S: 'V',
      s: 'v',
      T: 'Z',
      t: 'z',
      U: 'D',
      u: 'd',
      V: 'H',
      v: 'h',
      W: 'L',
      w: 'l',
      X: 'O',
      x: 'o',
      Y: 'S',
      Y: 's',
      Z: 'W',
      z: 'w',
    },
    alfabetoPar: {
      A: 'N',
      a: 'n',
      B: 'R',
      b: 'r',
      C: 'W',
      c: 'w',
      D: 'B',
      d: 'b',
      E: 'G',
      e: 'g',
      F: 'L',
      f: 'l',
      G: 'P',
      g: 'p',
      H: 'U',
      h: 'u',
      I: 'Z',
      i: 'z',
      J: 'E',
      j: 'e',
      K: 'J',
      k: 'j',
      L: 'Ñ',
      l: 'ñ',
      M: 'S',
      m: 's',
      N: 'X',
      n: 'x',
      Ñ: 'C',
      ñ: 'c',
      O: 'H',
      o: 'h',
      P: 'M',
      p: 'm',
      Q: 'Q',
      q: 'q',
      R: 'V',
      r: 'v',
      S: 'A',
      s: 'a',
      T: 'F',
      t: 'f',
      U: 'K',
      u: 'k',
      V: 'O',
      v: 'o',
      W: 'T',
      w: 't',
      X: 'Y',
      x: 'y',
      Y: 'D',
      Y: 'd',
      Z: 'I',
      z: 'i',
    },
  }),
  methods: {
    encriptarFrase() {
      // const frase = 'tecnologias de la información y comunicacion';
      const fraseLimpia = this.texto
        .normalize('NFD')
        .replace(
          /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
          '$1'
        )
        .normalize();
      const fraseArray = fraseLimpia.split('');
      let fraseEncriptada = '';

      fraseArray.forEach((e, index) => {
        const posicion = index + 1;
        if (posicion % 2 === 0)
          fraseEncriptada +=
            this.alfabetoPar[e] !== undefined ? this.alfabetoPar[e] : e;
        if (posicion % 2 !== 0)
          fraseEncriptada +=
            this.alfabetoImpar[e] !== undefined ? this.alfabetoImpar[e] : e;
      });

      this.textoEncriptado = fraseEncriptada;
      this.mostrarEncriptado = true;
    },
    copyText() {
      const toastCopied = this.$refs.toastCopied;
      const toast = new bootstrap.Toast(toastCopied);
      navigator.clipboard.writeText(this.textoEncriptado);
      toast.show();
    },
  },
});

app.mount('#myApp');
