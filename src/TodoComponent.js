import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class TodoComponent extends Component {
    state = {
        items: [ ],
        id: uuidv4(), //Using uuid package to generate new ID
        item: '',
        editItem: false
      };

      handleChange = (e) => {
            this.setState({
                item: e.target.value
            })
        }
      handleSubmit = (e) => {
        e.preventDefault();
            const newItem = { id: this.state.id, title: this.state.item }
            const updatedItems = [...this.state.items, newItem]
            this.setState({
               items: updatedItems,
               item: '',
               id: uuidv4(),
               editItem: false
            })
      }
      clearList = () => {
            this.setState({
                items: []
            })
      }
      handleSingleDelete = (id) => {
        const tempArr = this.state.items.filter((item) => item.id!==id);

        this.setState({
            items: tempArr
        })
      }

      handleEdit = (id) => {
        const tempArr = this.state.items.filter((item) => item.id!==id);
        const selectedItem = this.state.items.find(item=> item.id === id);

        this.setState({
            items:tempArr,
            item: selectedItem.title,
            id: id,
            editItem: true     
        })
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
