import { Component } from '@angular/core';
import { doesNotReject } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TO-DO LIST';


  tasks: Todo[] = [
    {task: 'Make Tina eat the food', completed: false}
  ];
  

  add(newtask: string){
    this.tasks.push({task: newtask, completed: false});
    console.log(newtask);
  }

  finish(done: Todo){
      done.completed = true;
      console.log(done);
  }

  removeItem(value){
    const index: number = this.tasks.indexOf(value);
    this.tasks.splice(index, 1);
    console.log(value);
  }
  

  search(search: string){
    let list = this.tasks.filter(el => el.task == search);
    return list;
  }


  /*
  Fix buttons for both update and search!! 

  */
  update(thing: string) {
    this.tasks.filter(x => ["", "XXX"].indexOf(x.task) >= 0).forEach(x => x.task = thing);
  }

}
  /*
  title = 'The amount of times I have died first in Among Us';
  counter = 13138;
  people: Employee[] = [
    { firstName: 'Fred', lastName: 'Smith'},
    { firstName: 'Julie', lastName: 'Johnson'}
  ];

  testclick = function(){
    //console.log(this.people);
    this.counter++;
    this.people.push(
      { firstName: 'Jeff', lastName: 'Cogswell'}
    )
  }
  testerclick = function(){
    
    this.counter--;
    
  }
  */


interface Todo{
  task: string,
  completed: boolean
};

/*
interface Employee{
  firstName: String,
  lastName: String
};
*/

