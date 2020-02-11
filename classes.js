
class Player{
    set name(n){
        this._name=n;
    }
    set level(l){
        this._level=l;
    }
    set weapon(w){
        this._weapon=w;
    }
    set health(h){
        this._health=h;
    }
    set type(t){
        this._type=t;
    }
     get name(){
         return this._name;
     }
     get level(){
         return this._level;
     }
     get weapon(){
         return this._weapon;
     }
     get health(){
         return this._health;
     }
     get type(){
         return this._type;
     }   
     constructor(n){
         this._name=n;
     }
     // method to start the game
     start(){
         this._type='peasant';
         this._weapon='saber';
         this._health=5;
         this._level='5';
     }
     // Returns the status
     currentsituation(){
         if (parseInt(this._health) ==0) {
             this._health = this.name + " " + "is a loser";
             return this.health;    
         }
         else{
             return("Name:" +
              this.name + " \n" +"Type:" + this.type +" \n" + "Weapon:" + 
             this.weapon +" \n"+ "Health:" + this.health + " \n" + "Level:" + this.level + " \n");}
     }
       // two functions for the battle one will generate the random number
 Battle(Goodguy,enemy){
        let attackbyGood=this.GetRondNo();
        let attackbyenemy=this.GetRondNo();
        let action=document.getElementById('action');
        if(attackbyGood>attackbyenemy){
            action.value=Goodguy.name +  " " + 'attacks' + " " + enemy.name;
            Goodguy.health++;
            enemy.health--;
            enemy.level--;
            Goodguy.level++;
        } else if(attackbyGood<attackbyenemy){
            action.value=enemy.name + " " +  'attacks' + " " +  Goodguy.name;
            Goodguy.health--;
            enemy.health++;
            enemy.level++;
            Goodguy.level--;
        }

 }              
 GetRondNo(){
       let r = Math.floor(Math.random() * 10) ;
       return r;
 }            
             
} 
//let p1= new Player('Vero');
    //console.log(fighter1.name);
    //console.log(p1.start());
    //console.log(p1.currentsituation());

var player1= new Player('vero');
var player2= new Player('Huss');
    function initGame(){
        player1.start();
        player2.start();
        status();
    }
    function startGame(){
        player1.Battle(player1,player2);
        status();
    }
    function status(){
        document.getElementById('p1');
        p1.value=player1.currentsituation();

        document.getElementById('p2');
        p2.value=player2.currentsituation();
    }
