let pets = [{ nome: "Mel" }];

let listarPets = () => {
    let conteudo = "";
    for (let pet of pets) {
        conteudo += `
   ______________ 
   Nome:${pet.nome}
   ______________`;
    }
    return conteudo;

};

const adicionarPet = novoPet => {
    return pets.push(novoPet);
  };

const buscarPet = pet =>{
    let encontrados = pets.filter(function(callback){
        return callback.nome == pet.nome;
        });
        
        return encontrados
    }
 

  
module.exports = { listarPets, adicionarPet,buscarPet };
  
