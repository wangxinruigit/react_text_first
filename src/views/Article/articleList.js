import React, {Component} from 'react';
import service from '../../api'
import {Table, Tag,Button} from 'antd';


const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

 const columnsTitle={
    dictItemName:'条件',
    id:'id',
    nodeTime:"时间",
    sortOrder:'订单'
}

class ArticleList extends Component {

    getTableData=(url)=>{
        service.get(url, {
            expensesStatus: 1, orderStatus: 1, memberId: 648603519057657856, pageNo: 1, pageSize: 10
        }).then(res => {
            const columnsKeys = Object.keys(res.result.list[0].atfsOrderProgress[0])
            const columns =this.getTableColumns(columnsKeys)
            const dataSource=this.getTableDataSourfce(res)


            this.setState({
                columns:columns,
                dataSource:dataSource,
                isLoading:false
            })
        })
    }
    getTableColumns=(columnsKeys)=>{
      return columnsKeys.map(item => {
            return {
                title: columnsTitle[item],
                dataIndex: item,
                key: item,
            }
        })
    }

    getTableDataSourfce=(res)=>{
        return res.result.list.map((item, index) => {
            let obj = {}
            obj = {...item.atfsOrderProgress[0]}
            obj.key = index + 1
            return obj
        })
    }

    componentDidMount() {
        this.getTableData('/atfs/dal/order/');
    }

    columns={
        dictItemName:'条件',
        id:'id',
        nodeTime:"时间",
        sortOrder:'订单'
    }
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    title: '姓名',
                    key: 'name',
                    render:(text)=>{
                        return <Button>{text.name}</Button>
                    }

                },
                {
                    title: '年龄',
                    key: 'age',
                    render:(text)=>{
                        return <Tag>{text.age}</Tag>
                    }
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
            dataSource: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
            ],
            isLoading:true
        };
    }

    render() {
        return (
            <div>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.dataSource}
                    pagination={false}
                    loading={this.state.isLoading}
                />
            </div>
        );
    }
}

export default ArticleList;