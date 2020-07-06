import React, { Component } from 'react'
import Item from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleEdit, handleDelete} = this.props;
        return (
            <div>
                <div>
                    <ul className="list-group my-5">
                        <h3 className="text-capitalize
                        text-center">Sąrašas:</h3>
                        {
                            items.map((item) =>{ 
                                return(
                                <Item key={item.id}
                                title={item.title}
                                handleEdit={() => handleEdit(item.id)}
                                handleDelete={() => handleDelete(item.id)}
                                 />
                                )
                            })
                        }
                        <button type="button" 
                        className="btn btn-danger btn-block
                        text-uppercase mt-5" onClick={clearList}>Ištrinti sąrašą</button>
                    </ul>
                </div>
            </div>
        )
    }
}
