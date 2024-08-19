import receitas from './receitas.json';

let receitasEmMemoria = [...receitas]; 

export const obterReceitas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(receitasEmMemoria);
    }, 1000);
  });
};

export const adicionarReceitaNaAPI = (novaReceita) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      receitasEmMemoria.push(novaReceita);
      console.log('Receita adicionada:', novaReceita);
      resolve();
    }, 1000);
  });
};

export const getReceitas = async () => {
  return await obterReceitas();
};
