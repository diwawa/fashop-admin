//@flow
import React,{ Component } from 'react'
import { Tabs } from 'antd'
import { View } from 'react-web-dom'
import styles from './index.css'

import SendTable from './sendTable'
import SendRecord from './sendRecord'

const TabPane = Tabs.TabPane

type Props = {
    getBroadcastRecord:Function,
    broadcastRecord:{
        list:Array<{}>,
        total_number:number
    },
    broadcastRecordLoading:boolean
}
type State = {}

export default class MessageSend extends Component<Props,State> {
    render() {
        const tabList = [
            {
                key:1,
                tab:'群发消息',
                main:() => <SendTable {...this.props} />
            }, {
                key:2,
                tab:'群发记录',
                main:() => <SendRecord {...this.props} />
            }
        ]
        return (
            <Tabs defaultActiveKey="1">
                {
                    tabList.map(({key,tab,main}:{key:string,tab:string,main:Function})=>
                        <TabPane tab={tab} key={key}>
                            {
                                main()
                            }
                        </TabPane>
                    )
                }
            </Tabs>
        )
    }
}
