//@flow
import * as React from 'react'
import { Icon } from 'antd';
import { View } from "react-web-dom";
import styles from './index.css'
import update from 'immutability-helper'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const { Component } = React
type ImageGroupProps = {
    url: Array<string>,
    onChange: Function,
    addButton: ?React.Node,
    preview: Function,
    update: Function
}
type SortEndType = { oldIndex: number, newIndex: number }
type SortStartType = { node: any, index: number, collection: any }
type EventType = {
    target: {
        innerHTML: string,
        dataset: {
            index: number
        }
    }
}
const SortableItem = SortableElement(({ value }) =>
    <li className={styles.sortableListLi}>{value}</li>
);

const SortableList = SortableContainer(({ items, pressDelay, children }) => {
    return (
        <ul className={styles.sortableList}>
            {items.length > 0 ? items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            )) : null}
            <li>{children}</li>
        </ul>
    );
});

export default class ImageGroup extends Component<ImageGroupProps, {}> {
    static defaultProps = {
        onChange: (any) => {
        },
        update: (string, object) => {
        },
        addButton: <View />
    }
    onSortEnd = (param: SortEndType, event: EventType) => {
        const { url, onChange, } = this.props
        let _url = [...url]
        _url = arrayMove(_url, param.oldIndex, param.newIndex)
        onChange(update(url, { $set: _url }))
    }
    onSortStart = (param: SortStartType, event: EventType) => {
    }

    removeCard = (index: number) => {
        const { url, onChange, } = this.props
        onChange(update(url, {
            $splice: [[index, 1]],
        }));
    }

    render() {
        const { url, addButton, preview } = this.props
        const items = url.length > 0 ? url.map((_url, index) => (
            <View
                key={index}
            >
                <div style={{ marginRight: 15, marginBottom: 15 }}>
                    <View className={styles.view2}>
                        <View className={styles.view3}>
                            <span className={styles.span1}>
                                <a
                                    style={{ marginRight: 10 }}
                                    className={styles.icon1}
                                    onClick={() => {
                                        preview(_url)
                                    }}
                                >
                                    <Icon type="eye-o" />
                                </a>
                                <a
                                    className={styles.icon1}
                                    onClick={() => {
                                        this.removeCard(index)
                                    }}
                                >
                                    <Icon type="delete" />
                                </a>
                            </span>
                            <img
                                className={styles.img}
                                src={_url}
                            />
                        </View>
                    </View>
                </div>
            </View>
        )) : []
        return (
            <View className={styles.view4}>
                <SortableList items={items} onSortEnd={this.onSortEnd} onSortStart={this.onSortStart} axis={'xy'}>
                    {addButton}
                </SortableList>
            </View>
        )
    }
}

