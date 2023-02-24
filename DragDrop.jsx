import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import tagService from '../../services/tagService';
import './dragdrop.css';
import debug from 'sabio-debug';

const _logger = debug.extend('DragDrop');

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems,
            },
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems,
            },
        });
    }
};

function DragDrop() {
    const [columns, setColumns] = useState({});

    const columnsFromBackend = {
        1: {
            name: 'Categories',
            items: [],
        },
        2: {
            name: 'Filtered List',
            items: [],
        },
    };

    useEffect(() => {
        tagService.getTags(8).then(onGetTagsSuccess).catch(onGetTagsError);
    }, []);

    const onGetTagsSuccess = (res) => {
        const arrayOfTags = res.items;
        _logger(arrayOfTags);
        const newTagsData = arrayOfTags.map(mapTags);
        _logger(newTagsData);
        setColumns((prevState) => {
            let newState = { ...prevState };
            newState = columnsFromBackend;
            newState['1'].items = newTagsData;
            return newState;
        });
    };

    const mapTags = (item) => {
        return {
            id: `${item.id}`,
            content: item.name,
        };
    };

    const onGetTagsError = (err) => {
        _logger(err);
    };
    return (
        <div className="dragdrop-div-table">
            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([columnId, column]) => {
                    _logger('test', column);
                    return (
                        <div className="dragdropcontext-table" key={columnId}>
                            <h2>{column.name}</h2>
                            <div className="dragdrop-div-margin">
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided) => {
                                        return (
                                            <div
                                                className="dragdrop-table droppable-table"
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}>
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                                            {(provided) => {
                                                                return (
                                                                    <div
                                                                        className="dragdrop-table draggable-table"
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}>
                                                                        {item.content}
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}

export default DragDrop;
