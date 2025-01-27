console.log('hello !');

// La classe 😎
class Character {
    // Déclaration de propriétés publiques
    hp;
    armor;
    luck;

    // Constructeur
    constructor( jsonCharacter ) {
        this.hp = jsonCharacter.hp;
        this.armor = jsonCharacter.armor;
        this.luck = jsonCharacter.luck;
    }

    // Déclaration de méthode publique
    walk() {
        console.log('Je marche')
    }
}

class Thief extends Character {

    constructor(jsonThief){
        // super() est le constructeur du parent (Character)
        // En JS on doit obligatoirement l'appeler en premier dans la constructeur enfant
        super(jsonThief);
        this.hp = jsonThief.hp;
        this.armor = jsonThief.armor;
        this.luck = jsonThief.luck * 1.5;
    }
    picklock() {
        console.log( 'Crochetage en cours ...' );
    }

    // On peut surcharger une méthode parente pour redéfinir totalement son fonctionnement
    // Mais ce n'est pas obligatoire
    walk() {
        console.log( 'Je marche discrètement ...' );
    }
}

let bilbo = new Thief({
    hp: 150,
    armor: 150,
    luck: 100
});
console.log( bilbo );
bilbo.walk();
