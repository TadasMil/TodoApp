import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class TodoComponent extends Component {
    state = {
        items: [{id: 1, title: 'wake up'},
                {id: 2, title: 'Make breakfast'},
              ],
        id: uuidv4(), //Using uuid package to generate new ID
        item: '',
        editItem: false
      };

      handleChange = (e) => {
        console.log('handle change')
      }
      handleSubmit = (e) => {
        console.log('handle submit')
      }
      clearList = () => {
        console.log('handle clear')
      }
      handleSingleDelete = (id) => {
        console.log(`handle single delete ${id}`)
      }
      handleEdit = (id) => {
        console.log(`handle edit ${id}`)
      }
    
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className=".col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-capitalize text-center">
                        Pridėti naują įrašą:
                        </h3>
                        <TodoInput item={this.state.item}
                        editItem={this.state.editItem}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}/>
                        <TodoList items={this.state.items}
                        clearList={this.clearList}
                        handleSingleDelete={this.handleSingleDelete}
                        editItem={this.handleEdit}/>
                    </div>
                </div>
            </div>
        );
    }
}
