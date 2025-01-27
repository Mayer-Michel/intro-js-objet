console.log('hello !');

// La classe 😎
class Character {
    // Déclaration de propriétés statiques
    static counter;

    // Déclaration de propriétés publiques
    hp;
    armor;
    luck;

    // Déclaration d'une méthode statique
    static getCounter(){
        // Dans ume méthode statique, "this" équivaut au "self" de PHP
        // Dans le contexte statique, this représente la classe
        // return this.counter;
        // On peut aussi utiliser ce type d'appel qui est identique à celui du contexte non-statique
        // Pour des raisons de lisibilité, on va privilégier cette forme
        return Character.counter;
    }

    // Constructeur
    constructor( jsonCharacter ) {
        // Dans le contexte non statique, this représente l'instance actuelle
        // Appel d'une propriété statique dans un contexte non statique
        Character.counter ++;
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

class SpellCaster extends Character {

    mana;

    constructor( jsonSpellCaster ) {
        super( jsonSpellCaster );
        this.mana = jsonSpellCaster.mana;
    }

    cast() {
        console.log( 'Je jette un sort' );
    }
}

class Wizard extends SpellCaster {
    cast() {
        super.cast();
        console.log( 'Mais de manière courtoise ...' );
    } 
}

let bilbo = new Thief({
    hp: 150,
    armor: 150,
    luck: 100
});
console.log( bilbo );
bilbo.walk();

let gandalf = new Wizard({
    hp: 200,
    armor: 50,
    luck: 100,
    mana: 150
})
console.log( gandalf );
gandalf.cast();
